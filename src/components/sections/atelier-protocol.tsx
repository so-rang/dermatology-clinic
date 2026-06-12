"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { protocol } from "@/lib/data/protocol";
import { MechanismByKey } from "@/components/sections/mechanism-svg";
import { cn } from "@/lib/utils";

export function AtelierProtocol() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const container = containerRef.current;
    if (!container) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        if (total <= 0) return;
        const progress = Math.min(
          1,
          Math.max(0, (window.innerHeight * 0.0 - rect.top) / total),
        );
        const idx = Math.min(
          protocol.length - 1,
          Math.floor(progress * protocol.length),
        );
        setActive(idx);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  // Reduced motion fallback: simple stacked list
  if (reduced) {
    return (
      <section className="bg-bg-base">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 lg:px-20">
          <header className="mb-12">
            <span className="font-display tracking-brand text-xs text-terra">
              ATELIER PROTOCOL
            </span>
            <h2 className="font-serif-ko mt-3 text-3xl md:text-5xl text-balance">
              네 단계의 처방.
            </h2>
          </header>
          <ul className="grid gap-12 md:grid-cols-2">
            {protocol.map((p) => (
              <li
                key={p.id}
                className="border-t border-line pt-6"
              >
                <p className="font-display text-xs tracking-brand text-terra">
                  {p.step} · {p.nameEn.toUpperCase()}
                </p>
                <h3 className="font-serif-ko mt-2 text-2xl md:text-3xl">
                  {p.headlineKo}
                </h3>
                <p className="mt-3 text-sm text-ink-soft md:text-base">
                  {p.copy}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-3 py-1 text-[11px] text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative bg-bg-base"
      style={{ height: `${protocol.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col">
        <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-8 px-6 pt-24 pb-10 md:px-10 md:pt-28 lg:px-20">
          <header className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-display tracking-brand text-xs text-terra">
                ATELIER PROTOCOL
              </span>
              <h2 className="font-serif-ko mt-2 text-3xl md:text-4xl text-balance">
                네 단계의 처방.
              </h2>
            </div>
            <p className="text-sm text-ink-mute">
              SCROLL — {active + 1} / {protocol.length}
            </p>
          </header>

          <div className="grid flex-1 grid-cols-12 gap-6 md:gap-10 overflow-hidden">
            {/* Left — step rail */}
            <ol className="col-span-12 flex flex-row gap-4 md:col-span-4 md:flex-col md:gap-8 md:py-4">
              {protocol.map((p, i) => (
                <li key={p.id} className="flex-1 md:flex-none">
                  <button
                    type="button"
                    onClick={() => {
                      const target =
                        containerRef.current?.offsetTop ?? 0;
                      window.scrollTo({
                        top:
                          target +
                          (containerRef.current!.offsetHeight /
                            protocol.length) *
                            i +
                          10,
                        behavior: "smooth",
                      });
                    }}
                    className={cn(
                      "block w-full text-left transition-all duration-500",
                      i === active
                        ? "opacity-100"
                        : "opacity-35 hover:opacity-65",
                    )}
                  >
                    <p className="font-display text-[11px] tracking-brand text-terra">
                      {p.step}
                    </p>
                    <p
                      className={cn(
                        "font-display italic text-base md:text-xl",
                        i === active ? "text-ink" : "text-ink-soft",
                      )}
                    >
                      {p.nameEn}
                    </p>
                    <p
                      className={cn(
                        "mt-0.5 hidden text-xs text-ink-soft md:block md:text-sm",
                      )}
                    >
                      {p.nameKo}
                    </p>
                  </button>
                </li>
              ))}
            </ol>

            {/* Right — illustration + copy */}
            <div className="col-span-12 grid grid-cols-1 gap-8 md:col-span-8 md:grid-cols-2 md:gap-12">
              <div className="aspect-square w-full max-w-md self-center overflow-hidden rounded-sm bg-bg-soft">
                {protocol.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={false}
                    animate={{ opacity: i === active ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                    style={{
                      position: i === active ? "relative" : "absolute",
                      pointerEvents: i === active ? "auto" : "none",
                    }}
                  >
                    {i === active ? <MechanismByKey k={p.mechanism} /> : null}
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col justify-center">
                {protocol.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={false}
                    animate={{
                      opacity: i === active ? 1 : 0,
                      y: i === active ? 0 : 12,
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      position: i === active ? "relative" : "absolute",
                      pointerEvents: i === active ? "auto" : "none",
                    }}
                  >
                    <h3 className="font-serif-ko text-2xl text-balance md:text-4xl">
                      {p.headlineKo}
                    </h3>
                    <p className="mt-4 text-sm text-ink-soft md:text-base">
                      {p.copy}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-line px-3 py-1 text-[11px] text-ink-soft"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="border-t border-line">
          <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-6 py-4 md:px-10 lg:px-20">
            <span className="font-display tracking-brand text-[10px] text-ink-mute">
              PROGRESS
            </span>
            <div className="relative h-px flex-1 bg-line">
              <motion.div
                className="absolute inset-y-0 left-0 bg-terra"
                animate={{
                  width: `${((active + 1) / protocol.length) * 100}%`,
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="font-display text-[11px] tabular-nums text-ink-mute">
              0{active + 1} / 0{protocol.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
