import React from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

const CaseStudySuggest = async () => {
  let caseStudies = [];

  try {
    const query = `
      *[_type == "caseStudy"]{
        name,
        slug,
        mainImage{asset->{url}},
        "category": category->title,
        languages,
        publishedAt
      }
    `;
    const data = await client.fetch(query);
    caseStudies = data.sort(() => 0.5 - Math.random()).slice(0, 3);
  } catch (err) {
    console.error("Error fetching case studies:", err);
  }

  return (
    <section className="mt-12 lg:mt-16">
      <Container>
        {/* HEADER */}
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h3 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-zinc-900">
              Explore <span className="text-blue-500">Case Studies</span>
            </h3>
            <p className="text-zinc-800 text-base lg:text-lg mt-2">
              Discover how we bring ideas to life through innovation
            </p>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/casestudies"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-blue-500 font-semibold transition hover:bg-zinc-200"
            >
              View More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* CARDS */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-6 lg:grid lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 lg:w-auto rounded-xl bg-zinc-50 p-6 transition hover:shadow-md"
              >
                <div className="flex items-start gap-4 mb-4">
                  {/* Image */}
                  <div className="relative w-20 h-20 rounded-lg bg-white p-3 shadow-sm">
                    {study.mainImage?.asset?.url ? (
                      <Image
                        src={study.mainImage.asset.url}
                        alt={study.name}
                        fill
                        className="object-contain rounded-md"
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-100 rounded-md" />
                    )}
                  </div>

                  <h4
                    className="text-lg font-semibold text-zinc-900 leading-snug line-clamp-3"
                    title={study.name}
                  >
                    {study.name}
                  </h4>
                </div>

                {/* Meta */}
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  {study.category ? (
                    <>
                      From{" "}
                      <span className="font-medium text-zinc-900">
                        {study.category}
                      </span>{" "}
                      using{" "}
                      <span className="font-medium text-blue-600">
                        {study.languages?.join(", ") || "various technologies"}
                      </span>
                    </>
                  ) : (
                    "A showcase of our recent success story."
                  )}
                </p>

                {/* Arrow */}
                <div className="flex justify-end">
                  <Link
                    href={`/casestudies/${study.slug.current}`}
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 text-blue-500 transition hover:bg-blue-500 hover:text-white"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE CTA */}
        <div className="flex justify-center mt-6 md:hidden">
          <Link
            href="/casestudies"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-blue-500 font-medium transition hover:bg-zinc-200"
          >
            View More Case Studies
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudySuggest;
