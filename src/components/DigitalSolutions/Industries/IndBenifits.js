import Container from '@/components/ui/Container'
import React from 'react'

const IndBenifits = ({mainheading,benefits=[]}) => {
    
  return (
    <>
    <Container>
        <section className='mx-auto  mt-10'>
            <div>
                <span className='font-bold text-2xl md:text-3xl lg:text-4xl text-center'>{mainheading}</span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
                {benefits.map((benefit, index) => (
                    <div key={index} className='p-4 '>
                      <div className='flex flex-row gap-4 mb-2 items-center'>
                        <div className='p-3 bg-zinc-50 rounded-full'><span className='text-3xl md:text-4xl'>{benefit.icon}</span></div>
                        <div><span className='font-bold text-xl md:text-2xl'>{benefit.title}</span></div>
                        </div>
                      <div className='flex flex-row gap-4 mb-4'>
                         <p className='mt-2 text-zinc-800 text-lg font-normal'>{benefit.description}</p>
                        </div>
                      </div>
                    
                ))}
            </div>
        </section>
        </Container>
    </>
  )
}

export default IndBenifits
