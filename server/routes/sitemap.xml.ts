import { defineEventHandler } from "h3";
import { useRuntimeConfig } from "#imports";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.siteUrl || "https://coube.kz";
  const locales = ["en", "ru", "kk"];
  const pages = ["", "/customer", "/driver", "/about"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${pages
    .map((page) =>
      locales
        .map(
          (locale) => `
    <url>
      <loc>${baseUrl}${locale === "en" ? page : `/${locale}${page}`}</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page === "" ? "1.0" : "0.8"}</priority>
      ${locales
        .map(
          (altLocale) => `
        <xhtml:link
          rel="alternate"
          hreflang="${altLocale}"
          href="${baseUrl}${altLocale === "en" ? page : `/${altLocale}${page}`}"
        />`
        )
        .join("")}
    </url>`
        )
        .join("")
    )
    .join("")}
</urlset>`;

  event.node.res.setHeader("Content-Type", "application/xml");
  return sitemap;
});
