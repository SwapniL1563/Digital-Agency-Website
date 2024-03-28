import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='h-auto w-full px-5 py-14  md:px-20 md:py-14 flex justify-between  relative'>
       <h1 className='md:text-[4vw] text-[4vw] font-semibold hover:underline decoration-2 underline-offset-8 decoration-[#FF701F] ease-in duration-1000'>Send Your <br />Request</h1>
      <div className='md:gap-4 gap-2 flex items-center justify-center'>
      <input className='input z-[999] bg-transparent outline-none md:px-10 md:py-3 py-2 px-4 rounded-[5rem] border-black border-[1px]' type="text" placeholder='Enter your email' />
       <button to='/' className='.home-btn text-black  flex items-center  text-[2.7vw] md:text-xl  z-[999] '>Send more
      <img src="/src/assets/Images/arrow.png" className='h-10' alt="" />
      {/* <div className="circle opacity-1 h-16 w-16 bg-[#FF701F] rounded-full absolute z-[-1]  hover:opacity-0 "></div> */}
      </button>
      </div>
    </div>
  )
}

export default Contact