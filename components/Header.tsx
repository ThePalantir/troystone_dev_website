"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const links = [["Experience", "/#story"], ["Point of view", "/#perspective"], ["Systems", "/#systems"], ["Glossary", "/glossary"]];
const conversationUrl = "https://truecore.services/";
type Theme = "light" | "dark";

function getRootTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getSavedTheme(): Theme {
  try {
    const saved = window.localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : "dark";
  } catch {
    return "dark";
  }
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  document.querySelector<HTMLMetaElement>('meta[data-site-theme="true"]')?.setAttribute("content", theme === "light" ? "#f4f1e9" : "#08090a");
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const syncFromRoot = () => setTheme(getRootTheme());
    const restoreSavedTheme = () => {
      const saved = getSavedTheme();
      applyTheme(saved);
      setTheme(saved);
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key !== "theme") return;
      const saved = event.newValue === "light" || event.newValue === "dark" ? event.newValue : "dark";
      applyTheme(saved);
      setTheme(saved);
    };
    const observer = new MutationObserver(syncFromRoot);

    syncFromRoot();
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    window.addEventListener("pageshow", restoreSavedTheme);
    window.addEventListener("storage", handleStorage);
    return () => {
      observer.disconnect();
      window.removeEventListener("pageshow", restoreSavedTheme);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeAtDesktop);
    return () => desktop.removeEventListener("change", closeAtDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = window.requestAnimationFrame(() => firstMobileLinkRef.current?.focus());
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const toggleTheme = () => {
    const next = getRootTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      window.localStorage.setItem("theme", next);
    } catch {
      // The selected theme still applies for this page when storage is unavailable.
    }
    setTheme(next);
  };

  return <header className="site-header">
    <Link className="wordmark" href="/" aria-label="Troy Stone, home"><Image className="brand-mark" src="/ts-initials.png" alt="" width={58} height={44} priority /></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
    <div className="header-actions">
      <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Change theme to ${theme === "dark" ? "light" : "dark"}`}>
        {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        <span>Change theme</span>
      </button>
      <a className="nav-cta" href={conversationUrl} target="_blank" rel="noreferrer"><span className="truecore-desktop-cta"><span>Connect with Troy and Jesse</span><span className="truecore-desktop-cta-line">at <span className="truecore-name"><Image className="truecore-logo" src="/truecore-logo.png" alt="" width={24} height={18} />TrueCore</span> <ArrowUpRight size={15} /></span></span></a>
    </div>
    <button ref={menuButtonRef} className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</button>
    <nav id="mobile-navigation" className={open ? "mobile-nav is-open" : "mobile-nav"} aria-label="Mobile navigation" aria-hidden={!open} inert={!open}>
      {links.map(([label, href], index) => <Link ref={index === 0 ? firstMobileLinkRef : undefined} key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <a href={conversationUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}><span className="truecore-cta-copy">Connect with Troy and Jesse at <span className="truecore-name"><Image className="truecore-logo" src="/truecore-logo.png" alt="" width={24} height={18} />TrueCore</span></span> <ArrowUpRight size={16} /></a>
    </nav>
  </header>;
}
