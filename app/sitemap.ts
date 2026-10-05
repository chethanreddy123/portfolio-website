import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://chethanreddy123.github.io/portfolio-website/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
