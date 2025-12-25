import React from "react";
import { client } from "@/sanity/lib/client";
import CaseStudyClient from "./CaseStudyClient";

const List = async () => {
  // Fetch categories
  const categories = await client.fetch(
    `*[_type == "caseStudyCategory"]{
      title,
      slug
    }`
  );

  // Fetch all case studies ONCE
  const caseStudies = await client.fetch(
    `*[_type == "caseStudy"] | order(publishedAt desc){
      name,
      slug,
      mainImage{asset->{url}},
      category->{title, slug},
      languages,
      publishedAt
    }`
  );

  return (
    <div className="text-center mx-auto mt-5 md:mt-0">
      <h1 className="text-3xl md:text-5xl font-semibold">
        Case Studies
      </h1>

      {/* Client-only UI logic */}
      <CaseStudyClient
        categories={categories}
        caseStudies={caseStudies}
      />
    </div>
  );
};

export default List;
