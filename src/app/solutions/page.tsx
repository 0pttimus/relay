import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = { title: "Solutions", description: "Meet Relay Consumer, Relay Infrastructure, and Relay Connect: planned layers of Relay's USSD-first blockchain access infrastructure on Solana." };

const solutions = [
  {
    id: "consumer", no: "01", name: "Relay Consumer", label: "The access layer", icon: "phone" as const,
    description: "A planned consumer access layer for individuals who want to interact with supported blockchain services without depending exclusively on smartphones or dedicated applications.",
    intro: "Relay Consumer is designed to bring together basic mobile access and a web experience under a user-centric, non-custodial approach. The aim is to make supported Solana interactions more approachable. A finished consumer product is not available today.",
    features: ["USSD access from a basic mobile phone", "A complementary web access experience", "Non-custodial wallet architecture", "Simplified interactions with supported Solana services"],
    note: "Planned capabilities; implementation and availability remain subject to development and validation.",
  },
  {
    id: "infrastructure", no: "02", name: "Relay Infrastructure", label: "The foundation", icon: "nodes" as const,
    description: "The foundational technology Relay intends to develop: proprietary USSD gateway infrastructure connected to the systems needed to coordinate blockchain interactions.",
    intro: "Rather than operate solely as an application layered on a third-party gateway, Relay aims to develop and operate its own USSD gateway. This is an infrastructure-first proposition, built with future consumer access and business integration in mind.",
    features: ["Own USSD gateway development", "Mobile communication connectivity workflows", "Blockchain interaction infrastructure", "Transaction processing and orchestration", "Non-custodial wallet interaction workflows"],
    note: "Relay has not announced direct telecom operator integrations. Connectivity and commercial relationships will be necessary.",
  },
  {
    id: "connect", no: "03", name: "Relay Connect", label: "The integration layer", icon: "brackets" as const,
    description: "A planned B2B API and integration layer that could enable fintechs, businesses, financial service providers, and developers to connect with Relay infrastructure.",
    intro: "Relay Connect represents a longer-term opportunity to make the infrastructure useful beyond the consumer experience. It could let third parties explore supported blockchain features within their own services.",
    features: ["Planned API-based integrations", "Potential fintech and business partnerships", "Developer access to infrastructure services", "Business-facing blockchain interaction workflows"],
    note: "Relay Connect is planned. It is not a publicly available API or operational business service.",
  },
];

export default function SolutionsPage() {
  return <>
    <PageHero eyebrow="Solutions" title="Three layers. One infrastructure ambition." description="Relay’s planned solutions bring together consumer access, proprietary gateway infrastructure, and future business integrations. The company is building on Solana, one milestone at a time."><span className="page-badge"><span className="status-dot" /> All solutions are in development</span></PageHero>
    <div>{solutions.map((solution) => <section className="product-section" id={solution.id} key={solution.id}><div className="wrap"><div className="product-layout"><div className="product-copy"><span className="product-number">{solution.no} / {solution.label.toUpperCase()}</span><div className="product-heading"><h2>{solution.name}</h2></div><p className="lead">{solution.description}</p><p style={{ color: "#98a5b5", fontSize: 12, lineHeight: 1.85 }}>{solution.intro}</p><ul className="bullet-list">{solution.features.map((feature) => <li key={feature}><Icon name="check" /><span>{feature}</span></li>)}</ul><div className="proposed-note"><Icon name="circle" /> {solution.note}</div>{solution.id === "connect" && <div style={{ marginTop: 20 }}><Link href="/ecosystem#partnership" className="btn btn-primary">Explore integration opportunities <Icon name="arrow" /></Link></div>}</div><div className="product-visual" aria-label={`Illustration of ${solution.name}`}><div className="visual-chip"><span className="component-icon"><Icon name={solution.icon} /></span><span><strong>{solution.name}</strong><small>{solution.label} · planned</small></span></div></div></div></div></section>)}</div>
    <section className="cta-band"><div className="wrap"><span className="kicker centered">Explore what we’re building</span><h2>Build with Relay.</h2><p>Talk to us about infrastructure, business integration, or ecosystem collaboration.</p><div className="cta-actions"><Link className="btn btn-primary" href="/ecosystem#partnership">Discuss an integration <Icon name="arrow" /></Link><Link className="btn btn-ghost" href="/technology">Explore the technology <Icon name="arrow" /></Link></div></div></section>
  </>;
}
