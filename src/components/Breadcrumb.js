import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import Container from "@/components/ui/Container";

const Breadcrumb = ({
  paths = [],
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className=" lg:py-10">
      <Container>
        <div className="bg-[#f5f5f5] rounded-xl px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-16 overflow-hidden">

          {/* Optional Breadcrumb Navigation */}
          {/*
          <ol className="flex items-center whitespace-nowrap mb-6">
            {paths.map((path, index) => (
              <li key={index} className="inline-flex items-center">
                <Link
                  href={path.href}
                  className="text-sm text-zinc-500 hover:text-zinc-900 transition"
                >
                  {path.name}
                </Link>

                {index < paths.length - 1 && (
                  <span className="mx-3 text-zinc-400">/</span>
                )}
              </li>
            ))}
          </ol>
          */}

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-zinc-900 leading-tight">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="mt-3 sm:mt-4 text-lg text-zinc-700 max-w-3xl">
              {description}
            </p>
          )}

          {/* CTA Button */}
          {buttonText && (
            <Link href={buttonLink || "#"} className="inline-block">
              <button className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-zinc-800">
                {buttonText}
                <FaAngleRight />
              </button>
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Breadcrumb;
