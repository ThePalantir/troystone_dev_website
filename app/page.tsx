import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SystemDiagram } from "@/components/SystemDiagram";
import { Timeline } from "@/components/Timeline";
import { SiteFooter } from "@/components/SiteFooter";
import { BusinessOutcomes, EvidenceAndResults, ExpertiseAreas, SelectedCaseStudies } from "@/components/ValueSections";
import { getGlossaryHref } from "@/data/glossary";

const chapters = [
  {
    index: "01",
    era: "Infrastructure",
    title: "Scale teaches discipline.",
    copy:
      "Verizon and Sprint routed tens of millions of directory-assistance calls through our carrier-grade network each month. We completed each transaction, then returned the caller to the carrier without interrupting the live connection. Meeting 99.999% SLAs through daily operations and live traffic migrations made operational resilience a contractual requirement—not an aspiration.",
    tags: [
      "Enterprise networks",
      "Voice over IP",
      "Global infrastructure",
    ],
  },
  {
    index: "02",
    era: "Applications",
    title: "Applications turn architecture into work.",
    copy:
      "Enterprise applications connect architecture to the people, processes, and decisions that move an organization. The strongest simplify complex work while preserving the controls required to operate it responsibly.",
    tags: [
      "Enterprise applications",
      "Business systems",
      "Global deployments",
    ],
  },
  {
    index: "03",
    era: "Data",
    title: "Trusted data makes better decisions possible.",
    copy:
      "From actuarial analysis and biostatistics to executive reporting, the discipline is the same: define the right measures, establish trust in the information, and turn complexity into useful decisions.",
    tags: [
      "Analytics",
      "Decision support",
      "Business intelligence",
    ],
  },
  {
    index: "04",
    era: "Leadership",
    title: "Technology serves a public outcome.",
    copy:
      "Eight years as Lehigh County CIO expanded the work from systems to public outcomes. Leading technology across more than 60 departments, offices, and bureaus required clear strategy, sound governance, secure operations, capable teams, and reliable delivery. At that scale, trust is not a message. It is the result of keeping commitments.",
    tags: [
      "Executive leadership",
      "Technology strategy",
      "Digital transformation",
    ],
  },
  {
    index: "05",
    era: "Automation",
    title: "Good systems reduce friction.",
    copy:
      "At enterprise scale, small manual steps become structural drag. Connecting Power Platform, Microsoft Graph, Entra ID, Power BI, code, APIs, and line-of-business systems turns fragmented processes into a governed operating layer—reducing handoffs and risk while improving data quality, execution speed, and decision-making.",
    tags: [
      "Power Platform",
      "Systems integration",
      "Identity automation",
    ],
  },
  {
    index: "06",
    era: "Intelligence",
    title: "AI belongs inside the system.",
    copy:
      "The opportunity is not a chatbot beside the business. It is bounded intelligence inside the workflows, data, and decisions the business already depends on—accelerating execution while preserving human judgment and accountability.",
    tags: [
      "Agentic systems",
      "Enterprise AI",
      "Production intelligence",
    ],
  },
];

const principles = [
  {
    title: "Understand the system",
    copy: [
      "Map the work before choosing the tool: people, process, incentives, data, constraints, exceptions, return, and the cost of failure. Define the operating outcome before selecting a platform.",
      "Close the loop after launch. Validate adoption, performance, business value, and the next opportunity to improve.",
    ],
  },
  {
    title: "Design for operation.",
    copy: [
      "Architecture extends beyond deployment. It defines ownership, support, security, adoption, governance, and what happens on an ordinary Tuesday.",
    ],
  },
  {
    title: "Automate with judgment.",
    copy: [
      "Deterministic automation remains the default. Agentic AI belongs where rules alone cannot do the work. Preserve human oversight for consequential decisions, exceptions, and accountability.",
    ],
  },
];

