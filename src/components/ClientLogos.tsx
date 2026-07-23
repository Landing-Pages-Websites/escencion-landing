import type { ReactElement } from "react";
import Image from "next/image";

interface ClientLogo {
  file: string;
  alt: string;
}

const CLIENT_LOGOS: ClientLogo[] = [
  { file: "patientlock.png", alt: "PatientLock" },
  { file: "send-it-solutions.png", alt: "Send IT Solutions" },
  { file: "titanium-computing.png", alt: "Titanium Computing" },
  { file: "concourse.png", alt: "Concourse" },
  { file: "appsavi.png", alt: "AppSavi" },
  { file: "skyward-technical-solutions.png", alt: "Skyward Technical Solutions" },
  { file: "human-ism.png", alt: "Human-ISM" },
  { file: "ip-services.png", alt: "IP Services" },
  { file: "layer-7-systems.png", alt: "Layer 7 Systems" },
  { file: "lm-consulting.png", alt: "LM Consulting" },
  { file: "ndatastor.png", alt: "ndataStor" },
  { file: "edge-360.png", alt: "Edge 360" },
  { file: "crating-computing.png", alt: "Cratin Computing" },
  { file: "rtcs.png", alt: "RTCS" },
];

export default function ClientLogos(): ReactElement {
  return (
    <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:gap-x-12 lg:grid-cols-4">
      {CLIENT_LOGOS.map((logo) => (
        <li key={logo.file} className="flex items-center justify-center">
          <Image
            src={`/images/clients/${logo.file}`}
            alt={logo.alt}
            width={176}
            height={40}
            className="h-8 w-auto opacity-70 transition-opacity duration-200 hover:opacity-100 md:h-10"
          />
        </li>
      ))}
    </ul>
  );
}
