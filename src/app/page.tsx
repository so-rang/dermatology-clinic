import { SiteNav } from "@/components/common/site-nav";
import { SiteFooter } from "@/components/common/site-footer";
import { Hero } from "@/components/sections/hero";
import { AtelierProtocol } from "@/components/sections/atelier-protocol";
import { DoctorsPreview } from "@/components/sections/doctors-preview";
import { SpaceTech } from "@/components/sections/space-tech";
import { TheScience } from "@/components/sections/the-science";
import { FaqPreview } from "@/components/sections/faq-preview";
import { LocationHours } from "@/components/sections/location-hours";
import { ReservationCta } from "@/components/sections/reservation-cta";
import {
  breadcrumbLd,
  faqPageLd,
  medicalClinicLd,
  physiciansLd,
} from "@/lib/schemas/jsonld";

export default function Home() {
  const ld = [
    medicalClinicLd(),
    ...physiciansLd(),
    faqPageLd(),
    breadcrumbLd([{ name: "홈", url: "/" }]),
  ];

  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <AtelierProtocol />
        <DoctorsPreview />
        <SpaceTech />
        <TheScience />
        <FaqPreview />
        <LocationHours />
        <ReservationCta />
      </main>
      <SiteFooter />
      {ld.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
