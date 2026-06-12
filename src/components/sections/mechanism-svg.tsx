"use client";

import { motion } from "motion/react";

const base = {
  className: "w-full h-full",
  viewBox: "0 0 400 400",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
};

const stroke = "#2C3E36";
const accent = "#C97B5A";
const sage = "#B6C8BD";

export function ScanGrid() {
  return (
    <svg {...base} aria-hidden>
      <defs>
        <radialGradient id="scan-glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.18" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#scan-glow)" />
      {/* face outline */}
      <motion.path
        d="M200 80 Q140 90 130 180 Q125 260 175 310 Q200 330 225 310 Q275 260 270 180 Q260 90 200 80 Z"
        stroke={stroke}
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
      {/* horizontal scan lines */}
      {[110, 140, 170, 200, 230, 260, 290].map((y, i) => (
        <motion.line
          key={y}
          x1="120"
          x2="280"
          y1={y}
          y2={y}
          stroke={stroke}
          strokeWidth="0.5"
          strokeDasharray="2 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.45 }}
          transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
        />
      ))}
      {/* data points */}
      {[
        [160, 130],
        [240, 130],
        [200, 170],
        [170, 220],
        [230, 220],
        [200, 260],
        [200, 290],
      ].map(([x, y], i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + i * 0.1 }}
        >
          <circle cx={x} cy={y} r="3" fill={accent} />
          <circle cx={x} cy={y} r="8" stroke={accent} strokeWidth="0.6" opacity="0.5" />
        </motion.g>
      ))}
      {/* corner brackets */}
      {[
        [60, 60, 1, 1],
        [340, 60, -1, 1],
        [60, 340, 1, -1],
        [340, 340, -1, -1],
      ].map(([x, y, sx, sy], i) => (
        <path
          key={i}
          d={`M${x} ${(y as number) + 14 * (sy as number)} L${x} ${y} L${(x as number) + 14 * (sx as number)} ${y}`}
          stroke={stroke}
          strokeWidth="1"
          opacity="0.6"
        />
      ))}
      <text
        x="68"
        y="78"
        fontFamily="EB Garamond, serif"
        fontStyle="italic"
        fontSize="11"
        fill={stroke}
        opacity="0.6"
      >
        VISIA · 7-MODE
      </text>
    </svg>
  );
}

export function CellNetwork() {
  const nodes = [
    [120, 110],
    [200, 90],
    [280, 130],
    [310, 220],
    [240, 290],
    [150, 300],
    [90, 220],
    [200, 200],
  ];
  return (
    <svg {...base} aria-hidden>
      <defs>
        <radialGradient id="cell-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={sage} stopOpacity="0.22" />
          <stop offset="100%" stopColor={sage} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#cell-glow)" />
      {/* connections to center */}
      {nodes.slice(0, 7).map(([x, y], i) => (
        <motion.line
          key={`l-${i}`}
          x1={x}
          y1={y}
          x2="200"
          y2="200"
          stroke={stroke}
          strokeWidth="0.6"
          strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 0.2 + i * 0.1 }}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <motion.g
          key={`n-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 + i * 0.08 }}
        >
          <circle cx={x} cy={y} r={i === 7 ? 14 : 7} fill="white" stroke={stroke} strokeWidth="1" />
          {i === 7 ? <circle cx={x} cy={y} r="6" fill={accent} /> : null}
          {i === 7 ? null : <circle cx={x} cy={y} r="3" fill={stroke} opacity="0.5" />}
        </motion.g>
      ))}
      {/* PN strand symbol */}
      <motion.path
        d="M70 360 Q120 340 170 360 T270 360 T370 360"
        stroke={accent}
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      />
      <text
        x="68"
        y="78"
        fontFamily="EB Garamond, serif"
        fontStyle="italic"
        fontSize="11"
        fill={stroke}
        opacity="0.6"
      >
        PN · POLYNUCLEOTIDE
      </text>
    </svg>
  );
}

export function SkinSection() {
  const layers = [
    { y: 110, label: "EPIDERMIS", color: "#E8DFD3" },
    { y: 170, label: "DERMIS", color: "#D9E4DC" },
    { y: 250, label: "SMAS", color: "#B6C8BD" },
    { y: 330, label: "SUBCUTIS", color: "#9BAA9F" },
  ];
  return (
    <svg {...base} aria-hidden>
      {layers.map((l, i) => (
        <motion.rect
          key={i}
          x="60"
          y={l.y}
          width="280"
          height={i === layers.length - 1 ? 30 : 60}
          fill={l.color}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ delay: 0.1 * i, duration: 0.6 }}
        />
      ))}
      {layers.map((l, i) => (
        <motion.line
          key={`ln-${i}`}
          x1="60"
          x2="340"
          y1={l.y}
          y2={l.y}
          stroke={stroke}
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.1 * i, duration: 0.8 }}
        />
      ))}
      {layers.map((l, i) => (
        <text
          key={`t-${i}`}
          x="68"
          y={l.y + 18}
          fontFamily="EB Garamond, serif"
          fontStyle="italic"
          fontSize="10"
          fill={stroke}
          opacity="0.7"
        >
          {l.label}
        </text>
      ))}
      {/* HIFU focused point — converging triangles */}
      {[200, 230, 260].map((y, i) => (
        <motion.path
          key={`hifu-${i}`}
          d={`M${180 + i * 20} 70 L200 ${y} L${220 - i * 20} 70`}
          stroke={accent}
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
        />
      ))}
      <motion.circle
        cx="200"
        cy="250"
        r="6"
        fill={accent}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.4, 1] }}
        transition={{ delay: 1.4, duration: 0.6 }}
      />
      <text
        x="60"
        y="78"
        fontFamily="EB Garamond, serif"
        fontStyle="italic"
        fontSize="11"
        fill={stroke}
        opacity="0.6"
      >
        HIFU · 1.5 / 3.0 / 4.5mm
      </text>
    </svg>
  );
}

export function TextureGrid() {
  const dots: Array<[number, number]> = [];
  for (let r = 0; r < 16; r++) {
    for (let c = 0; c < 16; c++) {
      dots.push([60 + c * 17, 80 + r * 17]);
    }
  }
  return (
    <svg {...base} aria-hidden>
      {dots.map(([x, y], i) => {
        const dist = Math.sqrt((x - 200) ** 2 + (y - 220) ** 2);
        const size = Math.max(0.6, 2.8 - dist / 90);
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={size}
            fill={stroke}
            opacity={Math.max(0.15, 0.7 - dist / 240)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.002 * i, duration: 0.3 }}
          />
        );
      })}
      <motion.circle
        cx="200"
        cy="220"
        r="50"
        fill="none"
        stroke={accent}
        strokeWidth="1"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: [0.6, 1.05, 1], opacity: [0, 0.6, 0.6] }}
        transition={{ delay: 0.6, duration: 1 }}
      />
      <motion.circle
        cx="200"
        cy="220"
        r="80"
        fill="none"
        stroke={accent}
        strokeWidth="0.6"
        opacity="0.4"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ delay: 0.9, duration: 1 }}
      />
      <text
        x="60"
        y="78"
        fontFamily="EB Garamond, serif"
        fontStyle="italic"
        fontSize="11"
        fill={stroke}
        opacity="0.6"
      >
        MAINTENANCE · GRID
      </text>
    </svg>
  );
}

export function MechanismByKey({ k }: { k: string }) {
  switch (k) {
    case "scan-grid":
      return <ScanGrid />;
    case "cell-network":
      return <CellNetwork />;
    case "skin-section":
      return <SkinSection />;
    case "texture-grid":
    default:
      return <TextureGrid />;
  }
}
