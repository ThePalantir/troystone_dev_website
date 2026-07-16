"use client";
import { KeyboardEvent, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const eras = [
  { year: "1990s", label: "Enterprise networks", note: "Enterprise networking established the operating discipline everything else would depend on: capacity, redundancy, routing, recovery, and accountability under pressure." },
  { year: "2000s", label: "Voice becomes data", note: "Converging voice and data turned communications into software-defined infrastructure. Routing, scaling, and recovery became more flexible—and the economics of enterprise communications changed with them." },
  { year: "2006–14", label: "Technology leadership", note: "Countywide responsibility expanded the work from individual systems to public outcomes: governance, continuity, collaboration, investment, and transparent service delivery." },
  { year: "2010s", label: "Cloud platforms", note: "Cloud platforms converted capacity from a long-range capital commitment into an operating dial. Connected services created the foundation for faster integration, richer data, and automation at scale." },
  { year: "2020s", label: "Enterprise automation", note: "Power Platform, Microsoft Graph, Entra ID, APIs, and code connected fragmented processes into governed operations—preparing the enterprise for intelligence inside the workflow." },
  { year: "Now", label: "Agentic systems", note: "Agentic systems extend that operating layer with bounded reasoning: trusted data, explicit permissions, observable actions, and human judgment where consequence demands it." },
];

export function Timeline() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const shellRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const selectEra = (index: number, button: HTMLButtonElement) => {
    setActive(index);
    const track = trackRef.current;
    if (track) {
      track.scrollTo({ left: button.offsetLeft + button.offsetWidth / 2 - track.clientWidth / 2, behavior: reduced ? "auto" : "smooth" });
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % eras.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + eras.length) % eras.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = eras.length - 1;
    else return;
    event.preventDefault();
    const button = trackRef.current?.querySelectorAll<HTMLButtonElement>(".timeline-node")[next];
    if (button) {
      button.focus();
      selectEra(next, button);
    }
  };

  return <div className="timeline-shell" ref={shellRef}>
    <p className="timeline-swipe" aria-hidden="true">Swipe to explore <span>→</span></p>
    <div className="timeline-track" ref={trackRef}>
      <div className="timeline-rail" role="tablist" aria-label="Technology eras"><span className="timeline-line" aria-hidden="true" />
        {eras.map((era, index) => <button key={era.label} id={`timeline-tab-${index}`} className={index === active ? "timeline-node active" : "timeline-node"} role="tab" aria-selected={index === active} aria-controls="timeline-detail" tabIndex={index === active ? 0 : -1} onKeyDown={(event) => handleKeyDown(event, index)} onClick={(event) => selectEra(index, event.currentTarget)}><span className="node-year">{era.year}</span><span className="node-dot" aria-hidden="true" /><span className="node-label">{era.label}</span></button>)}
      </div>
    </div>
    <motion.div id="timeline-detail" aria-labelledby={`timeline-tab-${active}`} key={eras[active].label} className="timeline-detail" initial={reduced ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }} role="tabpanel"><p>{eras[active].note}</p></motion.div>
  </div>;
}
