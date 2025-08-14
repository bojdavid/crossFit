import arrow from "../assets/buttonArrow.png"

export const infoText = (outlinedText, header, desc, buttonText) =>{
       return (
        <>
        <div className="relative">
                            <div className='absolute -z-0 top-0 left-0  text-[112px]'>
                                                <h1 className=' font-bold text-white/20 m-0 p-0 leading-none'>
                                                    {outlinedText}
                                                </h1>
                            </div>
                            <h2 className='text-[40px] font-bold uppercase z-10'>
                                {header}
                            </h2>
                            <p className='w-[386.43px] font-light uppercase mt-[14px]'>
                                {desc}
                            </p>
                            {
                            buttonText?
                            <div className="w-[192.97px]  mt-[37px]">
                                {button_withArrow(buttonText)}
                            </div>

            
                            : ""
                            }
        </div>
        </>
       ) 
    }

export const headerText = (outlinedText, header, desc) =>{
       return (
        <>
        <div className="relative">
                            <div className='absolute -z-0 top-0 left-[25%]  text-[180px]'>
                                                <h1 className=' font-bold text-white/20 m-0 p-0 leading-none'>
                                                    {outlinedText}
                                                </h1>
                            </div>
                            <div className='text-center'>
                              <h2 className='text-[60px] font-bold uppercase z-10'>
                                  {header}
                              </h2>
                              <p className=' font-[300] uppercase mx-auto text-[20px] '>
                                  {desc}
                              </p>
                            </div>
        </div>
        </>
       ) 
    }

export function Input_element({ label, styles }) {
  return (
    <label className="block">
      {/*<div className="mb-2 text-xs font-semibold tracking-wide text-white/60">{label}</div> */}
      <input className={` rounded-full border border-[#404040] bg-transparent px-5 h-[54px] text-[#C4C4C4] ${styles}`} placeholder={label} />
      
    </label>
  );
}

export const button_withArrow = (text) => {
    return <button className="h-[54px] border-1 border-white rounded-full w-full flex justify-between text-[13px]" >
                <span className="w-full my-auto font-bold">
                    {text}
                </span>
                <span className="w-60px rounded-full h-[54px]">
                    <img src={arrow} alt="" className="w-[72px] " />
                </span>
            </button>
}