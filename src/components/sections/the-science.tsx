import Image from "next/image";
import { abstractVisuals } from "@/lib/data/visuals";

const data = [
  {
    key: "VISIA",
    title: "VISIA 7-mode 분석",
    detail: "Spot · Wrinkle · Texture · Pore · Brown · Red · Porphyrin",
  },
  {
    key: "HIFU",
    title: "HIFU 깊이 제어",
    detail: "1.5mm · 3.0mm · 4.5mm 다층 도달",
  },
  {
    key: "PN 22kDa",
    title: "PN 분자량",
    detail: "Polynucleotide 22kDa, 진피 섬유아세포 활성",
  },
];

export function TheScience() {
  return (
    <section id="science" className="bg-ink text-bg-base">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32 lg:px-20">
        <header className="mb-12 md:mb-16">
          <span className="font-display tracking-brand text-xs text-terra">
            THE SCIENCE
          </span>
          <h2 className="font-serif-ko mt-2 text-3xl text-balance md:text-5xl">
            보이는 결과는,
            <br />
            보이지 않는 데이터에서 옵니다.
          </h2>
        </header>

        <div className="grid gap-10 md:grid-cols-5 md:gap-12">
          <div className="space-y-6 md:col-span-3">
            {data.map((d) => (
              <article
                key={d.key}
                className="border-t border-bg-base/15 pt-5"
              >
                <p className="font-display tracking-brand text-[10px] text-terra">
                  {d.key}
                </p>
                <h3 className="font-serif-ko mt-1 text-xl md:text-2xl">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm text-bg-base/70">{d.detail}</p>
              </article>
            ))}
          </div>

          <div className="md:col-span-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={abstractVisuals.serumGlass.src}
                alt={abstractVisuals.serumGlass.alt}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-[11px] text-bg-base/60">
              본 페이지의 일부 이미지·콘텐츠는 컨셉 시안용 AI로 제작되었습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
