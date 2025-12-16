import React from "react";
import Container from "@/components/ui/Container";

const TechHero = ({ heading, description1, description2, points = [] }) => {
  return (
    <section>
      <Container>
        <div className="flex-1 text-left md:text-left">

          {/* Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
            {heading}
          </h1>

          {/* Content Grid */}
          <div className="mt-4 grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">

            {/* LEFT COLUMN */}
            <div className="space-y-5 text-zinc-900 text-left text-base md:text-lg leading-relaxed">
              <p>{description1}</p>
              <p>{description2}</p>
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <ul className="space-y-4">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 flex-shrink-0">
                      <div className="h-3 w-3 rounded-full border-2 border-blue-500" />
                    </div>
                    <span className="text-lg font-semibold text-zinc-800">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default TechHero;
