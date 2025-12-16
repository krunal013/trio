import React from "react";
import { MdContentPaste, MdSecurity } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";
import { TbBrandWordpress } from "react-icons/tb";
import { PiSquaresFourBold } from "react-icons/pi";
import Container from "@/components/ui/Container";

const CmsDev = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* LEFT CONTENT */}
          <div className="flex-1 text-left lg:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
              Powerful CMS Solutions to Manage Your Digital Content Easily
            </h3>

            <div className="mt-4 space-y-5 text-zinc-900 text-left text-base md:text-lg leading-relaxed">
              <p>
                We build CMS platforms that allow you to manage your website
                without writing a single line of code. Whether you're updating
                pages, adding blogs, or publishing media content, our CMS
                solutions give you full control through intuitive dashboards.
              </p>

              <p>
                Our team develops highly customizable WordPress solutions using
                modern builders like Elementor, Gutenberg, and WPBakery. From
                corporate sites to blogs and eCommerce stores, we deliver fast,
                SEO-ready, and secure platforms.
              </p>

              <p>
                For scalability-driven businesses, we provide Headless CMS
                development using Strapi, Sanity, and Contentful—ensuring
                performance and flexibility across web and mobile platforms.
              </p>

              <p>
                We design CMS systems that support multilingual content,
                role-based access, advanced page creation, and seamless
                integration with CRMs, APIs, and marketing tools.
              </p>

              <p>
                Our custom CMS solutions ensure complete ownership, tailored
                modules, and future-ready scalability for growing businesses.
              </p>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:w-[360px] flex flex-col gap-6 mt-4 lg:mt-0">
            <div>
              <div className="rounded-t-xl w-fit bg-blue-600 px-5 py-2 text-md font-bold text-white">
                CMS Key Features
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-bl-xl rounded-br-xl rounded-tr-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-blue-100 p-2.5">
                    <MdContentPaste className="text-xl text-blue-600" />
                  </div>
                  <span className="font-semibold text-zinc-800">
                    Easy Content Management
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-blue-100 p-2.5">
                    <RiPagesFill className="text-xl text-blue-800" />
                  </div>
                  <span className="font-semibold text-zinc-800">
                    Dynamic Page Creation
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-blue-100 p-2.5">
                    <TbBrandWordpress className="text-xl text-blue-800" />
                  </div>
                  <span className="font-semibold text-zinc-800">
                    WordPress & Headless CMS Support
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-blue-100 p-2.5">
                    <MdSecurity className="text-xl text-blue-800" />
                  </div>
                  <span className="font-semibold text-zinc-800">
                    Secure & Role-Based Access
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-blue-100 p-2.5">
                    <PiSquaresFourBold className="text-xl text-blue-800" />
                  </div>
                  <span className="font-semibold text-zinc-800">
                    Scalable Modules & Integrations
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

export default CmsDev;
