import Container from '@/components/ui/Container'
import React from 'react'



const IndTypes = ({typeheading, types=[]}) => {
  return (
    <>
    <Container>
        <section className='mx-auto pt-5 lg:pt-16'>
            <div>
                <span className='font-bold text-2xl md:text-3xl lg:text-4xl text-center mx-auto'>{typeheading}</span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                {types.map((type, index) => (
                    <div key={index} className={`p-6 py-12 bg-gradient-to-b flex flex-col items-center justify-center from-zinc-50/70 to-zinc-100/60 rounded-xl text-center`}>
                        <span className={`text-center text-${type.color}-500 text-5xl`}>{type.icon}</span>
                        <h3 className='font-normal text-xl mt-4'>{type.title}</h3>
                    </div>
                ))}     
            </div>
        </section>
        </Container>
    </>
  )
}

export default IndTypes
