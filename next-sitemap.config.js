/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://triospheretech.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/studio" },
    ],
  },
};
