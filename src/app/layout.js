import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainWrapper from "./MainWrapper";
import Androidchrome192x192 from "./favicons/android-chrome-192x192.png";
import Androidchrome512x512 from "./favicons/android-chrome-512x512.png";
import AppleTouchIcon from "./favicons/apple-touch-icon.png";
import Favicon16x16 from "./favicons/favicon-16x16.png";
import Favicon32x32 from "./favicons/favicon-32x32.png";

export const metadata = {
  metadataBase: new URL("https://www.triospheretech.com"),

  // 🔥 Title Optimization
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

  other: {
    "og:see_also": [
      "https://www.instagram.com/triospheretech/",
      "https://www.linkedin.com/company/triospheretech/",
    ],
  },

  // 🔥 OpenGraph
  openGraph: {
    title: "Triosphere Tech - Leading Tech Company in Ahmedabad",
    description:
      "Top-rated software & IT company based in Ahmedabad, Gujarat. We build websites, apps, cloud systems, automation solutions, and future-ready digital products.",
    url: "https://www.triospheretech.com",
    siteName: "Triosphere Tech",
    locale: "en_IN",
    type: "website",
  },

  // 🔥 Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // 🔥 Correct Favicon + Touch Icons
  icons: {
    icon: [
      { url: Favicon16x16.src, sizes: "16x16", type: "image/png" },
      { url: Favicon32x32.src, sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: AppleTouchIcon.src, sizes: "180x180", type: "image/png" },
    ],
    shortcut: Favicon32x32.src,
    other: [
      {
        rel: "icon",
        url: Androidchrome192x192.src,
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: Androidchrome512x512.src,
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

        <MainWrapper>
          {children}
        </MainWrapper>

        <Footer />

        {/* 🔥 Local Business Schema (Corrected + Validated) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Triosphere Tech",
              url: "https://www.triospheretech.com",
              logo:
                "https://www.triospheretech.com/images/Logo/Logo_new.png",

              sameAs: [
                "https://www.instagram.com/triospheretech/",
                "https://www.linkedin.com/company/triospheretech/",
              ],

              image:
                "https://www.triospheretech.com/images/Logo/Logo_new.png",

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
