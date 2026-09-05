import type { ReactNode } from "react";

type CallToActionProps = {
  children: ReactNode;
  href: string;
  inverse?: boolean;
};

export function CallToAction({ children, href, inverse = false }: CallToActionProps) {
  return (
    <a className={`cta${inverse ? " cta-inverse" : ""}`} href={href}>
      <span>{children}</span>
      <span className="cta-arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}
