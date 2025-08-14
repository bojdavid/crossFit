import React from 'react'
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import arrow from "../assets/arrowDown.png";


function Logos() {
    const images = [logo1, logo2, logo3, logo4, logo5]
    const image_info = [
            {image: logo1, name:"maxpump"},
            {image: logo2, name:"aron gym"},
            {image: logo3, name:"pit & tone"},
            {image: logo4, name:"forza"},
            {image: logo5, name:"balance fitness"},
            {image: logo6, name:"body sculpt"},

    ]
  return (
    <>
        <div className='h-[494px] w-full bg-[#000000] relative z-50 flex justify-evenly items-center'>
                {image_info.map(image => {
                    return <div className='flex flex-col items-end ' >
                                    <img src={arrow} alt="" className='w-[81.55px] h-[81.55px] ' />
                                    <div className='flex flex-col items-center'>
                                        <img src={image.image} alt="" className='h-[130px]' />
                                        <p className='text-[#FFFFFF] text-[16px] font-bold uppercase text-center mt-[32px]'>{image.name}</p>
                                    </div>
                            </div>
                })}
        </div>
    </>
  )
}

export default Logos