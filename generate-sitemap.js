const fs = require("fs");
const path = require("path");

// Define your website's domain
const SITE_URL = "https://renixlaboratories.com.bd";

// Define the pages you want to include in the sitemap
const pages = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/security-check",
  "/products",
  "/blogs",
  "/news",
  "/media",
  "/shasthokotha",
  "/shosthotarbarta",

  // Add more routes as needed
];

// Get the current date for the lastmod field
const lastModDate = new Date().toISOString().split("T")[0];

// Generate sitemap content
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${SITE_URL}${page}</loc>
      <lastmod>${lastModDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join("")}
</urlset>`;

// Ensure the public directory exists
const publicPath = path.join(__dirname, "public");
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath, { recursive: true });
}

// Write the sitemap file to the public directory
fs.writeFileSync(path.join(publicPath, "sitemap.xml"), sitemapContent, "utf8");

console.log("✅ Sitemap successfully generated: public/sitemap.xml");
