import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Managed IT Services | BCS365 — 24/7/365 IT Support & Cybersecurity",
  description:
    "Enterprise-grade managed IT services with 24/7/365 support from 90+ US-based engineers. ISO 27001 certified. NOC + SOC teams. Serving businesses across MA, CA, FL, Canada & London.",
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
    title: "Managed IT Services | BCS365",
    description:
      "24/7/365 IT support from 90+ US-based engineers. ISO 27001 certified. Get a free IT assessment today.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* MegaTag optimizer removed — causes duplicate form entries in Conversions.
            Form events posted directly to events-api from useMegaLeadForm.
            GTM and Meta Pixel loaded by useTracking hook. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-text">
        {children}
        {/* CallTrackingMetrics */}
        <Script src="https://572388.tctm.co/t.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
