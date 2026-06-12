"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { protocol } from "@/lib/data/protocol";
import { MechanismByKey } from "@/components/sections/mechanism-svg";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 5000;

export function AtelierProtocol() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const total = protocol.length;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function go(next: number) {
    const n = ((next % total) + total) % total;
    setDir(n > active || (active === total - 1 && n === 0) ? 1 : -1);
    setActive(n);
  }

  // Autoplay
  useEffect(() => {
    if (reduced || paused) return;
    timerRef.current = setTimeout(() => {
      setDir(1);
      setActive((p) => (p + 1) % total);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, paused, reduced, total]);

  const current = protocol[active];

  return (
    <section
      id="protocol"
      className="bg-bg-base"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32 lg:px-20">
        <header className="flex items-end justify-between gap-6">
          <div>
            <span className="font-display tracking-brand text-xs text-terra">
              ATELIER PROTOCOL
            </span>
            <h2 className="font-serif-ko mt-2 text-3xl md:text-5xl text-balance">
              네 단계의 처방
            </h2>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="이전 단계"
              className="flex h-11 w-11 items-center justify-center border border-line text-ink-soft transition-colors hover:border-ink hover:text-ink md:h-12 md:w-12"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="다음 단계"
              className="flex h-11 w-11 items-center justify-center border border-terra bg-terra text-bg-base transition-colors hover:bg-terra-deep md:h-12 md:w-12"
            >
              →
            </button>
          </div>
        </header>

        {/* Step rail */}
        <ol className="mt-12 grid grid-cols-4 gap-2 border-t border-line md:gap-6">
          {protocol.map((p, i) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => go(i)}
                className="group relative block w-full pt-5 text-left"
              >
                <span
                  className={cn(
                    "absolute left-0 right-0 top-0 h-px transition-colors",
                    i === active ? "bg-terra" : "bg-transparent",
                  )}
                />
                <p
                  className={cn(
                    "font-display tracking-brand text-[10px] md:text-xs transition-colors",
                    i === active ? "text-terra" : "text-ink-mute",
                  )}
                >
                  {p.step}
                </p>
                <p
                  className={cn(
                    "font-display mt-1 text-sm italic md:text-lg transition-colors",
                    i === active
                      ? "text-ink"
                      : "text-ink-mute group-hover:text-ink-soft",
                  )}
                >
                  {p.nameEn}
                </p>
                <p
                  className={cn(
                    "mt-0.5 hidden text-[11px] transition-colors md:block",
                    i === active ? "text-ink-soft" : "text-ink-mute",
                  )}
                >
                  {p.nameKo}
                </p>
              </button>
            </li>
          ))}
        </ol>

        {/* Slide stage */}
        <div className="relative mt-10 overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={current.id}
              custom={dir}
              initial={
                reduced
                  ? { opacity: 0 }
                  : { opacity: 0, x: dir * 32 }
              }
              animate={
                reduced
                  ? { opacity: 1 }
                  : { opacity: 1, x: 0 }
              }
              exit={
                reduced
                  ? { opacity: 0 }
                  : { opacity: 0, x: -dir * 32 }
              }
              transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
              drag={reduced ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) go(active + 1);
                else if (info.offset.x > 80) go(active - 1);
              }}
              className="grid cursor-grab active:cursor-grabbing select-none grid-cols-1 gap-8 md:grid-cols-12 md:gap-12"
            >
              <div className="md:col-span-5">
                <div className="aspect-square w-full overflow-hidden rounded-sm bg-bg-soft">
                  <MechanismByKey k={current.mechanism} />
                </div>
              </div>
              <div className="flex flex-col justify-center md:col-span-7">
                <p className="font-display tracking-brand text-xs text-terra">
                  STEP {current.step} · {current.nameEn.toUpperCase()}
                </p>
                <h3 className="font-serif-ko mt-3 text-3xl text-balance md:text-5xl">
                  {current.headlineKo}
                </h3>
                <p className="mt-5 text-base text-ink-soft md:text-lg">
                  {current.copy}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {current.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line px-3 py-1.5 text-[11px] text-ink-soft md:text-xs"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator */}
        <div className="mt-10 flex items-center gap-2 border-t border-line pt-6">
          {protocol.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`${p.nameEn} 단계로 이동`}
              className="group relative h-3 overflow-hidden"
              style={{ width: i === active ? 56 : 28 }}
            >
              <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-line" />
              {i === active ? (
                <motion.span
                  key={`bar-${active}-${paused}`}
                  className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-terra"
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  animate={{ scaleX: reduced || paused ? 1 : [0, 1] }}
                  transition={{
                    duration: reduced || paused ? 0 : AUTOPLAY_MS / 1000,
                    ease: "linear",
                  }}
                />
              ) : null}
            </button>
          ))}
          <span className="ml-4 font-display tabular-nums text-xs text-ink-mute">
            0{active + 1} / 0{total}
          </span>
        </div>
      </div>
    </section>
  );
}
