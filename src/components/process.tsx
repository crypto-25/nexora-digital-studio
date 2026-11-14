import { site } from "@/content/site";

export function Process() {
  return (
    <section className="process-section section-pad" id="process">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="section-kicker"><span>05</span><span className="kicker-line" />HOW WE WORK</div>
            <h2>From first thought<br /><span>to what&apos;s next.</span></h2>
          </div>
          <p className="section-aside">A clear process keeps good ideas<br />moving in the right direction.</p>
        </div>
        <div className="process-grid">
          {site.process.map((step) => (
            <article className="process-step" key={step.number}>
              <span className="process-number">{step.number}</span>
              <div className="process-rule" />
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
