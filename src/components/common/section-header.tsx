import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  level?: "h2" | "h1";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  level = "h2",
}: SectionHeaderProps) {
  const Heading = level;
  return (
    <header
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="font-display tracking-brand text-[12px] text-terra">
          {eyebrow}
        </span>
      ) : null}
      <Heading className="font-serif-ko text-3xl leading-tight text-balance md:text-5xl text-ink">
        {title}
      </Heading>
      {subtitle ? (
        <p className="max-w-xl text-sm text-ink-soft md:text-base">{subtitle}</p>
      ) : null}
    </header>
  );
}
