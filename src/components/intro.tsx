import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function Intro() {
  return (
    <section className="intro-section section-pad" id="intro">
      <div className="container intro-grid">
        <div className="section-kicker"><span>01</span><span className="kicker-line" />{site.intro.eyebrow}</div>
        <div className="intro-content">
          <h2>{site.intro.title}</h2>
          <div className="intro-bottom">
            <p>{site.intro.body}</p>
            <a href="#about" className="round-link" aria-label="Discover about NEXORA"><ArrowUpRight size={21} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
