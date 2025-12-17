import React from "react";
import "@/styles/Hero.css"
import HeroAnimation from "./HeroAnimation";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-blue-50">
  <div className="absolute inset-0 pointer-events-none">
    <HeroAnimation />
  </div>

  <div className="relative z-10">
    <HeroContent />
  </div>
</div>

  );
}
