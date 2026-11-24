import Link from "next/link";
import { Icon } from "@/components/Icons";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { products, stages } from "@/lib/data";

const challenges = [
  { title: "Smartphone dependency", text: "Many blockchain experiences assume users have a smartphone, reliable data, and the storage to run dedicated applications." },
  { title: "Technical complexity", text: "Wallets, private keys, transaction flows, and on-chain interfaces can be difficult to approach without prior experience." },
  { title: "Digital exclusion", text: "Device access and digital infrastructure remain uneven, limiting who can participate in new financial technology." },
  { title: "Limited accessibility", text: "A single interface cannot meet the needs and realities of every mobile user or market." },
];
const pillars = [
  { icon: "phone" as const, title: "Accessibility", text: "Explore access designed to extend beyond smartphone-only experiences." },
  { icon: "network" as const, title: "Infrastructure ownership", text: "Developing our own USSD gateway, alongside the infrastructure around it." },
  { icon: "shield" as const, title: "Non-custodial by design", text: "A planned wallet architecture built around users retaining control of their assets." },
  { icon: "globe" as const, title: "Solana connectivity", text: "Building on Solana to facilitate supported blockchain-powered interactions." },
];
const sectors = ["Telecommunications operators", "Solana ecosystem participants", "Fintech companies", "Payment service providers", "Financial institutions", "Developers", "Businesses exploring blockchain"];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy"><span className="kicker">A new access layer for Solana</span>
            <h1>Blockchain access shouldn’t require a <span>smartphone.</span></h1>
            <p className="lead">Relay is building a USSD-first gateway to Solana. It will connect traditional mobile communication channels with blockchain infrastructure to make digital asset access more inclusive and practical.</p>
            <div className="hero-actions"><Link className="btn btn-primary" href="/technology">Explore our technology <Icon name="arrow" /></Link><Link className="btn btn-ghost" href="/ecosystem#partnership">Partner with Relay <Icon name="arrow" /></Link></div>
            <p className="hero-footnote"><Icon name="circle" /> Relay is pre-launch. The architecture shown is planned and not yet operational.</p>
          </div>
          <ArchitectureDiagram />
        </div>
      </section>

      <div className="status-strip"><div className="wrap status-inner"><span className="status-item"><span className="status-dot" /> Pre-launch · In development</span><span className="status-item"><Icon name="globe" /> Initial market focus: Nigeria</span><span className="status-item"><Icon name="network" /> Solana-first infrastructure</span><span className="status-item"><Icon name="shield" /> Non-custodial architecture</span></div></div>

      <section className="section problem-section"><div className="wrap"><div className="section-head"><span className="kicker">The challenge</span><h2>Blockchain has a connectivity problem.</h2><p className="lead">The promise of blockchain-powered services is significant. Yet the interfaces that deliver it do not fit every device, connection, or user.</p></div>
        <div className="problem-grid">{challenges.map((item, i) => <article className="problem-card" key={item.title}><span className="card-index">0{i + 1} / ACCESS BARRIER</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </div></section>

      <section className="section"><div className="wrap solution-preview"><div className="solution-sticky"><span className="kicker">The Relay approach</span><h2>Connecting traditional mobile access to blockchain.</h2><p className="lead">Relay is developing its own USSD gateway and supporting infrastructure to connect basic mobile phones to Solana. Not another wallet app. A new access and infrastructure layer.</p><Link className="text-link" href="/technology">Explore the technology <Icon name="arrow" /></Link></div>
        <div className="pillar-list">{pillars.map((pillar) => <article className="pillar" key={pillar.title}><span className="pillar-icon"><Icon name={pillar.icon} /></span><div><h3>{pillar.title}</h3><p>{pillar.text}</p></div></article>)}</div>
      </div></section>

      <section className="section arch-section"><div className="wrap"><div className="section-head center"><span className="kicker centered">A proposed architecture</span><h2>How Relay is designed to work.</h2><p className="lead">A four-stage overview of the proposed infrastructure. Relay is still developing the service.</p></div>
        <div className="steps-line">{[
          ["01", "Access", "A user initiates an interaction through a supported USSD interface on a basic mobile phone."],
          ["02", "Relay gateway", "Relay’s planned proprietary USSD gateway receives and handles the mobile communication request."],
          ["03", "Relay infrastructure", "The underlying infrastructure processes the request and facilitates a supported wallet interaction."],
          ["04", "Solana", "The infrastructure communicates with Solana to facilitate supported blockchain interactions."],
        ].map(([n, title, text]) => <article className="step" key={n}><span className="step-number">{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <p className="proposed-note"><Icon name="circle" /> Proposed system architecture · in development</p>
      </div></section>

      <section className="section"><div className="wrap"><div className="section-head"><span className="kicker">Three connected components</span><h2>Technology with a clear purpose.</h2><p className="lead">Relay’s planned consumer, infrastructure, and integration layers work together to make a new access model possible.</p></div>
        <div className="component-grid">{products.map((product) => <article className="component-card" key={product.key}><div className="component-top"><span className="component-number">{product.number} / {product.descriptor.toUpperCase()}</span><span className="component-icon"><Icon name={product.icon as "phone" | "nodes" | "brackets"} /></span></div><h3>{product.name}</h3><p>{product.description}</p><Link className="text-link" href={product.href}>Learn about {product.name} <Icon name="arrow" /></Link></article>)}</div>
      </div></section>

      <section className="section section-tight"><div className="wrap"><div className="market-panel"><div className="market-content"><div><span className="kicker">The opportunity</span><h2>Building for the next generation of digital access.</h2><p>Nigeria is Relay’s intended initial market: an important starting point for exploring how traditional mobile communication can connect with blockchain-powered services. The long-term ambition extends across Africa and other emerging economies.</p><p>Relay sees potential across underserved mobile communities, fintech ecosystems, and businesses considering blockchain integrations. The opportunity depends on building the infrastructure, validating the model, and establishing the relationships needed to make it work.</p><div className="market-tags"><span className="market-tag">Nigeria</span><span className="market-tag">African markets</span><span className="market-tag">Emerging economies</span><span className="market-tag">Fintech ecosystems</span></div></div><aside className="market-aside"><span className="kicker">A long-term ambition</span><h3>Access built around real-world mobile infrastructure.</h3><p>Relay is working to validate this infrastructure opportunity, beginning in Nigeria. No market-size claims or forecasts are presented.</p></aside></div></div></div></section>

      <section className="section"><div className="wrap"><div className="section-head"><span className="kicker">An open ecosystem</span><h2>An infrastructure built for collaboration.</h2><p className="lead">Building a new mobile-to-blockchain access layer will take coordination across the networks, platforms, and organizations that make it possible.</p></div>
        <div className="ecosystem-grid">{sectors.map((sector, i) => <div className="ecosystem-item" key={sector}><Icon name={i === 0 ? "phone" : i === 1 ? "network" : i === 5 ? "brackets" : "globe"} /><span>{sector}</span></div>)}</div><div style={{ marginTop: 25 }}><Link className="text-link" href="/ecosystem">Explore partnership opportunities <Icon name="arrow" /></Link></div>
      </div></section>

      <section className="roadmap-preview"><div className="wrap"><div className="section-head" style={{ marginBottom: 0 }}><span className="kicker">Building milestone by milestone</span><h2>Building Relay, one milestone at a time.</h2><p className="lead">A phased roadmap shaped by technical validation, resources, and external partnerships, rather than arbitrary launch dates.</p></div>
        <div className="roadmap-track">{stages.map((stage) => <article className="roadmap-phase" key={stage.number}><span className="roadmap-dot" /><span>PHASE {stage.number}</span><h3>{stage.title}</h3></article>)}</div><div className="roadmap-link"><Link href="/roadmap" className="text-link">Explore the full roadmap <Icon name="arrow" /></Link></div>
      </div></section>

      <section className="cta-band"><div className="wrap"><span className="kicker centered">A more accessible future</span><h2>The future of blockchain access should be for everyone.</h2><p>Relay is building infrastructure to connect traditional mobile communication with blockchain-powered financial services. Join us in making digital access more inclusive.</p><div className="cta-actions"><Link className="btn btn-primary" href="/ecosystem#partnership">Become a partner <Icon name="arrow" /></Link><Link className="btn btn-ghost" href="/investors">Investor enquiries <Icon name="arrow" /></Link></div></div></section>
    </>
  );
}
