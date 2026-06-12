import Link from "next/link";
import type { ReactNode } from "react";

const nav = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/faq", label: "FAQ Editor" },
  { href: "/admin/studio", label: "Content Studio" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg-base">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-0 md:flex-row">
        <aside className="border-b border-line bg-bg-soft md:min-h-screen md:w-64 md:border-b-0 md:border-r">
          <div className="sticky top-0 flex flex-col gap-8 p-6 md:h-screen md:p-8">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="font-display text-xl italic text-ink">
                Atelier
              </span>
              <span className="text-[10px] tracking-brand text-ink-soft">
                ADMIN
              </span>
            </Link>
            <nav className="flex flex-row gap-3 md:flex-col md:gap-1">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-sm px-3 py-2 text-xs tracking-brand uppercase text-ink-soft transition-colors hover:bg-bg-base hover:text-ink"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto hidden text-[10px] text-ink-mute md:block">
              <p>본 페이지는 데모 목업입니다.</p>
              <p className="mt-1">실제 DB 연결 없음.</p>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-6 md:p-12">{children}</main>
      </div>
    </div>
  );
}
