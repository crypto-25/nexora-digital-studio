import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function About() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="container about-grid">
        <div className="about-lead">
          <div className="section-kicker"><span>04</span><span className="kicker-line" />WHY NEXORA</div>
          <h2>Good work starts<br />with <span>good questions.</span></h2>
          <p>We believe meaningful digital work happens when the right questions meet thoughtful execution.</p>
          <a className="text-link" href={`mailto:${site.contact.email}`}>Start a conversation<ArrowUpRight size={16} /></a>
        </div>
        <div className="principles-list">
          {site.principles.map((item) => (
            <article className="principle" key={item.number}>
              <span className="principle-number">{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.body}</p></div>
              <span className="principle-mark">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
