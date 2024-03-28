import React from 'react'


const ServicesBox = () => {
  return (
    <div className='w-auto h-auto bg-black  items-center justify-center md:justify-evenly px-20 md:py-14 py-10  flex md:flex-col  gap-6 md:gap-12'>
  <h1 className='text-[3.2vw] text-center text-white hidden md:block font-semibold   border-[#373737] z-[9999] '>Hello, we are Digite<span className='span-serv hover:text-white  text-[#FF701F]'>X</span> Creative</h1>
 <div className='  flex md:gap-20 md:flex flex-wrap justify-center'>
 <div className=' flex flex-col  box backdrop-blur bg-[#ffff]/15 items-center w-[12rem] md:px-4 py-6 px-4 md:py-6 gap-2 mb-8 md:mb-0  z-[9999] border-[#565656] border-[1px] rounded-md'>
    <img className='w-20' src="/src/assets/Images/service-icon.png" alt="" />
    <h1 className='md:text-[1.2vw]  text-center text-white'>Invest in Talents and learn.</h1>
    <p className='md:text-xs text-[0.7rem] text-center text-[#f2f2f2]'>Be  the one to choose <br /> which fit you the most.</p>
   </div>

   <div className='flex flex-col box backdrop-blur bg-[#ffff]/15   items-center w-[12rem] md:px-4 py-6 px-4 mb-8 md:mb-0  md:py-6 gap-2 z-[9999] border-[#565656] border-[1px] rounded-md'>
    <img className='w-20' src="/src/assets/Images/service-icon.png" alt="" />
    <h1 className='md:text-[1.2vw]  text-center text-white'>Invest in Talents and learn.</h1>
    <p className='md:text-xs text-[0.7rem] text-center text-[#f2f2f2]'>Be  the one to choose <br /> which fit you the most.</p>
   </div>

   <div className='flex flex-col  box backdrop-blur bg-[#ffff]/15  items-center w-[12rem] md:px-4 py-6 px-4 md:py-6 gap-2 z-[9999] mb-8 md:mb-0 border-[#565656] border-[1px] rounded-md'>
    <img className='w-20' src="/src/assets/Images/service-icon.png" alt="" />
    <h1 className='md:text-[1.2vw]  text-center text-white'>Invest in Talents and learn.</h1>
    <p className='md:text-xs text-[0.7rem] text-center text-[#f2f2f2]'>Be  the one to choose <br /> which fit you the most.</p>
   </div>
 </div>


   
    </div>
  )
}

export default ServicesBox