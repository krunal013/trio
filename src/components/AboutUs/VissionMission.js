"use client";
import React from "react";
import { Eye, Rocket, ShieldCheck } from "lucide-react";

const VissionMission = () => {
  return (
    <section className="pt-10 md:pb-10 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <h3 className=" font-bold leading-tight text-black text-3xl md:text-4xl lg:text-4xl">
            Vision . Mission . Values
          </h3>
          <p className="max-w-lg mx-auto mt-4  leading-relaxed text-xl  text-zinc-900">
            At Triosphere Tech, everything we build is driven by clarity, 
            innovation, and a commitment to shaping powerful digital experiences.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">

          {/* Curved Line (unchanged) */}
          <div className="absolute inset-x-0 hidden xl:px-44 top-5 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt="visionmisson"
            />
          </div>

          {/* 3 Blocks */}
          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">

            {/* VISION */}
            <div>
              <div className="w-28 h-28 mx-auto rounded-full p-[2px] bg-gradient-to-br from-[#09d6c8] via-[#7190fa] to-[#bf64f9]">
                <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
                  <Eye size={52} className="text-[#0e1527]" />
                </div>
              </div>

              <h3 className="mt-6 text-3xl font-normal leading-tight text-black md:mt-5">
                Vision
              </h3>
              <p className="mt-4 text-base text-zinc-600">
                To become a global technology leader by crafting intelligent, 
                scalable, and future-ready digital solutions that empower brands 
                to innovate and grow.
              </p>
            </div>

            {/* MISSION */}
            <div>
              <div className="w-28 h-28 mx-auto rounded-full p-[2px] bg-gradient-to-br from-[#09d6c8] via-[#7190fa] to-[#bf64f9]">
                <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
                  <Rocket size={52} className="text-[#0e1527]" />
                </div>
              </div>

              <h3 className="mt-6 text-3xl font-normal leading-tight text-black md:mt-5">
                Mission
              </h3>
              <p className="mt-4 text-base text-zinc-600">
                To deliver high-impact websites, applications, and automation
                systems that elevate business efficiency and accelerate 
                digital transformation.
              </p>
            </div>

            {/* VALUES */}
            <div>
              <div className="w-28 h-28 mx-auto rounded-full p-[2px] bg-gradient-to-br from-[#09d6c8] via-[#7190fa] to-[#bf64f9]">
                <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
                  <ShieldCheck size={52} className="text-[#0e1527]" />
                </div>
              </div>

              <h3 className="mt-6 text-3xl font-normal leading-tight text-black md:mt-5">
                Values
              </h3>
              <p className="mt-4 text-base text-zinc-600">
                We believe in innovation, transparency, dedication, and 
                delivering exceptional value through every digital solution 
                we create.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VissionMission;
