import { client } from "@/sanity/lib/client";
import JobSection from "./JobSection"; // Client Component

export default async function JobSectionServer() {
  const categories = await client.fetch(`
    *[_type == "jobPost" && isActive == true]{jobCategory}
  `);

  const jobs = await client.fetch(`
    *[_type == "jobPost" && isActive == true]{
      jobHeading,
      jobDescription,
      jobCategory,
      jobFeatures,
      jobPositions,
      experience,
      location,
      "slug": slug.current
    }
  `);

  const uniqueCategories = [
    "View All",
    ...new Set(categories.map((c) => c.jobCategory)),
  ];

  return <JobSection categories={uniqueCategories} jobs={jobs} />;
}
