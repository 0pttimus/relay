import Link from "next/link";
import { Icon } from "./Icons";

export function PageHero({ eyebrow, title, description, compact = false, children }: { eyebrow: string; title: string; description: string; compact?: boolean; children?: React.ReactNode }) {
  return (
    <section className={`page-hero${compact ? " compact" : ""}`}>
      <div className="wrap">
        <div className="breadcrumb"><Link href="/">Home</Link><Icon name="chevron" /><span>{eyebrow}</span></div>
        <span className="kicker">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        {children}
      </div>
    </section>
  );
}
