"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const eras = [
  { year: "1990s", label: "Enterprise networks", note: "Reliability begins with the physical system: topology, capacity, redundancy, and discipline." },
  { year: "2000s", label: "Voice becomes data", note: "Converging voice and data made architecture inseparable from the business it carries." },
  { year: "2006–14", label: "Technology leadership", note: "At county scale, the work expanded from systems to governance, public safety, teams, and outcomes." },
  { year: "2010s", label: "Cloud platforms", note: "Microsoft 365 shifted the center of gravity from owned infrastructure to connected services." },
  { year: "2020s", label: "Enterprise automation", note: "Power Platform, Graph, identity, and code turned fragmented work into dependable operating systems." },
  { year: "Now", label: "Agentic systems", note: "AI becomes useful when it is designed into permissions, data, workflows, and accountable human decisions." },
];

export function Timeline() {
  const [active, setActive] = useState(eras.length - 1); const reduced = useReducedMotion();
  return <div className="timeline-shell">
    <div className="timeline-track" role="tablist" aria-label="Technology eras"><span className="timeline-line" aria-hidden="true" />
      {eras.map((era, index) => <button key={era.label} className={index === active ? "timeline-node active" : "timeline-node"} role="tab" aria-selected={index === active} aria-controls="timeline-detail" onClick={() => setActive(index)}><span className="node-year">{era.year}</span><span className="node-dot" aria-hidden="true" /><span className="node-label">{era.label}</span></button>)}
    </div>
    <motion.div id="timeline-detail" key={eras[active].label} className="timeline-detail" initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} role="tabpanel"><span>{String(active + 1).padStart(2, "0")}</span><p>{eras[active].note}</p></motion.div>
  </div>;
}
