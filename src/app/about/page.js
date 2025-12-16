import React from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import States from '@/components/AboutUs/states'
import CoreValues from '@/components/AboutUs/CoreValues'
import Cta from '@/components/Cta'
import VissionMission from '@/components/AboutUs/VissionMission'
import WhyChoose from '@/components/AboutUs/WhyChoose'
import Certified from '@/components/AboutUs/Certified'
import Hero2 from '@/components/AboutUs/Hero2'

export const metadata = {
  title: "About Us | Triosphere Tech – Leading Tech Company in Ahmedabad, Gujarat",
  description:
    "Learn about Triosphere Tech – a modern software, web, and app development company based in Ahmedabad, Gujarat. Discover our mission, values, expertise, and how we build scalable digital solutions for businesses globally.",

  keywords: [
    "about Triosphere Tech",
    "tech company in Ahmedabad",
    "software company in Gujarat",
    "IT company Ahmedabad",
    "web development company Ahmedabad",
    "mobile app development Ahmedabad",
    "Triosphere Tech team",
    "digital transformation company India",
  ],

  alternates: {
    canonical: "https://www.triospheretech.com/about",
  },

  openGraph: {
    title: "About Triosphere Tech – Trusted Tech Company in Ahmedabad",
    description:
      "Triosphere Tech is a future-ready technology company delivering web development, app development, UI/UX, cloud engineering, automation, and digital transformation solutions.",
    url: "https://www.triospheretech.com/about",
    siteName: "Triosphere Tech",
    locale: "en_IN",
    type: "website",

    // 🔗 Social authority boost
    see_also: [
      "https://www.instagram.com/triospheretech/",
      "https://www.linkedin.com/company/triospheretech/"
    ],
  },

  twitter: {
    card: "summary",
    title: "About Triosphere Tech – Who We Are & What We Do",
    description:
      "Explore Triosphere Tech’s story, mission, vision, core values, and engineering culture. We build scalable, high-performance digital products for brands worldwide.",
    creator: "@triospheretech",
  },

  robots: {
    index: true,
    follow: true,
  },
};


const page = () => {
  return (
   <>
   <div>

   </div>
   <Breadcrumb
      paths={[
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' }
      ]}
      title="With every line of code, we create experiences so seamless, you’ll forget it’s technology powering it all."
       description="Get a glimpse inside Triosphere and understand our vision."
      buttonText="Contact Us"
      buttonLink="/contact"
      className='mt-24 md:mt-28'
    />  
        <div className=' max-w-7xl mx-5 md:mx-auto'>
    <Hero2/>
    <CoreValues />
    <VissionMission/>
    <WhyChoose/>
    <Certified className="mt-28"/>
    <States />
    <Cta/>
   </div>
    
    
   </>
  )
}

export default page