import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Compass,
  Layers3,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SystemDiagram } from "@/components/SystemDiagram";
import { Timeline } from "@/components/Timeline";
import { publishedExecutiveImpact } from "@/data/executiveImpact";
import { getGlossaryHref } from "@/data/glossary";

const leadershipThemes = [
  {
    title: "Align technology with the business",
    copy:
      "Connect investments, teams, architecture, and priorities to the operating and strategic outcomes the organization needs.",
    icon: Compass,
  },
  {
    title: "Lead meaningful change",
    copy:
      "Modernize systems and processes while accounting for people, adoption, governance, continuity, and risk.",
    icon: Building2,
  },
  {
    title: "Remain technically grounded",
    copy:
      "Maintain enough depth across infrastructure, applications, data, integration, automation, and AI to make informed decisions and challenge assumptions.",
    icon: Wrench,
  },
  {
    title: "Build durable capability",
    copy:
      "Develop teams, systems, controls, and operating models that continue producing value after the initial implementation.",
    icon: Layers3,
  },
] as const;

const chapters = [
  {
    index: "01",
    era: "Infrastructure",
    title: "Scale teaches discipline.",
    copy:
      "Verizon and Sprint routed tens of millions of directory-assistance calls through our carrier-grade network each month. We completed each transaction, then returned the caller to the carrier without interrupting the live connection. Meeting 99.999% SLAs through daily operations and live traffic migrations made operational resilience a contractual requirement—not an aspiration.",
    tags: ["Enterprise networks", "Voice over IP", "Global infrastructure"],
  },
  {
    index: "02",
    era: "Applications",
    title: "Applications turn architecture into work.",
    copy:
      "Enterprise applications connect architecture to the people, processes, and decisions that move an organization. The strongest simplify complex work while preserving the controls required to operate it responsibly.",
    tags: ["Enterprise applications", "Business systems", "Global deployments"],
  },
  {
    index: "03",
    era: "Data",
    title: "Trusted data makes better decisions possible.",
    copy:
      "From actuarial analysis and biostatistics to executive reporting, the discipline is the same: define the right measures, establish trust in the information, and turn complexity into useful decisions.",
    tags: ["Analytics", "Decision support", "Business intelligence"],
  },
  {
    index: "04",
    era: "Leadership",
    title: "Technology serves a public outcome.",
    copy:
      "Eight years as Lehigh County CIO expanded the work from systems to public outcomes. Leading technology across more than 60 departments, offices, and bureaus required clear strategy, sound governance, secure operations, capable teams, and reliable delivery. At that scale, trust is not a message. It is the result of keeping commitments.",
    tags: ["Executive leadership", "Technology strategy", "Digital transformation"],
  },
  {
    index: "05",
    era: "Automation",
    title: "Good systems reduce friction.",
    copy:
      "At enterprise scale, small manual steps become structural drag. Connecting platforms, identities, APIs, code, and line-of-business systems turns fragmented processes into a governed operating layer—reducing handoffs and risk while improving data quality, execution speed, and decision-making.",
    tags: ["Power Platform", "Systems integration", "Identity automation"],
  },
  {
    index: "06",
    era: "Intelligence",
    title: "AI belongs inside the system.",
    copy:
      "The opportunity is not a chatbot beside the business. It is bounded intelligence inside the workflows, data, and decisions the business already depends on—accelerating execution while preserving human judgment and accountability.",
    tags: ["Agentic systems", "Enterprise AI", "Production intelligence"],
  },
] as const;

const leadershipPrinciples = [
  {
    title: "Business outcomes first.",
    copy:
      "Technology earns its place by improving cost, capacity, service, resilience, decision-making, or the organization’s ability to execute.",
  },
  {
    title: "Strategy grounded in operation.",
    copy:
      "A credible strategy accounts for real workflows, constraints, ownership, risk, adoption, and what must happen on an ordinary Tuesday.",
  },
  {
    title: "Change built on trust.",
    copy:
      "Meaningful change requires clear communication, capable teams, accountable governance, and the discipline to keep commitments.",
  },
  {
    title: "Technical depth in service of judgment.",
    copy:
      "Leaders do not need to build every component, but they must understand enough to ask better questions, test assumptions, and make consequential decisions.",
  },
] as const;

