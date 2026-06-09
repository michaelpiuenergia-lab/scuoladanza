import type { MetadataRoute } from "next";
import { COURSES } from "@/data/courses";

const BASE = "https://www.khaybullova.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/corsi", priority: 0.9 },
    { path: "/abbonamenti", priority: 0.8 },
    { path: "/chi-siamo", priority: 0.8 },
    { path: "/iscrizione", priority: 0.9 },
    { path: "/contatti", priority: 0.7 },
    { path: "/privacy", priority: 0.3 },
    // Pagine di dettaglio di ogni corso
    ...COURSES.map((c) => ({ path: `/corsi/${c.slug}`, priority: 0.6 })),
  ];

  return pages.map((p) => ({
    url: `${BASE}${p.path}`,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
