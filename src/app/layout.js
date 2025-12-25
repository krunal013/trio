import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainWrapper from "./MainWrapper";

export const metadata = {
  metadataBase: new URL("https://www.triospheretech.com"),

  title: {
    default: "Triosphere Tech - Leading Tech Company in Ahmedabad",
    template: "%s | Triosphere Tech",
  },

  description:
    "Triosphere Tech is a top tech company in Ahmedabad - Gujarat, providing web development, app development, DevOps, UI/UX, and digital transformation services.",

  keywords: [
    "tech company in Ahmedabad",
    "software company in Ahmedabad",
    "IT company in Gujarat",
    "web development company Ahmedabad",
    "mobile app development Ahmedabad",
    "Triosphere Tech",
    "cloud solutions Ahmedabad",
    "best IT company in Ahmedabad",
  ],

  authors: [{ name: "Triosphere Tech" }],

  openGraph: {
    title: "Triosphere Tech - Leading Tech Company in Ahmedabad",
    description:
      "Top-rated software & IT company based in Ahmedabad, Gujarat. We build websites, apps, cloud systems, automation solutions, and future-ready digital products.",
    url: "https://www.triospheretech.com",
    siteName: "Triosphere Tech",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // ✅ CORRECT favicon setup (PUBLIC FILES ONLY)
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // ⭐ MOST IMPORTANT FOR GOOGLE
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />

        <MainWrapper>{children}</MainWrapper>

        <Footer />

        {/* ✅ Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Triosphere Tech",
              url: "https://www.triospheretech.com",
              logo: "https://www.triospheretech.com/images/Logo/Logo_new.png",
              image: "https://www.triospheretech.com/images/Logo/Logo_new.png",
              sameAs: [
                "https://www.instagram.com/triospheretech/",
                "https://www.linkedin.com/company/triospheretech/",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "1205, Phoenix, Vijay Cross Road to Commerce Six Road, Navrangpura",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                postalCode: "380009",
                addressCountry: "IN",
              },
              telephone: "+918320633166",
              geo: {
                "@type": "GeoCoordinates",
                latitude: 23.0225,
                longitude: 72.5714,
              },
              openingHours: "Mo-Sa 09:00-18:00",
              priceRange: "₹₹",
            }),
          }}
        />
      </body>
    </html>
  );
}
