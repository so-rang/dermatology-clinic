import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { clinic } from "@/lib/data/clinic";
import { stillVisuals } from "@/lib/data/visuals";

export function ReservationCta() {
  return (
    <section id="reservation" className="relative isolate overflow-hidden bg-bg-base">
      <div
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          background:
            "radial-gradient(70% 80% at 20% 50%, #E8C8B655 0%, transparent 60%), radial-gradient(60% 70% at 80% 40%, #D9E4DC55 0%, transparent 65%), #FAF8F4",
        }}
      />
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/3 opacity-90 md:block">
        <Image
          src={stillVisuals.leaves.src}
          alt=""
          fill
          sizes="33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-base via-bg-base/60 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-[1280px] px-6 py-28 md:px-10 md:py-36 lg:px-20">
        <div className="max-w-3xl">
          <span className="font-display tracking-brand text-xs text-terra">
            RESERVATION
          </span>
          <h2 className="font-serif-ko mt-4 text-4xl leading-tight text-balance md:text-6xl">
            처음 만나는 자리,
            <br />
            가장 신중하게.
          </h2>
          <p className="mt-6 max-w-xl text-base text-ink-soft md:text-lg">
            전문의 직접 상담 · 피부 분석 무료 · 30분 충분히 듣습니다.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild variant="terra" size="lg">
              <Link href={clinic.kakaoChannel}>30분 무료 상담 예약</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href={clinic.kakaoChannel}>카카오톡 문의</Link>
            </Button>
            <Link
              href={`tel:${clinic.phone}`}
              className="text-sm tracking-wide text-ink underline-offset-4 hover:underline"
            >
              전화: {clinic.phoneDisplay}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
