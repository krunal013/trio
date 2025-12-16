import React from "react";
import Container from "@/components/ui/Container";

const HiringHero = ({ heading, dec1, dec2, dec3, dec4 }) => {
  return (
    <section>
      <Container>
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900">
          {heading}
        </h1>

        {/* Description */}
        <div className="mt-5 space-y-5 text-base md:text-lg text-zinc-800 font-semibold leading-relaxed">
          {dec1 && <p>{dec1}</p>}
          {dec2 && <p>{dec2}</p>}
          {dec3 && <p>{dec3}</p>}
          {dec4 && <p>{dec4}</p>}
        </div>
      </Container>
    </section>
  );
};

export default HiringHero;
