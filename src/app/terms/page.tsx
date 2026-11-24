import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Terms of Use", description: "Terms applicable to use of the Relay corporate website and its informational content." };

export default function TermsPage() {
  return <><PageHero eyebrow="Terms of use" title="A note about this website." description="These terms concern access to Relay’s corporate website and its informational content." compact /><section className="section-tight"><div className="wrap"><p className="legal-updated">Effective date: May 2025. Relay should review these draft website terms with qualified legal counsel before production publication.</p><div className="legal-copy">
    <h2>Informational purpose</h2><p>This website provides general information about Relay and its plans. It is not the operational Relay application, and it does not make blockchain services, wallets, USSD connectivity, or APIs available to users.</p>
    <h2>Pre-launch status</h2><p>Relay is pre-launch and in development. Capabilities, system architecture, product descriptions, business models, and roadmap phases described here are proposed or planned unless expressly stated otherwise. The content is not a guarantee of a completed feature, service availability, technical outcome, or launch date.</p>
    <h2>No financial, legal, or investment advice</h2><p>Nothing on this site constitutes financial, investment, legal, tax, or regulatory advice, an offer to sell or solicitation to buy securities or digital assets, or investment materials. Investor enquiries are opportunities to contact Relay. They are not a public fundraising solicitation.</p>
    <h2>No custody or asset functionality</h2><p>This site cannot hold, send, receive, or manage digital assets. Relay is developing a non-custodial architecture; this website does not make custody, security, or transaction functionality claims about an operational product.</p>
    <h2>Accuracy and external links</h2><p>Information may change as development progresses. Third-party links, where present, are offered for convenience; Relay does not control or endorse their content unless explicitly stated.</p>
    <h2>Contact</h2><p>For a question about these website terms, please use the <a href="/contact" style={{ color: "#b8d2f0" }}>contact page</a>.</p>
  </div></div></section></>;
}
