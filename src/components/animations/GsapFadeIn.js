"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapFadeIn = ({ children, className }) => {
  const el = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      el.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return <div ref={el} className={className}>{children}</div>;
};

export default GsapFadeIn;
