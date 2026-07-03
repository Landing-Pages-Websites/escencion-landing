"use client";

import { useEffect } from "react";

interface TrackingConfig {
  siteKey?: string;
  gtmId?: string;
  gaId?: string;
  pixelId?: string;
}

export function useTracking(config: TrackingConfig) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Load GTM directly
    if (config.gtmId && !document.getElementById("gtm-script")) {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      const script = document.createElement("script");
      script.id = "gtm-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${config.gtmId}`;
      document.head.appendChild(script);
    }

    // Load Meta Pixel directly
    if (config.pixelId && !document.getElementById("meta-pixel")) {
      const script = document.createElement("script");
      script.id = "meta-pixel";
      script.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${config.pixelId}');fbq('track','PageView');`;
      document.head.appendChild(script);
    }
  }, [config]);
}
