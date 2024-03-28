import React from 'react'

const About = () => {
  return (
    <div className='h-auto  w-full flex items-center justify-center py-8 md:py-14  '>
     <div className='h-auto w-[90%] py-6 md:py-8 flex relative  '>
      <img src="/src/assets/Images/service-img2.png" className='md:h-[60vh] z-[90] h-[20vh]' alt="" />
     <div className='flex flex-col  md:justify-start px-4 md:px-10 gap-2 md:gap-6 md:py-6 py-0'> 
      <h1 className='md:text-[3.3vw] text-[3.4vw]  md:w-full leading-[3.5vh] md:leading-[3.9vw] capitalize font-semibold z-[9999]'>We  are the <span className='span text-[#FF701F] hover:text-white '> Digital </span> <br /> Design agency adding  <br /> Value to your business.</h1>
      <p className='text-[2.2vw] md:text-[1.2vw]  text-[#1a1a1a] z-[9999]'>We are a digital agency with added <br /> value as well as best services for your <br /> business.  Contact us to know more.</p>
      <button className='z-[9999] hover:bg-transparent border-transparent hover:border-white hover:border-[1px] border-[1px] bg-[#FF701F] w-24 md:w-44 py-[4px] md:py-[6px] px-2 md:px-4  rounded-3xl  text-white text-sm md:text-lg'> Read more</button>
      </div>
      <img src="/src/assets/Images/service-img.png" alt="" className= 'hidden h-[30vh] absolute right-0 bottom-0 md:block'/>
     </div>
    </div>
  )
}

export default About