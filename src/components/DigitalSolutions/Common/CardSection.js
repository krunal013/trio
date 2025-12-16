"use client";

import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { slugify } from "@/Data/digitalServices";
import Ripple from "@/Atoms/Ripple";
import Container from "@/components/ui/Container";

const CardSection = ({ title, services }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleCardClick = (serviceTitle) => {
    const slug = slugify(serviceTitle);
    router.push(`${pathname}/${slug}`);
  };

  return (
    <section className="mt-5 pb-10">
      <Container>
        {/* Section Title */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-10 text-left">
          {title}
        </h3>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service, index) => (
            <div className="relative group" key={service.title}>
              {/* Gradient Glow */}
              <div
                className="
                  absolute inset-0 rounded-xl
                  bg-gradient-to-br from-[#3d3d3d] via-[#b3b3b3] to-[#242424]
                  blur-[6px] opacity-20
                  transition duration-300
                "
              />

              {/* Card */}
              <Ripple
                onClick={() => handleCardClick(service.title)}
                key={index}
                className="
                  relative h-full cursor-pointer
                  rounded-xl border border-zinc-200 bg-white
                  px-5 py-8
                  transition-all duration-300
                  hover:bg-zinc-50
                  active:scale-[0.98]
                "
              >
                <div className="flex h-full flex-col items-start">
                  {/* Icon */}
                  <div className="mb-6 min-h-[80px] max-h-[100px] rounded-xl border p-3 shadow-sm">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={70}
                      height={40}
                    />
                  </div>

                  {/* Title */}
                  <h4 className="mb-3 text-xl font-semibold text-zinc-900">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="mb-6 text-lg text-zinc-800 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Link Text */}
                  {service.linkText && (
                    <div className="mt-auto flex items-center gap-2">
                      <span className="inline-block font-semibold text-blue-600 hover:underline">
                        {service.linkText}
                      </span>
                    </div>
                  )}
                </div>
              </Ripple>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CardSection;
