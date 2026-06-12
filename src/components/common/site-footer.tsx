import Link from "next/link";
import { clinic } from "@/lib/data/clinic";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg-soft">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-16 md:grid-cols-4 md:px-10 lg:px-20">
        <div className="md:col-span-2">
          <p className="font-display text-2xl italic text-ink">Atelier</p>
          <p className="mt-2 text-xs tracking-brand text-ink-soft">
            Dermatology · Cheongdam
          </p>
          <p className="mt-6 max-w-sm font-serif-ko text-lg text-ink">
            {clinic.tagline}
          </p>
          <p className="mt-6 text-xs text-ink-mute">
            본 페이지의 일부 이미지·콘텐츠는 컨셉 시안용 AI로 제작되었습니다.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-xs tracking-brand text-ink-mute">VISIT</p>
          <p className="text-ink">{clinic.address}</p>
          <p className="text-ink-soft">{clinic.subway}</p>
          <p className="text-ink-soft">{clinic.parking}</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-xs tracking-brand text-ink-mute">CONTACT</p>
          <p className="text-ink">{clinic.phoneDisplay}</p>
          <p className="text-ink-soft">{clinic.email}</p>
          <Link
            href={clinic.kakaoChannel}
            className="text-ink-soft underline-offset-4 hover:underline"
          >
            카카오톡 채널
          </Link>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-2 px-6 py-6 text-[11px] text-ink-mute md:flex-row md:items-center md:px-10 lg:px-20">
          <p>
            © {new Date().getFullYear()} {clinic.nameKo} · {clinic.nameEn} —
            가상 데모. 의료법 준수 표현 사용.
          </p>
          <p>
            <Link href="/admin" className="hover:text-ink">
              관리자 데모
            </Link>{" "}
            · 본 사이트는 해커톤 샘플입니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
