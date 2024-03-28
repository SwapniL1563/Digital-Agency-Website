import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import AnimatedCursor from "react-animated-cursor"




const Layout = () => {
  return (
    <>
    <Navbar />
    <AnimatedCursor 
     color="255, 112, 31"
     innerSize={0}
     outerSize={25}
     innerScale={0}
     outerScale={2.75}
     outerAlpha={1}
    //  showSystemCursor={true}
     outerStyle={{
       mixBlendMode: 'normal'
     }}
     clickables={[
      'a',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      // 'textarea',
      'button',
      '.link',
      '.home-txt',
      '.footer',
      '.txt-service',
      '.span',
      '.box',
      '.span-serv',
      '.socials',
      {
        target: '.home-btn',
        options: {
          innerSize: 0,
          outerSize: 12,
          color: '255, 112, 31',
          outerAlpha: 1,
          innerScale: 0,
          outerScale: 5,
          // mixBlendMode: 'normal'
        }
      },

      {
        target: '.sign-btn',
        options: {
          innerSize: 0,
          outerSize: 12,
          color: '255, 112, 31',
          outerAlpha: 1,
          innerScale: 0,
          outerScale: 5,
          mixBlendMode: 'normal'
        }
      }
    ]}
   />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout