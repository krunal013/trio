import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import CardSection from "@/components/DigitalSolutions/Common/CardSection";
import { Development, Hiring, Industries, Tech } from "@/Data/digitalServices";
import Cta from "@/components/Cta";
import CaseStudySuggest from "@/components/CaseStudies/CaseStudySuggest";

export const metadata = {
  title: "Digital Solutions | Triosphere Tech – Modern IT & Digital Transformation Services",
  description:
    "Explore Triosphere Tech’s Digital Solutions – from automation, cloud engineering, UI/UX, and app development to complete digital transformation services. Based in Ahmedabad, Gujarat, we help businesses scale with modern technology.",

  keywords: [
    "digital solutions Ahmedabad",
    "IT solutions company Gujarat",
    "digital transformation services",
    "software solutions company Ahmedabad",
    "cloud solutions Ahmedabad",
    "business automation solutions India",
    "Triosphere Tech digital services",
    "modern tech solutions Ahmedabad",
  ],

  alternates: {
    canonical: "https://www.triospheretech.com/digitalsolutions",
  },

  openGraph: {
    title: "Digital Solutions by Triosphere Tech – Modern Tech for Modern Businesses",
    description:
      "Triosphere Tech provides advanced digital solutions including automation, cloud engineering, UI/UX, software development, and scalable web & app solutions for businesses worldwide.",
    url: "https://www.triospheretech.com/digitalsolutions",
    siteName: "Triosphere Tech",
    locale: "en_IN",
    type: "website",

    // Social authority enhancement
    see_also: [
      "https://www.instagram.com/triospheretech/",
      "https://www.linkedin.com/company/triospheretech/"
    ],
  },

  twitter: {
    card: "summary",
    title: "Triosphere Tech – Digital Solutions & Transformation Services",
    description:
      "Discover Triosphere Tech’s digital solutions including automation, cloud systems, UI/UX, custom development, and scalable tech services.",
    creator: "@triospheretech",
  },

  robots: {
    index: true,
    follow: true,
  },
};


const page = () => {
  return (
    <>
      <div className=" mx-auto">
        <Breadcrumb
          paths={[
            { name: "Home", href: "/" },
            { name: "Digital Solutions", href: "/digitalsolutions" },
          ]}
          title="We bring our Digital Solutions together to find the right fit."
          description="A suite of digital services to empower your business."
          buttonText="Let’s Talk"
          buttonLink="/contact"
        />
      </div>
      <div className="">
        <CardSection title="Custom Development, Designed for You" services={Development} />
      </div>
      <div className="bg-gradient-to-b from-white to-blue-50">
        <CardSection title="Build Scalable Products with Modern Tech" services={Tech} />
      </div>
      <div className="">
        <CardSection title="Industry Solutions Tailored for You" services={Industries} />
      </div>
      <div className="bg-gradient-to-b from-white to-blue-50">
        <CardSection title="Hire Developers That Build Strong Vision" services={Hiring} />
      </div>
      <CaseStudySuggest />
      <Cta />
    </>
  );
};

export default page;
