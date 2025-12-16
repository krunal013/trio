import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';

const IndHero = ({ ind_hero_heading, ind_hero_description1, ind_hero_description2,ind_hero_description3,Imgsrc }) => {
  return (
    <>
    <Container>
          <section className="bg-white  ">
            <div className=" mx-auto">
                <div className="grid lg:grid-cols-2  gap-12 items-start mt-5">
                    {/* Left Column - Main Content */}
                    <div>

                 <span className="text-2xl md:text-3xl xl:text-4xl text-center md:text-left font-bold text-zinc-900 leading-tight mb-5">
                    {ind_hero_heading}
                </span>

                        <div className="space-y-3 md:space-y-6 text-zinc-700  text-md md:text-xl leading-relaxed">
                            <p>
                                {ind_hero_description1}
                            </p>

                            <p>
                                {ind_hero_description2}

                            </p>
                            <p>
                                {ind_hero_description3}
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Services List */}
                    <div className="flex items-center justify-center">
                        <Image
                            src={Imgsrc}
                            alt={ind_hero_heading}
                            width={600}
                            height={400}
                            className="object-cover h-auto w-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
        </Container>
    </>
  )
}

export default IndHero
