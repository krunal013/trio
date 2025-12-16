import React from "react";
import Image from "next/image";
import Hero from "../../../public/images/AboutUs/abouthero.webp";
import ContactForm from "./ContactForm";

const Hero2 = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-y-0 right-0 pointer-events-none">
        <Image
          fill
          className="object-cover"
          src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
          alt="Triosphere Tech background pattern"
        />
      </div>

      <section className="relative py-10 ">
        {/* ✅ Proper responsive container */}
        <div
          className="
            mx-auto 
            max-w-7xl
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-12 lg:gap-x-12">

            {/* Image */}
            <div className="order-1 lg:order-2">
              <Image
                className="w-full h-auto"
                src={Hero}
                alt="Triosphere Tech digital product illustration"
                priority
              />
            </div>

            {/* Content */}
            <div className="order-2 lg:order-1 text-left">
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold leading-tight text-zinc-900 font-pj">
                Crafting Digital Experiences That Inspire, Perform & Scale.
              </h1>

              <p className="mt-6 text-lg text-zinc-900 font-inter">
                Triosphere Tech is an Ahmedabad-based technology company building fast,
                secure and scalable digital products. From intuitive UI/UX to full-stack
                development and cloud engineering — we help brands turn ideas into
                powerful solutions that people love to use.
              </p>

              {/* <ContactForm /> */}

              {/* Stats */}
              <div className="flex justify-center lg:justify-start mt-10 space-x-8">
                <div className="flex items-center">
                  <p className="text-3xl sm:text-4xl font-medium text-zinc-900">150+</p>
                  <p className="ml-3 text-sm text-zinc-900">
                    Projects<br />Delivered
                  </p>
                </div>

                <div className="flex items-center">
                  <p className="text-3xl sm:text-4xl font-medium text-zinc-900">50+</p>
                  <p className="ml-3 text-sm text-zinc-900">
                    Brands<br />Empowered
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;
