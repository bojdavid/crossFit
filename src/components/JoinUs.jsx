import React from 'react'
import image from "../assets/JoinUs_img.jpg"
import circle from "../assets/joinUs_circle.png"
import { headerText } from '../config/index.jsx'
import arrow from "../assets/arrowRightUp.png"
import { Input_element } from '../config/index.jsx'
import { button_withArrow } from '../config/index.jsx'

function JoinUs() {
  const inputStyles = "w-[399px] "
    
  return (
    <div className='text-[#ffffff] w-full '>
        <div className=" joinUs_bg  h-[900px] flex items-center justify-center relative">
            <img src={image} alt="" width={960} height={600} />
            <img src={circle} alt="" width={200} height={200} className='absolute' />
        </div>

            <h1 className='uppercase font-bold text-[180px] text-center mt-[-75px] relative z-50 leading-none flex justify-center gap-3  '>Join Us 
              <span>
                <img src={arrow} alt="" className='w-[127.08px] h-[127.08px] mt-[15px]'/>
              </span>
            </h1>
        <div className='mx-auto  flex items-center flex-col mt-[82px]'>
            {headerText("COI", "Start Here", "Fill the form below to start your journey", "Subscribe")}
            <form action=" " className='mt-[52px] flex justify-center gap-5'>
                <Input_element label={"Name"} styles={inputStyles}/>
                <Input_element label={"Email"} styles={inputStyles}/>
                {button_withArrow("suscribe")}
            </form>
        </div>
    </div>
  )
}

export default JoinUs