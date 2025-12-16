import React from "react";
import Link from "next/link"
import Container from "../ui/Container";

const CoreValues = () => {
  const values = [
    {
      id: 1,
      title: "Innovation",
      subtitle: "Think. Create.",
      description:
        "We constantly push boundaries to bring unique and efficient tech solutions for modern challenges.",
    },
    {
      id: 2,
      title: "Integrity",
      subtitle: "Built on Trust",
      description:
        "We value honesty, transparency, and reliability in every partnership and project we undertake.",
    },
    {
      id: 3,
      title: "Collaboration",
      subtitle: " Build Together",
      description:
        "We believe great ideas come alive through teamwork, communication, and shared vision.",
    },

  ];

  return (
    <>
      <section className="lg:mt-5 ">
        <Container>
        <main className="flex lg:flex-row justify-center flex-col gap-[50px] md:gap-[40px] lg:gap-[100px] mx-auto w-full max-w-[1440px] min-w-[280px]  ">

          {/* Left section */}
          <div className=" lg:px-0 xl:px-0 lg:mx-0 md:mx-0">
            <h3 className="text-3xl md:text-3xl lg:text-4xl  mt-5 text-left lg:text-left font-semibold  text-black">
              Our Core Values That Define Who We Are
            </h3>
            <p className="text-xl text-left lg:text-left text-zinc-900 mb-6 mt-6">
              At Triosphere Tech, our foundation rests on innovation, integrity,
              and collaboration - driving technology that empowers businesses
              and shapes digital transformation.
            </p>
            <Link href="/contact">
              <button className="w-full flex items-center justify-between outline-zinc-800 max-w-[350px] text-xl font-bold active:scale-105 transition-all duration-300 rounded-[38px] bg-gradient-to-br from-[#09d6c8] via-[#7190fa] to-[#bf64f9] cursor-pointer text-white py-4 px-6 sm:px-9">
                <span>Know more about us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  height="20px"
                  width="20px"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                >
                  <path d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path>
                </svg>
              </button></Link>
          </div>

         {/* Right-side staggered grid */}
<div
  className="
   grid 
    grid-cols-[140px_140px] 
    auto-rows-auto 
    gap-[10px] 
    mx-auto

    
    lg:grid lg:grid-cols-[250px_250px] lg:grid-rows-5 lg:gap-[15px]
  "
>
  {/* Box 1 */}
  <div
    className="
      col-start-1 col-end-2 row-start-1 row-end-3
      bg-white border rounded-[35px]
      w-[140px] lg:w-[230px]
      p-4 lg:p-5
    "
  >
    <div className="flex flex-col items-start gap-2">
      {values[0].icon}

      <div className="text-black">
        <span className="text-[35px] leading-[45px] font-bold lg:text-[55px] lg:leading-[93px]">
          1.
        </span>
        <p>
          <span className="text-lg font-bold lg:text-2xl">{values[0].title}</span>
          <br />
          <span className="text-base font-semibold lg:text-xl">
            {values[0].subtitle}
          </span>
        </p>
      </div>
    </div>
  </div>

  {/* Box 2 */}
  <div
    className="
      col-start-2 col-end-3 row-start-2 row-end-4
      bg-white border rounded-[35px]
      w-[140px] lg:w-[230px]
      p-4 lg:p-5
    "
  >
    <div className="flex flex-col items-start gap-2">
      {values[1].icon}

      <div className="text-black">
        <span className="text-[35px] leading-[45px] font-bold lg:text-[55px] lg:leading-[93px]">
          2.
        </span>
        <p>
          <span className="text-lg font-bold lg:text-2xl">{values[1].title}</span>
          <br />
          <span className="text-base font-semibold lg:text-xl">
            {values[1].subtitle}
          </span>
        </p>
      </div>
    </div>
  </div>

  {/* Box 3 */}
  <div
    className="
      col-start-1 col-end-2 row-start-3 row-end-5
      bg-white border rounded-[35px]
      w-[140px] lg:w-[230px]
      p-4 lg:p-5"
  >
    <div className="flex flex-col items-start gap-2">
      {values[2].icon}

      <div className="text-black">
        <span className="text-[35px] leading-[45px] font-bold lg:text-[55px] lg:leading-[93px]">
          3.
        </span>
        <p>
          <span className="text-lg font-bold lg:text-2xl">{values[2].title}</span>
          <br />
          <span className="text-base font-semibold lg:text-xl">
            {values[2].subtitle}
          </span>
        </p>
      </div>
    </div>
  </div>
</div>


        </main>
        </Container>
      </section>
    </>
  );
};

export default CoreValues;
