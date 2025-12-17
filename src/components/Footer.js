"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/Logo/Logo_new.webp";
import Button from "@/Atoms/Button";
import { RiInstagramLine } from "react-icons/ri";
import { FaLinkedin, } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";


const AccordionSection = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-zinc-300 py-3 ">
      <button
        className="w-full flex justify-between items-center text-left cursor-pointer"
        onClick={onToggle}
      >
        <span className="text-base font-semibold text-zinc-900">{title}</span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 mt-3" : "max-h-0"
          }`}
      >
        {children}
      </div>
    </div>
  );
};


const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    setOpenIndex(null); // close all accordion when navigating
  }, [pathname]);




  return (
    <footer className="w-full bg-gradient-to-b from-white to-blue-100" role="contentinfo">
      {/* Gradient top border */}
      <div className="bg-gradient-to-br from-[#09d6c8] via-[#7190fa] to-[#bf64f9] h-[2px]"></div>
      <div className="px-5 lg:px-0">
        <div className=" lg:flex  max-w-7xl mx-auto  ">

          <div className="flex flex-col items-start lg:items-start justify-center lg:justify-start lg:col-span-1 text-left  pt-5 md:py-10 lg:px-8">
            <Link href="/" aria-label="Go to Triosphere Tech Home">
              <Image
                src={Logo}
                alt="Triosphere Tech Logo"
                className="object-cover h-12 md:h-16 lg:h-10 w-fit"
              />
            </Link>

           <div>
  <p
  className="hidden md:block text-xs md:text-sm max-w-xs font-normal mt-3
             text-zinc-500 lg:text-zinc-700 text-justify"
  style={{
    hyphens: "auto",
    wordBreak: "normal",
    overflowWrap: "break-word",
  }}
>
  We are a leading tech company dedicated to crafting innovative digital solutions
  for businesses worldwide. At Triosphere Tech, we believe in the power of
  technology to transform ideas into reality and drive growth.
</p>

<p
  className="md:hidden text-xs max-w-xs font-normal mt-3
             text-zinc-500 text-justify"
  style={{
    hyphens: "auto",
    wordBreak: "normal",
    overflowWrap: "break-word",
  }}
>
  We are a leading tech company dedicated to crafting innovative digital solutions
  for businesses worldwide.
</p>

</div>

          </div>


          {/* GRID FIXED TO 5 COLUMNS */}
          <div
            className="hidden lg:grid 
                  grid-cols-3
                  gap-10 
                  py-10
                  [@media_(min-width:1180px)_and_(min-height:820px)]:pr-5 
                  "
          >
            <div className="col-span-2">
              <div className="grid grid-cols-3 gap-5">
                <div className="text-left">
                  <h4 className="text-lg text-zinc-900 font-semibold uppercase mb-3">
                    Quick Links
                  </h4>
                  <ul className="text-sm">
                    <li className="mb-2.5">
                      <Link href="/" className="text-zinc-800 font-medium hover:text-zinc-900">
                        Home
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link
                        href="/about"
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link
                        href="/digitalsolutions"
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        Digital Solutions
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link
                        href="https://blog.triospheretech.com"
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link
                        href="/casestudies"
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        Case Studies
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link
                        href="/careers"
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        Careers
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link
                        href="/contact"
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="text-lg text-zinc-900 font-semibold uppercase mb-3">Services</h4>
                  <ul className="text-sm">
                    <li className="mb-2.5">
                      <Link href="/digitalsolutions/WebDevelopment" className="text-zinc-800 font-medium hover:text-zinc-900">
                        Web Development
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link href="/digitalsolutions/MobileAppDevelopment" className="text-zinc-800 font-medium hover:text-zinc-900">
                        Mobile App Development
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link href="/digitalsolutions/UIUXSolutions" className="text-zinc-800 font-medium hover:text-zinc-900">
                        UI/UX Development
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link href="/digitalsolutions/ContentManagementSystem" className="text-zinc-800 font-medium hover:text-zinc-900">
                        CMS
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link href="/digitalsolutions/EcommerceDevelopment" className="text-zinc-800 font-medium hover:text-zinc-900">
                        E-Commerce Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/digitalsolutions/CustomSoftwareDevelopment" className="text-zinc-800 font-medium hover:text-zinc-900">
                        Custom Software Development
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text-left">


                  <h4 className="text-lg text-zinc-900 font-semibold uppercase mb-3">
                    Hire Developers
                  </h4>
                  <ul className="text-sm">
                    <li className="mb-2.5">
                      <Link
                        href="/digitalsolutions/HireOurReactNativeDeveloper"
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        React Native Developers
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link
                        href="/digitalsolutions/HireOurShopifyDeveloper"
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        Shopify Developers
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link
                        href="/digitalsolutions/HireOurPHPDeveloper"
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        PHP Developers
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link
                        href="/digitalsolutions/HireOurFlutterDeveloper"
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        Flutter Developers
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link href="/digitalsolutions/HireOurNodejsDeveloper" className="text-zinc-800 font-medium hover:text-zinc-900">
                        Node.js Developers
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link href="/digitalsolutions/HireOurDevOpsEngineer" className="text-zinc-800 font-medium hover:text-zinc-900">
                        DevOps Engineers
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link href="/digitalsolutions/HireOurWordPressDeveloper" className="text-zinc-800 font-medium hover:text-zinc-900">
                        WordPress Developers
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5">
                {/* 2️⃣ Quick Links */}
                <div className="text-left">



                  <h4 className="text-lg text-zinc-900 font-semibold uppercase mb-3">
                    Industries
                  </h4>
                  <ul className="text-sm">
                    <li className="mb-2.5">
                      <Link
                        href="/digitalsolutions/Healthcare"
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        Health Care
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link
                        href="/digitalsolutions/Finance"
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        Finance
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link
                        href="/digitalsolutions/Education"
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        Education
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link
                        href="/digitalsolutions/Retail"
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        Retail
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link
                        href="/digitalsolutions/RealEstate"
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        Real Estate
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link
                        href="/digitalsolutions/FoodandBeverage "
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        Food & Beverage
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* 3️⃣  Services + Technologies */}
                <div className="text-left">


                  <h4 className="text-lg text-zinc-900 font-semibold uppercase  mb-3">
                    Technologies
                  </h4>
                  <ul className="text-sm">
                    <li className="mb-2.5">
                      <Link href="/digitalsolutions/ReactJSDevelopment" className="text-zinc-800 font-medium hover:text-zinc-900">
                        React.js
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link href="/digitalsolutions/NodeJSDevelopment" className="text-zinc-800 font-medium hover:text-zinc-900">
                        Node.js
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link href="/digitalsolutions/ReactNativeDevelopment" className="text-zinc-800 font-medium hover:text-zinc-900">
                        React Native
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link href="/digitalsolutions/AngularDevelopment" className="text-zinc-800 font-medium hover:text-zinc-900">
                        Angular
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link href="/digitalsolutions/ShopifyDevelopment" className="text-zinc-800 font-medium hover:text-zinc-900">
                        Shopify
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link href="/digitalsolutions/DevOpsServices" className="text-zinc-800 font-medium hover:text-zinc-900">
                        DevOps
                      </Link>
                    </li>


                  </ul>
                </div>
                {/* 4️⃣ Popular Works */}
                <div className="text-left">


                  <h4 className="text-lg text-zinc-900 font-semibold uppercase  mb-3">
                    Other
                  </h4>
                  <ul className="text-sm">
                    <li className="mb-2.5">
                      <Link href="/digitalsolutions/WordPressDevelopment" className="text-zinc-800 font-medium hover:text-zinc-900">
                        WordPress
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link href="/digitalsolutions/FlutterDevelopment" className="text-zinc-800 font-medium hover:text-zinc-900">
                        Flutter
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link href="/digitalsolutions/PHPDevelopment" className="text-zinc-800 font-medium hover:text-zinc-900">
                        PHP
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link
                        href="/digitalsolutions/"
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        MongoDB
                      </Link>
                    </li>
                    <li className="mb-2.5">
                      <Link
                        href="/digitalsolutions/"
                        className="text-zinc-800 font-medium hover:text-zinc-900"
                      >
                        System Design
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

            </div>



            <div>{/* 5️⃣ Join Us */}
              <div className="text-left">
                <span className="text-2xl font-bold">Head Office</span>
                <div className="h-[3px] bg-gradient-to-br rounded-full from-[#09d6c8] via-[#7190fa] to-[#bf64f9] w-10"></div>

                <p className="py-2 text-md text-zinc-700 lg:max-w-xs">
                  1205, Phoenix, Vijay Cross Road to Commerce Six Road, Navrangpura,
                  Ahmedabad, Gujarat - 380009
                </p>

                <span className="font-bold text-2xl mt-3">Contact info</span>
                <div className="h-[3px] bg-gradient-to-br rounded-full from-[#09d6c8] via-[#7190fa] to-[#bf64f9] w-10"></div>

                <p className="pt-2 text-md text-zinc-700 lg:max-w-xs">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:info@triospheretech.com"
                    className="hover:text-blue-600 transition-colors"
                  >
                    info@triospheretech.com
                  </a>
                </p>

                <p className="text-md text-zinc-700 lg:max-w-xs">
                  <span className="font-semibold">Mobile:</span>{" "}
                  <a
                    href="tel:+918320333166"
                    className="hover:text-blue-600 transition-colors"
                  >
                    +91 83203-33166
                  </a>
                </p>
                <h4 className="text-2xl mt-5 text-zinc-900 font-bold ">Join Us</h4>
                <div className="h-[3px] bg-gradient-to-br rounded-full from-[#09d6c8] via-[#7190fa] to-[#bf64f9] w-10 mb-2"></div>
                <p className="text-md text-zinc-700 leading-6 mb-3 font-nomrmal">
                  Connect with our team for your technology queries.
                </p>
                <Button href="/contact" text="Connect" />
              </div></div>



          </div>

          {/* MOBILE ACCORDION (hidden on lg & above) */}
          <div className="lg:hidden">
            {/* 0 - Quick Links */}
            <AccordionSection
              title="Quick Links"
              isOpen={openIndex === 0}
              onToggle={() => setOpenIndex(openIndex === 0 ? null : 0)}
            >
              <ul className="text-sm text-zinc-600 space-y-2">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/digitalsolutions">Digital Solutions</Link></li>
                <li><Link href="https://blog.triospheretech.com">Blogs</Link></li>
                <li><Link href="/casestudies">Case Studies</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </AccordionSection>

            {/* 1 - Industries */}
            <AccordionSection
              title="Industries We Served"
              isOpen={openIndex === 1}
              onToggle={() => setOpenIndex(openIndex === 1 ? null : 1)}
            >
              <ul className="text-sm text-zinc-600 space-y-2">
                <li><Link href="/digitalsolutions/Healthcare">Healthcare</Link></li>
                <li><Link href="/digitalsolutions/Finance">Finance</Link></li>
                <li><Link href="/digitalsolutions/Education">Education</Link></li>
                <li><Link href="/digitalsolutions/Retail">Retail</Link></li>
                <li><Link href="/digitalsolutions/RealEstate">Real Estate</Link></li>
                <li><Link href="/digitalsolutions/FoodandBeverage">Foods & Beverage</Link></li>
              </ul>
            </AccordionSection>

            {/* 2 - Services */}
            <AccordionSection
              title="Services"
              isOpen={openIndex === 2}
              onToggle={() => setOpenIndex(openIndex === 2 ? null : 2)}
            >
              <ul className="text-sm text-zinc-600 space-y-2">
                <li><Link href="/digitalsolutions/WebDevelopment">Web Development</Link></li>
                <li><Link href="/digitalsolutions/MobileAppDevelopment">Mobile App Development</Link></li>
                <li><Link href="/digitalsolutions/UIUXSolutions">UI/UX Development</Link></li>
                <li><Link href="/digitalsolutions/ContentManagementSystem">CMS</Link></li>
                <li><Link href="/digitalsolutions/EcommerceDevelopment">E-Commerce Development</Link></li>
                <li><Link href="/digitalsolutions/CustomSoftwareDevelopment">Custom Software Development</Link></li>
              </ul>
            </AccordionSection>

                        {/* 4 - Hire Developers */}
            <AccordionSection
              title="Hire Our Developers"
              isOpen={openIndex === 4}
              onToggle={() => setOpenIndex(openIndex === 4 ? null : 4)}
            >
              <ul className="text-sm text-zinc-600 space-y-2">
                <li><Link href="/digitalsolutions/HireOurReactNativeDeveloper">React Native Developers</Link></li>
                <li><Link href="/digitalsolutions/HireOurShopifyDeveloper">Shopify Developers</Link></li>
                <li><Link href="/digitalsolutions/HireOurPHPDeveloper">PHP Developers</Link></li>
                <li><Link href="/digitalsolutions/HireOurNodejsDeveloper">Node.js Developers</Link></li>
                <li><Link href="/digitalsolutions/HireOurDevOpsEngineer">Devops Engineers</Link></li>
                <li><Link href="/digitalsolutions/HireOurWordPressDeveloper">WordPress Developers</Link></li>
                <li><Link href="/digitalsolutions/HireOurAngularDeveloper">Angular Developers</Link></li>
              </ul>
            </AccordionSection>

            {/* 3 - Technologies */}
            <AccordionSection
              title="Technologies"
              isOpen={openIndex === 3}
              onToggle={() => setOpenIndex(openIndex === 3 ? null : 3)}
            >
              <ul className="text-sm text-zinc-600 space-y-2">
                <li><Link href="/digitalsolutions/ReactJSDevelopment">React.js</Link></li>
                <li><Link href="/digitalsolutions/NodeJSDevelopment">Node.js</Link></li>
                <li><Link href="/digitalsolutions/ReactNativeDevelopment">React Native</Link></li>
                <li><Link href="/digitalsolutions/AngularDevelopment">Angular</Link></li>
                <li><Link href="/digitalsolutions/ShopifyDevelopment">Shopify</Link></li>
                <li><Link href="/digitalsolutions/DevOpsServices">DevOps</Link></li>
                <li><Link href="/digitalsolutions/WordPressDevelopment">WordPress</Link></li>
                <li><Link href="/digitalsolutions/FlutterDevelopment">Flutter</Link></li>
                <li><Link href="/digitalsolutions/PHPDevelopment">PHP</Link></li>
                <li><Link href="/digitalsolutions/">MongoDB</Link></li>
                <li><Link href="/digitalsolutions/">System Design</Link></li>
              </ul>
            </AccordionSection>



          </div>


          {/* FOOTER BOTTOM */}
        </div>
        <div className="py-2 border-t border-zinc-200 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-col-reverse lg:flex-row lg:justify-between">
            <div>
              <span className="text-sm text-zinc-500">
                © {new Date().getFullYear()}{" "}
                <Link href="/" className="hover:text-blue-600 text-zinc-900 font-semibold">
                  Triosphere Tech
                </Link>
                . All rights reserved.
              </span>
            </div>


            <div className="flex mb-5 lg:mb-0 mt-5 lg:mt-0 space-x-4 text-black">
              <a href="https://www.instagram.com/triospheretech/" target="_blank">
                <RiInstagramLine className="text-2xl hover:text-pink-600" />
              </a>
              <a href="https://wa.me/918320333166" target="_blank">
                <FaWhatsapp className="text-2xl hover:text-green-600" />
              </a>
              <a href="https://www.linkedin.com/company/triospheretech/" target="_blank">
                <FaLinkedin className="text-2xl hover:text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
