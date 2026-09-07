import { copy, siteConfig } from "../content";
import { BookVisual } from "./BookVisual";
import { CallToAction } from "./CallToAction";

export function BookReveal() {
  return (
    <section className="section book-reveal" id="livro" aria-labelledby="livro-title">
      <div className="section-shell book-reveal-grid">
        <div className="book-reveal-visual">
          <BookVisual />
        </div>
        <div className="book-reveal-copy">
          <h2 id="livro-title">{copy.fold10.heading}</h2>
          <div className="prose">
            {copy.fold10.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <CallToAction href={siteConfig.purchaseHref}>{copy.fold10.cta}</CallToAction>
        </div>
      </div>
    </section>
  );
}
