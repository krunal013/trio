"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

import Experience from "../../../../public/images/DigitalSolution/Development/webp/userexperience.webp";
import Transparency from "../../../../public/images/DigitalSolution/Development/webp/transparency.webp";
import Quality from "../../../../public/images/DigitalSolution/Development/webp/qualitycoding.webp";
import Consultation from "../../../../public/images/DigitalSolution/Development/webp/consulting.webp";
import Support from "../../../../public/images/DigitalSolution/Development/webp/support.webp";
import Future from "../../../../public/images/DigitalSolution/Development/webp/future.webp";

const WhyUS = ({ techname, description }) => {
  const steps = [
    {
      image: Experience,
      title: "Decades of Experience",
      description:
        `Leverage our extensive experience in delivering successful ${techname} development projects across various industries.`,
    },
    {
      image: Transparency,
      title: "Integrity & Transparency",
      description:
        "We take time to understand your needs, objectives, and the challenges your software aims to address.",
    },
    {
      image: Quality,
      title: "Quality Coding, Guaranteed",
      description:
        "Our development follows clean architecture, scalable patterns, and performance-focused best practices.",
    },
    {
      image: Consultation,
      title: "Free Consultation, No Strings Attached",
      description:
        "Get expert guidance on architecture, features, and roadmap before committing to development.",
    },
    {
      image: Support,
      title: "Dedicated Support",
      description:
        "We rigorously test, monitor, and support your product to ensure reliability and long-term success.",
    },
    {
      image: Future,
      title: "Designed for the Future",
      description:
        "Our solutions are built to scale, adapt, and evolve with your business and technology roadmap.",
    },
  ];

  return (
    <section className="mt-12 lg:mt-16">
      <Container>
        {/* Heading */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900">
          Why choose Triosphere for {techname} Development
        </h3>

        {/* Optional description (kept commented if you need it later) */}
        {/*
        <p className="mt-3 max-w-2xl text-zinc-700 text-base md:text-lg">
          {description}
        </p>
        */}

        {/* Cards */}
        <div className="mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                rounded-xl border border-zinc-100 bg-zinc-50 p-6
                transition-transform duration-300
                hover:-rotate-1
              "
            >
              <Image
                src={step.image}
                alt={step.title}
                className="mb-4 h-14 w-14"
              />

              <h4 className="mb-2 text-lg font-semibold text-zinc-900">
                {step.title}
              </h4>

              <p className="text-sm leading-relaxed text-zinc-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyUS;
