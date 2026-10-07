import type { MetadataRoute } from "next";

const siteUrl = "https://noybcore.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
  ];
}