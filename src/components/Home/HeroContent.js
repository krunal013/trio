import React from "react";
import { Rubik } from "next/font/google";
import Link from "next/link";

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function HeroContent() {
    return <section className="w-full text-center pt-28 pb-20">
        {/* Main Heading */}
        <span className={`${rubik.className} text-zinc-800 text-4xl md:text-7xl font-semibold leading-tight tracking-normal`}>
            The #1 Tech Partner<br />
            for Digital Transformation
        </span>

        {/* Sub Text Row */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm tracking-wider text-black/70">
            <span>#1 IN WEB & APP DEVELOPMENT</span>
            <span>#1 IN DIGITAL BRAND EXPERIENCES</span>
            <span>#1 IN ENTERPRISE TECH SOLUTIONS</span>
        </div>

        {/* Buttons */}
        <div className=" flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
            <Link href="/contact">
                <button className="px-6 py-3 mb-5 md:mb-0  bg-gradient-to-br from-[#09d6c8] via-[#7190fa] to-[#bf64f9] text-white rounded-full text-sm font-bold tracking-wide cursor-pointer transition-all duration-300 active:scale-105">
                    Start free consultation
                </button>
            </Link>
            <Link href="/casestudies">
                <button className="px-6 py-3 border font-semibold border-black rounded-full text-sm tracking-wide text-black cursor-pointer transition-all duration-300 active:scale-105">
                    View our work
                </button>
            </Link>
        </div>
    </section>
}

