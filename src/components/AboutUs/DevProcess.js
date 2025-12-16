import React from "react";

const DevProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Requirement Analysis",
      description:
        "Understand your needs, objectives, and the challenges the software aims to address.",
    },
    {
      number: "02",
      title: "Planning & UI/UX Design",
      description:
        "Draft a detailed plan and create a blueprint, covering architecture, user interface, and user experience.",
    },
    {
      number: "03",
      title: "Agile Development",
      description:
        "Code software, ensuring each module aligns with the design and functions seamlessly.",
    },
    {
      number: "04",
      title: "QA Testing & Bug Fixing",
      description:
        "Rigorously evaluate the software for bugs, performance issues, and reliability.",
    },
    {
      number: "05",
      title: "Deployment & Go-Live",
      description:
        "Launch the software in a live environment, making it accessible to end-users.",
    },
    {
      number: "06",
      title: "Maintenance & Support",
      description:
        "Provide ongoing support, addressing any updates, issues, or improvements to keep the software optimal.",
    },
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Our Software Development Process
        </h3>
        <p className="text-zinc-600 mb-14 max-w-2xl mx-auto">
          We follow a streamlined and transparent development process to ensure
          your software meets your expectations and business goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-zinc-50 rounded-xl  p-8 text-left transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-6xl font-extrabold text-zinc-300 mb-3">
                {step.number}
              </h3>
              <h4 className="text-lg font-semibold text-zinc-900 mb-3">
                {step.title}
              </h4>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevProcess;
