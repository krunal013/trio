import React from "react";
import Image from "next/image";
import LogoInHand from "../../../public/images/Home/LogoInHand1.webp";
import Link from "next/link";

const NewCta = () => {
  return (
    <section className="relative bg-white overflow-hidden pb-20 pt-10">

      {/* ========================= */}
      {/*  TOP IMAGE + GLOW         */}
      {/* ========================= */}
      <div className="flex justify-center relative">
        <div className="absolute top-20 w-[520px] h-auto bg-gradient-to-br 
          from-[#09d6c8] via-[#7190fa] to-[#bf64f9]
          blur-[170px] opacity-70 rounded-full pointer-events-none">
        </div>

        <Image
          src={LogoInHand}
          alt="Triosphere Logo in Hand"
          className="relative w-[650px] max-w-full select-none pointer-events-none top-10 md:top-0"
          priority
        />
      </div>


      {/* ========================= */}
      {/*  CURVED BOTTOM SECTION   */}
      {/* ========================= */}
      <div className="relative w-full">

        <div className="absolute top-20 md:top-0 left-1/2 transform -translate-x-1/2 
            w-[80%] md:w-[60%] h-[70px] 
            bg-gradient-to-br from-[#09d6c8] via-[#7190fa] to-[#bf64f9]
            blur-[40px] opacity-40 rounded-full">
        </div>

        <div className="relative bg-white/60 backdrop-blur-xl h-[250px] w-full rounded-t-[100%]"></div>
      </div>


      {/* ========================= */}
      {/*  TEXT SECTION             */}
      {/* ========================= */}
      <div className="text-center px-4 mt-[-210px] relative z-10">

        <h3 className="text-[32px] sm:text-[40px] md:text-[45px] font-bold text-[#0e1527]">
          Connect with Triosphere <br />
          <span>and Grow with Modern Tech</span>
        </h3>

        <p className="max-w-xl mx-auto mt-3 text-gray-600 leading-relaxed">
          Empower your business with cutting-edge digital solutions.  
          Triosphere leverages modern technology to help you scale faster,  
          streamline operations, and unlock new growth opportunities.
        </p>

        <div className="flex items-center justify-center gap-4 mt-7">
          <Link href="/contact" className="inline-block">
          <button className="px-6 py-3 rounded-full shadow-md hover:opacity-90 transition-all active:scale-95 cursor-pointer font-semibold
            text-white bg-gradient-to-r from-[#09d6c8] via-[#7190fa] to-[#bf64f9]">
            ✦ Connect With Us
          </button>
          </Link>
           <Link href="/about" className="inline-block">
          <button className="px-6 py-3 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-all active:scale-95 cursor-pointer ">
            Learn More
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewCta;
