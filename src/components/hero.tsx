import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" />{site.hero.eyebrow}</div>
          <h1>{site.hero.title}<br /><span>{site.hero.titleAccent}</span></h1>
          <p className="hero-description">{site.hero.body}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={site.hero.primaryCta.href}>{site.hero.primaryCta.label}<ArrowUpRight size={17} /></a>
            <a className="text-link" href={site.hero.secondaryCta.href}>{site.hero.secondaryCta.label}<ArrowRight size={16} /></a>
          </div>
          <div className="hero-footnote"><span className="status-dot" />Independent digital studio <span className="footnote-separator">/</span> Indonesia & beyond</div>
        </div>

        <div className="hero-art" aria-label="Abstract geometric digital artwork">
          <div className="art-grid" />
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-core">
            <div className="core-face face-front" />
            <div className="core-face face-side" />
            <div className="core-glow" />
          </div>
          <div className="art-cross cross-a" />
          <div className="art-cross cross-b" />
          <div className="art-coordinate">06°12&apos; S<br />106°49&apos; E</div>
          <div className="art-caption"><span>{site.hero.visualLabel}</span><span>FIG. 01</span></div>
          <div className="art-index">N<span>/</span>01</div>
        </div>
      </div>
      <a className="scroll-cue" href="#intro"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
    </section>
  );
}
