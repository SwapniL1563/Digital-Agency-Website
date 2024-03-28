
import { useState } from "react";
// import { ReactDOM } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between  py-6 px-10 md:px-20 bg-transparent">
       <div className="nav-logo flex gap-2 items-center">
        <img className="h-[1.5rem]" src="/src/assets/Images/logo.png" alt="" />
       <h1 className="text-[1.55rem] z-[9999] text-black font-semibold">
        DigiteX</h1>
       </div>
        <div className="z-[9999]">
          <button
            type="button"
            className="md:hidden "
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              viewBox="0 0 20 20"
              fill="currentColor"
              className="menu w-6 h-6 text-black "
            >
              <path
                fillRule="evenodd"
                d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="hidden md:flex font-[500] gap-2 text-black ">
            <NavLink to="/" className=" z-[99991] mr-4 hover:text-[#000000]">
              Home
            </NavLink>
            <NavLink to="/about" className="z-[99991] mr-4 hover:text-[#000000]">
              About
            </NavLink>
            <NavLink to="/service" className="z-[99991] mr-4 hover:text-[#000000]">
             Services
            </NavLink>
            <NavLink to="/contact" className="z-[99991] hover:text-[#000000]">
              Contact Us
            </NavLink>
          </div>
        </div>

        <NavLink  to="/contact" className="sign-btn z-[9999] hidden bg-[#FF701F] border-transparent text-black hover:border-white hover:text-white hover:bg-transparent border-[1px]  font-semibold px-6  py-[2.9px] rounded-3xl md:block 
        ">Sign in</NavLink>
        <div
          className={`fixed  flex justify-center items-center top-0 right-0 w-[17rem] h-full backdrop-blur bg-[#fff]/15 z-[99991] transform transition-transform duration-200 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full "
          } md:hidden`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-0 right-0 m-2 z-[9999]"
          >
            <img className="h-8 mt-[1rem] z-[999] mr-[1.75rem]  border-none   " src="/src/assets/Images/close.png" alt="" /> 
          </button>
          <div className="p-4 mb-24 uppercase text-black text-2xl z-[10000]">
          <NavLink to="/" className="block mb-6 border-b-[1px] border-[#ffffff] hover:text-[#FF701F] before:w-20 before:h-10 before:bg-black ">
              Home
            </NavLink>
            <NavLink to="/about" className="block mb-6 border-b-[1px] border-[#ffffff] hover:text-[#FF701F]">
              About
            </NavLink>
            <NavLink to="/service" className="block mb-6 border-b-[1px] border-[#ffffff] hover:text-[#FF701F]">
             Services
            </NavLink>
            <NavLink to="/contact" className="block mb-6 border-b-[1px] border-[#ffffff] hover:text-[#FF701F]">
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar