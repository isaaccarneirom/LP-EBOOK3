import { BookReveal } from "./components/BookReveal";
import { CallToAction } from "./components/CallToAction";
import { Hero } from "./components/Hero";
import { OfferSection } from "./components/OfferSection";
import { copy } from "./content";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <main id="conteudo">
        <Hero />

        <section className="section autopilot" aria-labelledby="automatico-title">
          <div className="section-shell autopilot-grid">
            <div className="section-number" aria-hidden="true">
              02
            </div>
            <div className="autopilot-heading">
              <h2 id="automatico-title">{copy.fold2.heading}</h2>
              <div className="cadence" aria-label="Resolver. Trabalhar. Cuidar.">
                {copy.fold2.cadence.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="prose prose-medium autopilot-body">
              {copy.fold2.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section origin" aria-labelledby="origem-title">
          <div className="section-shell origin-grid">
            <div className="origin-title-wrap">
              <span className="eyebrow" aria-hidden="true">
                03
              </span>
              <h2 id="origem-title">{copy.fold3.heading}</h2>
            </div>
            <div className="prose prose-large origin-body">
              {copy.fold3.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="origin-note">
              {copy.fold3.note.split("\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section recognition" aria-labelledby="reconhecimento-title">
          <div className="section-shell recognition-grid">
            <div className="recognition-mark" aria-hidden="true">
              “
            </div>
            <div>
              <h2 id="reconhecimento-title">{copy.fold4.heading}</h2>
              <div className="prose recognition-body">
                {copy.fold4.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section questions" aria-labelledby="perguntas-title">
          <div className="section-shell questions-shell">
            <p className="questions-intro" id="perguntas-title">
              {copy.fold5.heading}
            </p>
            <div className="question-list">
              {copy.fold5.questions.map((question, index) => (
                <p key={question}>
                  <span aria-hidden="true">0{index + 1}</span>
                  {question}
                </p>
              ))}
            </div>
            <div className="prose questions-close">
              {copy.fold5.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section possibility" aria-labelledby="possibilidade-title">
          <div className="section-shell possibility-shell">
            <div className="prose prose-large possibility-body">
              <h2 id="possibilidade-title">{copy.fold6.heading}</h2>
              {copy.fold6.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="possibility-close">
              {copy.fold6.close.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section distance" aria-labelledby="distancia-title">
          <div className="section-shell distance-shell">
            <span className="eyebrow" aria-hidden="true">
              07
            </span>
            <h2 id="distancia-title">{copy.fold7.heading}</h2>
            <div className="distance-list">
              {copy.fold7.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="distance-close">{copy.fold7.close}</p>
          </div>
        </section>

        <section className="section ordinary" aria-labelledby="mulher-title">
          <div className="section-shell ordinary-grid">
            <div className="ordinary-heading">
              <span className="eyebrow" aria-hidden="true">
                08
              </span>
              <h2 id="mulher-title">{copy.fold8.heading}</h2>
              <p>{copy.fold8.intro}</p>
            </div>
            {copy.fold8.cadence.length > 0 && (
              <div className="ordinary-cadence" aria-label={copy.fold8.cadence.join(" ")}>
                {copy.fold8.cadence.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            )}
            <div className="prose ordinary-close">
              {copy.fold8.close.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section invitation" aria-labelledby="convite-title">
          <div className="section-shell invitation-shell">
            <div className="invitation-heading">
              <span className="eyebrow" aria-hidden="true">
                09
              </span>
              <h2 id="convite-title">{copy.fold9.heading}</h2>
            </div>
            {copy.fold9.themes.length > 0 && (
              <div className="invitation-themes" aria-label={copy.fold9.themes.join(" ")}>
                {copy.fold9.themes.map((theme) => (
                  <span key={theme}>{theme}</span>
                ))}
              </div>
            )}
            <div className="prose prose-large invitation-body">
              {copy.fold9.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <BookReveal />

        <OfferSection />
      </main>
    </>
  );
}
