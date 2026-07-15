"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const links = [["Story", "#story"], ["Perspective", "#perspective"], ["Systems", "#systems"]];
type Theme = "light" | "dark";

export function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => { const close = () => setOpen(false); window.addEventListener("resize", close); return () => window.removeEventListener("resize", close); }, []);
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
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
      <a className="nav-cta" href="#contact">Start a conversation <ArrowUpRight size={15} /></a>
    </div>
    <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a href="#contact" onClick={() => setOpen(false)}>Start a conversation</a></nav>}
  </header>;
}
