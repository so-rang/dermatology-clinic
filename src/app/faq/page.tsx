"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SiteNav } from "@/components/common/site-nav";
import { SiteFooter } from "@/components/common/site-footer";
import { faqsAll, faqCategories, type FAQ } from "@/lib/data/faqs";
import { cn } from "@/lib/utils";

const ALL = "all" as const;

export default function FaqPage() {
  const [cat, setCat] = useState<string>(ALL);
  const [q, setQ] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return faqsAll.filter((f) => {
      if (cat !== ALL && f.category !== cat) return false;
      if (q.trim()) {
        const t = q.toLowerCase();
        return (
          f.question.toLowerCase().includes(t) ||
          f.answer.toLowerCase().includes(t)
        );
      }
      return true;
    });
  }, [cat, q]);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: filtered.map((f: FAQ) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <SiteNav />
      <main className="pt-24 md:pt-32">
        <header className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
          <span className="font-display tracking-brand text-xs text-terra">
            FAQ
          </span>
          <h1 className="font-serif-ko mt-3 text-4xl leading-tight md:text-6xl">
            자주 묻는 질문.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-ink-soft md:text-lg">
            진료, 다운타임, 비용, 야간진료까지. 환자분들이 자주 묻는 질문을
            구조화하여 정리했습니다.
          </p>
        </header>

        <div className="mx-auto mt-12 max-w-[1280px] px-6 md:px-10 lg:px-20">
          <div className="flex flex-col gap-4 border-y border-line py-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setCat(ALL)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs tracking-wide transition-colors",
                  cat === ALL
                    ? "border-terra bg-terra text-bg-base"
                    : "border-line text-ink-soft hover:border-ink",
                )}
              >
                전체
              </button>
              {faqCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCat(c.id)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs tracking-wide transition-colors",
                    cat === c.id
                      ? "border-terra bg-terra text-bg-base"
                      : "border-line text-ink-soft hover:border-ink",
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="질문 검색…"
              className="w-full border border-line bg-bg-soft px-4 py-2 text-sm text-ink placeholder:text-ink-mute focus:border-terra focus:outline-none md:w-64"
            />
          </div>
        </div>

        <ul className="mx-auto mt-10 max-w-[1280px] px-6 md:px-10 lg:px-20">
          {filtered.length === 0 ? (
            <li className="py-12 text-center text-sm text-ink-mute">
              검색 결과가 없습니다.
            </li>
          ) : null}
          {filtered.map((f) => {
            const isOpen = openId === f.id;
            return (
              <li key={f.id} className="border-t border-line last:border-b">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : f.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="flex flex-col gap-1">
                    <span className="font-display tracking-brand text-[10px] text-ink-mute">
                      {faqCategories.find((c) => c.id === f.category)?.label ??
                        ""}
                    </span>
                    <span
                      className={cn(
                        "font-serif-ko text-lg md:text-xl",
                        isOpen ? "text-ink" : "text-ink-soft",
                      )}
                    >
                      {f.question}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "font-display mt-2 text-xs tracking-brand transition-transform",
                      isOpen
                        ? "rotate-45 text-terra"
                        : "rotate-0 text-ink-mute",
                    )}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-sm leading-relaxed text-ink-soft md:text-base">
                        {f.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="mt-20" />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
