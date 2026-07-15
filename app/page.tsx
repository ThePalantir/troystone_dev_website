import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Network, ShieldCheck, Workflow } from "lucide-react";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SystemDiagram } from "@/components/SystemDiagram";
import { Timeline } from "@/components/Timeline";

const chapters = [
  {
    index: "01",
    era: "Infrastructure",
    title: "Scale teaches discipline.",
    copy:
      "Enterprise networks, telecommunications, and Voice over IP established the foundation: reliability, resilience, security, and performance are not optional when organizations depend on the system.",
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
      "Enterprise applications connect technology to the people, processes, and decisions that move an organization forward. The best applications simplify complex work without concealing the controls required to operate it responsibly.",
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
      "From actuarial analysis and biostatistics to executive reporting and operational analytics, data has remained a constant throughout the work: define the right measures, establish trust in the information, and make complexity useful.",
    tags: [
      "Analytics",
      "Decision support",
      "Business intelligence",
    ],
  },
  {
    index: "04",
    era: "Leadership",
    title: "Technology serves an organizational outcome.",
    copy:
      "Executive technology leadership requires more than technical judgment. It requires strategy, governance, budgets, organizational change, public accountability, and teams capable of delivering systems people can trust.",
    tags: [
      "Executive leadership",
      "Technology strategy",
      "Digital transformation",
    ],
  },
  {
    index: "05",
    era: "Automation",
    title: "Good systems remove friction.",
    copy:
      "At enterprise scale, small manual steps become structural drag. Microsoft 365, Power Platform, Graph, Entra, PowerShell, Python, and integrated workflows create a more connected operating layer with fewer handoffs and clearer decisions.",
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
      "The practical opportunity is not an isolated chatbot or demonstration. It is intelligence designed into the workflows, permissions, data, applications, and decisions the organization already depends on.",
    tags: [
      "Agentic systems",
      "Enterprise AI",
      "Production intelligence",
    ],
  },
];

const systems = [
  { icon: Workflow, eyebrow: "Operating system", title: "Employee lifecycle orchestration", challenge: "Identity, licensing, access, and communication often fracture across teams and tools.", architecture: "Entra + Microsoft Graph + Power Platform + governed approvals", outcome: "A consistent, auditable path from first request through every lifecycle change." },
  { icon: Network, eyebrow: "Decision system", title: "Executive signal, not dashboard noise", challenge: "Leaders need the few operational signals that change a decision—not another destination to monitor.", architecture: "Connected source data + normalization + exception-led reporting", outcome: "Clearer operational visibility with less manual reconciliation and reporting effort." },
  { icon: Braces, eyebrow: "Intelligent system", title: "Agentic production workflows", challenge: "AI pilots fail when they are disconnected from real permissions, business rules, and review.", architecture: "Specialized agents + trusted tools + human checkpoints + observability", outcome: "AI that can do bounded, useful work inside an accountable production process." },
];

const principles = [
  ["01", "Understand the system", "Before choosing a tool, map the work: people, incentives, data, constraints, exceptions, and the cost of failure."],
  ["02", "Design for operation", "The real architecture includes ownership, support, security, adoption, and what happens on an ordinary Tuesday."],
  ["03", "Automate with judgment", "Use machines for consistency and scale. Preserve human attention for ambiguity, consequence, and care."],
];

