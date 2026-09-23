import type { Metadata } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import type { CSSProperties } from "react";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const metaPixelId = "1624319002380414";

const metaPixelScript = `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '${metaPixelId}');
  fbq('track', 'PageView');
`;

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const metadataBase = host ? new URL(`${protocol}://${host}`) : undefined;

  return {
    metadataBase,
    title: "O Castelo, o Ouro e o Porão — Nide Souza",
    description:
      "Uma história real sobre escolhas, perdas, recomeços e a possibilidade de olhar para a própria vida de um lugar diferente.",
    openGraph: {
      title: "O Castelo, o Ouro e o Porão",
      description: "Uma história real, escrita por Nide Souza.",
      type: "website",
      locale: "pt_BR",
      images: metadataBase ? [{ url: new URL("/og.png", metadataBase).toString() }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: "O Castelo, o Ouro e o Porão",
      description: "Uma história real, escrita por Nide Souza.",
      images: metadataBase ? [new URL("/og.png", metadataBase).toString()] : [],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="meta-pixel" strategy="beforeInteractive">
          {metaPixelScript}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
          />
        </noscript>
      </head>
      <body
        className={`${display.variable} ${body.variable}`}
        style={
          {
            "--font-display": display.style.fontFamily,
            "--font-body": body.style.fontFamily,
          } as CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
