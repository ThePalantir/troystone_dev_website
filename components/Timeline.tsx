"use client";
import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
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
  const [active, setActive] = useState(eras.length - 1);
  const reduced = useReducedMotion();
  const shellRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, moved: false, startX: 0, scrollLeft: 0 });

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const track = trackRef.current;
    if (!track) return;
    drag.current = { active: true, moved: false, startX: event.clientX, scrollLeft: track.scrollLeft };
    track.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    const distance = event.clientX - drag.current.startX;
    if (Math.abs(distance) > 5) drag.current.moved = true;
    track.scrollLeft = drag.current.scrollLeft - distance;
  };

  const handlePointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    drag.current.active = false;
    if (trackRef.current?.hasPointerCapture(event.pointerId)) trackRef.current.releasePointerCapture(event.pointerId);
  };

  const selectEra = (index: number, button: HTMLButtonElement) => {
    if (drag.current.moved) {
      drag.current.moved = false;
      return;
    }
    setActive(index);
    const track = trackRef.current;
    if (track) {
      track.scrollTo({ left: button.offsetLeft + button.offsetWidth / 2 - track.clientWidth / 2, behavior: reduced ? "auto" : "smooth" });
    }
    requestAnimationFrame(() => shellRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" }));
  };

  return <div className="timeline-shell" ref={shellRef}>
    <div className="timeline-track" ref={trackRef} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerEnd} onPointerCancel={handlePointerEnd}>
      <div className="timeline-rail" role="tablist" aria-label="Technology eras"><span className="timeline-line" aria-hidden="true" />
        {eras.map((era, index) => <button key={era.label} className={index === active ? "timeline-node active" : "timeline-node"} role="tab" aria-selected={index === active} aria-controls="timeline-detail" onClick={(event) => selectEra(index, event.currentTarget)}><span className="node-year">{era.year}</span><span className="node-dot" aria-hidden="true" /><span className="node-label">{era.label}</span></button>)}
      </div>
    </div>
    <motion.div id="timeline-detail" key={eras[active].label} className="timeline-detail" initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} role="tabpanel"><p>{eras[active].note}</p></motion.div>
  </div>;
}
