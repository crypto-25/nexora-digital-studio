import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function Work() {
  return (
    <section className="work-section section-pad" id="work">
      <div className="container">
        <div className="section-heading work-heading">
          <div>
            <div className="section-kicker"><span>03</span><span className="kicker-line" />SELECTED EXPLORATIONS</div>
            <h2>Ideas, given<br /><span>a digital form.</span></h2>
          </div>
          <p className="section-aside">A glimpse into how we think,<br />design, and build.</p>
        </div>
        <div className="work-grid">
          {site.work.map((project, index) => (
            <article className={`work-card ${project.visual}`} key={project.number}>
              <div className="work-visual">
                <div className="visual-window">
                  <div className="window-bar"><i /><i /><i /><span>{project.category}</span></div>
                  {index === 0 && <div className="window-content one"><div className="mock-nav" /><div className="mock-title">Make room<br />for better.</div><div className="mock-blocks"><i /><i /><i /></div></div>}
                  {index === 1 && <div className="window-content two"><div className="brand-symbol">N<span>✳</span></div><div className="brand-word">FORM<br />FOLLOWS<br />FEELING.</div><div className="brand-orb" /></div>}
                  {index === 2 && <div className="window-content three"><div className="app-side"><i /><i /><i /><i /></div><div className="app-main"><span>YOUR SPACE</span><b>Today, at<br />your pace.</b><div className="app-progress"><i /></div><div className="app-lines"><i /><i /><i /></div></div></div>}
                </div>
                <span className="work-index">N° {project.number}</span>
              </div>
              <div className="work-meta"><span>{project.category}</span><span>{project.year}</span></div>
              <div className="work-title-row"><div><h3>{project.title}</h3><p>{project.description}</p></div><span className="concept-label">{project.type}</span></div>
            </article>
          ))}
        </div>
        <p className="work-disclaimer">The projects shown are fictional concept explorations created for portfolio presentation.</p>
      </div>
    </section>
  );
}
