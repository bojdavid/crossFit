import React from 'react'
import BMI from './preF_comps/bmi'
import { headerText } from '../config/index.jsx';
import Carousel from './preF_comps/Carousel.jsx';





function PreFooter() {


  return (
    <div className='text-[#ffffff] w-full mt-[60px] sm:mt-[80px] md:mt-[110px]  lg:mt-[132px]'>
        <div className='flex justify-center'>
          <header className='mx-auto'>
              {headerText("Part", "Be a part of our fit family", "training helps you thing and feel better, join us!.")}
          </header>
        </div>
        <div className='w-full  h-auto  flex flex-col items-center  justify-center mt-[22px]  sm:mt-[32px] md:mt-[42px]  lg:mt-[62px] overflow-hidden'>
            {/*
            
              <h1 className='animate-pulse text-gray-500 text-bold text-[50px] md:text-[100px] '>
                  Carousel section
              </h1>
            */}
              <Carousel />
        </div>
        <div className='w-full mx-auto'>
          <BMI/>
        </div>
    </div>
  )
}

export default PreFooter