import React from 'react'
import arrow from "../assets/h1-rev-icon-1.png"
import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/hero2.jpg"
import { infoText } from '../config'

function Hero() {
  return (
    <div className='mx-auto text-[#FFFFFF] px-10'>
        <div className='h-[985px] flex items-end'>
            <div className='mx-auto'>    
                <div className='mb-1 flex items-end gap-10'>
                    <img src={arrow} alt="" />
                    <p className='text-[30px] font-bold'>
                        New Event
                        <br/>
                        Coming Up June 7 - 13
                    </p>
                </div>
                <h1 className='max-[1750px]:text-[250px]   min-[1750px]:text-[360px] font-bold m-0 p-0 leading-none tansition ease-in-out duration-300'>
                    CROSSFIT
                </h1>
            </div>
        </div>

        <div className=' mx-auto max-w-[1300px] '>
            <div className='bg-[#000000] w-full'>    
                    <div className='w-full h-[637.16px] flex items-center justify-between mx-auto'>
                        <div className='w-[481.42px] my-auto relative'>
                           {infoText("Stronger", "Be you, just stronger! Power is in you", "Unum solum justo ex ius. Pro cu probo laboramus eius insolens euripidis te eos, ut agam tota.", "View More" )}
                        </div>
                        <img src={hero1} alt="Picture of someone doing pull ups" className='w-[518px] h-[760.16px]' />
                        
                    </div>
            </div>
            <div>
                <div className='w-full h-[637.16px] flex items-center justify-between mx-auto'>
                        <img src={hero2} alt="Picture of someone doing pull ups" className='w-[518px] h-[760.16px]' />
                        <div className='w-[481.42px] my-auto '>
                             {infoText("Start", "Today is the best day to start!", "Unumhis solum justo ex ius. Pro cu probo laboramus eius insolens euripidis te eos, ut agam tota.", "View More" )}
                        </div>
                        
                </div>
            </div>
        </div>
      </div>


    )
  
}

export default Hero