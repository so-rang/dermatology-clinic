import { clinic } from "@/lib/data/clinic";

export function LocationHours() {
  return (
    <section id="location" className="bg-bg-soft">
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
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-line bg-bg-base">
              <iframe
                src={`https://maps.google.com/maps?q=${clinic.lat},${clinic.lng}&z=16&output=embed&hl=ko`}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${clinic.nameKo} 위치 지도`}
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-xs text-ink-mute">
              {clinic.address} · {clinic.subway}
            </p>
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
