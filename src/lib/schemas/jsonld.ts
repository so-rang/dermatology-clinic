import { clinic } from "@/lib/data/clinic";
import { doctors } from "@/lib/data/doctors";
import { protocol } from "@/lib/data/protocol";
import { faqsPreview, type FAQ } from "@/lib/data/faqs";

const BASE = "https://atelier-derma.vercel.app";

export function medicalClinicLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.nameKo,
    alternateName: clinic.nameEn,
    description: `${clinic.tagline} 청담동 피부과, 전문의 3인 직접 진료.`,
    url: BASE,
    telephone: clinic.phone,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address,
      addressLocality: "서울",
      addressRegion: "강남구",
      postalCode: "06014",
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.lat,
      longitude: clinic.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    medicalSpecialty: "Dermatology",
    availableService: protocol.map((p) => ({
      "@type": "MedicalProcedure",
      name: `${p.nameEn} (${p.nameKo})`,
      description: p.copy,
    })),
  };
}

export function physiciansLd() {
  return doctors.map((d) => ({
    "@context": "https://schema.org",
    "@type": "Physician",
    name: d.nameKo,
    alternateName: d.nameEn,
    jobTitle: d.title,
    image: `${BASE}${d.image}`,
    affiliation: {
      "@type": "MedicalClinic",
      name: clinic.nameKo,
    },
    medicalSpecialty: "Dermatology",
    knowsAbout: d.credentials,
  }));
}

export function faqPageLd(items: readonly FAQ[] = faqsPreview) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbLd(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE}${item.url}`,
    })),
  };
}

export function jsonLdScript(data: object) {
  return {
    type: "application/ld+json" as const,
    __html: JSON.stringify(data),
  };
}
