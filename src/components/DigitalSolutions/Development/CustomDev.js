import React from "react";
import {
  FaFileAlt,
  FaCogs,
  FaServer,
  FaUsers,
  FaChartLine,
  FaCloud,
  FaSync,
  FaTools,
} from "react-icons/fa";
import Container from "@/components/ui/Container";

const CustomDev = () => {
  const services = [
    {
      icon: <FaFileAlt className="w-12 h-12 text-blue-500" />,
      title: "End-to-End Project Management",
      description:
        "From concept to completion, ensuring timelines, budgets, and quality align seamlessly.",
    },
    {
      icon: <FaCogs className="w-12 h-12 text-blue-500" />,
      title: "Workflow Integration & Automation",
      description:
        "Streamlined processes that save time and improve operational efficiency.",
    },
    {
      icon: <FaServer className="w-12 h-12 text-blue-500" />,
      title: "Scalable System Architecture",
      description:
        "Future-ready designs for reliability, security, and seamless scaling.",
    },
    {
      icon: <FaUsers className="w-12 h-12 text-blue-500" />,
      title: "Dedicated Offshore Teams",
      description:
        "Handpicked experts working as an extension of your team to accelerate delivery.",
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-blue-500" />,
      title: "Feature Roadmap Planning",
      description:
        "Strategic prioritization of functionalities for faster results and impact.",
    },
    {
      icon: <FaCloud className="w-12 h-12 text-blue-500" />,
      title: "Cloud Migration Services",
      description:
        "Seamlessly moving your applications and infrastructure to the cloud for improved performance and scalability.",
    },
    {
      icon: <FaSync className="w-12 h-12 text-blue-500" />,
      title: "Agile Product Development",
      description:
        "Delivering robust software with quick iterations for faster go-to-market.",
    },
    {
      icon: <FaTools className="w-12 h-12 text-blue-500" />,
      title: "Software Maintenance & Support",
      description:
        "Ensuring your software stays updated, secure, and aligned with evolving needs.",
    },
  ];

  return (
    <section>
      <Container>
        {/* Header */}
        <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-6 ">
          Our Offshore Development Services Include
        </h3>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center text-center
                lg:flex-row lg:items-start lg:text-left
                gap-6 rounded-xl bg-zinc-50 p-6
                transition-shadow duration-300
              "
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-zinc-200 bg-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div>
                <h4 className="mb-2 text-xl font-bold text-zinc-900">
                  {service.title}
                </h4>
                <p className="leading-relaxed text-zinc-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CustomDev;
