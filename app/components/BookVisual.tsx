import Image from "next/image";
import { siteConfig } from "../content";

type BookVisualProps = {
  compact?: boolean;
  priority?: boolean;
};

export function BookVisual({ compact = false, priority = false }: BookVisualProps) {
  return (
    <figure className={`book-visual${compact ? " book-visual-compact" : ""}`}>
      <div className="book-shadow" aria-hidden="true" />
      <div className="book-object">
        <div className="book-spine" aria-hidden="true" />
        <div className="book-cover">
          <Image
            className="book-cover-image"
            src="/images/o-castelo-o-ouro-e-o-porao-cover.png"
            alt={`Capa de ${siteConfig.title}, de ${siteConfig.author}`}
            fill
            priority={priority}
            sizes={
              compact
                ? "(max-width: 760px) 70vw, 19rem"
                : "(max-width: 760px) 72vw, 23rem"
            }
          />
        </div>
        <div className="book-pages" aria-hidden="true" />
      </div>
    </figure>
  );
}
