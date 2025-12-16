import React from 'react'
import TechSolutions from '@/components/Home/TechSolutions'
import CaseStudySuggest from '@/components/CaseStudies/CaseStudySuggest'
import OurTech from '@/components/DigitalSolutions/Tech/OurTech'
import NewCta from '@/components/Home/NewCta'
import { MarqueeDemo } from '@/components/ui/Logos'
import WhoWe from '@/components/Home/WhoWe'
import Hero from '@/components/Home/Hero'



const Page = () => {
  return (
    <div>
      <Hero/>
      <WhoWe />
      <TechSolutions />
      <div className='bg-gradient-to-b from-white to-blue-50 lg:pt-10'>
        <OurTech  />
        <MarqueeDemo />
      </div>
<div className='max-w-7xl mx-auto'>

      <CaseStudySuggest />
</div>

      <NewCta />

    </div>

  )
}

export default Page
