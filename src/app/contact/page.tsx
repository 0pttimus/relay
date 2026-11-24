import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Icon } from "@/components/Icons";
import { site, socialLinks } from "@/content/site";

export const metadata: Metadata = { title: "Contact Relay", description: "Contact Relay for general, investor, partnership, technology, and media enquiries." };

const enquiries = [
  ["General enquiries", "Questions about Relay, our approach, or the company."],
  ["Investor enquiries", "For investors exploring Relay’s infrastructure opportunity."],
  ["Partnership opportunities", "For telecommunications, ecosystem, fintech, and business collaboration."],
  ["Technology & integration", "For technical discussions or integration interests."],
  ["Media & communications", "For media requests and communications enquiries."],
];

export default function ContactPage() {
  return <>
    <PageHero eyebrow="Contact" title="Let’s start a conversation." description="Whether you’re exploring an investment, a potential partnership, an integration, or simply want to learn more about Relay, we welcome your enquiry." />
    <section className="section"><div className="wrap"><div className="split-section"><div><div className="section-head" style={{ marginBottom: 26 }}><span className="kicker">How to reach us</span><h2 style={{ fontSize: 27 }}>Choose the right conversation.</h2><p className="lead" style={{ fontSize: 12 }}>Select an enquiry category in the form, and share just enough context for us to direct your message.</p></div><div className="form-aside">{enquiries.map(([title, description]) => <div className="contact-option" key={title}><Icon name={title.startsWith("Investor") ? "circle" : title.startsWith("Technology") ? "brackets" : title.startsWith("Partnership") ? "network" : title.startsWith("Media") ? "globe" : "mail"} /><div><strong>{title}</strong><span>{description}</span></div></div>)}{site.email && <div className="contact-option"><Icon name="mail" /><div><strong>Official company email</strong><a href={`mailto:${site.email}`}><span>{site.email}</span></a></div></div>}{socialLinks().map((s) => <div className="contact-option" key={s.label}><Icon name="globe" /><div><strong>{s.label}</strong><a href={s.href} target="_blank" rel="noreferrer"><span>Connect with Relay ↗</span></a></div></div>)}</div><p style={{ marginTop: 20, color: "#77869a", fontSize: 10, lineHeight: 1.75 }}>Relay is currently pre-launch and in development. Please do not include private keys, passwords, sensitive personal data, or financial account information in your message.</p></div><EnquiryForm /></div></div></section>
    <section className="section-tight" style={{ borderTop: "1px solid var(--line)", background: "rgba(15,22,33,.35)" }}><div className="wrap" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 18 }}><div><span className="kicker">Interested in investing?</span><h2 style={{ margin: "12px 0 8px", fontSize: 24 }}>Explore the opportunity.</h2><p style={{ margin: 0, color: "#97a4b5", fontSize: 12 }}>Investor conversations are welcome. No fundraising target is published.</p></div><Link className="btn btn-ghost" href="/investors">Investor enquiries <Icon name="arrow" /></Link></div></section>
  </>;
}
