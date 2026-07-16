"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const links = [["Experience", "#story"], ["Point of view", "#perspective"], ["Systems", "#systems"]];
const conversationUrl = "https://truecore.services/";
type Theme = "light" | "dark";

export function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
    });
    return () => window.cancelAnimationFrame(frame);
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
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    document.querySelector<HTMLMetaElement>('meta[data-site-theme="true"]')?.setAttribute("content", next === "light" ? "#f4f1e9" : "#08090a");
    window.localStorage.setItem("theme", next);
    setTheme(next);
  };

  return <header className="site-header">
    <a className="wordmark" href="#top" aria-label="Troy Stone, home"><Image className="brand-mark" src="/ts-initials.png" alt="" width={58} height={44} priority /></a>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
    <div className="header-actions">
      <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
        {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
      </button>
      <a className="nav-cta" href={conversationUrl} target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={15} /></a>
    </div>
    <button ref={menuButtonRef} className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</button>
    <nav id="mobile-navigation" className={open ? "mobile-nav is-open" : "mobile-nav"} aria-label="Mobile navigation" aria-hidden={!open} inert={!open}>
      {links.map(([label, href], index) => <a ref={index === 0 ? firstMobileLinkRef : undefined} key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a href={conversationUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Start a conversation <ArrowUpRight size={16} /></a>
    </nav>
  </header>;
}
