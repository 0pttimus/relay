"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { Icon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Link href="/" className="wordmark" aria-label="Relay home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>relay<span className="wordmark-dot">.</span></span>
        </Link>
        <nav className={`main-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={`nav-link${pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) ? " active" : ""}`} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
          <Link href="/investors" className="nav-investor mobile-investor"><span>Investor enquiries</span><Icon name="arrow" /></Link>
        </nav>
        <div className="header-actions">
          <Link href="/investors" className="nav-investor desktop-investor"><span>Investor enquiries</span><Icon name="arrow" /></Link>
          <button className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} /></button>
        </div>
      </div>
    </header>
  );
}
