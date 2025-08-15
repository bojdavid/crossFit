import React from 'react'
import map from "../assets/map_full.png"
import fullscreen from "../assets/map_fullscreen.png";
import zoom from "../assets/map_zoom.png"
import location from "../assets/map_location.png"
import plus from "../assets/plus.png"
import { button_withArrow } from '../config';

function FindUs() {

   const infoText = (outlinedText, header, desc, buttonText) => {
         return (
          <>
          <div className="relative w-full">
              <div className='absolute -z-0 top-0 left-1/2 transform -translate-x-1/2 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[112px] select-none'>
                  <h1 className='font-bold text-white/20 m-0 p-0 leading-none whitespace-nowrap'>
                     {outlinedText}
                  </h1>
              </div>
              <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                  <h2 className='text-xl sm:text-2xl lg:text-3xl xl:text-[40px] font-bold uppercase flex justify-center items-center gap-2 sm:gap-3 mb-4 sm:mb-6'>
                       <img src={plus} alt="plus sign" className='w-4 h-6 sm:w-5 sm:h-7 lg:w-[26px] lg:h-[40px]' /> 
                       <span>{header}</span>
                  </h2>
                  <p className='w-full max-w-[490px] font-light text-sm sm:text-base lg:text-lg text-[#C4C4C4] text-center mx-auto leading-relaxed'>
                      {desc}
                  </p>
                  {buttonText && (
                      <div className="w-full max-w-[193px] mt-6 sm:mt-8 lg:mt-[37px] mx-auto">
                          {button_withArrow(buttonText)}
                      </div>
                  )}
              </div>
          </div>
          </>
         ) 
      }

  return (
      <div className='text-[#ffffff] w-full bg-[#000000] mt-12 sm:mt-20 lg:mt-[150px]'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[600px]'>
              {/* Map Section */}
              <div className='relative w-full h-full order-1 lg:order-1'>
                  <div className="w-full h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden">
                      <img 
                          src={map} 
                          alt="Location map" 
                          className='w-full h-full object-cover lg:object-fill' 
                      />
                  </div>
                  
                  {/* Map Controls - Hidden on mobile for cleaner look */}
                  <div className="hidden lg:block">
                      {/* You can add map controls here if needed */}
                      {/* Example:
                      <div className="absolute top-4 right-4 space-y-2">
                          <button className="bg-white/10 p-2 rounded">
                              <img src={fullscreen} alt="Fullscreen" className="w-6 h-6" />
                          </button>
                          <button className="bg-white/10 p-2 rounded">
                              <img src={zoom} alt="Zoom" className="w-6 h-6" />
                          </button>
                          <button className="bg-white/10 p-2 rounded">
                              <img src={location} alt="Location" className="w-6 h-6" />
                          </button>
                      </div>
                      */}
                  </div>
              </div>
              
              {/* Content Section */}
              <div className='flex items-center justify-center py-8 lg:py-0 order-2 lg:order-2 px-4 sm:px-6 lg:px-8'>
                  <div className="w-full max-w-lg">
                      {infoText("Look", "Find us near you", "Nec suas signiferumque id. An eum labore commodo principes. Usu diam noluisse cu, nam adipisci", "view more")}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default FindUs