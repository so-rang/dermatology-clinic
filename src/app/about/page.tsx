import { SiteNav } from "@/components/common/site-nav";
import { SiteFooter } from "@/components/common/site-footer";
import { ReservationCta } from "@/components/sections/reservation-cta";
import { Placeholder } from "@/components/common/placeholder";
import { doctors } from "@/lib/data/doctors";
import { breadcrumbLd, physiciansLd } from "@/lib/schemas/jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · 의료진과 공간",
  description: "앤리에 의원의 전문의 3인과 청담동의 공방을 소개합니다.",
};

export default function AboutPage() {
  const ld = [
    ...physiciansLd(),
    breadcrumbLd([
      { name: "홈", url: "/" },
      { name: "About", url: "/about" },
    ]),
  ];

  return (
    <>
      <SiteNav />
      <main className="pt-24 md:pt-32">
        <header className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
          <span className="font-display tracking-brand text-xs text-terra">
            ABOUT
          </span>
          <h1 className="font-serif-ko mt-3 text-4xl leading-tight text-balance md:text-6xl">
            한 사람의 피부에
            <br />
            네 명의 전문의가 닿습니다.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-ink-soft md:text-lg">
            앤리에 의원은 시간을 두고 피부를 읽고, 매번 다른 처방을 설계합니다.
            상담실장이 아닌, 전문의가 직접 진료합니다.
          </p>
        </header>

        {/* Doctors */}
        <section className="mx-auto mt-20 max-w-[1280px] px-6 md:px-10 md:mt-28 lg:px-20">
          <p className="font-display tracking-brand text-xs text-terra">
            DOCTORS
          </p>
          <h2 className="font-serif-ko mt-2 text-3xl md:text-4xl">의료진.</h2>
          <ul className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
            {doctors.map((d, i) => (
              <li key={d.id} className="border-t border-line pt-6">
                <Placeholder
                  ratio="portrait"
                  tone="ink"
                  label={d.nameEn.split(",")[0]}
                  caption={`0${i + 1} · Dermatology`}
                />
                <p className="font-display mt-5 text-[11px] tracking-brand text-terra">
                  {d.title.toUpperCase()}
                </p>
                <h3 className="font-serif-ko mt-1 text-2xl">
                  {d.nameKo}
                  <span className="ml-2 font-display text-base italic text-ink-soft">
                    {d.nameEn.split(",")[0]}
                  </span>
                </h3>
                <ul className="mt-4 space-y-1.5 text-sm text-ink-soft">
                  {d.credentials.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span
                        aria-hidden
                        className="mt-2 inline-block h-px w-3 shrink-0 bg-sage-deep"
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        {/* Space */}
        <section className="mx-auto mt-24 max-w-[1280px] px-6 md:px-10 md:mt-32 lg:px-20">
          <p className="font-display tracking-brand text-xs text-terra">
            SPACE
          </p>
          <h2 className="font-serif-ko mt-2 text-3xl md:text-4xl">공간.</h2>
          <p className="mt-4 max-w-xl text-base text-ink-soft md:text-lg">
            자연광이 닿는 60평 규모의 공간. 라운지, 상담실, 시술실, VIP룸이 한
            개의 흐름으로 이어집니다.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-6">
            <Placeholder
              ratio="wide"
              tone="soft"
              label="Lounge"
              caption="자연광 · 우드"
              className="md:col-span-4"
            />
            <Placeholder
              ratio="square"
              tone="sage"
              label="Consult"
              caption="1:1 상담실"
              className="md:col-span-2"
            />
            <Placeholder
              ratio="square"
              tone="terra"
              label="Treatment"
              caption="시술실 · 4개"
              className="md:col-span-2"
            />
            <Placeholder
              ratio="wide"
              tone="soft"
              label="VIP Room"
              caption="프라이빗 케어"
              className="md:col-span-4"
            />
          </div>
        </section>

        {/* Philosophy */}
        <section className="mx-auto mt-24 max-w-3xl px-6 text-center md:mt-32 md:px-10 lg:px-20">
          <p className="font-display tracking-brand text-xs text-terra">
            PHILOSOPHY
          </p>
          <p className="font-serif-ko mt-6 text-2xl leading-relaxed text-balance text-ink md:text-3xl">
            “피부는 같은 사람이라도 매일 다른 결을 가집니다. 우리가 한 사람만을
            위해 처방을 설계하는 이유입니다.”
          </p>
          <p className="mt-6 font-display text-sm italic text-ink-soft">
            — 정연우, M.D. · 대표원장
          </p>
        </section>

        <div className="mt-24" />
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