const aiPrinciples = [
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
] as const;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Troy Stone",
    url: "https://www.troystone.dev",
    jobTitle: "Technology Executive",
    sameAs: ["https://www.linkedin.com/in/troystone"],
    knowsAbout: [
      "Technology Strategy",
      "Executive Leadership",
      "Enterprise Architecture",
      "Systems Integration",
      "Automation",
      "Agentic AI",
    ],
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <section className="hero executive-hero" id="top">
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
              Technology executive · Change leader · Systems thinker
            </p>

            <h1>Technology leadership that moves organizations forward.</h1>

            <div className="executive-hero-copy">
              <p>
                I combine executive leadership, business judgment, and hands-on
                technical depth to reduce costs, improve operational efficiency,
                strengthen execution, and help organizations navigate meaningful
                change.
              </p>
              <p>
                Whether serving as a CIO, VP of Technology, or leading automation
                and AI, the objective has remained consistent: apply technology
                deliberately to improve how the organization operates, competes,
                and grows.
              </p>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#experience">
                Explore My Experience
                <ArrowDown size={16} />
              </a>
              <a className="text-link" href="#impact">
                View Selected Impact
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="hero-proof" aria-label="Leadership experience summary">
            <div>
              <strong>30+</strong>
              <span>
                Years leading
                <br />
                through change
              </span>
            </div>
            <div>
              <strong>8</strong>
              <span>
                Years of
                <br />
                countywide CIO leadership
              </span>
            </div>
            <div>
              <strong>50M</strong>
              <span>
                Monthly calls
                <br />
                at carrier scale
              </span>
            </div>
          </div>
        </section>

        <section
          className="leadership-forward section"
          id="leadership"
          aria-labelledby="leadership-title"
        >
          <Reveal className="section-kicker">
            <span>How I move organizations forward</span>
          </Reveal>
          <Reveal className="executive-section-heading">
            <p className="eyebrow">Leadership in practice</p>
            <h2 id="leadership-title">
              Clear direction.
              <br />
              Grounded execution.
            </h2>
            <p>
              The strongest technology leadership joins business context,
              organizational change, operating discipline, and technical
              credibility.
            </p>
          </Reveal>
          <div className="leadership-themes">
            {leadershipThemes.map((theme, index) => {
              const Icon = theme.icon;
              return (
                <Reveal
                  className="leadership-theme"
                  delay={index * 0.05}
                  key={theme.title}
                >
                  <Icon aria-hidden="true" size={20} strokeWidth={1.6} />
                  <h3>{theme.title}</h3>
                  <p>{theme.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section
          className="selected-impact section"
          id="impact"
          aria-labelledby="impact-title"
        >
          <Reveal className="section-kicker">
            <span>Selected impact</span>
          </Reveal>
          <Reveal className="impact-heading">
            <div>
              <p className="eyebrow">Leadership in context</p>
              <h2 id="impact-title">
                Work, role,
                <br />
                and result.
              </h2>
            </div>
            <p>
              A concise record of executive leadership, operational scale, and
              technically grounded change—kept with the role and organization
              where each result belongs.
            </p>
          </Reveal>

          <div className="impact-list">
            {publishedExecutiveImpact.map((item, index) => {
              const approvedMetrics = item.metrics.filter(
                (metric) => metric.disclosureStatus === "approved",
              );

              return (
                <Reveal
                  className="impact-entry"
                  delay={index * 0.04}
                  key={item.id}
                >
                  <div className="impact-entry-meta">
                    <span>{item.engagementType}</span>
                    <span>{item.industry}</span>
                  </div>
                  <div className="impact-entry-content">
                    <p className="impact-role">
                      {item.title} <span>— {item.displayOrganization}</span>
                    </p>
                    <p>{item.context}</p>
                    <p className="impact-accomplishment">
                      {item.accomplishment}
                    </p>
                    <div className="impact-tags" aria-label="Areas of impact">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  {approvedMetrics.length > 0 && (
                    <dl className="impact-metrics">
                      {approvedMetrics.map((metric) => (
                        <div key={`${metric.value}-${metric.description}`}>
                          <dt>{metric.value}</dt>
                          <dd>{metric.description}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </Reveal>
              );
            })}
          </div>
        </section>

        <section
          className="timeline-section section"
          id="experience"
          aria-labelledby="timeline-title"
        >
          <Reveal className="section-kicker">
            <span>Professional journey</span>
          </Reveal>
          <Reveal className="timeline-heading">
            <div>
              <p className="eyebrow">
                From enterprise networks to accountable intelligence
              </p>
              <h2 id="timeline-title">
                The tools changed.
                <br />
                The objective did not.
              </h2>
            </div>
            <p>
              Each technology era expanded the scale and complexity of the work.
              The leadership objective remained consistent: improve the
              organization and the outcomes it produces.
            </p>
          </Reveal>
          <Reveal>
            <Timeline />
          </Reveal>
        </section>

        <section className="chapters section" aria-labelledby="chapters-title">
          <Reveal className="section-kicker">
            <span>Career chapters</span>
          </Reveal>
          <h2 id="chapters-title" className="sr-only">
            Six connected chapters of technology leadership
          </h2>
          {chapters.map((chapter) => (
            <Reveal className="chapter" key={chapter.index}>
              <div className="chapter-meta">
                <span>{chapter.era}</span>
              </div>
              <div className="chapter-copy">
                <h3>{chapter.title}</h3>
                <p>{chapter.copy}</p>
                <div className="tag-row">
                  {chapter.tags.map((tag) => (
                    <Link
                      href={getGlossaryHref(tag)}
                      aria-label={`Read the glossary definition for ${tag}`}
                      key={tag}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </section>

        <section
          className="executive-about section"
          id="about"
          aria-labelledby="about-title"
        >
          <Reveal className="section-kicker">
            <span>Leadership philosophy</span>
          </Reveal>
          <div className="executive-about-grid">
            <Reveal className="executive-about-intro">
              <p className="eyebrow">How I lead</p>
              <h2 id="about-title">
                Judgment built from
                <br />
                strategy and operation.
              </h2>
              <p>
                Leadership and hands-on technical capability reinforce one
                another. One establishes direction and accountability; the other
                keeps decisions connected to operating reality.
              </p>
            </Reveal>
            <div className="leadership-principles">
              {leadershipPrinciples.map((principle, index) => (
                <Reveal
                  className="leadership-principle"
                  delay={index * 0.05}
                  key={principle.title}
                >
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="philosophy section"
          id="perspective"
          aria-labelledby="philosophy-title"
        >
          <Reveal className="section-kicker">
            <span>Point of view</span>
          </Reveal>
          <div className="philosophy-grid">
            <Reveal className="philosophy-content">
              <p className="eyebrow">The practical AI thesis</p>
              <h2 id="philosophy-title">
                Intelligence is a layer—not an application or a model.
                <br />
                The system is the product.
              </h2>
              <p className="philosophy-copy">
                A useful AI system knows what it may access, which actions it may
                take, when a person must decide, and how every action becomes
                observable. Without guardrails, intelligence is risk. Without
                auditability, it is difficult to trust. The model matters. The
                surrounding architecture matters more.
              </p>
            </Reveal>
            <Reveal className="philosophy-visual" delay={0.1}>
              <SystemDiagram />
            </Reveal>
          </div>
          <div className="principles">
            {aiPrinciples.map((principle, index) => (
              <Reveal
                className="principle"
                delay={index * 0.06}
                key={principle.title}
              >
                <h3>{principle.title}</h3>
                {principle.copy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className="truecore-pathway section"
          id="truecore"
          aria-labelledby="truecore-title"
        >
          <Reveal className="truecore-pathway-content">
            <div>
              <p className="eyebrow">A separate path for project delivery</p>
              <h2 id="truecore-title">Looking for implementation support?</h2>
            </div>
            <div>
              <p>
                Through TrueCore Services, I also work with organizations that
                need practical help automating repetitive work, integrating
                business systems, applying AI responsibly, developing
                applications, and improving their digital presence.
              </p>
              <a
                className="button button-primary"
                href="https://truecore.services/"
                target="_blank"
                rel="noreferrer"
              >
                Visit
                <span className="truecore-name">
                  <Image
                    className="truecore-logo"
                    src="/truecore-logo.png"
                    alt=""
                    width={24}
                    height={18}
                  />
                  TrueCore Services
                </span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </section>

        <section
          className="contact executive-contact section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <Reveal className="executive-contact-heading">
            <p className="eyebrow">
              <span className="status-dot" /> Two ways to connect
            </p>
            <h2 id="contact-title">
              The right conversation
              <br />
              <em>starts here.</em>
            </h2>
          </Reveal>
          <div className="contact-paths">
            <Reveal className="contact-path">
              <p className="eyebrow">Executive and leadership opportunities</p>
              <h3>Leadership for consequential change.</h3>
              <p>
                For organizations seeking a CIO, VP of Technology, senior
                technology leader, transformation leader, strategic advisor, or
                change agent with substantial technical depth.
              </p>
              <a
                href="https://www.linkedin.com/in/troystone"
                target="_blank"
                rel="noreferrer"
              >
                Connect with Troy on LinkedIn
                <ArrowUpRight size={15} />
              </a>
            </Reveal>
            <Reveal className="contact-path" delay={0.06}>
              <p className="eyebrow">Project and consulting opportunities</p>
              <h3>Practical delivery through TrueCore.</h3>
              <p>
                For organizations seeking implementation support in automation,
                integration, applications, AI, data, websites, or related
                technology initiatives.
              </p>
              <a
                href="https://truecore.services/"
                target="_blank"
                rel="noreferrer"
              >
                Visit TrueCore Services
                <ArrowUpRight size={15} />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
