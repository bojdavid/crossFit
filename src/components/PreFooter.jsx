import React from 'react'
import BMI from './preF_comps/bmi'
import { headerText } from '../config/index.jsx';

import img1 from "../assets/carousel1.jpg";
import img2 from "../assets/carousel2.jpg";
import img3 from "../assets/carousel3.jpg";
import img4 from "../assets/carousel4.jpg";



function PreFooter() {
  const images = [
    {src:img1, alt:"two ladies doing yoga holding hands"},
    {src:img2, alt:"two men in a gym resting on a machine looking at an ipad"},
    {src:img3, alt:" a shirtless white man wearing putting on his gym glove"},
    {src:img4, alt:" a man doing pull ups"},
  ];
  
  return (
    <div className='text-[#ffffff] w-full mt-[132px]'>
        <div className='flex justify-center'>
          <header className='mx-auto'>
              {headerText("Part", "Be a part of our fit family", "training helps you thing and feel better, join us!.")}
          </header>
        </div>
        <div className='w-full h-[479px]  flex flex-col items-center  justify-center bg-gray-900 mt-[62px]'>
            <h1 className='animate-pulse text-gray-500 text-bold text-[50px] md:text-[100px] '>
                Carousel section
            </h1>
        </div>
        <div className='w-full mx-auto'>
          <BMI/>
        </div>
    </div>
  )
}

export default PreFooter