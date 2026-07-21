import { ArrowRight } from "lucide-react";
import { AccomplishmentsShowcase } from "@/components/AccomplishmentsShowcase";
import { Reveal } from "@/components/Reveal";
import { businessOutcomes, caseStudies, expertiseAreas, proofPoints } from "@/data/homepage";

export function BusinessOutcomes() {
  return <section className="outcomes-section section" id="outcomes" aria-labelledby="outcomes-title">
    <Reveal className="section-kicker"><span>Business outcomes</span></Reveal>
    <div className="value-section-heading">
      <Reveal><p className="eyebrow">Technology in service of the operation</p><h2 id="outcomes-title">The result should show up in the business.</h2></Reveal>
      <Reveal delay={0.06}><p>Technology earns its place when it reduces friction, improves the quality of execution, and helps the organization move with greater confidence.</p><a className="section-link" href="#what-i-do">See how I help <ArrowRight size={15} /></a></Reveal>
    </div>
    <div className="outcome-grid">
      {businessOutcomes.map((outcome, index) => <Reveal className="outcome-item" delay={index * .035} key={outcome.title}>
        <span aria-hidden="true" />
        <h3>{outcome.title}</h3>
        <p>{outcome.description}</p>
      </Reveal>)}
    </div>
  </section>;
}

export function ExpertiseAreas() {
  return <section className="expertise-section section" id="what-i-do" aria-labelledby="expertise-title">
    <Reveal className="section-kicker"><span>What I help organizations do</span></Reveal>
    <div className="value-section-heading">
      <Reveal><p className="eyebrow">Leadership and hands-on delivery</p><h2 id="expertise-title">Move from a consequential problem to an operating solution.</h2></Reveal>
      <Reveal delay={0.06}><p>I work with executives, operational leaders, and technical teams when the challenge crosses organizational and system boundaries.</p><a className="section-link" href="#case-studies">View selected work <ArrowRight size={15} /></a></Reveal>
    </div>
    <div className="expertise-list">
      {expertiseAreas.map((area, index) => <Reveal className="expertise-item" delay={index * .04} key={area.title}>
        <h3>{area.title}</h3>
        <p>{area.description}</p>
      </Reveal>)}
    </div>
  </section>;
}

export function EvidenceAndResults() {
  return <section className="evidence value-evidence section" id="evidence" aria-labelledby="evidence-title">
    <Reveal className="section-kicker"><span>Evidence and results</span></Reveal>
    <div className="value-section-heading">
      <Reveal><p className="eyebrow">Credibility in operation</p><h2 id="evidence-title">Leadership measured by what changed.</h2></Reveal>
      <Reveal delay={0.06}><p>The work spans executive responsibility and hands-on delivery across enterprise, government, public safety, finance, HR, field operations, and corporate services.</p><a className="section-link" href="#case-studies">Explore the work behind the numbers <ArrowRight size={15} /></a></Reveal>
    </div>
    <div className="proof-grid" aria-label="Selected evidence">
      {proofPoints.map((proof, index) => <Reveal className="proof-item" delay={index * .035} key={proof.label}>
        <strong>{proof.metric}</strong>
        <h3>{proof.label}</h3>
        <p>{proof.detail}</p>
      </Reveal>)}
    </div>
    <Reveal><AccomplishmentsShowcase /></Reveal>
  </section>;
}

export function SelectedCaseStudies() {
  return <section className="case-studies section" id="case-studies" aria-labelledby="case-studies-title">
    <Reveal className="section-kicker"><span>Selected case studies</span></Reveal>
    <div className="value-section-heading">
      <Reveal><p className="eyebrow">From operating problem to business result</p><h2 id="case-studies-title">Work designed around the outcome.</h2></Reveal>
      <Reveal delay={0.06}><p>Representative enterprise work, generalized where needed to protect operational detail. Each case begins with the business problem and ends with an observable result.</p><a className="section-link" href="#experience">See the experience behind the work <ArrowRight size={15} /></a></Reveal>
    </div>
    <div className="case-study-list">
      {caseStudies.map((study, index) => <Reveal className="case-study" delay={index * .04} key={study.slug}>
        <div className="case-study-heading">
          <p className="eyebrow">{study.category}</p>
          <h3>{study.title}</h3>
        </div>
        <dl>
          <div><dt>Business problem</dt><dd>{study.problem}</dd></div>
          <div><dt>Operational challenge</dt><dd>{study.challenge}</dd></div>
          <div><dt>Solution designed and delivered</dt><dd>{study.solution}</dd></div>
          <div><dt>My role</dt><dd>{study.role}</dd></div>
          <div><dt>Technologies used</dt><dd><span className="case-study-technologies">{study.technologies.map((technology) => <span key={technology}>{technology}</span>)}</span></dd></div>
          <div className="case-study-result"><dt>Result</dt><dd>{study.result}</dd></div>
        </dl>
      </Reveal>)}
    </div>
  </section>;
}
