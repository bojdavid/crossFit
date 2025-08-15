import React from 'react'
import arrow from "../assets/h1-rev-icon-1.png"
import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/hero2.jpg"
import { infoText } from '../config'

function Hero() {
  return (
    <div className='mx-auto text-[#FFFFFF] '>
        {/* Hero Title Section */}
        <div className='min-h-[70vh] sm:min-h-[80vh] lg:h-[985px] flex items-center lg:items-end py-8 lg:py-0'>
            <div className='mx-auto text-center lg:text-left w-full flex justifu-center'>    
                <div className='mx-auto'>

                    <div className='mb-4 lg:mb-1 flex flex-col sm:flex-row items-center lg:items-end gap-4 sm:gap-6 lg:gap-10 justify-center lg:justify-start'>
                        <img 
                            src={arrow} 
                            alt="" 
                            className='w-12 h-12 sm:w-16 sm:h-16 lg:w-auto lg:h-auto'
                        />
                        <p className='text-lg sm:text-xl lg:text-[30px] font-bold leading-tight'>
                            New Event
                            <br/>
                            Coming Up June 7 - 13
                        </p>
                    </div>
                    <h1 className='text-6xl sm:text-8xl md:text-9xl lg:text-[180px] xl:text-[250px]  2xl:text-[300px] 5xl:text-[360px] font-bold m-0 p-0 leading-none transition ease-in-out duration-300 lg:mb-[100px]'>
                        CROSSFIT
                    </h1>
                </div>
            </div>
        </div>

        {/* Content Sections */}
        <div className='mx-auto max-w-[1920px]'>
            {/* First Section - Image Right */}
            <div className='bg-[#000000] w-full'>    
                <div className='w-full max-w-[1300px] min-h-[500px] lg:h-[637.16px] flex flex-col lg:flex-row items-center justify-between mx-auto gap-8 lg:gap-0 py-8 lg:py-0'>
                    <div className='w-full lg:w-[481.42px] my-auto relative order-2 lg:order-1 px-4 lg:px-0'>
                       {infoText("Stronger", "Be you, just stronger! Power is in you", "Unum solum justo ex ius. Pro cu probo laboramus eius insolens euripidis te eos, ut agam tota.", "View More" )}
                    </div>
                    <div className='w-full lg:w-[518px] flex justify-center lg:justify-end order-1 lg:order-2'>
                        <img 
                            src={hero1} 
                            alt="Picture of someone doing pull ups" 
                            className='w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[518px] h-auto lg:h-[760.16px] object-cover rounded-lg lg:rounded-none'
                        />
                    </div>
                </div>
            </div>
            
            {/* Second Section - Image Left */}
            <div className='w-full'>
                <div className='w-full max-w-[1300px]  min-h-[500px] lg:h-[637.16px] flex flex-col lg:flex-row items-center justify-between mx-auto gap-8 lg:gap-0 py-8 lg:py-0'>
                    <div className='w-full lg:w-[518px] flex justify-center lg:justify-start order-1'>
                        <img 
                            src={hero2} 
                            alt="Picture of someone doing pull ups" 
                            className='w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[518px] h-auto lg:h-[760.16px] object-cover rounded-lg lg:rounded-none'
                        />
                    </div>
                    <div className='w-full lg:w-[481.42px] my-auto order-2 px-4 lg:px-0'>
                        {infoText("Start", "Today is the best day to start!", "Unumhis solum justo ex ius. Pro cu probo laboramus eius insolens euripidis te eos, ut agam tota.", "View More" )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero