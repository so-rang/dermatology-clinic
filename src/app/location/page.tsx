import { SiteNav } from "@/components/common/site-nav";
import { SiteFooter } from "@/components/common/site-footer";
import { Placeholder } from "@/components/common/placeholder";
import { clinic } from "@/lib/data/clinic";
import { breadcrumbLd, medicalClinicLd } from "@/lib/schemas/jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location · 오시는 길",
  description: `${clinic.address} · ${clinic.subway}`,
};

const access = [
  {
    title: "지하철",
    detail: "청담역(7호선) 8번 출구 도보 3분",
  },
  {
    title: "버스",
    detail: "청담동주민센터·청담힐스 정류장 도보 4분 (143·301·360·362)",
  },
  {
    title: "자가용",
    detail: "내비게이션에 '앤리에 의원'으로 검색하시거나 주소를 입력해주세요.",
  },
  {
    title: "주차",
    detail: "건물 내 발렛 주차 가능, 진료 시 1시간 무료 등록",
  },
];

export default function LocationPage() {
  const ld = [
    medicalClinicLd(),
    breadcrumbLd([
      { name: "홈", url: "/" },
      { name: "오시는 길", url: "/location" },
    ]),
  ];
  return (
    <>
      <SiteNav />
      <main className="pt-24 md:pt-32">
        <header className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
          <span className="font-display tracking-brand text-xs text-terra">
            LOCATION
          </span>
          <h1 className="font-serif-ko mt-3 text-4xl leading-tight md:text-6xl">
            오시는 길
          </h1>
          <p className="mt-6 max-w-2xl text-base text-ink-soft md:text-lg">
            {clinic.address} · {clinic.subway}
          </p>
        </header>

        <div className="mx-auto mt-12 max-w-[1280px] px-6 md:px-10 lg:px-20">
          <div className="relative overflow-hidden">
            <Placeholder
              ratio="wide"
              tone="sage"
              label="Cheongdam · Map"
              caption={clinic.subway}
            />
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative h-3 w-3 rounded-full bg-terra ring-4 ring-terra/20" />
              <p className="mt-2 -translate-x-1/2 rounded-sm bg-ink px-3 py-1.5 text-[11px] tracking-brand text-bg-base">
                ATELIER
              </p>
            </div>
          </div>
        </div>

        <section className="mx-auto mt-16 max-w-[1280px] px-6 md:px-10 lg:px-20">
          <h2 className="font-serif-ko text-2xl md:text-3xl">교통 안내</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {access.map((a) => (
              <li
                key={a.title}
                className="border-t border-line pt-5"
              >
                <p className="font-display tracking-brand text-[10px] text-terra">
                  {a.title.toUpperCase()}
                </p>
                <p className="mt-2 text-base text-ink">{a.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto mt-16 max-w-[1280px] px-6 md:px-10 lg:px-20">
          <h2 className="font-serif-ko text-2xl md:text-3xl">운영시간</h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {clinic.hours.map((h) => (
              <li
                key={h.day}
                className="flex items-center justify-between py-4 text-sm md:text-base"
              >
                <span className="text-ink-soft">{h.day}</span>
                <span className="font-display tabular-nums text-ink">
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 inline-block rounded-full border border-terra/40 px-4 py-1.5 text-xs text-terra">
            {clinic.nightHours}
          </p>
        </section>

        <div className="mt-24" />
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
