import Image from "next/image";
import Link from "next/link";
import { doctors } from "@/lib/data/doctors";

export function DoctorsPreview() {
  return (
    <section id="doctors" className="bg-bg-soft">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32 lg:px-20">
        <header className="mb-12 flex flex-col gap-3 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-display tracking-brand text-xs text-terra">
              DOCTORS
            </span>
            <h2 className="font-serif-ko mt-2 text-3xl md:text-5xl">
              전문의 3인 직접 진료
            </h2>
          </div>
          <Link
            href="#space"
            className="text-xs tracking-brand text-ink-soft hover:text-ink"
          >
            공간 보러가기 →
          </Link>
        </header>

        <ul className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {doctors.map((d, i) => (
            <li
              key={d.id}
              className="group flex flex-col gap-5 border-t border-line pt-6 transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink">
                <Image
                  src={d.image}
                  alt={`${d.nameKo} ${d.title}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover grayscale"
                  priority={i === 0}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-bg-base">
                  <span className="font-display tracking-brand text-[10px] opacity-80">
                    0{i + 1} · Dermatology
                  </span>
                </div>
              </div>
              <div>
                <p className="font-display tracking-brand text-[11px] text-terra">
                  {d.title.toUpperCase()}
                </p>
                <h3 className="font-serif-ko mt-1 text-2xl">
                  {d.nameKo}
                  <span className="ml-2 font-display text-base italic text-ink-soft">
                    {d.nameEn.split(",")[0]}
                  </span>
                </h3>
              </div>
              <ul className="space-y-1.5 text-sm text-ink-soft">
                {d.credentials.slice(0, 4).map((c) => (
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
      </div>
    </section>
  );
}
