import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Escencion — We Hire & Manage the People Your MSP or MSSP Needs",
  description:
    "Operator-led staffing for MSP, MSSP & cybersecurity firms. We find, place, and back with a replacement guarantee talent that already speaks your world — ready day one. Sourced by a 10-year MSP/MSSP owner.",
  metadataBase: new URL("https://escencion.com"),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "225x225", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Escencion — We Hire & Manage the People Your MSP or MSSP Needs",
    description:
      "Operator-led staffing for MSP, MSSP & cybersecurity firms. Talent that speaks your world, ready day one, backed by a replacement guarantee.",
    type: "website",
    siteName: "Escencion",
  },
};

const SITE_ID = "3753f015-5636-43e6-8813-e531d5405087";
const SITE_KEY = "revtythbvh2ej9td";
const META_PIXEL_ID = "1675039843105931";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Sora:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* MegaTag config + optimizer (loads GTM GTM-MW8NM7WX + Meta Pixel via config) */}
        <meta name="mega-site-id" content={SITE_ID} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.MEGA_TAG_CONFIG={siteKey:"${SITE_KEY}",siteId:"${SITE_ID}",gtmId:"GTM-MW8NM7WX",pixelId:"${META_PIXEL_ID}"};window.API_ENDPOINT="https://optimizer.gomega.ai";window.TRACKING_API_ENDPOINT="https://events-api.gomega.ai";`,
          }}
        />
        <script
          id="optimizer-script"
          src="https://cdn.gomega.ai/scripts/optimizer.min.js"
          data-site-id={SITE_ID}
          async
        />
      </head>
      <body>
        {children}
        {/* CallTrackingMetrics (shared MEGA CTM — never remove) */}
        <Script src="https://572388.tctm.co/t.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
