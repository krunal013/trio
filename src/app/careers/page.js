import Breadcrumb from "@/components/Breadcrumb";
import JobSectionServer from "@/components/Careers/JobSectionServer";
import Container from "@/components/ui/Container";
import React from "react";

export const revalidate = 60;

export const metadata = {
  title: "Careers | Triosphere Tech – IT Jobs & Opportunities in Ahmedabad",
  description:
    "Join Triosphere Tech, a fast-growing software and IT company in Ahmedabad, Gujarat. Explore openings in web development, app development, UI/UX, cloud, DevOps, project management, and more.",

  keywords: [
    "IT jobs Ahmedabad",
    "software jobs Ahmedabad",
    "careers in tech Ahmedabad",
    "IT company hiring in Gujarat",
    "web developer jobs Ahmedabad",
    "app developer jobs Ahmedabad",
    "Triosphere Tech careers",
    "Triosphere hiring",
    "IT fresher jobs Gujarat",
    "software company vacancies Ahmedabad",
  ],

  alternates: {
    canonical: "https://www.triospheretech.com/careers",
  },

  openGraph: {
    title: "Careers at Triosphere Tech – Build Your Future with Us",
    description:
      "Explore career opportunities at Triosphere Tech. We are hiring developers, designers, DevOps engineers, QA testers, and project managers in Ahmedabad.",
    url: "https://www.triospheretech.com/careers",
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
    title: "Careers at Triosphere Tech – Join Our Team",
    description:
      "Discover open positions and IT career opportunities at Triosphere Tech in Ahmedabad.",
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
          { name: "Careers", href: "/careers" },
        ]}
        title="Careers at Triosphere Tech"
        description="Build your future with a team that values innovation, ownership, and growth."
        buttonText="Join the Team"
        // buttonLink="/contact"
      />

      {/* Job Listings */}
      <section>
        <Container>
          <JobSectionServer />
        </Container>
      </section>
    </>
  );
};

export default Page;
