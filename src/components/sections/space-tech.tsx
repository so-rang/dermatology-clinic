import Image from "next/image";
import { equipmentVisuals, spaceVisuals } from "@/lib/data/visuals";

const equipment = [
  {
    name: "VISIA 7-mode",
    caption: "Skin Diagnosis",
    desc: "7가지 모드로 진피층을 정밀 분석합니다",
    visual: equipmentVisuals.visia,
  },
  {
    name: "Ulthera",
    caption: "HIFU Lifting",
    desc: "고강도 집속 초음파, SMAS층 리프팅",
    visual: equipmentVisuals.ulthera,
  },
  {
    name: "Thermage FLX",
    caption: "RF Tightening",
    desc: "고주파로 진피 전반의 콜라겐을 재구축",
    visual: equipmentVisuals.thermage,
  },
  {
    name: "Rejuran Hand",
    caption: "PN Booster",
    desc: "정밀 주입으로 균일한 재생 효과",
    visual: equipmentVisuals.rejuran,
  },
] as const;

export function SpaceTech() {
  return (
    <section className="bg-bg-base">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32 lg:px-20">
        <header className="mb-12 md:mb-16">
          <span className="font-display tracking-brand text-xs text-terra">
            SPACE & TECH
          </span>
          <h2 className="font-serif-ko mt-2 text-3xl md:text-5xl">
            공간과 장비
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {/* Space cinemagraph */}
          <div className="md:col-span-1">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-bg-soft">
              <Image
                src={spaceVisuals.lounge.src}
                alt={spaceVisuals.lounge.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-ink-mute">
              자연광이 닿는 라운지 · 약 60평
            </p>
          </div>

          {/* Equipment 2x2 */}
          <div className="grid grid-cols-2 gap-4 md:col-span-2 md:gap-6">
            {equipment.map((e) => (
              <article key={e.name} className="group flex flex-col">
                <div className="relative aspect-square w-full overflow-hidden bg-bg-soft">
                  <Image
                    src={e.visual.src}
                    alt={e.visual.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3">
                  <p className="font-display tracking-brand text-[10px] text-terra">
                    {e.caption.toUpperCase()}
                  </p>
                  <p className="font-display mt-0.5 text-base italic text-ink">
                    {e.name}
                  </p>
                  <p className="mt-1 text-xs text-ink-soft">{e.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
