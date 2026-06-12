"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { clinic } from "@/lib/data/clinic";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/#protocol", label: "Treatments" },
  { href: "/#doctors", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#location", label: "Location" },
  { href: "/admin", label: "Admin" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg-base/85 backdrop-blur-md border-b border-line"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:h-20 md:px-10 lg:px-20">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl italic text-ink">Atelier</span>
          <span className="hidden text-[11px] tracking-brand text-ink-soft md:inline">
            {clinic.districtKo}
          </span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.18em] uppercase text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" variant="terra">
            <Link href="/#reservation">상담 예약</Link>
          </Button>
        </nav>
        <button
          aria-label="메뉴 열기"
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-6 bg-ink" />
          <span className="mt-1.5 block h-px w-6 bg-ink" />
          <span className="mt-1.5 block h-px w-6 bg-ink" />
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-bg-base md:hidden">
          <nav className="flex flex-col gap-4 px-6 py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.18em] uppercase text-ink-soft"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm" variant="terra">
              <Link href="/#reservation" onClick={() => setOpen(false)}>
                상담 예약
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
