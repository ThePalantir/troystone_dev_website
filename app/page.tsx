import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Network, Workflow } from "lucide-react";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SystemDiagram } from "@/components/SystemDiagram";
import { Timeline } from "@/components/Timeline";
import { capabilityCards } from "@/data/capabilityCards";

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

const capabilityIcons: Record<string, typeof Workflow> = {
  "operating-system": Workflow,
  "decision-system": Network,
  "intelligent-system": Braces,
};

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
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Troy Stone", url: "https://www.troystone.dev", jobTitle: "Enterprise Systems Architect", sameAs: ["https://www.linkedin.com/in/troystone"], knowsAbout: ["Enterprise Architecture", "Power Platform", "Microsoft Graph", "Automation", "Agentic AI"] };
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
            Technology strategist · Systems architect
          </p>

          <h1>
            Building intelligent systems organizations <em>trust and deploy.</em>
          </h1>

          <p className="hero-copy">
            Three decades spanning carrier-grade infrastructure, enterprise
            applications, executive leadership, automation, and accountable AI.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#story">
              Trace the work
              <ArrowDown size={16} />
            </a>
            <a className="text-link" href="#systems">
              Explore selected systems
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero-proof" aria-label="Experience summary">
          <div>
            <strong>30+</strong>
            <span>
              Years building
              <br />
              through change
            </span>
          </div>

          <div>
            <strong>6</strong>
            <span>
              Enterprise
              <br />
              system layers
            </span>
          </div>

          <div>
            <strong>1</strong>
            <span>
              Constant:
              <br />
              useful outcomes
            </span>
          </div>
        </div>
      </section>

      <section className="manifesto section" aria-labelledby="mission-title"><Reveal className="section-kicker"><span>Operating principle</span></Reveal><Reveal><h2 id="mission-title" className="display-copy">Technology changes.<br /><span>Building what lasts does not.</span></h2></Reveal><div className="manifesto-grid"><Reveal className="manifesto-lead"><p>The tools change. The hard parts endure.</p></Reveal><Reveal className="manifesto-body" delay={0.08}><p>Understand the organization. Turn complexity into clarity. Design for real constraints. Build reliable systems that can evolve with the business.</p><p>The technologies and responsibilities changed. The operating discipline did not.</p></Reveal></div></section>

      <section className="timeline-section section" id="story" aria-labelledby="timeline-title"><Reveal className="section-kicker"><span>Three decades, one practice</span></Reveal><Reveal className="timeline-heading"><div><p className="eyebrow">From infrastructure to accountable intelligence</p><h2 id="timeline-title">Every era builds<br />on the one before it.</h2></div><p>Explore how each generation of technology expanded the scale, responsibility, and operating discipline of the work.</p></Reveal><Reveal><Timeline /></Reveal></section>

      <section className="chapters section" aria-labelledby="chapters-title"><Reveal className="section-kicker"><span>The enterprise system</span></Reveal><h2 id="chapters-title" className="sr-only">Six connected layers of enterprise technology</h2>{chapters.map((chapter) => <Reveal className="chapter" key={chapter.index}><div className="chapter-meta"><span>{chapter.era}</span></div><div className="chapter-copy"><h3>{chapter.title}</h3><p>{chapter.copy}</p><div className="tag-row">{chapter.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></Reveal>)}</section>

      <section className="philosophy section" id="perspective" aria-labelledby="philosophy-title"><Reveal className="section-kicker"><span>Point of view</span></Reveal><div className="philosophy-grid"><Reveal><p className="eyebrow">The practical AI thesis</p><h2 id="philosophy-title">Intelligence is a layer—not an application or a model.<br />The system is the product.</h2><p className="philosophy-copy">A useful AI system knows what it may access, which actions it may take, when a person must decide, and how every action becomes observable. Without guardrails, intelligence is risk. Without auditability, it is difficult to trust. The model matters. The surrounding architecture matters more.</p></Reveal><Reveal delay={0.1}><SystemDiagram /></Reveal></div><div className="principles">{principles.map((principle, i) => <Reveal className="principle" delay={i * 0.06} key={principle.title}><h3>{principle.title}</h3>{principle.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</Reveal>)}</div></section>

      <section className="systems section" id="systems" aria-labelledby="systems-title"><Reveal className="section-kicker"><span>Representative systems</span></Reveal><Reveal className="systems-intro"><div><p className="eyebrow">Architecture in operation</p><h2 id="systems-title">The work behind<br />the interface.</h2></div><p>Representative enterprise cases, generalized to protect operational detail. Each begins with the operating problem—not a preferred platform.</p></Reveal><div className="system-cards">{capabilityCards.map((card, i) => { const Icon = capabilityIcons[card.id] ?? Braces; return <Reveal className="system-card" delay={i * 0.07} key={card.id}><div className="card-top"><Icon size={20} /></div><p className="eyebrow">{card.category}</p><h3>{card.title}</h3><dl><div><dt>Problem</dt><dd>{card.problem}</dd></div><div><dt>Architecture</dt><dd>{card.architecture}</dd></div><div><dt>Scale</dt><dd>{card.scale}</dd></div><div><dt>Result</dt><dd>{card.result}</dd></div><div><dt>Business outcome</dt><dd>{card.businessOutcome}</dd></div></dl></Reveal>; })}</div></section>

      <section className="evidence section" aria-labelledby="evidence-title"><Reveal className="section-kicker"><span>Operating record</span></Reveal><Reveal className="evidence-heading"><div><p className="eyebrow">Evidence at scale</p><h2 id="evidence-title">Accountability,<br />measured.</h2></div><p>Across infrastructure, public-sector leadership, automation, and AI, the standard remains consistent: resilient operations, explicit accountability, and outcomes the organization can sustain.</p></Reveal><div className="evidence-metrics" aria-label="Career evidence"><Reveal><strong>30+</strong><span>Years across infrastructure, leadership, automation, and AI</span></Reveal><Reveal delay={0.04}><strong>99.999%</strong><span>Carrier-grade SLA supporting tens of millions of monthly calls</span></Reveal><Reveal delay={0.08}><strong>60+</strong><span>County departments, offices, and bureaus served</span></Reveal><Reveal delay={0.12}><strong>8</strong><span>Years leading countywide technology as CIO</span></Reveal></div><Reveal className="now-block" delay={0.1}><p className="eyebrow">Current practice / 2026</p><h3>Testing the edge.<br />Keeping what works.</h3><p>Current work centers on production agent workflows, AI-assisted software delivery, enterprise voice systems, and the governance required to connect them safely to real operations.</p><div className="now-links"><a href="https://www.linkedin.com/in/troystone" target="_blank" rel="noreferrer">View professional record <ArrowUpRight size={15} /></a></div></Reveal></section>

      <section className="contact section" id="contact" aria-labelledby="contact-title"><Reveal><p className="eyebrow"><span className="status-dot" /> Complex systems. Meaningful outcomes.</p><h2 id="contact-title">Let&apos;s turn complexity into<br /><em>clarity.</em></h2><p>If you&apos;re modernizing a critical system, connecting AI to operations, or working through a consequential technology decision, I&apos;d welcome the conversation.</p><a className="button button-primary contact-button" href="https://truecore.services/" target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={17} /></a></Reveal></section>
    </main>
    <footer><a className="wordmark" href="#top" aria-label="Troy Stone, back to top"><Image className="brand-mark" src="/ts-initials.png" alt="" width={64} height={48} /></a><p>Enterprise architecture · Technology leadership · Accountable AI</p><div className="footer-links"><span className="built-by"><strong>Built by</strong> <a className="truecore-link" href="https://truecore.services/" target="_blank" rel="noreferrer"><Image className="truecore-logo" src="/truecore-logo.png" alt="" width={24} height={18} /><strong>truecore.services</strong></a></span><a className="linkedin-link" href="https://www.linkedin.com/in/troystone" aria-label="LinkedIn">in</a></div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
  </>;
}
