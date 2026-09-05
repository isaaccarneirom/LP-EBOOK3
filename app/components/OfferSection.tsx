import { copy, siteConfig } from "../content";
import { BookVisual } from "./BookVisual";
import { CallToAction } from "./CallToAction";

export function OfferSection() {
  return (
    <section className="section offer" id="leitura" aria-labelledby="leitura-title">
      <div className="section-shell offer-shell">
        <div className="offer-heading">
          <p className="eyebrow">{copy.fold11.eyebrow}</p>
          <h2 id="leitura-title">{copy.fold11.heading}</h2>
        </div>

        <div className="offer-product">
          <div className="offer-book">
            <BookVisual compact />
          </div>
          <div className="offer-description">
            <p className="offer-format">{copy.fold11.format}</p>
            <p>{copy.fold11.description}</p>
          </div>
          <div className="offer-details">
            <p className="offer-price">{copy.fold11.price}</p>
            <CallToAction href={siteConfig.purchaseHref} inverse>
              {copy.fold11.cta}
            </CallToAction>
            <p className="offer-receives">{copy.fold11.security}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
