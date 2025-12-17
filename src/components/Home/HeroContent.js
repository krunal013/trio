import React from "react";
import Link from "next/link";
import { CgEditBlackPoint } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";



export default function HeroContent() {
    return <section className="w-full text-center pt-20 md:pt-28 pb-20">
        {/* Main Heading */}
        <span className={` text-zinc-800 text-4xl md:text-7xl  leading-tight tracking-normal`}>
           Powering the Next Generation <br/>
of Digital Experience

        </span>

        {/* Sub Text Row */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-8 text-sm tracking-wider text-black/70">
            <span>Next-Gen Web & Mobile Platforms</span>
            <CgEditBlackPoint className="hidden lg:block" />
            <span>Immersive Digital Interfaces</span>
            <CgEditBlackPoint className="hidden lg:block" />
            <span>Enterprise-Grade Cloud Solutions</span>
        </div>

        {/* Buttons */}
        <div className=" flex flex-row  md:flex-row items-center justify-center gap-4 mt-12">
            <Link href="/contact" aria-label="Triosphere tech contact page">
                <button className=" px-6 py-3  md:mb-0 cursor-pointer shadow-lg  bg-gradient-to-br from-[#09d6c8] via-[#7190fa] to-[#bf64f9] text-white rounded-full text-sm font-bold tracking-wide  transition-all duration-300 active:scale-105">
                    Build With Us
                </button>
            </Link>
            <Link href="/casestudies" aria-label="Triosphere tech case studies">
                <button className="px-6 py-3 flex items-center justify-between gap-1 border font-semibold shadow-md border-black rounded-full text-sm tracking-wide text-black cursor-pointer transition-all duration-300 active:scale-105">
                    View our work <IoIosArrowForward className="inline-block text-md"/>
                </button>
            </Link>
        </div>
    </section>
}

