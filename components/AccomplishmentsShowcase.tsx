"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { accomplishments } from "@/data/accomplishments";

const gap = 16;

export function AccomplishmentsShowcase() {
  const reducedMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const keyboardInput = useRef(false);
  const autoScrolling = useRef(false);
  const autoDirection = useRef(1);
  const [visibleCount, setVisibleCount] = useState(3);
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [keyboardFocused, setKeyboardFocused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [interactionPauseVersion, setInteractionPauseVersion] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  const maxIndex = Math.max(0, accomplishments.length - visibleCount);

  const measure = useCallback(() => {
    const width = viewportRef.current?.clientWidth ?? 0;
    if (width) setStep((width - gap * (visibleCount - 1)) / visibleCount + gap);
  }, [visibleCount]);

  useLayoutEffect(() => {
    const mobile = window.matchMedia("(max-width: 640px)");
    const desktop = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      const next = mobile.matches ? 1 : desktop.matches ? 3 : 2;
      setVisibleCount(next);
      setActive(0);
      viewportRef.current?.scrollTo({ left: 0, behavior: "auto" });
    };
    const frame = window.requestAnimationFrame(update);
    mobile.addEventListener("change", update);
    desktop.addEventListener("change", update);
    return () => {
      window.cancelAnimationFrame(frame);
      mobile.removeEventListener("change", update);
      desktop.removeEventListener("change", update);
    };
  }, []);

  useLayoutEffect(() => {
    const frame = window.requestAnimationFrame(measure);
    const observer = new ResizeObserver(measure);
    if (viewportRef.current) observer.observe(viewportRef.current);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [measure]);

  useEffect(() => {
    const noteKeyboard = () => { keyboardInput.current = true; };
    const notePointer = () => { keyboardInput.current = false; };
    document.addEventListener("keydown", noteKeyboard, true);
    document.addEventListener("pointerdown", notePointer, true);
    return () => {
      document.removeEventListener("keydown", noteKeyboard, true);
      document.removeEventListener("pointerdown", notePointer, true);
    };
  }, []);

  useEffect(() => {
    const updateVisibility = () => setPageVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (!interactionPaused) return;
    const resume = window.setTimeout(() => setInteractionPaused(false), 8000);
    return () => window.clearTimeout(resume);
  }, [interactionPaused, interactionPauseVersion]);

  const scrollToIndex = useCallback((index: number, automatic = false) => {
    const next = Math.min(Math.max(index, 0), maxIndex);
    autoScrolling.current = automatic;
    viewportRef.current?.scrollTo({ left: next * step, behavior: reducedMotion ? "auto" : "smooth" });
    setActive(next);
    if (automatic) window.setTimeout(() => { autoScrolling.current = false; }, 900);
  }, [maxIndex, reducedMotion, step]);

  useEffect(() => {
    if (reducedMotion || hovered || keyboardFocused || interactionPaused || userPaused || !pageVisible || !step) return;
    const delay = 5000;
    const timer = window.setTimeout(() => {
      let next = active + autoDirection.current;
      if (next > maxIndex) {
        autoDirection.current = -1;
        next = Math.max(0, active - 1);
      } else if (next < 0) {
        autoDirection.current = 1;
        next = Math.min(maxIndex, active + 1);
      }
      scrollToIndex(next, true);
    }, delay);
    return () => window.clearTimeout(timer);
  }, [active, hovered, interactionPaused, keyboardFocused, maxIndex, pageVisible, reducedMotion, scrollToIndex, step, userPaused, visibleCount]);

  const pauseAfterInteraction = () => {
    setInteractionPaused(true);
    setInteractionPauseVersion((version) => version + 1);
  };

  const navigate = (direction: number) => {
    pauseAfterInteraction();
    scrollToIndex(active + direction);
  };

  const handleScroll = () => {
    if (!step || !viewportRef.current) return;
    setActive(Math.min(maxIndex, Math.max(0, Math.round(viewportRef.current.scrollLeft / step))));
  };

  return <div
    className="accomplishments-showcase"
    role="region"
    aria-labelledby="accomplishments-title"
    onPointerEnter={(event) => {
      if (event.pointerType === "mouse") setHovered(true);
    }}
    onPointerLeave={(event) => {
      if (event.pointerType === "mouse") setHovered(false);
    }}
    onPointerDown={() => {
      if (!autoScrolling.current) pauseAfterInteraction();
    }}
    onKeyDownCapture={pauseAfterInteraction}
    onFocusCapture={() => {
      if (keyboardInput.current) setKeyboardFocused(true);
    }}
    onBlurCapture={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setKeyboardFocused(false);
    }}
  >
    <div className="accomplishments-header">
      <div>
        <p className="eyebrow">Enterprise accomplishments</p>
        <h3 id="accomplishments-title">Scale made tangible.</h3>
      </div>
      <div className="accomplishments-navigation" aria-label="Accomplishment navigation">
        <span>{String(active + 1).padStart(2, "0")} / {String(maxIndex + 1).padStart(2, "0")}</span>
        <button type="button" onClick={() => navigate(-1)} aria-label="Previous accomplishments" disabled={active === 0}><ArrowLeft size={17} /></button>
        <button type="button" onClick={() => navigate(1)} aria-label="Next accomplishments" disabled={active === maxIndex}><ArrowRight size={17} /></button>
        <button type="button" onClick={() => setUserPaused((paused) => !paused)} aria-label={reducedMotion ? "Automatic advancement disabled by reduced-motion preference" : userPaused ? "Resume automatic advancement" : "Pause automatic advancement"} aria-pressed={userPaused} disabled={Boolean(reducedMotion)}>
          {userPaused ? <Play size={16} /> : <Pause size={16} />}
        </button>
      </div>
    </div>

    <div
      className="accomplishments-viewport"
      ref={viewportRef}
      onScroll={handleScroll}
      onWheel={pauseAfterInteraction}
    >
      <div className="accomplishments-track">
        {accomplishments.map((item) => <article className="accomplishment-card" key={item.metric}>
          <strong>{item.metric}</strong>
          <h4>{item.headline}</h4>
          <p>{item.detail}</p>
        </article>)}
      </div>
    </div>
  </div>;
}
