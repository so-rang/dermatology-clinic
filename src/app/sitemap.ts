import type { MetadataRoute } from "next";

const BASE = "https://atelier-derma.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/treatments`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/location`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/reservation`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];
}
