import React from "react";
import { client } from "@/sanity/lib/client";
import { FiArrowLeft } from "react-icons/fi";
import ApplyJobForm from "@/components/Careers/ApplyJobForm";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "jobPost" && defined(slug.current)]{
      "slug": slug.current
    }`
  );

  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

async function fetchJob(slug) {
  return client.fetch(
    `*[_type == "jobPost" && slug.current == $slug][0]{
      jobHeading,
      jobPositions,
      experience,
      location,
      mainDescription,
      specification,
      responsibilities,
      qualifications
    }`,
    { slug }
  );
}

export default async function Page({ params }) {
  const { slug } = await params;
const job = await fetchJob(slug);


  if (!job) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center text-2xl font-semibold">
        Job not found
      </div>
    );
  }

  return (
    <Container>
    <section
      className=""
    >
      {/* BACK BUTTON */}
      <Link
        href="/careers"
        className="flex items-center gap-2 bg-zinc-100 w-fit rounded-xl p-1 px-3 text-zinc-800 mb-5 hover:opacity-70 text-lg font-semibold active:scale-110 transition-all duration-300 cursor-pointer"
      >
        <FiArrowLeft />
        Back
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 text-[17px] leading-relaxed">
          <h4 className="text-zinc-500 mb-3 text-lg">Job Description</h4>

          <span className="text-4xl md:text-5xl font-bold mb-5 block">
            {job.jobHeading}
          </span>

          <p className="text-zinc-600 mb-8 text-lg">
            {job.jobPositions || "1"} Opening |{" "}
            {job.experience || "0–1"} Exp | {job.location || "Ahmedabad"}
          </p>

          {/* About this Role */}
          <h3 className="text-2xl font-semibold mb-3">About This Role</h3>
          <p className="text-zinc-700 mb-10 text-[17px] leading-8">
            {job.mainDescription}
          </p>

          {/* Job Specification */}
          <h3 className="text-2xl font-semibold mb-5">Job Specification:</h3>
          <div className="space-y-5 mb-12">
            {job.specification?.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-xl">➤</span>
                <p className="text-zinc-800 leading-8">{item}</p>
              </div>
            ))}
          </div>

          {/* Responsibilities */}
          <h3 className="text-2xl font-semibold mb-5">
            Additional Roles and Competencies:
          </h3>
          <div className="space-y-5 mb-12">
            {job.responsibilities?.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-xl">➤</span>
                <p className="text-zinc-800 leading-8">{item}</p>
              </div>
            ))}
          </div>

          {/* Qualifications */}
          <h3 className="text-2xl font-semibold mb-4">Qualifications:</h3>
          <ul className="list-disc pl-6 text-zinc-800 space-y-3 text-[17px]">
            {job.qualifications?.map((q, idx) => (
              <li key={idx}>{q}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT FORM PANEL — STICKY */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl md:p-8 md:border border-dashed sticky top-24">
            <h3 className="text-3xl font-semibold mb-3">Apply For Job</h3>
            <p className="text-zinc-600 text-[15px] mb-8 leading-7">
              You are just one step away from joining our amazing team.
            </p>

            <ApplyJobForm job={job} />
          </div>
        </div>
      </div>
    </section>
    </Container>
  );
}
