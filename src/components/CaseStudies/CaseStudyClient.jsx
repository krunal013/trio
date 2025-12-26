"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CaseStudyClient = ({ categories, caseStudies }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCaseStudies =
    activeCategory === "all"
      ? caseStudies
      : caseStudies.filter(
          (item) => item.category?.slug?.current === activeCategory
        );

  return (
    <>
      {/* CATEGORY SWITCHER */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 mt-5 lg:mt-10">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer shadow-md transition-all active:scale-95 duration-300
            ${
              activeCategory === "all"
                ? "bg-blue-500 text-white"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
            }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.slug.current}
            onClick={() => setActiveCategory(cat.slug.current)}
            className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all active:scale-95 duration-300
              ${
                activeCategory === cat.slug.current
                  ? "bg-blue-500 text-white"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
              }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* CASE STUDY CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCaseStudies.length === 0 ? (
          <p className="text-center text-zinc-500 col-span-full">
            No case studies found.
          </p>
        ) : (
          filteredCaseStudies.map((item) => (
            <Link
              key={item.slug.current}
              href={`/casestudies/${item.slug.current}`}
              className="group block text-left"
            >
              <div className="flex flex-col">
                {item.mainImage?.asset?.url && (
                  <div className="relative w-full h-48 md:h-56 lg:h-60 rounded-xl overflow-hidden">
                    <Image
                      src={item.mainImage.asset.url}
                      alt={item.name}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                )}

                <h3 className="mt-4 text-xl font-semibold text-zinc-900 group-hover:text-zinc-700 transition">
                  {item.name}
                </h3>

                <p className="text-sm text-zinc-600 mt-2 line-clamp-2">
                  {item.technologies?.join(", ") ||
                    "Discover insights, strategies, and performance results in this case study."}
                </p>

                <p className="text-sm text-zinc-500 mt-3">
                  {item.publishedAt &&
                    new Date(item.publishedAt).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default CaseStudyClient;
