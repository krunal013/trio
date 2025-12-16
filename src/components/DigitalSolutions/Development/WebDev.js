import React from "react";
import {
  MdDevices,
  MdOutlineCategory,
} from "react-icons/md";
import { PiDevices } from "react-icons/pi";
import { TbApi } from "react-icons/tb";
import { CgPerformance } from "react-icons/cg";
import Container from "@/components/ui/Container";

const WebDev = () => {
  return (
    <section className="">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* LEFT CONTENT */}
          <div className="flex-1 text-left lg:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
              Complete Web Development Solutions To Improve Your Business
            </h3>

            <div className="mt-5 space-y-5 text-zinc-900 text-left text-base md:text-lg leading-relaxed">
              <p>
                Our web developers build scalable, secure, and high-performing
                applications using modern frameworks and best practices. From
                clean UI to robust backend architecture, we deliver solutions
                tailored to your business goals.
              </p>

              <p>
                We create responsive websites that adapt seamlessly across
                devices and screen sizes, ensuring consistent user experience
                on desktop, tablet, and mobile.
              </p>

              <p>
                Our team integrates secure APIs and third-party services to
                enable smooth data exchange, automation, and system
                connectivity across platforms.
              </p>

              <p>
                Performance optimization is built into our development process,
                ensuring fast load times, scalability, and long-term
                reliability.
              </p>

              <p>
                We deliver industry-specific web solutions that align with
                operational workflows, compliance requirements, and growth
                objectives.
              </p>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:w-[360px] flex flex-col gap-6 mt-4 lg:mt-0">
            <div>
              <div className="rounded-t-xl w-fit bg-blue-600 px-5 py-2 text-md font-bold text-white">
                Our Web Development Features
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-bl-xl rounded-br-xl rounded-tr-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-blue-100 p-2.5">
                    <MdDevices className="text-xl text-blue-600" />
                  </div>
                  <span className="font-semibold text-zinc-800">
                    Cross-Platform Compatibility
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-blue-100 p-2.5">
                    <PiDevices className="text-xl text-blue-800" />
                  </div>
                  <span className="font-semibold text-zinc-800">
                    Mobile Responsive Designs
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-blue-100 p-2.5">
                    <TbApi className="text-xl text-blue-800" />
                  </div>
                  <span className="font-semibold text-zinc-800">
                    API Integration for Smooth Connectivity
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-blue-100 p-2.5">
                    <CgPerformance className="text-xl text-blue-800" />
                  </div>
                  <span className="font-semibold text-zinc-800">
                    Performance Optimized Solutions
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-blue-100 p-2.5">
                    <MdOutlineCategory className="text-xl text-blue-800" />
                  </div>
                  <span className="font-semibold text-zinc-800">
                    Industry-Specific Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default WebDev;
