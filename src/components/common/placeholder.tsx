import { cn } from "@/lib/utils";

type Tone = "sage" | "terra" | "ink" | "soft";

const palette: Record<Tone, { from: string; to: string; ink: string }> = {
  sage: { from: "#E5ECDE", to: "#B6C8BD", ink: "#2C3E36" },
  terra: { from: "#E8C8B6", to: "#C97B5A", ink: "#FAF8F4" },
  ink: { from: "#2C3E36", to: "#1A2622", ink: "#FAF8F4" },
  soft: { from: "#F2EFE9", to: "#E5DFD3", ink: "#5C6A63" },
};

type PlaceholderProps = {
  label?: string;
  caption?: string;
  tone?: Tone;
  ratio?: "square" | "portrait" | "landscape" | "wide";
  rounded?: boolean;
  className?: string;
};

const ratioClass: Record<NonNullable<PlaceholderProps["ratio"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
};

export function Placeholder({
  label,
  caption,
  tone = "sage",
  ratio = "square",
  rounded = false,
  className,
}: PlaceholderProps) {
  const p = palette[tone];
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        ratioClass[ratio],
        rounded && "rounded-full",
        className,
      )}
      style={{
        background: `radial-gradient(120% 80% at 30% 20%, ${p.from} 0%, ${p.to} 100%)`,
        color: p.ink,
      }}
      aria-hidden={!label}
    >
      {/* grain */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.08] mix-blend-multiply"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="n">
          <feTurbulence baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .6 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#n)" />
      </svg>
      {label ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <p
            className="font-display text-lg italic opacity-90 md:text-xl"
            style={{ color: p.ink }}
          >
            {label}
          </p>
          {caption ? (
            <p
              className="mt-1 text-[10px] tracking-[0.2em] uppercase opacity-70"
              style={{ color: p.ink }}
            >
              {caption}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
