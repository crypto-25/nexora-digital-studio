import { ArrowUpRight, Layers3, PanelsTopLeft, Shapes, Sparkles } from "lucide-react";
import { site } from "@/content/site";

const icons = [PanelsTopLeft, Layers3, Shapes, Sparkles];

export function Services() {
  return (
    <section className="services-section section-pad" id="services">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="section-kicker"><span>02</span><span className="kicker-line" />WHAT WE DO</div>
            <h2>Built around what<br /><span>moves you forward.</span></h2>
          </div>
          <p className="section-aside">Four connected disciplines.<br />One considered approach.</p>
        </div>
        <div className="services-grid">
          {site.services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article className="service-card" key={service.number}>
                <div className="service-top"><span>{service.number} / 04</span><Icon size={22} strokeWidth={1.5} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tag-list">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <a className="service-arrow" href={`mailto:${site.contact.email}?subject=${encodeURIComponent(service.title)}`} aria-label={`Ask about ${service.title}`}><ArrowUpRight size={18} /></a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
