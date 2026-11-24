import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";

export const metadata: Metadata = {
  title: "Technology & Architecture",
  description: "Explore Relay's proposed USSD-first infrastructure, non-custodial wallet architecture, Solana connectivity, and planned Relay Connect integration layer.",
};

const consumer = [
  ["USSD-based access", "A proposed way to reach supported services through a basic mobile phone."],
  ["Web-based access", "A companion web interface for supported Relay consumer workflows."],
  ["Non-custodial wallet architecture", "An approach designed around users retaining control of their digital assets."],
  ["Simplified interactions", "A planned access layer for supported balance enquiries and transaction authorization workflows."],
];
const infrastructure = [
  ["Proprietary USSD gateway", "Relay intends to develop and operate its own gateway rather than depend entirely on third-party USSD gateway providers."],
  ["Request processing", "Planned handling and orchestration for mobile communication requests."],
  ["Blockchain connectivity", "Infrastructure designed to facilitate supported interactions with Solana."],
  ["Security-conscious design", "Secure communication workflows, monitoring, and system architecture remain important design objectives."],
];
const connectFeatures = [
  ["For fintechs", "Explore potential connections between existing financial services and blockchain infrastructure."],
  ["For businesses", "Consider how supported blockchain functionality could complement business services."],
  ["For developers", "A planned integration layer designed to make Relay infrastructure accessible to third-party builders."],
];

export default function TechnologyPage() {
  return <>
    <PageHero eyebrow="Technology" title="Purpose-built infrastructure. Connected to Solana." description="Relay is developing an access and infrastructure layer to connect traditional mobile communication with Solana. Explore how the planned components fit together and where we are in building them."><span className="page-badge"><span className="status-dot" /> Proposed architecture · Pre-launch</span></PageHero>

    <section className="section"><div className="wrap"><div className="section-head"><span className="kicker">The architecture</span><h2>Five layers. One connected system.</h2><p className="lead">Relay’s proposed architecture bridges mobile communication and blockchain while keeping the consumer wallet approach non-custodial.</p></div>
      <ArchitectureDiagram />
    </div></section>

    <section className="section-tight" style={{ borderBlock: "1px solid var(--line)", background: "rgba(15,22,33,.38)" }}><div className="wrap"><div className="split-section"><div className="split-copy"><span className="kicker">01 / Consumer access</span><h2>Relay Consumer</h2><p className="lead">The planned consumer-facing layer is intended to make supported blockchain services more accessible to ordinary mobile users, whether they have a basic phone or use the web.</p></div><div><div className="content-card"><ul className="bullet-list">{consumer.map(([title, text]) => <li key={title}><Icon name="check" /><span><strong style={{ color: "#d8e2ed", fontWeight: 550 }}>{title}.</strong> {text}</span></li>)}</ul></div><div className="content-card"><h3>Designed around user control</h3><p>Relay is being designed around a non-custodial wallet architecture, so users retain control of their digital assets rather than Relay acting as a conventional custodian. Specific security mechanisms and product workflows remain in development; no claim is made that these have been implemented.</p></div></div></div></div></section>

    <section className="section"><div className="wrap"><div className="split-section"><div className="split-copy"><span className="kicker">02 / Core systems</span><h2>The engine behind Relay.</h2><p className="lead">Relay Infrastructure is the foundational technology. Our ambition is to build and operate the gateway and core systems that connect mobile access to blockchain interaction.</p><p style={{ marginTop: 21, color: "#a0adbd", fontSize: 12, lineHeight: 1.8 }}>That means developing our own USSD gateway, rather than relying solely on a third-party gateway behind a consumer application. Relay will still need appropriate mobile network connectivity and commercial relationships. No direct operator integration has been announced.</p></div><div><div className="content-card"><ul className="bullet-list">{infrastructure.map(([title, text]) => <li key={title}><Icon name="check" /><span><strong style={{ color: "#d8e2ed", fontWeight: 550 }}>{title}.</strong> {text}</span></li>)}</ul></div><div className="content-card"><h3>Infrastructure is the product</h3><p>Relay’s planned gateway, request-handling systems, and blockchain connectivity form the core of the project. Together, they could support future consumer and business services.</p></div></div></div></div></section>

    <section className="section arch-section"><div className="wrap"><div className="section-head center"><span className="kicker centered">03 / Integration layer</span><h2>Relay Connect</h2><p className="lead">A planned API and integration layer that could allow businesses and developers to build on Relay’s infrastructure.</p></div><div className="feature-grid">{connectFeatures.map(([title, text], i) => <article className="feature-card" key={title}><span className="component-icon"><Icon name={i === 2 ? "brackets" : "network"} /></span><h3>{title}</h3><p>{text}</p></article>)}</div><p className="proposed-note" style={{ display: "flex", justifyContent: "center" }}><Icon name="circle" /> Relay Connect is planned and is not yet a publicly available API.</p></div></section>

    <section className="section"><div className="wrap"><div className="split-section"><div className="split-copy"><span className="kicker">04 / Initial blockchain</span><h2>Why Solana first.</h2><p className="lead">Solana is the initial blockchain for Relay’s planned infrastructure and supported interactions.</p></div><div><div className="content-card"><h3>Designed for high-throughput applications</h3><p>Solana is a high-throughput public blockchain with low per-transaction network fees under ordinary conditions and an established developer and digital-asset ecosystem. Actual fees, throughput, and performance may vary; they are not guarantees for a particular Relay workflow.</p></div><div className="content-card"><h3>A starting point, not a multi-chain claim</h3><p>Relay is building on Solana. The company does not currently claim support for other blockchain networks. Any future network decisions depend on technical priorities and validation.</p></div></div></div></div></section>

    <section className="section-tight" style={{ borderTop: "1px solid var(--line)", background: "rgba(15,22,33,.38)" }}><div className="wrap"><div className="section-head"><span className="kicker">05 / Wallet architecture</span><h2>Non-custodial by design.</h2><p className="lead">Here is why Relay is taking this approach, and what it does and does not mean.</p></div><div className="quote-grid"><article className="quote-card"><span className="kicker">User control</span><p>Relay’s planned wallet architecture is designed so users, rather than Relay as a conventional custodian, retain control of their digital assets. This approach is intended to avoid Relay holding customer assets and may reduce some of the operational and regulatory burdens associated with custody.</p></article><article className="quote-card"><span className="kicker">A thoughtful design goal</span><p>Non-custodial architecture does not automatically remove regulatory obligations. Secure authorization, responsible operational design, and applicable legal assessments remain essential.</p></article></div><p style={{ margin: "20px 0 0", color: "#8492a4", fontSize: 11, lineHeight: 1.8 }}>The architecture and associated security mechanisms are still in development. This is a description of Relay’s approach, not a claim that a completed or audited wallet product exists.</p><div style={{ marginTop: 29 }}><Link href="/roadmap" className="text-link">Explore the milestone roadmap <Icon name="arrow" /></Link></div></div></section>

    <section className="cta-band"><div className="wrap"><span className="kicker centered">Build with Relay</span><h2>Interested in the infrastructure?</h2><p>We welcome early conversations with organizations exploring mobile access, Solana infrastructure, or potential integration opportunities.</p><div className="cta-actions"><Link className="btn btn-primary" href="/ecosystem#partnership">Discuss a partnership <Icon name="arrow" /></Link><Link className="btn btn-ghost" href="/contact">Contact our team <Icon name="arrow" /></Link></div></div></section>
  </>;
}
