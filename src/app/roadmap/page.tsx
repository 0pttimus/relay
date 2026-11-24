import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { stages } from "@/lib/data";

export const metadata: Metadata = { title: "Development Roadmap", description: "Explore Relay's milestone-based development roadmap, from technical foundations and core infrastructure to pilot preparation and potential future growth." };

export default function RoadmapPage() {
  return <>
    <PageHero eyebrow="Roadmap" title="A milestone-based path to market." description="Relay is an infrastructure-intensive project. We organize the work around measurable technical and commercial milestones, not fixed launch dates or unsupported progress claims."><span className="page-badge"><span className="status-dot" /> Planned phases · No fixed dates</span></PageHero>
    <section className="section"><div className="wrap"><div className="roadmap-intro"><span className="kicker">Development phases</span><h2>Build the foundation. Validate the system. Then grow.</h2><p className="lead">Every phase below represents planned work. Progression depends on successful technical execution and validation, available development resources, and external partnerships. No phase is represented as complete.</p></div>
      <div className="timeline">{stages.map((stage) => <article className="phase-card" key={stage.number}><span className="phase-marker" /><div className="phase-overline"><span>PHASE {stage.number}</span><span className="phase-state"><span className="status-dot" /> Planned</span></div><h3>{stage.title}</h3><p>{stage.summary}</p><ul className="bullet-list">{stage.objectives.map((objective) => <li key={objective}><Icon name="check" /><span>{objective}</span></li>)}</ul><div className="phase-milestone"><span>Milestone</span><p>{stage.milestone}</p></div></article>)}</div>
      <p className="roadmap-disclaimer">Relay’s development roadmap is structured around measurable technical and commercial milestones. Progression between phases will depend on successful validation, resource availability, and the establishment of necessary partnerships. Phases are planned, not commitments to fixed launch dates.</p>
    </div></section>
  </>;
}
