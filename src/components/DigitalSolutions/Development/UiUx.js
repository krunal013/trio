import React from "react";
import {
  FaPalette,
  FaLaptopCode,
  FaUsers,
  FaBezierCurve,
  FaBrain,
  FaChartLine,
  FaRegCompass,
  FaProjectDiagram,
} from "react-icons/fa";
import Container from "@/components/ui/Container";

const UIUX = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* LEFT CONTENT */}
          <div className="flex-1 text-left lg:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
              UI/UX Design Solutions that Elevate User Experience
            </h3>

            <div className="mt-4 space-y-5 text-zinc-900 text-left text-base md:text-lg leading-relaxed">
              <p>
                Our UI/UX experts craft visually appealing and intuitive
                interfaces that connect brands with users. We focus on
                usability, accessibility, and design consistency to ensure
                every screen tells your brand’s story.
              </p>

              <p>
                We create interactive and responsive designs tailored for all
                devices. From wireframes to high-fidelity prototypes, every
                element contributes to a seamless experience.
              </p>

              <p>
                Using tools like Figma, Adobe XD, and Sketch, we transform ideas
                into pixel-perfect layouts backed by user behavior research and
                interaction flows.
              </p>

              <p>
                We build scalable design systems and component libraries to
                maintain visual harmony and speed up collaboration between
                design and development teams.
              </p>

              <span className="block text-3xl md:text-5xl text-zinc-300 font-bold leading-tight">
                We don’t design screens,
                <br />
                we design stories users love to live in.
              </span>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
<div className=" flex flex-col justify-start <!-- default (mobile) --> md:flex-row md:justify-center <!-- medium = row + center --> lg:flex-col lg:justify-start <!-- large = column + start --> gap-3 md:w-full lg:w-90 mt-6 " >
  {/* UI Section */}
  <div>
    <button className="bg-blue-600 text-white rounded-t-xl font-bold px-5 py-2 text-md ">
      For Creative UI
    </button>

    <div className="space-y-3">
      <div className="bg-white rounded-bl-xl rounded-br-xl rounded-tr-xl shadow-sm border border-zinc-200 p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
        <div className="bg-blue-100 p-2.5 rounded-full">
          <FaPalette className="text-blue-600 text-xl" />
        </div>
        <span className="text-zinc-800 font-semibold text-md">
          Modern Visual Design
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
        <div className="bg-blue-100 p-2.5 rounded-full">
          <FaLaptopCode className="text-blue-800 text-xl" />
        </div>
        <span className="text-zinc-800 font-semibold text-md">
          Interactive Prototyping
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
        <div className="bg-blue-100 p-2.5 rounded-full">
          <FaUsers className="text-blue-800 text-xl" />
        </div>
        <span className="text-zinc-800 font-semibold text-md">
          User-Centered Design
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
        <div className="bg-blue-100 p-2.5 rounded-full">
          <FaBezierCurve className="text-blue-800 text-xl" />
        </div>
        <span className="text-zinc-800 font-semibold text-md">
          Seamless Motion & Interaction
        </span>
      </div>
    </div>
  </div>

  {/* UX Section */}
  <div>
    <button className="bg-blue-600 text-white rounded-t-xl font-bold px-5 py-2 text-md ">
      For UX Strategy
    </button>

    <div className="space-y-3">
      <div className="bg-white rounded-bl-xl rounded-br-xl rounded-tr-xl shadow-sm border border-zinc-200 p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
        <div className="bg-green-100 p-2.5 rounded-full">
          <FaBrain className="text-green-700 text-xl" />
        </div>
        <span className="text-zinc-800 font-semibold text-md">
          Behavioral Research & Insights
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
        <div className="bg-green-100 p-2.5 rounded-full">
          <FaChartLine className="text-green-700 text-xl" />
        </div>
        <span className="text-zinc-800 font-semibold text-md">
          Data-Driven Experience Optimization
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
        <div className="bg-green-100 p-2.5 rounded-full">
          <FaRegCompass className="text-green-700 text-xl" />
        </div>
        <span className="text-zinc-800 font-semibold text-md">
          Journey Mapping & Wireframing
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
        <div className="bg-green-100 p-2.5 rounded-full">
          <FaProjectDiagram className="text-green-700 text-xl" />
        </div>
        <span className="text-zinc-800 font-semibold text-md">
          Usability Testing & Iteration
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

export default UIUX;
