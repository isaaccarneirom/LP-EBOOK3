import Image from "next/image";
import { copy } from "../content";

export function AuthorSection() {
  return (
    <section className="section author" aria-labelledby="autora-title">
      <div className="section-shell author-grid">
        <figure className="author-portrait">
          <Image
            className="author-portrait-image"
            src="/images/nide-souza.png"
            alt="Nide Souza, autora de O Castelo, o Ouro e o Porão"
            fill
            sizes="(max-width: 760px) calc(100vw - 2rem), 38vw"
          />
        </figure>

        <div className="author-copy">
          <p className="author-prelude">{copy.author.eyebrow}</p>
          <h2 id="autora-title">{copy.author.name}</h2>
          <p className="author-introduction">{copy.author.introduction}</p>
          <div className="prose">
            {copy.author.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
