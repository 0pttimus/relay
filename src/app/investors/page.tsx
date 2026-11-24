import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = { title: "Investor Enquiries", description: "Explore Relay's proposed infrastructure opportunity and get in touch for an investor conversation." };

const differentiators = [
  "Proprietary USSD gateway development",
  "Solana-first blockchain connectivity",
  "A non-custodial wallet architecture",
  "Access designed beyond smartphone dependency",
  "Consumer and B2B infrastructure opportunities",
  "Nigeria as an initial market, with broader ambitions",
];
const revenue = [
  "Consumer transaction fees on supported services",
  "USSD infrastructure and gateway services",
  "API and integration fees via planned Relay Connect",
  "Enterprise partnerships",
  "Business infrastructure services",
];

export default function InvestorPage() {
  return <>
    <PageHero eyebrow="Investor enquiries" title="Interested in what we’re building?" description="We welcome conversations with investors and strategic partners interested in the future of accessible blockchain infrastructure. Relay is developing an infrastructure-first approach to connecting traditional mobile communication with blockchain-powered financial services." ><span className="page-badge"><span className="status-dot" /> Pre-launch · Investor conversations welcome</span></PageHero>
    <section className="section"><div className="wrap"><div className="investor-grid"><div className="investor-copy"><span className="kicker">The opportunity</span><h2>Beyond the smartphone.</h2><p>Relay is working to connect traditional mobile communication infrastructure with blockchain-powered financial services. The opportunity lies in building a new access layer designed for people without smartphones, supported by proprietary infrastructure, with the potential for future business integrations.</p><p>Nigeria is the intended initial market, with a longer-term ambition across Africa and other emerging economies. Relay’s path to market depends on technical execution, available resources, commercial partnerships, and the relevant legal and regulatory assessments.</p><h3 className="investor-subhead">Proposed commercial opportunities</h3><div className="revenue-list">{revenue.map((item, i) => <div className="revenue-item" key={item}><span>0{i + 1}</span><span>{item}</span></div>)}</div><p className="revenue-note">These are proposed business model opportunities, not established revenue streams. Relay does not claim operational revenue or a commercially launched product.</p><h3 className="investor-subhead">Potential differentiation</h3><ul className="bullet-list">{differentiators.map((item) => <li key={item}><Icon name="check" /><span>{item}</span></li>)}</ul></div><div><EnquiryForm defaultCategory="Investor Enquiries" heading="Start an investor conversation" description="Share your contact information and a little about your interest in Relay. Investor enquiries are confidential and routed to the company." /><p style={{ marginTop: 16, color: "#768599", fontSize: 10, lineHeight: 1.8 }}>No fundraising target, investment amount, or private investment information is published on this site. For further information, please <Link href="/contact" style={{ color: "#b8d2f0" }}>contact our team</Link>.</p></div></div></div></section>
  </>;
}
