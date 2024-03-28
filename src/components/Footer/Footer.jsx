import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className='h-auto w-full flex   md:py-14 py-8  border-t-[1px]  border-black justify-around '>
        <div className="w-autoh-auto flex flex-col  gap-6  mr-4 md:mr-24">
         <div className='flex  md:gap-2 gap-1 items-center'>
         <img className='h-4 md:h-8' src="/src/assets/Images/logo.png" alt="" />
          <h1 className='footer z-[999] text-[3.5vw] md:text-2xl  font-semibold'>DigiteX</h1>
         </div>
         <p className='text-[1.5vw] md:text-[1.1vw]  '>We are a digital agency with added  <br />
        value as well as best services for <br />
        business. Contact us to know more.</p>
        
        <div className='flex gap-2 z-[999] '>
          <img className='md:h-6 h-4 ' src="/src/assets/Images/icons8-twitter-30.png" alt="" />
          <img className='md:h-6 h-4 ' src="/src/assets/Images/icons8-linkedin-50.png" alt="" />
          <img className='md:h-6 h-4  ' src="/src/assets/Images/icons8-instagram-30.png" alt="" />
        </div>
        </div>

        <div className='w-auto h-full flex flex-col gap-3'>
          <h1 className='footer z-[999] text-[3vw] md:text-2xl font-semibold '>Products</h1>
          <h2 className='text-[2.3vw] md:text-xl' >Platform</h2>
          <h2  className='text-[2.3vw] md:text-xl'>Guarantee</h2>
          <h2  className='text-[2.3vw] md:text-xl'>Prototype</h2>
        </div>

        <div className='w-auto h-full flex flex-col gap-3'>
          <h1 className='footer z-[999] text-[3vw] md:text-2xl font-semibold '>Company</h1>
          <h2 className='text-[2.3vw] md:text-xl' >Career</h2>
          <h2  className='text-[2.3vw] md:text-xl'>Support</h2>
          <h2  className='text-[2.3vw] md:text-xl'>Marketing</h2>
        </div>

        <div className='w-autoh-full flex flex-col gap-3'>
          <h1 className='footer z-[999] text-[3vw] md:text-2xl font-semibold '>Resources</h1>
          <h2 className='text-[2.3vw] md:text-xl' >Useful Links</h2>
          <h2  className='text-[2.3vw] md:text-xl'>Case Study</h2>
          <h2  className='text-[2.3vw] md:text-xl'>Shop</h2>
        </div>
      </div>
     

    </footer>
  )
}

export default Footer