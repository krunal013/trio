"use client";

import React from "react";
import Container from "@/components/ui/Container";

const HiringSteps = () => {
  const steps = [
    {
      title: "Inquiry",
      desc: "Post your requirements of hiring a remote team of dedicated developers using our contact form.",
      active: true,
    },
    {
      title: "Select Candidates CV",
      desc: "Choose the best-fit candidates for your requirements by exploring our developers’ CVs.",
      active: false,
    },
    {
      title: "Take Candidate's Interview",
      desc: "Interview shortlisted candidates through phone or video call according to your convenience.",
      active: false,
    },
    {
      title: "Get Started",
      desc: "Once the interview process is done, simply sign the agreement and start working with your remote team.",
      active: false,
    },
  ];

  return (
    <section className="w-full bg-white md:py-10">
      <Container>
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 ">
          How to Hire Developers <br /> <span className="text-blue-500">From Triosphere</span>
        </h3>

        {/* Desktop Horizontal Layout */}
        <div className="hidden md:grid grid-cols-4 gap-10 mt-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              {/* Dot + Divider */}
              <div className="mb-6 flex items-center gap-3">
                <div
                  className={`h-3 w-3 rounded-full ${
                    step.active ? "bg-blue-600" : "bg-zinc-400"
                  }`}
                />
                <div className="flex-1 border-t border-zinc-300" />
              </div>

              {/* Title */}
              <h4 className="mb-2 text-lg lg:text-2xl font-bold text-zinc-900">
                {step.title}
              </h4>

              {/* Description */}
              <p className="max-w-[240px] text-sm leading-relaxed text-zinc-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile + Tablet Vertical Layout */}
        <div className="md:hidden flex flex-col gap-10 mt-10">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              {/* Dot + Line */}
              <div className="flex flex-col items-center">
                <div
                  className={`h-3 w-3 rounded-full ${
                    step.active ? "bg-blue-600" : "bg-zinc-400"
                  }`}
                />
                <div className="h-full border-l border-zinc-300" />
              </div>

              {/* Content */}
              <div>
                <h4 className="mb-1 text-lg font-semibold text-zinc-900">
                  {step.title}
                </h4>
                <p className="max-w-[260px] text-sm leading-relaxed text-zinc-600">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HiringSteps;
