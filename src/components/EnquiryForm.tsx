"use client";

import { useState, type FormEvent } from "react";

export type EnquiryCategory = "General Enquiries" | "Investor Enquiries" | "Partnership Opportunities" | "Technology & Integration" | "Media & Communications";

const categories: EnquiryCategory[] = ["General Enquiries", "Investor Enquiries", "Partnership Opportunities", "Technology & Integration", "Media & Communications"];

export function EnquiryForm({ defaultCategory = "General Enquiries", heading = "Send an enquiry", description = "Tell us a little about what brings you here. Your enquiry will be routed to the Relay team." }: { defaultCategory?: EnquiryCategory; heading?: string; description?: string }) {
  const [status, setStatus] = useState<{ kind: "success" | "error"; message: string } | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setStatus(null);
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We couldn't send your enquiry right now.");
      setStatus({ kind: "success", message: "Your enquiry has been sent to the Relay team. Thank you for reaching out." });
      form.reset();
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Something went wrong. Please try again." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="form-shell">
      <div className="form-heading"><h2>{heading}</h2><p>{description}</p></div>
      <form onSubmit={submit}>
        <div className="form-grid">
          <div className="field"><label htmlFor="name">Full name</label><input id="name" name="name" autoComplete="name" placeholder="Your name" required minLength={2} maxLength={100} /></div>
          <div className="field"><label htmlFor="organization">Organization <span>(optional)</span></label><input id="organization" name="organization" autoComplete="organization" placeholder="Company or organization" maxLength={120} /></div>
          <div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={254} /></div>
          <div className="field"><label htmlFor="category">Enquiry category</label><select id="category" name="category" defaultValue={defaultCategory} required>{categories.map((category) => <option key={category}>{category}</option>)}</select></div>
          <div className="field full"><label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="How can we help?" required minLength={10} maxLength={4000} /></div>
          <div className="field" aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}><label htmlFor="website">Leave this field empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
        </div>
        <div className="form-submit-row"><button className="btn btn-primary" type="submit" disabled={busy}>{busy ? "Sending…" : "Send enquiry"}<span aria-hidden="true">→</span></button><p className="form-privacy">By submitting, you agree to our <a href="/privacy" style={{ color: "#a7c6eb" }}>Privacy Policy</a>. Please do not include sensitive financial information.</p></div>
        {status && <p className={`form-status ${status.kind}`} role="status" aria-live="polite">{status.message}</p>}
      </form>
    </div>
  );
}