export default function Home() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Troy Stone", url: "https://troystone.dev", jobTitle: "Enterprise Systems Architect", sameAs: ["https://www.linkedin.com/in/troystone", "https://github.com/ThePalantir"], knowsAbout: ["Enterprise Architecture", "Power Platform", "Microsoft Graph", "Automation", "Agentic AI"] };
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
            Building intelligent systems organizations <em>actually deploy.</em>
          </h1>

          <p className="hero-copy">
            Three decades connecting every layer of enterprise technology—from
            global infrastructure, applications, and data to executive leadership,
            automation, and agentic AI.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#story">
              Follow the work
              <ArrowDown size={16} />
            </a>
            <a className="text-link" href="#systems">
              See selected systems
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

      <section className="manifesto section" aria-labelledby="mission-title"><Reveal className="section-kicker"><span>Mission</span><span>01 — 07</span></Reveal><Reveal><h2 id="mission-title" className="display-copy">Technology changes.<br /><span>Building what lasts does not.</span></h2></Reveal><div className="manifesto-grid"><Reveal className="manifesto-lead"><p>The tools are new. The hard parts are familiar.</p></Reveal><Reveal className="manifesto-body" delay={0.08}><p>Understand the organization. Make complexity legible. Design for the constraints people actually live with. Build a system that can be operated, trusted, and improved.</p><p>The work has crossed every layer of enterprise technology: infrastructure, applications, data, leadership, automation, and intelligence. The value comes from understanding how those layers operate as one system.</p></Reveal></div></section>

      <section className="timeline-section section" id="story" aria-labelledby="timeline-title"><Reveal className="section-kicker"><span>A continuous practice</span><span>02 — 07</span></Reveal><Reveal className="timeline-heading"><div><p className="eyebrow">A career across the enterprise</p><h2 id="timeline-title">Every layer informs<br />the one above it.</h2></div><p>The technologies evolve, but the disciplines compound: infrastructure, applications, data, leadership, automation, and intelligence become more valuable when they are designed as one connected system.</p></Reveal><Reveal><Timeline /></Reveal></section>

      <section className="chapters section" aria-labelledby="chapters-title"><Reveal className="section-kicker"><span>The enterprise system</span><span>03 — 07</span></Reveal><h2 id="chapters-title" className="sr-only">Six connected layers of enterprise technology</h2>{chapters.map((chapter) => <Reveal className="chapter" key={chapter.index}><div className="chapter-meta"><span>{chapter.index}</span><span>{chapter.era}</span></div><div className="chapter-copy"><h3>{chapter.title}</h3><p>{chapter.copy}</p><div className="tag-row">{chapter.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></Reveal>)}</section>

      <section className="philosophy section" id="perspective" aria-labelledby="philosophy-title"><Reveal className="section-kicker"><span>Technology philosophy</span><span>04 — 07</span></Reveal><div className="philosophy-grid"><Reveal><p className="eyebrow">The practical AI thesis</p><h2 id="philosophy-title">Intelligence is a layer.<br />The system is the product.</h2><p className="philosophy-copy">A useful AI system knows what it can access, which action it may take, when a person must decide, and how the result becomes observable. The model matters. The surrounding architecture matters more.</p></Reveal><Reveal delay={0.1}><SystemDiagram /></Reveal></div><div className="principles">{principles.map(([number, title, copy], i) => <Reveal className="principle" delay={i * 0.06} key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div></section>

      <section className="systems section" id="systems" aria-labelledby="systems-title"><Reveal className="section-kicker"><span>Selected systems</span><span>05 — 07</span></Reveal><Reveal className="systems-intro"><div><p className="eyebrow">Architecture in practice</p><h2 id="systems-title">The work behind<br />the interface.</h2></div><p>Representative system patterns from enterprise automation and applied AI. Each starts with an operating problem—not a technology shopping list.</p></Reveal><div className="system-cards">{systems.map((system, i) => { const Icon = system.icon; return <Reveal className="system-card" delay={i * 0.08} key={system.title}><div className="card-top"><Icon size={20} /><span>0{i + 1}</span></div><p className="eyebrow">{system.eyebrow}</p><h3>{system.title}</h3><dl><div><dt>Challenge</dt><dd>{system.challenge}</dd></div><div><dt>Architecture</dt><dd>{system.architecture}</dd></div><div><dt>Outcome</dt><dd>{system.outcome}</dd></div></dl></Reveal>; })}</div></section>

      <section className="evidence section" aria-labelledby="evidence-title"><Reveal className="section-kicker"><span>Evidence of practice</span><span>06 — 07</span></Reveal><div className="evidence-grid"><Reveal className="quote-block"><ShieldCheck size={26} /><blockquote id="evidence-title">“Technology exists to enable business.”</blockquote><p>That principle appears repeatedly in recommendations from the people Troy has led: high standards, loyalty to the team, and an insistence that technology earn its place through outcomes.</p><cite>Leadership recommendation, public LinkedIn profile</cite></Reveal><Reveal className="now-block" delay={0.1}><p className="eyebrow">Now / 2026</p><h3>Testing the edge.<br />Keeping what works.</h3><p>Current focus: production agent workflows, AI-assisted software delivery, enterprise voice systems, and the governance required to connect them safely to real organizations.</p><div className="now-links"><a href="https://www.linkedin.com/in/troystone" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a><a href="https://github.com/ThePalantir" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a></div></Reveal></div></section>

      <section className="contact section" id="contact" aria-labelledby="contact-title"><Reveal><p className="eyebrow"><span className="status-dot" /> Open to consequential problems</p><h2 id="contact-title">Let’s make the complex<br /><em>useful.</em></h2><p>If you are modernizing a critical system, connecting AI to real operations, or trying to see the architecture hidden inside a difficult problem, I would like to hear about it.</p><a className="button button-primary contact-button" href="https://www.linkedin.com/in/troystone" target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={17} /></a></Reveal></section>
    </main>
    <footer><a className="wordmark" href="#top"><span className="wordmark-mark">TS</span><span>Troy Stone</span></a><p>Enterprise architecture · Automation · Intelligent systems</p><div><a href="https://www.linkedin.com/in/troystone" aria-label="LinkedIn">in</a><a href="https://github.com/ThePalantir" aria-label="GitHub">gh</a></div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
  </>;
}
