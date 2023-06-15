import React from 'react'
import styles from '../style'
import {discount, robot} from '../assets'
import {GetStarted} from './index';
import { motion, AnimatePresence  } from 'framer-motion';


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 flex justify-center items-center flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-center items-center w-full">
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Infinity
            <span className="text-purple-gradient">Chat</span> {" "} 
          </h1>
        </div>
        {/* <h1  className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"> Payment Method.</h1> */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-3`}>
          InfinityChat is a chatbot that answers questions and inquiries about rules, 
          regulations, and procedural applications in different domains such as 
          educational, health, and banking systems in KSA.
          InfinityChat assists you to track appointments, remind you about deadlines, 
          and guide you to correctly submitting applications. 
        </p>

        <div className='flex flex-row items-center py-[16px] px-4 bg-card-custom rounded-[10px] mb-2'>
          <img src={discount} alt="discont" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 uppercase`}>   
            <span className="text-white">20%</span> Discount For {" "} 
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row justify-center items-center w-full mt-3">
          <div className="ss:flex hidden md:mr-4 mr-0 my-3 py-3">
            <GetStarted/>
          </div>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:mr-0  my-10 relative`}>
        <img src={robot} className="w-[100%] h-[100%] relative z-[5]" alt="" srcset="" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
    
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero