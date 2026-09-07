import { copy, siteConfig } from "../content";
import { CallToAction } from "./CallToAction";

export function FaqSection() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="section-shell faq-grid">
        <div className="faq-heading">
          <h2 id="faq-title">{copy.fold13.heading}</h2>
        </div>
        <div className="faq-list">
          {copy.fold13.questions.map((item) => (
            <details key={item.question}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-symbol" aria-hidden="true">
                  +
                </span>
              </summary>
              {item.answer.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </details>
          ))}
          <div className="faq-cta">
            <p>{copy.closingOffer.title}</p>
            <p>{copy.closingOffer.format}</p>
            <p className="offer-price">{copy.closingOffer.price}</p>
            <CallToAction href={siteConfig.purchaseHref}>{copy.closingOffer.cta}</CallToAction>
            <p>{copy.closingOffer.security}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
