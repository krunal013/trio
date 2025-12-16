"use client";

import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import Perks from "./perks";



function breakAfterWords(text, limit = 12) {
  const words = text.split(" ");
  const first = words.slice(0, limit).join(" ");
  const rest = words.slice(limit).join(" ");
  return (
    <>
      {first}
      <br />
      {rest}
    </>
  );
}

const JobSection = ({ categories, jobs }) => {
  const [activeCategory, setActiveCategory] = useState("View All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobs
    .filter((job) =>
      activeCategory === "View All"
        ? true
        : job.jobCategory === activeCategory
    )
    .filter((job) =>
      job.jobHeading.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.jobDescription.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <section className="pt-2 md:pt-5 lg:pt-5   overflow-hidden">
      <div className=" mx-auto ">
        <span className="inline-block text-md font-semibold bg-blue-500 text-white py-1 px-3 rounded-full mb-4">
          We’re hiring!
        </span>

        <h3 className="text-4xl md:text-5xl font-bold mb-3">Be part of <span className="text-blue-500">our mission</span> </h3>

        <p className="text-zinc-600 max-w-xl mb-8">
          We're looking for passionate people to join us on our mission.
          We value flat hierarchies, clear communication, and full ownership and responsibility.
        </p>

        {/* SEARCH + CATEGORY PANEL */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

          {/* SEARCH */}
          <div className="relative w-full md:w-1/3 px-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-lg">
              <IoSearch />
            </span>
            <input
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search jobs…"
              className="w-full py-2.5 pl-12 pr-4 text-zinc-700 placeholder-zinc-400
                         bg-white/40 rounded-full border border-zinc-200
                         focus:outline-none focus:ring-2 focus:ring-black/20 transition"
            />
          </div>

          {/* CATEGORIES */}
          <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide 
                          lg:overflow-visible lg:flex-wrap lg:whitespace-normal">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium uppercase border-b transition 
                  ${activeCategory === cat
                    ? "border-black border-b-2"
                    : "border-zinc-300 hover:border-black"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* JOB LIST */}
      <div className="space-y-12  mx-auto ">
        {filteredJobs.map((job, i) => (
          <div key={i} className="border-b pb-6">
            <div className="flex justify-between items-start w-full gap-4">

              {/* LEFT CONTENT */}
              <div className="flex-1 min-w-0">

                {/* Header */}
                <div className="flex gap-3 items-center flex-wrap">
                  <span className="text-lg md:text-2xl font-semibold">
                    {job.jobHeading}
                  </span>

                  <span className="bg-zinc-800 rounded-full px-2 py-1 text-white font-semibold text-xs md:text-sm">
                    {job.jobPositions} Openings
                  </span>

                  <span className="bg-zinc-200 rounded-full px-2 py-1 text-black font-semibold text-xs md:text-sm">
                    {job.experience}
                  </span>

                  <span className="bg-zinc-200 rounded-full px-2 py-1 text-black font-semibold text-xs md:text-sm">
                    {job.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-zinc-600 mt-1 mb-3 line-clamp-3 text-sm md:text-base">
                  {breakAfterWords(job.jobDescription, 12)}
                </p>

                {/* Features */}
                <div className="flex gap-2 text-xs font-medium overflow-x-auto flex-nowrap 
                                whitespace-nowrap scrollbar-hide py-1 -mx-1 px-1">
                  {job.jobFeatures?.map((f, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full border border-zinc-300 bg-white flex-shrink-0"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* APPLY BUTTON with SLUG */}
              <Link
                href={`/careers/${job.slug}`}
                className="flex items-center gap-1 font-semibold text-sm md:text-xl shrink-0 transition-all duration-300 active:scale-105 hover:opacity-70"
              >
                Apply <FiArrowUpRight className="text-lg" />
              </Link>

            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto  ">
        <Perks/>
      </div>


    </section>
  );
};

export default JobSection;
