import { NextRequest, NextResponse } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const categories = new Set([
  "General Enquiries",
  "Investor Enquiries",
  "Partnership Opportunities",
  "Technology & Integration",
  "Media & Communications",
]);
const rateWindowMs = 60_000;
const rateLimit = 5;
const ipHits = new Map<string, number[]>();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Submission = { name: string; organization: string; email: string; category: string; message: string; receivedAt: string };

function respond(error: string, status: number) {
  return NextResponse.json({ error }, { status, headers: { "Cache-Control": "no-store" } });
}

async function saveToFile(submission: Submission) {
  const file = path.join(process.cwd(), ".data", "enquiries.jsonl");
  await mkdir(path.dirname(file), { recursive: true, mode: 0o700 });
  await appendFile(file, `${JSON.stringify(submission)}\n`, { encoding: "utf8", mode: 0o600 });
}

async function sendEmail(submission: Submission) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  if (!key || !to || !from) return false;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: submission.email,
      subject: `[Relay enquiry] ${submission.category}`,
      text: [
        `Name: ${submission.name}`,
        `Organization: ${submission.organization || "Not provided"}`,
        `Email: ${submission.email}`,
        `Category: ${submission.category}`,
        "",
        "Message:",
        submission.message,
        "",
        `Received: ${submission.receivedAt}`,
      ].join("\n"),
    }),
    signal: AbortSignal.timeout(8_000),
  });
  if (!response.ok) throw new Error(`Email delivery returned ${response.status}`);
  return true;
}

async function sendWebhook(submission: Submission) {
  const endpoint = process.env.ENQUIRY_WEBHOOK_URL;
  if (!endpoint) return false;
  let parsed: URL;
  try { parsed = new URL(endpoint); } catch { throw new Error("Invalid enquiry webhook URL"); }
  if (parsed.protocol !== "https:") throw new Error("Enquiry webhook must use HTTPS");
  const response = await fetch(parsed, {
    method: "POST",
    headers: { "Content-Type": "application/json", "User-Agent": "Relay-Enquiries/1.0" },
    body: JSON.stringify(submission),
    signal: AbortSignal.timeout(8_000),
    redirect: "error",
  });
  if (!response.ok) throw new Error(`Webhook delivery returned ${response.status}`);
  return true;
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) return respond("Please submit the enquiry using the form.", 415);

  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return respond("The request could not be verified.", 403);
    } catch { return respond("The request could not be verified.", 403); }
  }

  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();
  const recent = (ipHits.get(ip) || []).filter((time) => now - time < rateWindowMs);
  if (recent.length >= rateLimit) return respond("Too many enquiries were submitted recently. Please try again in a few minutes.", 429);
  recent.push(now);
  ipHits.set(ip, recent);
  if (ipHits.size > 5_000) {
    for (const [key, hits] of ipHits) if (hits.every((time) => now - time >= rateWindowMs)) ipHits.delete(key);
  }

  const length = Number(request.headers.get("content-length") || 0);
  if (length > 12_000) return respond("Your message is too large. Please shorten it and try again.", 413);

  let body: Record<string, unknown>;
  try {
    const rawBody = await request.text();
    if (Buffer.byteLength(rawBody, "utf8") > 12_000) return respond("Your message is too large. Please shorten it and try again.", 413);
    body = JSON.parse(rawBody) as Record<string, unknown>;
  } catch { return respond("Please check the form fields and try again.", 400); }

  // Hidden honeypot input. Give bots a fake success so they don't learn anything.
  if (typeof body.website === "string" && body.website.trim()) return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const organization = typeof body.organization === "string" ? body.organization.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const category = typeof body.category === "string" ? body.category.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 2 || name.length > 100) return respond("Please provide a name between 2 and 100 characters.", 400);
  if (organization.length > 120) return respond("Organization must be 120 characters or fewer.", 400);
  if (email.length > 254 || !emailPattern.test(email)) return respond("Please provide a valid email address.", 400);
  if (!categories.has(category)) return respond("Please select a valid enquiry category.", 400);
  if (message.length < 10 || message.length > 4_000) return respond("Please provide a message between 10 and 4,000 characters.", 400);

  const submission: Submission = { name, organization, email, category, message, receivedAt: new Date().toISOString() };
  const hasEmail = Boolean(process.env.RESEND_API_KEY && process.env.ENQUIRY_TO_EMAIL && process.env.ENQUIRY_FROM_EMAIL);
  const hasWebhook = Boolean(process.env.ENQUIRY_WEBHOOK_URL);
  const hasFileStore = process.env.ENQUIRY_FILE_STORE === "true" || process.env.NODE_ENV !== "production";
  if (!hasEmail && !hasWebhook && !hasFileStore) return respond("Enquiry delivery is not configured. Please contact the site administrator.", 503);

  const deliveries: Promise<boolean>[] = [];
  if (hasEmail) deliveries.push(sendEmail(submission));
  if (hasWebhook) deliveries.push(sendWebhook(submission));
  if (hasFileStore && process.env.NODE_ENV !== "production") deliveries.push(saveToFile(submission).then(() => true));

  const results = await Promise.allSettled(deliveries);
  if (results.some((result) => result.status === "fulfilled" && result.value === true)) {
    return NextResponse.json({ ok: true }, { status: 200, headers: { "Cache-Control": "no-store" } });
  }

  // Failure reasons only — no names, emails, or message bodies in the logs.
  console.error("Relay enquiry delivery failed", results.map((result) => result.status === "rejected" ? (result.reason instanceof Error ? result.reason.message : "delivery error") : "not delivered"));
  return respond("We couldn't deliver your enquiry right now. Please try again later.", 502);
}
