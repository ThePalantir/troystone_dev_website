import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Network, ShieldCheck, Workflow } from "lucide-react";
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
      "Carriers entrusted us with their directory assistance traffic, making us a service provider to one of the world's largest service providers. Verizon and Sprint handed the calls off to our network, we completed the DA transaction, and then seamlessly returned the live call back to the carrier network so the customer remained connected to the requested party. Supporting tens of millions of calls each month under demanding carrier-grade SLAs (99.999% for VW) left little room for error. Reliability wasn't simply an engineering goal—it was a contractual obligation.",
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
    title: "Technology serves a public outcome.",
    copy:
      "Eight years as Chief Information Officer for Lehigh County expanded both the scope and purpose of my work. I led technology across more than 60 departments, offices, and bureaus, overseeing public safety initiatives, digital transformation, governance, strategic planning, and technology investments. More importantly, it reinforced that technology succeeds only when it earns the confidence of the people who depend on it. Trust is built through capable teams, sound governance, secure systems, and reliably delivering on commitments.",
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
      "At enterprise scale, small manual steps become structural drag. Automation transforms disconnected processes into a connected operating layer. By integrating Microsoft Power Platform, Microsoft Graph, Entra ID, Power BI, PowerShell, Python, and line-of-business systems through modern APIs and event-driven webhooks, organizations reduce handoffs, mitigate risk, improve data quality, accelerate decision-making, and create a trusted operational foundation for automation, analytics, and agentic AI.",
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
      "The practical opportunity is not a chatbot sitting beside the business. It is intelligence embedded into the workflows, data, and decisions the business already depends on—accelerating execution, improving decisions, and amplifying human capability.",
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
      "Map the work before choosing the tool. Understand the people, processes, incentives, data, constraints, exceptions, projected ROI, and the cost of failure. Define the ideal end state before selecting a platform.",
      "Too often overlooked: Complete the feedback loop with a post-implementation audit that validates adoption, performance, business value, ROI, and identifies opportunities for continuous improvement.",
    ],
  },
  {
    title: "Design for operation.",
    copy: [
      "Real architecture extends beyond the deployment. It defines ownership, support, security, adoption, governance, and what happens on an ordinary Tuesday.",
    ],
  },
  {
    title: "Automate with judgment.",
    copy: [
      "Deterministic automation should remain the default. Agentic AI belongs where it delivers capabilities that rules alone cannot. Preserve human oversight for high-impact decisions, exceptions, accountability, and care.",
    ],
  },
];

