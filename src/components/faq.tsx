"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { site } from "@/content/site";

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="faq-section section-pad" id="faq">
      <div className="container faq-grid">
        <div>
          <div className="section-kicker"><span>06</span><span className="kicker-line" />GOOD TO KNOW</div>
          <h2>A few things<br /><span>you might ask.</span></h2>
          <p className="faq-intro">Have a different question? We&apos;re always open to a conversation.</p>
        </div>
        <div className="faq-list">
          {site.faqs.map((faq, index) => (
            <article className={`faq-item ${active === index ? "active" : ""}`} key={faq.question}>
              <button className="faq-question" aria-expanded={active === index} onClick={() => setActive(active === index ? null : index)}>
                <span><small>0{index + 1}</small>{faq.question}</span>
                <ChevronDown size={19} />
              </button>
              {active === index && <div className="faq-answer"><p>{faq.answer}</p></div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
