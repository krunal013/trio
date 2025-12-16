import React from 'react'
import { SiGoogleanalytics } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { IoCodeSlash } from "react-icons/io5";
import { SiTestcafe } from "react-icons/si";
import { GrDeploy } from "react-icons/gr";
import Image from 'next/image';
import Arrow from "../../../../public/images/DigitalSolution/Development/webp/arrow.webp";
import Container from '@/components/ui/Container';

const DevProcess = () => {

  const items = [
    { icon: <SiGoogleanalytics />, label: "Requirment " },
    { icon: <CgWebsite />, label: "Design" },
    { icon: <IoCodeSlash />, label: "Development" },
    { icon: <SiTestcafe />, label: "Testing" },
    { icon: <GrDeploy />, label: <>Deploy <br /> & Maintain</> },
  ];

  return (
    <section className=" py-5 mx-auto mb-20">
      <Container>
      {/* HEADING */}
      <div className='text-center flex flex-col py-6 px-4 lg:px-0'>
         <span className="text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
          Our Development Process
        </span>
        <span className=' text-center text-md font-semibold md:text-base'>
          Explore How we Develope Your Idea into real Life
        </span>
      </div>

      {/* MOBILE → column | DESKTOP → row */}
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center px-2">

        {items.map((item, i) => {
          const isUp = i % 2 === 0;

          return (
            <div
              key={i}
              className={`
                relative group flex items-center justify-center
                ${isUp ? "md:translate-y-14" : ""}
                w-[160px] h-[160px] 
                md:w-[105px] md:h-[105px]
                 [@media_(min-width:1024px)_and_(min-height:1366px)]:w-[155px] [@media_(min-width:1024px)_and_(min-height:1366px)]:h-[155px]
                lg:w-[200px] lg:h-[200px]
              `}
            >

              {/* WRAPPER */}
              <div className="
                relative flex items-center justify-center
                w-[160px] h-[160px]
                md:w-[118px] md:h-[118px]
                 //i pad mini 
                 [@media_(min-width:1024px)_and_(min-height:600px)]:h-[158px] [@media_(min-width:1024px)_and_(min-height:600px)]:w-[158px]
                [@media_(min-width:768px)_and_(min-height:1024px)]:w-[110px] [@media_(min-width:768px)_and_(min-height:1024px)]:h-[110px]


                [@media_(min-width:1180px)_and_(min-height:820px)]:h-[180px] [@media_(min-width:1180px)_and_(min-height:820px)]:w-[180px]
                [@media_(min-width:1024px)_and_(min-height:1366px)]:h-[158px] [@media_(min-width:1024px)_and_(min-height:1366px)]:w-[158px]
                lg:w-[190px] lg:h-[1890px]
                xl:w-[200px] xl:h-[200px]
              ">

                {/* ARROW → hidden on mobile */}
                <div
                  className={`
                    hidden md:block
                    absolute left-1/2 -translate-x-1/2 
                    w-24 md:w-20 lg:w-32
                    ${isUp ? "md:-top-10 lg:-top-16 scale-y-[-1] rotate-[220deg]" :
                              "md:-bottom-12 lg:-bottom-16 rotate-[140deg]"}
                  `}
                >
                  <Image src={Arrow} alt="arrow" className="w-full h-auto" />
                </div>

                {/* GRADIENT BORDER */}
                <div
                  className="
                    absolute rounded-full transition-all duration-300
                    group-hover:animate-[spin_5s_linear_infinite]
                  "
                  style={{
                    width: "100%",
                    height: "100%",
                    padding: "3px",
                    background:
                      "conic-gradient(from 0deg,#09d6c8,#7190fa,#bf64f9,#09d6c8)",
                    WebkitMask:
                      "radial-gradient(farthest-side,transparent calc(100% - 5px),#000 0)",
                    mask:
                      "radial-gradient(farthest-side,transparent calc(100% - 5px),#000 0)",
                  }}
                ></div>

                {/* INNER CIRCLE */}
                <div
                  className="
                    bg-zinc-50 rounded-full flex flex-col justify-center 
                    items-center gap-2 relative z-10
                    w-[148px] h-[148px] 
                    md:w-[115px] md:h-[115px]
                    //i pad mini 
                     [@media_(min-width:1024px)_and_(min-height:600px)]:h-[150px] [@media_(min-width:1024px)_and_(min-height:600px)]:w-[150px]
                    [@media_(min-width:768px)_and_(min-height:1024px)]:w-[101px] [@media_(min-width:768px)_and_(min-height:1024px)]:h-[105px]
                    // i pad air landscape 
                    [@media_(min-width:1180px)_and_(min-height:820px)]:w-[168px] [@media_(min-width:1180px)_and_(min-height:820px)]:h-[168px]
                    // i pad pro landscape
                     [@media_(min-width:1024px)_and_(min-height:1366px)]:h-[148px] [@media_(min-width:1024px)_and_(min-height:1366px)]:w-[148px]
                    lg:w-[158px] lg:h-[158px]
                    xl:w-[190px] xl:h-[190px]
                  "
                >
                  <span className="text-3xl [@media_(min-width:1024px)_and_(min-height:1366px)]:text-2xl [@media_(min-width:1366px)_and_(min-height:1024px)]:text-2xl md:text-2xl lg:text-5xl font-semibold">
                    {item.icon}
                  </span>

                  <span className="text-xs [@media_(min-width:768px)_and_(min-height:1024px)]:text-xs lg:text-base text-zinc-700 text-center">
                    {item.label}
                  </span>
                </div>

              </div>

            </div>
          );
        })}

      </div>
</Container>
    </section>
  );
};

export default DevProcess;
