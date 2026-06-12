"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqsPreview } from "@/lib/data/faqs";
import { cn } from "@/lib/utils";

export function FaqPreview() {
  const [open, setOpen] = useState<string | null>(faqsPreview[0]?.id ?? null);

  return (
    <section id="faq" className="bg-bg-base">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32 lg:px-20">
        <div className="grid gap-10 md:grid-cols-12">
          <header className="md:col-span-4">
            <span className="font-display tracking-brand text-xs text-terra">
              FAQ
            </span>
            <h2 className="font-serif-ko mt-2 text-3xl md:text-5xl text-balance">
              자주 묻는
              <br />
              질문
            </h2>
            <Link
              href="#reservation"
              className="mt-8 inline-block text-xs tracking-brand text-ink-soft hover:text-ink"
            >
              상담으로 문의 →
            </Link>
          </header>

          <ul className="md:col-span-8">
            {faqsPreview.map((f) => {
              const isOpen = open === f.id;
              return (
                <li key={f.id} className="border-t border-line last:border-b">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : f.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={cn(
                        "font-serif-ko text-lg md:text-xl transition-colors",
                        isOpen ? "text-ink" : "text-ink-soft",
                      )}
                    >
                      {f.question}
                    </span>
                    <span
                      className={cn(
                        "font-display mt-1 text-xs tracking-brand transition-transform",
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
        </div>
      </div>
    </section>
  );
}
