import Breadcrumb from "@/components/Breadcrumb";
import List from "@/components/CaseStudies/List";
import Container from "@/components/ui/Container";
import React from "react";

export const revalidate = 60;

export const metadata = {
  title: "Case Studies | Triosphere Tech – Real Projects & Success Stories",
  description:
    "Explore case studies from Triosphere Tech, a leading tech company in Ahmedabad, Gujarat. Discover how we build scalable websites, apps, cloud solutions, and digital products that drive real business growth.",

  keywords: [
    "Triosphere Tech case studies",
    "IT case studies Ahmedabad",
    "software development case studies",
    "tech company Gujarat portfolio",
    "web development portfolio Ahmedabad",
    "Triosphere projects",
    "digital product success stories",
    "app development case studies",
  ],

  alternates: {
    canonical: "https://www.triospheretech.com/casestudies",
  },

  openGraph: {
    title: "Triosphere Tech – Case Studies & Success Stories",
    description:
      "Dive into Triosphere Tech’s real-world success stories across web, mobile, cloud, and digital transformation projects.",
    url: "https://www.triospheretech.com/casestudies",
    siteName: "Triosphere Tech",
    locale: "en_IN",
    type: "website",
    see_also: [
      "https://www.instagram.com/triospheretech/",
      "https://www.linkedin.com/company/triospheretech/",
    ],
  },

  twitter: {
    card: "summary",
    title: "Triosphere Tech – Case Studies & Digital Success Stories",
    description:
      "Explore our portfolio of high-impact digital solutions, from SaaS and automation to enterprise systems and modern web & app development.",
    creator: "@triospheretech",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <>
      {/* Hero / Breadcrumb */}
      <Breadcrumb
        paths={[
          { name: "Home", href: "/" },
          { name: "Case Studies", href: "/casestudies" },
        ]}
        title="Explore Our Success Stories: Transformative Case Studies Across Industries"
        description="See how we help global brands innovate and grow."
        buttonText="Let’s Talk"
        buttonLink="/contact"
      />

      {/* Case Study List */}
      <section>
        <Container className="pb-10">
          <List />
        </Container>
      </section>
    </>
  );
};

export default Page;
