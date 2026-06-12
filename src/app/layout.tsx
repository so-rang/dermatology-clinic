import type { Metadata } from "next";
import { notoSerifKr, ebGaramond } from "@/lib/fonts";
import { clinic } from "@/lib/data/clinic";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://atelier-derma.vercel.app"),
  title: {
    default: `${clinic.nameKo} | ${clinic.nameEn}`,
    template: `%s | ${clinic.nameKo}`,
  },
  description: `${clinic.tagline} 청담동 피부과, 전문의 3인 직접 진료. 안티에이징·리프팅·재생·관리의 네 단계 처방.`,
  keywords: [
    "청담 피부과",
    "안티에이징",
    "리쥬란",
    "울쎄라",
    "써마지",
    "스컬트라",
    "엘란세",
    "스킨보톡스",
    "전문의 직접 진료",
    "정단아 의원",
  ],
  authors: [{ name: clinic.nameKo }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: `${clinic.nameKo} — ${clinic.shortConcept}`,
    description: `청담동 피부과, 전문의 3인 직접 진료. Diagnosis · Regeneration · Restoration · Maintenance.`,
    siteName: clinic.nameKo,
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinic.nameKo}`,
    description: clinic.shortConcept,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSerifKr.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <body className="bg-bg-base text-ink min-h-screen">{children}</body>
    </html>
  );
}
