import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="container contact-panel">
        <div className="contact-orbit orbit-a" /><div className="contact-orbit orbit-b" />
        <div className="section-kicker"><span>07</span><span className="kicker-line" />YOUR NEXT MOVE</div>
        <div className="contact-content">
          <div><h2>{site.footer.statement}</h2><p>{site.footer.body}</p></div>
          <a className="button button-light" href={`mailto:${site.contact.email}?subject=${encodeURIComponent(site.contact.emailSubject)}`}>Tell us about it<ArrowUpRight size={18} /></a>
        </div>
        <div className="contact-bottom"><span>LET&apos;S MAKE SOMETHING MEANINGFUL.</span><MoveUpRight size={17} /></div>
      </div>
    </section>
  );
}
