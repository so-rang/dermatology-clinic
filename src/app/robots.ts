import type { MetadataRoute } from "next";

const BASE = "https://atelier-derma.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/admin/"],
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
