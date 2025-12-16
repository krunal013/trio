"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaAngular,
  FaNode,
  FaPhp,
  FaPython,
  FaAws,
  FaDocker,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiShopify,
  SiWoocommerce,
  SiKubernetes,
  SiJenkins,
  SiAdobexd,
  SiSwift,
  SiKotlin,
  SiFlutter,
} from "react-icons/si";

const   OurTech = () => {
  const [activeTab, setActiveTab] = useState("Front End");

  const tabs = [
    "Front End",
    "Mobile App",
    "Back End",
    "CRM & eCommerce",
    "Database",
    "Cloud & DevOps",
    "UI/UX Design",
  ];

  const techStack = {
    "Mobile App": [
      { icon: <SiSwift className="text-5xl text-orange-500" />, name: "Swift" },
      { icon: <SiKotlin className="text-5xl text-purple-600" />, name: "Kotlin" },
      { icon: <FaReact className="text-5xl text-blue-500" />, name: "React Native" },
      { icon: <SiFlutter className="text-5xl text-blue-400" />, name: "Flutter" },
    ],
    "Front End": [
      { icon: <FaHtml5 className="text-5xl text-orange-600" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-5xl text-blue-500" />, name: "CSS" },
      { icon: <FaBootstrap className="text-5xl text-purple-600" />, name: "Bootstrap" },
      { icon: <FaJs className="text-5xl text-yellow-500" />, name: "JavaScript" },
      { icon: <FaReact className="text-5xl text-blue-600" />, name: "React" },
      { icon: <FaAngular className="text-5xl text-red-600" />, name: "Angular" },
      { icon: <SiNextdotjs className="text-5xl" />, name: "Next.js" },
      { icon: <SiVuedotjs className="text-5xl text-green-600" />, name: "Vue.js" },
      { icon: <SiTypescript className="text-5xl text-blue-700" />, name: "TypeScript" },
    ],
    "Back End": [
      { icon: <FaNode className="text-5xl text-green-600" />, name: "Node.js" },
      { icon: <SiExpress className="text-5xl text-zinc-600" />, name: "Express" },
      { icon: <FaPython className="text-5xl text-blue-500" />, name: "Python" },
      { icon: <SiDjango className="text-5xl text-green-900" />, name: "Django" },
      { icon: <FaPhp className="text-5xl text-indigo-600" />, name: "PHP" },
    ],
    "CRM & eCommerce": [
      { icon: <SiShopify className="text-5xl text-green-600" />, name: "Shopify" },
      { icon: <SiWoocommerce className="text-5xl text-purple-600" />, name: "WooCommerce" },
      { icon: <FaWordpress className="text-5xl text-blue-600" />, name: "WordPress" },
    ],
    Database: [
      { icon: <SiMongodb className="text-5xl text-green-600" />, name: "MongoDB" },
      { icon: <SiPostgresql className="text-5xl text-blue-700" />, name: "PostgreSQL" },
      { icon: <SiMysql className="text-5xl text-blue-600" />, name: "MySQL" },
      { icon: <SiRedis className="text-5xl text-red-600" />, name: "Redis" },
    ],
    "Cloud & DevOps": [
      { icon: <FaAws className="text-5xl text-orange-500" />, name: "AWS" },
      { icon: <FaDocker className="text-5xl text-blue-600" />, name: "Docker" },
      { icon: <SiKubernetes className="text-5xl text-blue-700" />, name: "Kubernetes" },
      { icon: <SiJenkins className="text-5xl text-red-700" />, name: "Jenkins" },
    ],
    "UI/UX Design": [
      { icon: <FaFigma className="text-5xl text-purple-600" />, name: "Figma" },
      { icon: <SiAdobexd className="text-5xl text-pink-600" />, name: "Adobe XD" },
    ],
  };

  return (
    <section className="py-10 lg:py-0">
      <Container>
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold text-zinc-900">
          Tech we <span className="text-blue-500">work with</span>
        </h3>

        {/* Tabs */}
        <div className="relative mt-4">
          <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-white to-transparent pointer-events-none md:hidden" />
          <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />

          <div className="flex overflow-x-auto gap-3 no-scrollbar py-3 px-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap rounded-full border px-6 py-3 text-sm md:text-base transition-all
                  ${
                    activeTab === tab
                      ? "bg-blue-500 text-white font-bold scale-105"
                      : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-100"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {techStack[activeTab].map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-4 rounded-xl border border-zinc-100 bg-white p-4 transition-all hover:-translate-y-1 hover:rotate-2 hover:shadow-md"
            >
              {tech.icon}
              <p className="text-center font-medium text-zinc-700">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurTech;
