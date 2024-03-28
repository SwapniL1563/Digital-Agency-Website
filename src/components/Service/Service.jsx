import React from 'react'
import ServicesBox from './Service-offer'

const Service = () => {
   

  return (
    <>
    <div className='w-full h-auto px-5 md:px-20  md:pb-16 pb-10 md:pt-12 pt-8 relative ' >
      <h1 className='txt-service md:text-[2vw] text-[4vw]  text-center font-semibold my-1 md:my-2 z-[999]'>We offer several services for you</h1>
      <p className='md:text-[1.1vw] text-[2.5vw] text-center mb-4 md:mb-8' >We have different types of services like SEO, <br />
       Brand Consulting & Growth, Marketing , etc.</p>

       <div className='w-full  px-0 md:px-10 py-2 md:py-1 border-black border-b-[1px] relative '>
       <div className='flex justify-between items-center group ' >
        <h1 className='md:text-[2vw] text-[3.5vw]'>01</h1>
        <h1  className=' md:text-[2vw] text-[3.5vw]'>Branding</h1>
        <img className='md:h-[4vw] h-[6vw]' src="/src/assets/Images/arrow.png" alt="" />
        <img src="/src/assets/Images/flat-lay-assortment-colorful-paper-shapes.jpg" className='img2 hidden group-hover:block h-20 md:h-44 rotate-[-2deg] absolute right-10 z-[99] ' alt="" />
       </div>
       </div>
       <div className='w-full px-0 md:px-10 py-2 md:py-1  border-black border-b-[1px] relative'>
       <div className='flex justify-between items-center group'>
        <h1 className='md:text-[2vw] text-[3.5vw]'>02</h1>
        <h1  className=' md:text-[2vw] text-[3.5vw]'>Marketing</h1>
        <img className='md:h-[4vw] h-[6vw]' src="/src/assets/Images/arrow.png" alt="" />
        <img src="/src/assets/Images/flat-lay-colorful-paper-shapes.jpg" className='img2 hidden group-hover:block  h-20 md:h-44 absolute  rotate-[2deg] right-10 z-[99] ' alt="" />
       </div>
       </div>
       <div className='w-full  px-0 md:px-10 py-2 md:py-1  border-black border-b-[1px] relative'>
       <div className='flex justify-between items-center group'>
        <h1 className='md:text-[2vw] text-[3.5vw]'>03</h1>
        <h1  className=' md:text-[2vw] text-[3.5vw]'>Designing</h1>
        <img className='md:h-[4vw] h-[6vw]' src="/src/assets/Images/arrow.png" alt="" />
        <img src="/src/assets/Images/abstract-geometric-shapes-wallpaper.jpg" className='img2 hidden group-hover:block h-20 md:h-44 rotate-[-2deg] absolute right-10 z-[99] ' alt="" />
       </div>
       </div>

    </div>

    <ServicesBox/>

   </>
  )
}

export default Service