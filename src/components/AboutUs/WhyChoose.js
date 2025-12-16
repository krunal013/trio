"use client";
import React from "react";
import Image from "next/image";
import Paperbg from "../../../public/images/AboutUs/webp/paperbg.svg"
// React Icons
import { FaUserTie, FaTools, FaHandshake, FaLightbulb } from "react-icons/fa";

const WhyChoose = () => {
    return (
        <>
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto pt-20">
                <h3 className="text-3xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
                    Why Business Choose {''}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#09d6c8] via-[#7190fa] to-[#bf64f9]">
                        Triosphere
                    </span>
                    ?
                </h3>
                <p className="mt-4 text-xl  text-zinc-900  ">
                    Here's why businesses trust us to build their digital future & ultimate Business Growth
                </p>
            </div>
            <section className="relative py-10 lg:pt-28 bg-white">
                <Image
                    src={Paperbg}
                    alt="Paper Background"
                    fill
                    className="object-cover z-0 opacity-50"
                />
                <div className="z-10 mx-auto  lg:px-8 relative">


                    {/* Curved SVG Lines - LARGE DEVICES ONLY */}
                    <div className="absolute inset-x-0 top-36 lg:top-28 rotate-[28deg] pointer-events-none hidden lg:block">
                        <img
                            className="w-full lg:px-52 opacity-90"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                            alt="why choose us"
                        />
                    </div>
                    <div className="absolute inset-x-0 top-36 lg:top-[45%] rotate-[-20deg] pointer-events-none hidden lg:block">
                        <img
                            className="w-full lg:px-20 xl:px-40 opacity-90"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                            alt="why choose us"
                        />
                    </div>
                    <div className="absolute inset-x-0 top-36 lg:top-[85%] rotate-[28deg] pointer-events-none hidden lg:block">
                        <img
                            className="w-[70%] lg:px-20 opacity-180"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                            alt="why choose us"
                        />
                    </div>

                    {/* Cards */}
                    <div className="relative  grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-5 [@media_(min-width:768px)_and_(min-height:104px)]:px-5">

                        {/* CARD 1 */}
                        <div
                            className="
              mx-auto w-full max-w-sm bg-white border rounded-3xl p-5
              transform lg:rotate-[4deg] hover:rotate-[0deg] transition-all duration-300 cursor-pointer lg:-translate-y-20
            "
                        >

                            <div className="p-5 bg-yellow-50 rounded-3xl">

                                <div className="flex flex-col items-start gap-3">
                                    <div className="w-10 h-10 rounded-b-full rounded-tr-full bg-yellow-300 flex items-center justify-center text-white text-xl">
                                        <FaUserTie />
                                    </div>
                                    <h3 className="text-xl font-semibold text-black">Expertise</h3>
                                </div>
                                <p className="mt-4 bg-yellow-50  rounded-3xl text-black leading-relaxed">
                                    With years of proven experience, we craft high-quality, tailored
                                    digital solutions engineered for performance and growth. Our team is dedicated to every project we build with their expertise
                                </p>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div
                            className="
              mx-auto w-full max-w-sm bg-white border rounded-3xl p-8
              transform lg:rotate-[-4deg] hover:rotate-[0deg] transition-all duration-300 cursor-pointer lg:translate-y-10
            "
                        >
                            <div className="p-5 bg-purple-50 rounded-3xl">

                                <div className="flex flex-col items-start gap-3">
                                    <div className="w-10 h-10 rounded-b-full rounded-tr-full bg-purple-300 flex items-center justify-center text-white text-xl">
                                        <FaTools />
                                    </div>
                                    <h3 className="text-xl font-semibold text-black">Custom Solutions</h3>
                                </div>
                                <p className="mt-4 text-black bg-purple-50  rounded-3xl leading-relaxed">
                                    Every project is personalized — ensuring your business gets exactly
                                    the tools and technology it needs to succeed.
                                </p>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div
                            className="
              mx-auto w-full max-w-sm bg-white border rounded-3xl px-8 py-5
              transform lg:rotate-[6deg] hover:rotate-[0deg] transition-all duration-300 cursor-pointer lg:-translate-y-10
            "
                        >
                            <div className="p-5 bg-pink-50 rounded-3xl">

                                <div className="flex flex-col items-start gap-3">
                                    <div className="w-10 h-10 rounded-b-full rounded-tr-full bg-pink-300 flex items-center justify-center text-white text-xl">
                                        <FaHandshake />
                                    </div>
                                    <h3 className="text-xl font-semibold text-black">Customer-Focused</h3>
                                </div>
                                <p className="mt-4 text-black rounded-3xl bg-pink-50 leading-relaxed">
                                    Your satisfaction is our priority — we exceed expectations and build
                                    solutions centered around your business goals.
                                </p>
                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div
                            className="
              mx-auto w-full max-w-sm bg-white border rounded-3xl p-8
              transform lg:rotate-[-3deg] hover:rotate-[0deg] transition-all duration-300 cursor-pointer lg:translate-y-20
            "
                        >
                            <div className="p-5 bg-blue-50 rounded-3xl">

                                <div className="flex flex-col items-start gap-3">
                                    <div className="w-10 h-10 rounded-b-full rounded-tr-full bg-blue-300 flex items-center justify-center text-white text-xl">
                                        <FaLightbulb />
                                    </div>
                                    <h3 className="text-xl font-semibold text-black">Innovation</h3>
                                </div>
                                <p className="mt-4 text-black rounded-3xl bg-blue-50 leading-relaxed">
                                    We implement next-gen technologies to keep your business ahead of
                                    the curve with cutting-edge digital solutions.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section></>
    );
};

export default WhyChoose;
