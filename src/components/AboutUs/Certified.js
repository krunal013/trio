import React from "react";
import Image from "next/image";

import Clutch from "../../../public/images/AboutUs/webp/clutch.webp";
import Google from "../../../public/images/AboutUs/webp/google.webp";
import Aws from "../../../public/images/AboutUs/webp/aws.webp";
import Android from "../../../public/images/AboutUs/webp/android.webp";
import Apple from "../../../public/images/AboutUs/webp/apple.webp";
import Shopify from "../../../public/images/AboutUs/webp/shopify.webp";
import Upwork from "../../../public/images/AboutUs/webp/upwork.webp";

const logos = [
  { id: 1, img: Clutch, h: 6, bh:28, bw:36, bwmd:6 },
  { id: 2, img: Aws, h: 10, bh:28, bw:36, bwmd:20 },
  { id: 3, img: Android, h: 6, bh:28, bw:36, bwmd:8 },
  { id: 4, img: Apple, h: 10, bh:28, bw:36, bwmd:10 },
  { id: 5, img: Shopify, h: 10, bh:28, bw:36, bwmd:10 },
  { id: 6, img: Upwork, h: 10, bh:28, bw:36, bwmd:10 },
];

const Certified = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center lg:pt-44">

        {/* LEFT CONTENT */}
        <div>
          <h3 className="text-3xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
            Customers and brands love working with  <span className="italic font-normal font-sans">Triosphere Tech</span> 
          </h3>

          <p className="mt-6 text-xl  text-zinc-900leading-relaxed max-w-md">
            We are trusted and certified by global platforms. Our dedication,
            innovation, and consistent high-quality outputs have earned us recognition 
            from the best in the industry.
          </p>
        </div>

        {/* RIGHT SIDE LOGO GRID WITH BACKGROUND */}
        <div className="relative">
          
          {/* Background Glow */}
          <div
            className="
              absolute inset-0 
              bg-gradient-to-br from-[#09d6c8] via-[#7190fa] to-[#bf64f9]
              blur-3xl opacity-30
              rounded-3xl
            "
          ></div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {logos.map((item) => (
              <div
                key={item.id}
                className={`p-3  lg:w-${item.bw} rounded-xl bg-white/40 hover:bg-white/80 transition-all duration-300 backdrop-blur-md border border-white/40 flex items-center justify-center`}
              >
                <Image
                  src={item.img}
                  alt="logo"
                  className={`h-${item.h} md:h-${item.bwmd} lg:h-${item.h} w-auto object-contain`}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center md:mr-32 lg:mr-8 py-5">
            <div className="p-3 w-36 rounded-xl bg-white/40 hover:bg-white/80 transition-all duration-300 backdrop-blur-md border border-white/40 flex items-center justify-center">
                <Image
                  src={Google}
                  alt="logo"
                  className={`h-8 w-auto object-contain`}
                />
            </div>
          </div>
            

        </div>

      </div>
    </section>
  );
};

export default Certified;
