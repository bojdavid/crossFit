import React from 'react'
import image from "../assets/JoinUs_img.jpg"
import circle from "../assets/joinUs_circle.png"
import { headerText } from '../config/index.jsx'
import arrow from "../assets/arrowRightUp.png"
import { Input_element } from '../config/index.jsx'
import { button_withArrow } from '../config/index.jsx'

function JoinUs() {
  const inputStyles = "w-full max-w-[399px] min-w-[150px]"
    
  return (
    <div className='text-[#ffffff] w-full '>
        <div className=" joinUs_bg  h-[900px] flex items-center justify-center relative">
            <img src={image} alt="" width={960} height={600} />
            <img src={circle} alt="" width={200} height={200} className='absolute' />
        </div>
        {/* 
                <h1 className='text-6xl sm:text-8xl md:text-9xl lg:text-[180px] xl:text-[250px]  2xl:text-[300px] 5xl:text-[360px] font-bold m-0 p-0 leading-none transition ease-in-out duration-300'>

        */}

            <h1 className='uppercase font-bold text-4xl sm:text-6xl md:text-8xl lg:text-[100px]  xl:text-[130px] 3xl:text-[160px] 5xl:text-[180px] text-center mt-[-75px] relative z-50 leading-none flex justify-center gap-3  '>Join Us 
              <span className="flex-shrink-0">
                    <img 
                        src={arrow} 
                        alt="" 
                        className='w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-[100px] xl:h-[100px] 2xl:w-[127.08px] 2xl:h-[127.08px] mt-0 sm:mt-2 lg:mt-[15px]'
                    />
                </span>
            </h1>
        <div className='mx-auto  flex items-center flex-col mt-[82px]'>
            {headerText("COI", "Start Here", "Fill the form below to start your journey", "Subscribe")}
            <form action=" " className='mt-[52px] flex justify-center items-center gap-5 flex-wrap sm:flex-nowrap '>
                <Input_element label={"Name"} styles={inputStyles}/>
                <Input_element label={"Email"} styles={inputStyles}/>
                {button_withArrow("subscribe")}
            </form>
        </div>
    </div>
  )
}

export default JoinUs