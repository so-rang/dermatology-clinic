import { SiteNav } from "@/components/common/site-nav";
import { SiteFooter } from "@/components/common/site-footer";
import { ReservationCta } from "@/components/sections/reservation-cta";
import { MechanismByKey } from "@/components/sections/mechanism-svg";
import { protocol } from "@/lib/data/protocol";
import { breadcrumbLd, medicalClinicLd } from "@/lib/schemas/jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atelier 프로토콜 · 진료",
  description:
    "진단 → 재생 → 회복 → 유지. 앤리에 의원의 네 단계 처방 시스템.",
};

export default function TreatmentsPage() {
  const ld = [
    medicalClinicLd(),
    breadcrumbLd([
      { name: "홈", url: "/" },
      { name: "진료", url: "/treatments" },
    ]),
  ];
  return (
    <>
      <SiteNav />
      <main className="pt-24 md:pt-32">
        <header className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
          <span className="font-display tracking-brand text-xs text-terra">
            ATELIER PROTOCOL
          </span>
          <h1 className="font-serif-ko mt-3 text-4xl leading-tight text-balance md:text-6xl">
            네 단계의 처방.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-ink-soft md:text-lg">
            진단으로부터 시작해 일상 위에 머무는 관리까지. 한 사람의 피부를 위해
            설계된 단일한 흐름.
          </p>
        </header>

        <div className="mx-auto mt-20 grid max-w-[1280px] gap-24 px-6 md:px-10 md:gap-32 lg:px-20">
          {protocol.map((p) => (
            <article
              key={p.id}
              id={p.id}
              className="grid gap-10 md:grid-cols-12 md:gap-12"
            >
              <div className="md:col-span-5">
                <p className="font-display tracking-brand text-xs text-terra">
                  STEP {p.step} · {p.nameEn.toUpperCase()}
                </p>
                <h2 className="font-serif-ko mt-3 text-3xl text-balance md:text-5xl">
                  {p.headlineKo}
                </h2>
                <p className="mt-6 text-base text-ink-soft md:text-lg">
                  {p.copy}
                </p>
                <ul className="mt-8 space-y-2 text-sm">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-3 border-t border-line pt-2"
                    >
                      <span className="font-display text-[10px] tracking-brand text-terra">
                        {String(p.tags.indexOf(t) + 1).padStart(2, "0")}
                      </span>
                      <span className="text-ink">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-7">
                <div className="aspect-square w-full overflow-hidden bg-bg-soft">
                  <MechanismByKey k={p.mechanism} />
                </div>
                <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-line pt-6 text-sm">
                  <div>
                    <dt className="font-display tracking-brand text-[10px] text-ink-mute">
                      DURATION
                    </dt>
                    <dd className="mt-1 text-ink">
                      {p.step === "01"
                        ? "20–30분"
                        : p.step === "02"
                          ? "30–45분"
                          : p.step === "03"
                            ? "60–90분"
                            : "15–30분"}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-display tracking-brand text-[10px] text-ink-mute">
                      DOWNTIME
                    </dt>
                    <dd className="mt-1 text-ink">
                      {p.step === "01"
                        ? "없음"
                        : p.step === "02"
                          ? "1–2일"
                          : p.step === "03"
                            ? "2–5일"
                            : "당일 회복"}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-display tracking-brand text-[10px] text-ink-mute">
                      INTERVAL
                    </dt>
                    <dd className="mt-1 text-ink">
                      {p.step === "01"
                        ? "초진"
                        : p.step === "02"
                          ? "2–4주"
                          : p.step === "03"
                            ? "6–12개월"
                            : "4–8주"}
                    </dd>
                  </div>
                </dl>
                <p className="mt-4 text-[11px] text-ink-mute">
                  ※ 상기 정보는 일반적 안내이며 개인 상태에 따라 다를 수
                  있습니다. 전문의 상담을 권장드립니다.
                </p>
              </div>
            </article>
          ))}
        </div>

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
