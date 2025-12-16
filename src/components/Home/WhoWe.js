"use client";

import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Container from "../ui/Container";
import Link from "next/link";
import Image from "next/image";

// ✅ Rename image import to avoid conflict
import WhoWeImage from "../../../public/images/Home/Whowe.webp";

const WhoWe = () => {
  return (
    <Container>
      <section className="lg:my-10 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-center">

          {/* RIGHT SIDE IMAGE (Mobile first) */}
          <div className="w-full flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-full aspect-square">
              <Image
                src={WhoWeImage}
                alt="Who We Are - Triosphere Tech"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* LEFT SIDE CONTENT */}
          <div className="space-y-6 order-2 lg:order-1">
            <span className="text-4xl lg:text-5xl font-semibold py-3 block">
              Who <span className="text-blue-500">We Are</span>
            </span>

            <h3 className="text-lg font-normal text-[#111827] leading-snug md:mt-5">
              We’re a digital product and technology company turning ideas into
              scalable, user-centric solutions.
            </h3>

            <p className="text-zinc-800 leading-relaxed text-lg">
              At Triosphere Tech, we combine strategy, design, and engineering to
              build experiences that empower businesses. From startups to enterprises,
              we help brands innovate through modern web development, mobile apps,
              automation, and cloud-driven solutions.
            </p>

            <p className="text-zinc-800 leading-relaxed text-lg">
              Triosphere Tech is built on a culture of curiosity, collaboration,
              and continuous improvement. We work closely with every client to
              understand their challenges and refine their ideas.
            </p>

            <p className="text-zinc-800 leading-relaxed text-lg">
              We don’t just deliver a project and walk away — we provide ongoing
              support, optimization, and innovation as your business evolves.
            </p>

            <Link href="/about">
              <button className="text-[#2563eb] text-sm font-medium flex items-center gap-2 hover:underline">
                Explore Our Journey
                <MdArrowOutward />
              </button>
            </Link>
          </div>

        </div>
      </section>
    </Container>
  );
};

export default WhoWe;
