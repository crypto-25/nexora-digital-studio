import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">N<span>.</span></span>
          <span className="brand-copy"><strong>{site.name}</strong><small>{site.descriptor}</small></span>
        </a>
        <p className="footer-note">Thoughtful by design.<br />Purposeful by nature.</p>
        <div className="footer-links">
          <a href="#services">Services</a><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact <ArrowUpRight size={13} /></a>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {site.footer.copyright}</span><span>DESIGNED WITH PURPOSE <i>✳</i></span><a href="#home">BACK TO TOP ↑</a></div>
    </footer>
  );
}
