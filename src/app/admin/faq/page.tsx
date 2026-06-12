"use client";

import { useState } from "react";
import { faqsPreview } from "@/lib/data/faqs";
import { Button } from "@/components/ui/button";

export default function AdminFaqPage() {
  const [items, setItems] = useState([...faqsPreview]);
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const [saved, setSaved] = useState<string | null>(null);

  const active = items.find((i) => i.id === activeId);

  function updateActive(field: "question" | "answer", val: string) {
    setItems((prev) =>
      prev.map((i) => (i.id === activeId ? { ...i, [field]: val } : i)),
    );
  }

  function handleSave() {
    setSaved("저장됨 — 데모 환경에서는 메모리에만 보관됩니다.");
    window.setTimeout(() => setSaved(null), 2200);
  }

  if (!active) return null;

  const schemaJson = JSON.stringify(
    {
      "@type": "Question",
      name: active.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: active.answer,
      },
    },
    null,
    2,
  );

  return (
    <div className="space-y-10">
      <header>
        <p className="font-display tracking-brand text-xs text-terra">
          FAQ EDITOR
        </p>
        <h1 className="font-serif-ko mt-2 text-3xl md:text-4xl">
          질문형 콘텐츠를 직접 관리합니다.
        </h1>
        <p className="mt-3 text-sm text-ink-soft">
          입력 즉시 Schema.org FAQPage JSON-LD가 우측에 갱신됩니다.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-12">
        <aside className="lg:col-span-3">
          <p className="font-display tracking-brand text-[10px] text-ink-mute">
            QUESTIONS
          </p>
          <ul className="mt-4 space-y-1">
            {items.map((f) => (
              <li key={f.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(f.id)}
                  className={
                    f.id === activeId
                      ? "block w-full rounded-sm border-l-2 border-terra bg-bg-soft px-3 py-2 text-left text-sm text-ink"
                      : "block w-full rounded-sm border-l-2 border-transparent px-3 py-2 text-left text-sm text-ink-soft hover:bg-bg-soft"
                  }
                >
                  {f.question}
                </button>
              </li>
            ))}
          </ul>
          <Button size="sm" variant="ghost" className="mt-4 w-full">
            + 질문 추가
          </Button>
        </aside>

        <div className="space-y-6 lg:col-span-5">
          <div>
            <label className="font-display tracking-brand text-[10px] text-ink-mute">
              QUESTION (H3)
            </label>
            <textarea
              value={active.question}
              onChange={(e) => updateActive("question", e.target.value)}
              className="mt-2 w-full resize-none border border-line bg-bg-soft p-4 font-serif-ko text-lg text-ink focus:border-terra focus:outline-none"
              rows={2}
            />
          </div>
          <div>
            <label className="font-display tracking-brand text-[10px] text-ink-mute">
              ANSWER
            </label>
            <textarea
              value={active.answer}
              onChange={(e) => updateActive("answer", e.target.value)}
              className="mt-2 w-full resize-none border border-line bg-bg-soft p-4 text-sm leading-relaxed text-ink focus:border-terra focus:outline-none"
              rows={8}
            />
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={handleSave}>저장</Button>
            <Button variant="ghost">미리보기</Button>
            {saved ? (
              <span className="text-xs text-terra">{saved}</span>
            ) : null}
          </div>
        </div>

        <div className="lg:col-span-4">
          <p className="font-display tracking-brand text-[10px] text-ink-mute">
            SCHEMA.ORG · LIVE PREVIEW
          </p>
          <pre className="mt-2 overflow-x-auto border border-line bg-ink p-5 text-[11px] leading-relaxed text-bg-base">
            <code>{schemaJson}</code>
          </pre>
          <p className="mt-3 text-[11px] text-ink-mute">
            FAQPage 스키마가 Google Rich Results에 노출됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
