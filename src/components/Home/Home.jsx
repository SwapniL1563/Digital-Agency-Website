import { motion } from "framer-motion"
import About from "../About/About"
import { Link } from "react-router-dom"
import Service from "../Service/Service"
import Contact from "../Contact/Contact"






const Home = () => {
  return (
   <>
   <div><img  className="overlay absolute right-0  top-2 z-[-3] animate-[pulse_5s_linear_infinite]" src="/src/assets/Images/circle1.png" alt="" /></div>
   <img  className="absolute left-0 top-[90%] z-[-2] animate-[pulse_5s_linear_infinite]" src="/src/assets/Images/circle2.png" alt="" />
   {/* <img  className="absolute right-0 top-[110%] z-[0] mix-color-dodge  " src="/src/assets/Images/Ellipse.png" alt="" /> */}

    <div className='h-full w-full px-10 md:px-20 px-5  py-20 flex flex-col gap-24 md:gap-12 relative'>
      <h1 className=' z-[999] text-[9.5vw] leading-[12vw]  font-semibold md:text-[5vw] md:leading-[5.5vw]'>Powerful <br /> Branding  Digital <br /> Agency</h1>
      < Link to='/' className='.home-btn text-black flex items-center text-[5vw]  md:text-2xl absolute top-[40%] md:left-2/3 md:top-[27%]  z-[999] '>Get Started
      <img src="/src/assets/Images/arrow.png" alt="" />
      {/* <div className="circle opacity-1 h-16 w-16 bg-[#FF701F] rounded-full absolute z-[-1]  hover:opacity-0 "></div> */}
      </Link>
      <img className='h-[50vw] md:mt-0 mt-8 w-full md:object-cover  md:h-auto rounded-2xl' src="/src/assets/Images/hero-bg.png" alt="" />
    </div>

    
    <div className="hero-box h-[25vh] md:h-auto py-8 w-full bg-black flex items-center justify-center bg-[url('/src/assets/Images/Ellipse.png')] bg-fill  bg-no-repeat bg-[right_top_0.5rem]">
      <div className="box h-[20vh] md:h-auto w-[90%]  flex flex-col items-start  gap-1 justify-center px-10  py-4 md:px-20 border-[#7d7d7d] border-[1px]">
       <h1 className='text-[2.4vh] md:text-[2.7vw] text-white'>Provide the best service <br /> with ideas that are out of <br /> the box</h1>
       <button className='z-[9999] hover:text-[#ffff]   hover:border-[#ffffff] text-white bg-transparent text-sm border-[#d5d5d5] border-[1px] md:px-8 md:py-[5px] px-2 py-[2px] md:text-xl'>Read more</button>
      
      </div>
     

</div>
<About/>
<Service/>
<Contact/>
    </>
  )
}

export default Home