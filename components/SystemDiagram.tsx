"use client";

import { motion, useReducedMotion } from "motion/react";

const diagramDescription = "Diagram showing business context, architecture, guardrails, automation, human judgment, observability, and auditability flowing into useful intelligence";

const mobileBands = [
  { index: "01", title: "Foundation", conditions: ["Business context", "Architecture"] },
  { index: "02", title: "Operation", conditions: ["Automation", "Guardrails"] },
  { index: "03", title: "Accountability", conditions: ["Human judgment", "Observability / Auditability"] },
];

export function SystemDiagram() {
  const reducedMotion = useReducedMotion();
  const initial = reducedMotion ? false : { opacity: 0, y: 12 };
  const viewport = { once: true, margin: "-12%" };

  return <div className="system-diagram-figure" aria-label={diagramDescription} role="img">
    <div className="system-diagram system-diagram-desktop" aria-hidden="true">
      <div className="diagram-grid" /><div className="diagram-path path-a" /><div className="diagram-path path-b" />
      <span className="diagram-node node-a">Business context</span><span className="diagram-node node-b">Architecture</span><span className="diagram-node node-e">Guardrails</span><span className="diagram-node node-c">Automation</span><span className="diagram-node node-d">Human judgment</span><span className="diagram-node node-f">Observability / Auditability</span><div className="diagram-core">Useful<br />intelligence</div>
    </div>

    <div className="mobile-system-model" aria-hidden="true">
      <p className="model-intro">Six conditions for useful intelligence</p>

      <div className="model-flow">
        <motion.span
          className="model-spine"
          initial={reducedMotion ? false : { scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={viewport}
          transition={{ duration: .9, delay: .82, ease: [0.22, 1, 0.36, 1] }}
        />

        {mobileBands.map((band, index) => <motion.div
          className={`model-band model-band-${index + 1}`}
          initial={initial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: .65, delay: index * .18, ease: [0.22, 1, 0.36, 1] }}
          key={band.index}
        >
          <span className="model-junction" />
          <div className="model-band-heading"><span>{band.index}</span><strong>{band.title}</strong></div>
          <div className="model-nodes">
            {band.conditions.map((condition) => <div className="model-node" key={condition}><span /><strong>{condition}</strong></div>)}
          </div>
        </motion.div>)}

        <motion.div
          className="model-transition"
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: .55, delay: 1.02 }}
        >
          <span>Integrated operating layer</span>
        </motion.div>

        <motion.div
          className="model-outcome"
          initial={initial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: .72, delay: 1.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="model-outcome-junction"
            initial={reducedMotion ? false : { scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={viewport}
            transition={{ duration: .5, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}
          />
          <span>Outcome</span>
          <strong>Useful intelligence</strong>
          <p>Bounded. Observable. Accountable.</p>
        </motion.div>
      </div>
    </div>
  </div>;
}
