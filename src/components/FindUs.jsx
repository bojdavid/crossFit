import React from 'react'
import map from "../assets/map_full.png"
import fullscreen from "../assets/map_fullscreen.png";
import zoom from "../assets/map_zoom.png"
import location from "../assets/map_location.png"
import plus from "../assets/plus.png"
import { button_withArrow } from '../config';

function FindUs() {

   const infoText = (outlinedText, header, desc, buttonText) =>{
         return (
          <>
          <div className="relative">
                              <div className='absolute -z-0 top-0 left-0  text-[112px]'>
                                                  <h1 className=' font-bold text-white/20 m-0 p-0 leading-none'>
                                                     {outlinedText}
                                                  </h1>
                              </div>
                              <h2 className='text-[40px] font-bold uppercase z-10 flex justify-center'>
                                   <img src={plus} alt="plus sign" className=' w-[26px] h-[40px]' /> {header}
                              </h2>
                              <p className='w-[490.78px] font-light  mt-[16px] text-[#C4C4C4] text-center'>
                                  {desc}
                              </p>
                              {
                              buttonText?
                              <div className="w-[192.97px]  mt-[37px] mx-auto">
                                  {button_withArrow(buttonText)}
                              </div>
  
              
                              : ""
                              }
          </div>
          </>
         ) 
      }

  return (
      <div className='flex text-[#ffffff] w-full grid grid-cols-2 bg-[#000000] mt-[150px]'>
          <div className='relative'>
            <img src={map} alt="" className='w-[960px] h-[600px]' />
          </div>
          <div className='mx-auto my-auto'>
            {infoText("Look", "Find us near you", "Nec suas signiferumque id. An eum labore commodo principes. Usu diam noluisse cu, nam adipisci", "view more")}
          </div>
      </div>
  )
}

export default FindUs