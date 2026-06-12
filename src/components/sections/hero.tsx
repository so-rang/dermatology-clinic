"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { clinic } from "@/lib/data/clinic";
import { heroVisual } from "@/lib/data/visuals";

export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-ink">
      {/* Background — photo + warm overlays */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroVisual.src}
          alt={heroVisual.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ filter: "brightness(0.78) contrast(1.02) saturate(0.9)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(26,38,34,0.45) 0%, rgba(26,38,34,0.25) 35%, rgba(26,38,34,0.7) 100%)",
          }}
        />
        <motion.div
          className="absolute inset-0 mix-blend-overlay"
          initial={reduced ? false : { opacity: 0.3 }}
          animate={
            reduced
              ? undefined
              : {
                  opacity: [0.3, 0.55, 0.35],
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "conic-gradient(from 120deg at 40% 60%, transparent 0deg, #C97B5A33 90deg, transparent 180deg, #D9E4DC22 270deg, transparent 360deg)",
            backgroundSize: "180% 180%",
          }}
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.12] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="hero-grain">
            <feTurbulence
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-grain)" />
        </svg>
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-[1280px] flex-col justify-between px-6 pt-28 pb-12 md:px-10 md:pt-36 md:pb-16 lg:px-20">
        <motion.span
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-xs tracking-brand text-terra md:text-sm"
        >
          엔리에 · ATELIER DERMATOLOGY · {clinic.district.toUpperCase()}
        </motion.span>

        <div className="my-8 flex flex-1 flex-col justify-center md:my-12">
          <motion.h1
            initial={
              reduced ? false : { opacity: 0, filter: "blur(12px)", scale: 1.04 }
            }
            animate={
              reduced
                ? undefined
                : { opacity: 1, filter: "blur(0px)", scale: 1 }
            }
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-serif-ko max-w-3xl text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.05] tracking-tight text-bg-base text-balance"
            style={{
              fontVariationSettings: '"wght" 380',
            }}
          >
            당신만을 위한
            <br />
            피부의 공방
          </motion.h1>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex max-w-lg flex-col gap-2"
          >
            <p className="font-display text-base italic text-sage md:text-lg">
              Diagnosis · Regeneration · Restoration · Maintenance
            </p>
            <p className="text-sm text-bg-base/70 md:text-base">
              청담 피부과 · 1:1 맞춤 처방
            </p>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Button asChild variant="terra" size="lg">
              <Link href="#protocol">처방 살펴보기</Link>
            </Button>
            <Button
              asChild
              variant="sage"
              size="lg"
              className="border-bg-base/30 text-bg-base hover:bg-bg-base/10"
            >
              <Link href="#reservation">상담 예약</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={reduced ? undefined : { opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-end justify-between gap-6"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[10px] tracking-brand text-bg-base/50">
              SCROLL
            </span>
            <motion.span
              aria-hidden
              className="block h-8 w-px bg-bg-base/50"
              animate={reduced ? undefined : { scaleY: [0.4, 1, 0.4] }}
              style={{ transformOrigin: "top" }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <p className="rounded-full border border-bg-base/20 px-4 py-2 text-[11px] tracking-[0.18em] text-bg-base/70">
            전문의 3인 직접 진료
          </p>
        </motion.div>
      </div>
    </section>
  );
}
