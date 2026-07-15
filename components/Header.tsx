"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [["Story", "#story"], ["Perspective", "#perspective"], ["Systems", "#systems"]];

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = () => setOpen(false); window.addEventListener("resize", close); return () => window.removeEventListener("resize", close); }, []);
  return <header className="site-header">
    <a className="wordmark" href="#top" aria-label="Troy Stone, home"><Image className="brand-mark" src="/ts-initials.png" alt="" width={58} height={44} priority /></a>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
    <a className="nav-cta" href="#contact">Start a conversation <ArrowUpRight size={15} /></a>
    <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a href="#contact" onClick={() => setOpen(false)}>Start a conversation</a></nav>}
  </header>;
}