export default function Home() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Troy Stone", url: "https://troystone.dev", jobTitle: "Enterprise Systems Architect", sameAs: ["https://www.linkedin.com/in/troystone"], knowsAbout: ["Enterprise Architecture", "Power Platform", "Microsoft Graph", "Automation", "Agentic AI"] };
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
            Three decades of solving complex technology challenges from enterprise
            infrastructure, applications, and executive leadership to intelligent
            automation and agentic AI.
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

      <section className="manifesto section" aria-labelledby="mission-title"><Reveal className="section-kicker"><span>Mission</span></Reveal><Reveal><h2 id="mission-title" className="display-copy">Technology changes.<br /><span>Building what lasts does not.</span></h2></Reveal><div className="manifesto-grid"><Reveal className="manifesto-lead"><p>The tools are new. The hard parts are familiar.</p></Reveal><Reveal className="manifesto-body" delay={0.08}><p>Understand the organization. Turn complexity into clarity. Design around real-world constraints. Build reliable, maintainable systems that evolve with the business.</p><p>Those principles have remained constant, even as the technologies and responsibilities have changed.</p></Reveal></div></section>

      <section className="timeline-section section" id="story" aria-labelledby="timeline-title"><Reveal className="section-kicker"><span>A continuous practice</span></Reveal><Reveal className="timeline-heading"><div><p className="eyebrow">Thirty years of early adoption and adaptation, turning emerging technologies into practical business solutions.</p><h2 id="timeline-title">Every era builds<br />on the one before it.</h2></div><p>Select an era to see how each generation of technology shaped the systems, decisions, and disciplines that followed.</p></Reveal><Reveal><Timeline /></Reveal></section>

      <section className="chapters section" aria-labelledby="chapters-title"><Reveal className="section-kicker"><span>The enterprise system</span></Reveal><h2 id="chapters-title" className="sr-only">Six connected layers of enterprise technology</h2>{chapters.map((chapter) => <Reveal className="chapter" key={chapter.index}><div className="chapter-meta"><span>{chapter.era}</span></div><div className="chapter-copy"><h3>{chapter.title}</h3><p>{chapter.copy}</p><div className="tag-row">{chapter.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></Reveal>)}</section>

      <section className="philosophy section" id="perspective" aria-labelledby="philosophy-title"><Reveal className="section-kicker"><span>Technology philosophy</span></Reveal><div className="philosophy-grid"><Reveal><p className="eyebrow">The practical AI thesis</p><h2 id="philosophy-title">Intelligence is a layer—not an application or a model.<br />The system is the product.</h2><p className="philosophy-copy">A useful AI system knows what information it can access, which actions it is authorized to take, when a person must make the decision, and how every action becomes observable. Intelligence without guardrails is risk. Intelligence without auditability is difficult to trust. The model matters. The surrounding architecture matters more.</p></Reveal><Reveal delay={0.1}><SystemDiagram /></Reveal></div><div className="principles">{principles.map((principle, i) => <Reveal className="principle" delay={i * 0.06} key={principle.title}><h3>{principle.title}</h3>{principle.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</Reveal>)}</div></section>

      <section className="systems section" id="systems" aria-labelledby="systems-title"><Reveal className="section-kicker"><span>Selected systems</span></Reveal><Reveal className="systems-intro"><div><p className="eyebrow">Architecture in practice</p><h2 id="systems-title">The work behind<br />the interface.</h2></div><p>These representative system patterns reflect a consistent philosophy: understand the operating problem, design the architecture, then select the technology that best fits the need.</p></Reveal><div className="system-cards">{capabilityCards.map((card, i) => { const Icon = capabilityIcons[card.id] ?? Braces; return <Reveal className="system-card" delay={i * 0.08} key={card.id}><div className="card-top"><Icon size={20} /></div><p className="eyebrow">{card.category}</p><h3>{card.title}</h3><dl><div><dt>Challenge</dt><dd>{card.challenge}</dd></div><div><dt>Architecture</dt><dd>{card.architecture}</dd></div><div><dt>Outcome</dt><dd>{card.outcome}</dd></div></dl></Reveal>; })}</div></section>

      <section className="evidence section" aria-labelledby="evidence-title"><Reveal className="section-kicker"><span>Evidence of practice</span></Reveal><div className="evidence-grid"><Reveal className="quote-block"><ShieldCheck size={26} /><blockquote id="evidence-title">“Technology exists to enable business.”</blockquote><p>That principle appears repeatedly in recommendations from the people Troy has led: high standards, loyalty to the team, and an insistence that technology earn its place through outcomes.</p><cite>Leadership recommendation, public LinkedIn profile</cite></Reveal><Reveal className="now-block" delay={0.1}><p className="eyebrow">Now / 2026</p><h3>Testing the edge.<br />Keeping what works.</h3><p>Current focus: production agent workflows, AI-assisted software delivery, enterprise voice systems, and the governance required to connect them safely to real organizations.</p><div className="now-links"><a href="https://www.linkedin.com/in/troystone" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a></div></Reveal></div></section>

      <section className="contact section" id="contact" aria-labelledby="contact-title"><Reveal><p className="eyebrow"><span className="status-dot" /> Drawn to complex problems with meaningful outcomes.</p><h2 id="contact-title">Let&apos;s turn complexity into<br /><em>clarity.</em></h2><p>If you&apos;re modernizing a critical system, connecting AI to real operations, or solving a complex problem with meaningful business impact, I&apos;d enjoy the conversation.</p><a className="button button-primary contact-button" href="https://www.linkedin.com/in/troystone" target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={17} /></a></Reveal></section>
    </main>
    <footer><a className="wordmark" href="#top" aria-label="Troy Stone, back to top"><Image className="brand-mark" src="/ts-initials.png" alt="" width={64} height={48} /></a><p>Enterprise architecture · Automation · Intelligent systems</p><div><span className="built-by"><strong>Built by</strong> <a href="https://truecore.services/" target="_blank" rel="noreferrer"><strong>truecore.services</strong></a></span><a href="https://www.linkedin.com/in/troystone" aria-label="LinkedIn">in</a></div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
  </>;
}
