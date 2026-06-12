"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

const suggested = [
  {
    title: "리쥬란 HB, 30대 직장인이 가장 많이 묻는 5가지",
    score: 92,
    keywords: ["리쥬란 HB", "다운타임", "30대", "효과 기간"],
  },
  {
    title: "울쎄라와 써마지, 우리 의료진이 추천 기준을 설명합니다",
    score: 88,
    keywords: ["울쎄라", "써마지", "추천 기준", "비교"],
  },
  {
    title: "스킨보톡스 시술 전후, 일상 회복 타임라인",
    score: 85,
    keywords: ["스킨보톡스", "다운타임", "타임라인"],
  },
];

export default function AdminStudioPage() {
  const [content, setContent] = useState(
    "리쥬란 HB는 폴리뉴클레오타이드(PN)와 히알루론산을 결합한 스킨부스터입니다. PN은 진피 섬유아세포를 자극해 콜라겐 합성을 유도하고…",
  );

  const score = useMemo(() => {
    const len = content.length;
    const hasQ = /\?/.test(content) ? 8 : 0;
    const hasNum = /\d/.test(content) ? 6 : 0;
    const base = Math.min(80, Math.floor(len / 6));
    return Math.min(98, base + hasQ + hasNum);
  }, [content]);

  return (
    <div className="space-y-10">
      <header>
        <p className="font-display tracking-brand text-xs text-terra">
          CONTENT STUDIO
        </p>
        <h1 className="font-serif-ko mt-2 text-3xl md:text-4xl">
          AI가 먼저 답하는 콘텐츠를 함께 씁니다.
        </h1>
        <p className="mt-3 text-sm text-ink-soft">
          질문형 H2/H3, 데이터, 출처 시그널을 자동 점수화하여 AEO에 최적화합니다.
        </p>
      </header>

      <section>
        <p className="font-display tracking-brand text-[10px] text-ink-mute">
          AI RECOMMENDED TITLES
        </p>
        <ul className="mt-4 grid gap-3 md:grid-cols-3">
          {suggested.map((s) => (
            <li
              key={s.title}
              className="group flex h-full flex-col justify-between gap-4 border border-line bg-bg-soft p-5 transition-all hover:border-terra"
            >
              <p className="font-serif-ko text-base text-ink">{s.title}</p>
              <div>
                <ul className="mb-3 flex flex-wrap gap-1">
                  {s.keywords.map((k) => (
                    <li
                      key={k}
                      className="rounded-full border border-line px-2 py-0.5 text-[10px] text-ink-soft"
                    >
                      {k}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between text-[11px] text-ink-mute">
                  <span>예상 AEO 점수</span>
                  <span className="font-display text-base text-terra">
                    {s.score}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-3">
          <div className="flex items-center justify-between">
            <label className="font-display tracking-brand text-[10px] text-ink-mute">
              DRAFT
            </label>
            <Button size="sm" variant="ghost">
              ✦ AI로 보강
            </Button>
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={14}
            className="w-full resize-none border border-line bg-bg-soft p-5 text-sm leading-relaxed text-ink focus:border-terra focus:outline-none"
          />
          <div className="flex items-center justify-between text-[11px] text-ink-mute">
            <span>{content.length}자</span>
            <span>저장은 데모에서 메모리에만 보관됩니다.</span>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div className="border border-line bg-bg-soft p-6">
            <p className="font-display tracking-brand text-[10px] text-ink-mute">
              AEO ATOMICITY
            </p>
            <div className="mt-4 flex items-end gap-1">
              <span className="font-serif-ko text-5xl text-ink">{score}</span>
              <span className="pb-2 text-sm text-ink-soft">/ 100</span>
            </div>
            <div className="mt-5 space-y-2">
              <Bar label="질문형 H 구조" v={score >= 60 ? 78 : 40} />
              <Bar label="데이터 시그널" v={/\d/.test(content) ? 82 : 35} />
              <Bar label="문장 분해" v={Math.min(90, content.length / 6)} />
              <Bar label="출처/링크" v={/https?:/.test(content) ? 75 : 20} />
            </div>
          </div>

          <div className="border border-line bg-bg-soft p-6 text-xs text-ink-soft">
            <p className="font-display tracking-brand text-[10px] text-terra">
              AI ANSWER PREVIEW
            </p>
            <p className="mt-3 leading-relaxed">
              {content.slice(0, 180)}
              {content.length > 180 ? "…" : ""}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Bar({ label, v }: { label: string; v: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[11px] text-ink-soft">
        <span>{label}</span>
        <span className="font-display tabular-nums">{Math.round(v)}</span>
      </div>
      <div className="mt-1 h-1 rounded-full bg-line">
        <div
          className="h-1 rounded-full bg-terra"
          style={{ width: `${Math.min(100, v)}%` }}
        />
      </div>
    </div>
  );
}