export default function Home() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Troy Stone", url: "https://www.troystone.dev", jobTitle: "Technology Executive and Enterprise Systems Architect", sameAs: ["https://www.linkedin.com/in/troystone"], knowsAbout: ["Technology Leadership", "Enterprise Architecture", "Systems Integration", "Automation", "Accountable AI"] };
  return <>
    <a className="skip-link" href="#main">Skip to content</a><Header />
    <main id="main">
      <section className="hero" id="top">
        <Image
          className="hero-art"
          src="/system-horizon.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            <span />
            Technology leadership · Automation · AI
          </p>

          <h1>
            Technology leadership that moves the <em>business forward.</em>
          </h1>

          <p className="hero-copy">
            I help organizations with complex operations reduce costs, eliminate repetitive work, improve efficiency, and connect disconnected systems. Whether leading at the CIO or VP level or building automation and AI solutions hands-on, I focus on practical technology that produces measurable business results.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#case-studies">
              View my work
              <ArrowRight size={16} />
            </a>
            <a className="text-link" href="#contact">
              Discuss an opportunity
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero-proof" aria-label="Experience summary">
          <div>
            <strong>Lead</strong>
            <span>
              Strategy, teams,<br />and accountability
            </span>
          </div>

          <div>
            <strong>Build</strong>
            <span>
              Architecture,<br />applications, and automation
            </span>
          </div>

          <div>
            <strong>Deliver</strong>
            <span>
              Practical outcomes<br />the business can measure
            </span>
          </div>
        </div>
      </section>

      <BusinessOutcomes />
      <ExpertiseAreas />
      <EvidenceAndResults />
      <SelectedCaseStudies />

      <section className="timeline-section section" id="experience" aria-labelledby="timeline-title"><Reveal className="section-kicker"><span>Professional journey</span></Reveal><Reveal className="timeline-heading"><div><p className="eyebrow">A technology leader who still builds</p><h2 id="timeline-title">Leadership and execution.<br />One practice.</h2></div><p>Three decades across infrastructure, applications, data, executive responsibility, automation, and AI shaped how I solve business problems today.</p></Reveal><Reveal><Timeline /></Reveal></section>

      <section className="chapters section" aria-labelledby="chapters-title"><Reveal className="section-kicker"><span>The enterprise system</span></Reveal><h2 id="chapters-title" className="sr-only">Six connected layers of enterprise technology</h2>{chapters.map((chapter) => <Reveal className="chapter" key={chapter.index}><div className="chapter-meta"><span>{chapter.era}</span></div><div className="chapter-copy"><h3>{chapter.title}</h3><p>{chapter.copy}</p><div className="tag-row">{chapter.tags.map((tag) => <Link href={getGlossaryHref(tag)} aria-label={`Read the glossary definition for ${tag}`} key={tag}>{tag}</Link>)}</div></div></Reveal>)}<Reveal className="journey-next"><a className="section-link" href="#about">How that experience shapes the work today <ArrowRight size={15} /></a></Reveal></section>

      <section className="about section" id="about" aria-labelledby="about-title"><Reveal className="section-kicker"><span>About</span></Reveal><div className="about-heading"><Reveal><p className="eyebrow">How I work</p><h2 id="about-title">Business context first.<br />Hands-on enough to deliver.</h2></Reveal><Reveal className="about-lead" delay={0.06}><p>I do not treat leadership and technical execution as separate identities. The advantage comes from combining them.</p></Reveal></div><div className="about-grid"><Reveal><h3>Start with the operation</h3><p>I begin with the people, process, incentives, data, constraints, and cost of failure—not a preferred platform. That keeps the work tied to business value.</p></Reveal><Reveal delay={0.04}><h3>Stay close to delivery</h3><p>Remaining hands-on makes strategy more practical. It exposes integration details, operating friction, and adoption risks early enough to address them.</p></Reveal><Reveal delay={0.08}><h3>Design for what happens next</h3><p>Governance, security, support, reliability, ownership, and measurable outcomes are part of the solution—not tasks deferred until after launch.</p></Reveal></div><Reveal className="about-close"><p>That perspective lets me work comfortably with executives, operational leaders, technical teams, and end users—translating between what the organization needs and what the system must do.</p><a className="section-link" href="#contact">Discuss a leadership or delivery opportunity <ArrowRight size={15} /></a></Reveal></section>

      <section className="philosophy section" id="perspective" aria-labelledby="philosophy-title"><Reveal className="section-kicker"><span>Point of view</span></Reveal><div className="philosophy-grid"><Reveal className="philosophy-content"><p className="eyebrow">The practical AI thesis</p><h2 id="philosophy-title">Intelligence is a layer—not an application or a model.<br />The system is the product.</h2><p className="philosophy-copy">A useful AI system knows what it may access, which actions it may take, when a person must decide, and how every action becomes observable. Without guardrails, intelligence is risk. Without auditability, it is difficult to trust. The model matters. The surrounding architecture matters more.</p></Reveal><Reveal className="philosophy-visual" delay={0.1}><SystemDiagram /></Reveal></div><div className="principles">{principles.map((principle, i) => <Reveal className="principle" delay={i * 0.06} key={principle.title}><h3>{principle.title}</h3>{principle.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</Reveal>)}</div><Reveal className="philosophy-next"><a className="section-link" href="#contact">Discuss a practical AI opportunity <ArrowRight size={15} /></a></Reveal></section>

      <section className="contact section" id="contact" aria-labelledby="contact-title"><Reveal><p className="eyebrow"><span className="status-dot" /> Complex systems. Meaningful outcomes.</p><h2 id="contact-title">Let&apos;s turn complexity into<br /><em>clarity.</em></h2><p>If you&apos;re modernizing a critical system, connecting AI to operations, or working through a consequential technology decision, I&apos;d welcome the conversation.</p><a className="button button-primary contact-button" href="https://truecore.services/" target="_blank" rel="noreferrer"><span className="truecore-cta-copy">Connect with Troy and Jesse at <span className="truecore-name"><Image className="truecore-logo" src="/truecore-logo.png" alt="" width={24} height={18} />TrueCore</span></span> <ArrowUpRight size={17} /></a></Reveal></section>
    </main>
    <SiteFooter />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
  </>;
}
