export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://gaganbaghel.com/sitemap.xml",
    host: "https://gaganbaghel.com",
  };
}
