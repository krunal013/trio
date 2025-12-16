import React from "react";
import Container from "@/components/ui/Container";

export default function Cta() {
  return (
    <section className="mt-12 lg:mt-16 mb-10">
      <Container>
        <div className="w-full">

          {/* TOP ROW */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-4">
            <div>
              <span className="block mb-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-600">
                Collaboration
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-900 leading-tight">
                Got a project?
                <br />
                Let’s talk.
              </h3>
            </div>

            <div className="flex-shrink-0">
              <button className="rounded-full bg-blue-500 px-7 py-3 text-sm sm:text-base font-bold text-white transition hover:bg-blue-600 active:scale-95">
                Contact Us
              </button>
            </div>
          </div>

          {/* DIVIDER + DESCRIPTION */}
          <div className="border-t border-zinc-300 pt-4">
            <p className="max-w-4xl text-sm sm:text-base lg:text-lg text-zinc-600">
              We're a team of creative tech-enthusiasts who are always ready to
              help businesses unlock their digital potential.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
