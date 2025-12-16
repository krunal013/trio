import React from "react";
import "@/styles/Hero.css"
import HeroAnimation from "./HeroAnimation";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <HeroAnimation>
      <HeroContent/>
    </HeroAnimation>
  );
}
