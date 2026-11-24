import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/technology", "/solutions", "/ecosystem", "/about", "/roadmap", "/contact", "/investors", "/privacy", "/terms"];
  return pages.map((page) => ({ url: `${site.url}${page}`, changeFrequency: "monthly", priority: page === "" ? 1 : 0.65 }));
}
