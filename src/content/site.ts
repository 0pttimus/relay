/**
 * All the company-facing copy and links live here so we're not hunting through
 * pages to change an email or URL. Empty optional fields just get skipped
 * everywhere, which beats shipping fake placeholder links.
 */

export const site = {
  name: "Relay",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  tagline: "USSD-first Blockchain Access Infrastructure on Solana",
  headline: "Blockchain Access Shouldn't Require a Smartphone.",
  description:
    "Relay is building a USSD-first gateway to Solana, connecting traditional mobile communication channels with blockchain infrastructure to make digital asset access more inclusive, accessible, and practical.",
  footerDescription: "Building USSD-first blockchain access infrastructure on Solana.",
  brandStatement: "Relay: Making Blockchain Access Possible Beyond Smartphones.",

  /** Still blank until the company actually gives us an address. */
  email: "",

  /** Same deal here: blanks stay hidden instead of rendering dead links. */
  social: {
    linkedin: "",
    x: "",
    other: [] as { label: string; href: string }[],
  },
};

/**
 * Founder block stays empty until we get real, verified details from the
 * company. When the photo shows up, drop it in /public and point `photo` at it.
 */
export const founder = {
  name: "",
  title: "Founder",
  photo: "",
  bio: [] as string[],
  experience: [] as string[],
  achievements: [] as string[],
  linkedin: "",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/solutions", label: "Solutions" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function socialLinks() {
  const links: { label: string; href: string }[] = [];
  if (site.social.linkedin) links.push({ label: "LinkedIn", href: site.social.linkedin });
  if (site.social.x) links.push({ label: "X", href: site.social.x });
  for (const o of site.social.other) if (o.href) links.push(o);
  return links;
}
