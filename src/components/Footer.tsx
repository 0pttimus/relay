import Link from "next/link";
import { nav, site, socialLinks } from "@/content/site";
import { Icon } from "./Icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="wordmark"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>relay<span className="wordmark-dot">.</span></span></Link>
            <p>{site.footerDescription}</p>
            <span className="footer-prelaunch"><span className="status-dot" /> PRE-LAUNCH · IN DEVELOPMENT</span>
          </div>
          <div className="footer-links">
            <div><span className="footer-heading">Explore</span>{nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
            <div><span className="footer-heading">Engage</span><Link href="/investors">Investor enquiries</Link><Link href="/ecosystem#partnership">Partnership enquiries</Link><Link href="/contact">Contact</Link></div>
            <div><span className="footer-heading">Legal</span><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of use</Link></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Relay. All rights reserved.</span><span className="footer-tagline">{site.brandStatement}</span>
          {socialLinks().length > 0 && <div className="footer-social">{socialLinks().map((s) => <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">{s.label === "LinkedIn" ? <Icon name="linkedin" /> : s.label === "X" ? <Icon name="x" /> : s.label}</a>)}</div>}
        </div>
      </div>
    </footer>
  );
}
