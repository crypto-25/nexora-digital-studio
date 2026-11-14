"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#home" aria-label="NEXORA home" onClick={() => setOpen(false)}>
          <span className="brand-mark">N<span>.</span></span>
          <span className="brand-copy">
            <strong>{site.name}</strong>
            <small>{site.descriptor}</small>
          </span>
        </a>

        <nav className={`desktop-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="language-switch" aria-label="Language selector">
            <span className="active">EN</span><span className="language-divider">/</span><span className="muted">ID</span>
          </div>
          <a className="button button-small button-primary nav-cta" href={`mailto:${site.contact.email}?subject=${encodeURIComponent(site.contact.emailSubject)}`}>
            {site.contact.cta}<ArrowUpRight size={15} />
          </a>
          <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
}
