import React from "react";
import {
  FaSun,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaReact,
  FaAngular,
  FaHtml5,
  FaPhp,
  FaApple,
  FaAndroid,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  SiFlutter,
  SiNestjs,
  SiGooglecloud,
  SiKubernetes,
} from "react-icons/si";
import Container from "@/components/ui/Container";

export default function TechSolutions() {
  const services = [
    {
      icon: <FaSun className="w-12 h-12 text-blue-500" />,
      title: "Front End &",
      subtitle: "Web Dev",
      description:
        "Crafting responsive websites with React and Angular, making sure your interface is smooth and lightning-fast.",
      techIcons: [
        <FaReact className="w-8 h-8 text-cyan-400" />,
        <FaAngular className="w-8 h-8 text-red-600" />,
        <FaHtml5 className="w-8 h-8 text-orange-500" />,
        <FaPhp className="w-8 h-8 text-indigo-600" />,
      ],
    },
    {
      icon: <FaMobileAlt className="w-12 h-12 text-blue-500" />,
      title: "Mobile App",
      subtitle: "Development",
      description:
        "Building secure iOS and Android apps with Swift, Kotlin, Flutter, and React Native.",
      techIcons: [
        <FaReact className="w-8 h-8 text-cyan-400" />,
        <SiFlutter className="w-8 h-8 text-blue-400" />,
        <FaApple className="w-8 h-8 text-zinc-800" />,
        <FaAndroid className="w-8 h-8 text-green-500" />,
      ],
    },
    {
      icon: <FaDatabase className="w-12 h-12 text-blue-500" />,
      title: "Backend &",
      subtitle: "DevOps Magic",
      description:
        "Handling servers, APIs, and databases with Node.js, Python, and containerized infrastructure.",
      techIcons: [
        <FaNodeJs className="w-8 h-8 text-green-600" />,
        <SiNestjs className="w-8 h-8 text-red-500" />,
        <SiKubernetes className="w-8 h-8 text-blue-600" />,
        <FaPython className="w-8 h-8 text-yellow-500" />,
      ],
    },
    {
      icon: <FaCloud className="w-12 h-12 text-blue-500" />,
      title: "Cloud",
      subtitle: "Infrastructure",
      description:
        "Deploying scalable infrastructure on AWS, Docker, and Google Cloud with CI/CD pipelines.",
      techIcons: [
        <FaAws className="w-8 h-8 text-orange-400" />,
        <FaDocker className="w-8 h-8 text-blue-600" />,
        <SiGooglecloud className="w-8 h-8 text-red-500" />,
      ],
    },
  ];

  return (
    /* ✅ FULL WIDTH BACKGROUND */
    <section className="bg-gradient-to-b from-white to-blue-50">
      {/* ✅ CONTENT CONTAINER */}
      <Container className="py-16">
        {/* Header */}
        <div className="text-left mb-8">
          <h3 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-zinc-900">
            Full-Suite <span className="text-blue-500">Tech Solutions</span>
          </h3>

          <p className="mt-2 text-lg sm:text-xl text-zinc-400">
            Brewing code with coffee, crafting full-suite digital solutions
          </p>
        </div>

        {/* Services */}
        <div className="border border-zinc-200 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="mb-6">{service.icon}</div>

                {/* Title */}
                <h4 className="text-xl font-bold text-zinc-900">
                  {service.title}
                </h4>
                <h4 className="text-xl font-bold text-zinc-900 mb-4">
                  {service.subtitle}
                </h4>

                {/* Description */}
                <p className="text-sm text-zinc-500 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Tech Icons */}
                <div className="flex flex-wrap justify-center gap-3">
                  {service.techIcons.map((icon, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-zinc-100 transition"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
