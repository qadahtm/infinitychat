import React, { useEffect, useState } from 'react';
import styles from '../style'
import {arrowUp} from '../assets'

const GetStarted = () => {
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // const containerWidth = 400;
  // const containerHeight = 400;
  // const buttonWidth = 100;
  // const buttonHeight = 40;

  // useEffect(() => {
  //   const maxX = containerWidth - buttonWidth;
  //   const maxY = containerHeight - buttonHeight;

  //   const moveButton = () => {
  //     const x = Math.floor(Math.random() * maxX);
  //     const y = Math.floor(Math.random() * maxY);
  //     setPosition({ x, y });
  //   };

  //   const interval = setInterval(moveButton, 2000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return(
    <div 
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-purple-gradient p-[2px] cursor-pointer hover:opacity-75`}
      >
      <div 
        className={`${styles.flexCenter} flex-col bg-unified w-[100%] h-[100%] rounded-full`}
      >
        <a href="https://infinitychat-zeta.vercel.app/" className=''>
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
              <span className="text-gradient">Try</span>
            </p>
            
            <img src={arrowUp} className="w-[23px] h-[23px] object-contain" alt="" />
          </div>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
              <span className="text-purple-gradient">it now</span>
          </p>
        </a>
      </div>
    </div>
  )
}



export default GetStarted