import { clinic } from "@/lib/data/clinic";
import { Placeholder } from "@/components/common/placeholder";

export function LocationHours() {
  return (
    <section className="bg-bg-soft">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32 lg:px-20">
        <header className="mb-12 md:mb-16">
          <span className="font-display tracking-brand text-xs text-terra">
            VISIT
          </span>
          <h2 className="font-serif-ko mt-2 text-3xl md:text-5xl">
            오시는 길
          </h2>
        </header>

        <div className="grid gap-10 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-3">
            <div className="relative overflow-hidden">
              <Placeholder
                ratio="wide"
                tone="sage"
                label="Map"
                caption="Cheongdam-dong"
              />
              {/* Pin */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative h-3 w-3 rounded-full bg-terra ring-4 ring-terra/20" />
                <p className="mt-2 -translate-x-1/2 rounded-sm bg-ink px-3 py-1.5 text-[11px] tracking-brand text-bg-base">
                  ATELIER
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:col-span-2">
            <div>
              <p className="font-display tracking-brand text-[10px] text-terra">
                ADDRESS
              </p>
              <p className="font-serif-ko mt-1 text-xl">{clinic.address}</p>
              <p className="text-sm text-ink-soft">{clinic.subway}</p>
            </div>
            <div>
              <p className="font-display tracking-brand text-[10px] text-terra">
                HOURS
              </p>
              <ul className="mt-2 space-y-1">
                {clinic.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between text-sm text-ink"
                  >
                    <span className="text-ink-soft">{h.day}</span>
                    <span className="font-display tabular-nums">{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 inline-block rounded-full border border-terra/40 px-3 py-1 text-[11px] text-terra">
                {clinic.nightHours}
              </p>
            </div>
            <div>
              <p className="font-display tracking-brand text-[10px] text-terra">
                CONTACT
              </p>
              <p className="font-serif-ko mt-1 text-xl">{clinic.phoneDisplay}</p>
              <p className="text-sm text-ink-soft">{clinic.parking}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
