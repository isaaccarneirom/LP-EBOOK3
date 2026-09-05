import { BookVisual } from "./BookVisual";
import { copy, siteConfig } from "../content";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-shell">
        <div className="hero-masthead">
          <p>{siteConfig.title}</p>
          <p>{siteConfig.author}</p>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-light" aria-hidden="true">
              01
            </span>
            <h1>{copy.fold1.heading}</h1>
            <div className="hero-cadence">
              {copy.fold1.cadence.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <BookVisual compact priority />

          <div className="hero-reflection">
            <div className="prose prose-on-dark">
              {copy.fold1.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="hero-waiting" aria-label={copy.fold1.waiting.join(" ")}>
              {copy.fold1.waiting.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="prose prose-on-dark hero-close">
              {copy.fold1.close.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
