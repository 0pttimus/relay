import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Privacy Policy", description: "Learn how Relay handles information submitted through its corporate website and enquiry forms." };

export default function PrivacyPage() {
  return <><PageHero eyebrow="Privacy policy" title="Your privacy matters." description="This notice explains how this corporate website handles information you provide when you contact Relay." compact /><section className="section-tight"><div className="wrap"><p className="legal-updated">Effective date: May 2025. Please review and update this policy for the company’s actual practices and applicable law before production publication.</p><div className="legal-copy">
    <h2>Information you provide</h2><p>If you use the contact, partnership, or investor enquiry form, we collect your name, email address, optional organization, the category of your enquiry, and the message you submit. Please do not include passwords, private keys, sensitive financial details, or other information that is not necessary to your enquiry.</p>
    <h2>How information is used</h2><p>Enquiry information is used to receive, review, route, and respond to your message and to protect the website from spam and abuse. We do not claim to sell enquiry information. Relay should review and document its actual data practices, retention periods, and any applicable legal bases before publishing this page.</p>
    <h2>Service providers and delivery</h2><p>This website may use a configured email delivery provider, secure webhook, or server-side storage to receive enquiries. The specific provider depends on how the website is deployed. Information may be processed by these providers to deliver a submission to Relay. Configure production providers only after reviewing their privacy, security, and data processing terms.</p>
    <h2>Retention and security</h2><p>Enquiries should be retained only for as long as needed to address the request and any related legitimate requirements. Relay should configure and verify an appropriate retention and deletion process in its production enquiry system. Reasonable security measures are used, but no electronic transmission or storage system can be guaranteed completely secure.</p>
    <h2>Your rights and questions</h2><p>Applicable privacy rights depend on your location and circumstances. For a question about a submission or this notice, contact Relay through the <a href="/contact" style={{ color: "#b8d2f0" }}>contact page</a>{site.email ? ` or email ${site.email}` : ""}.</p>
    <h2>Updates</h2><p>Relay may revise this notice as its website and practices develop. Any published update should reflect the company’s actual processes and applicable requirements.</p>
  </div></div></section></>;
}
