import React from 'react'
import { infoText } from '../../config/index.jsx'
import { Input_element } from '../../config/index.jsx';
import { button_withArrow } from '../../config/index.jsx';

function BMI() {
        const inputStyles = "w-full"
      const bmiData = [
                    { range: "Below 18.5", label: "Underweight" },
                    { range: "18.5 - 24.9", label: "Healthy" },
                    { range: "25.0 - 29.9", label: "Overweight" },
                    { range: "30.0 - and Above", label: "Obese" },
                ];

                //{infoText("bmi","Input your bmi", "Duo graece ponderum ne, ei mel aliquando. Pro te tamquam nonumes, nam no nemore epicurei")}
    
                
  return (
    <>
        <div className='w-full max-w-[1280px] min-h-[600px] lg:h-[725px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-8 lg:py-0'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
                {/* Left: Form Section */}
                <section className="relative order-2 lg:order-1">
                    <div className="absolute -left-2 -top-6 select-none text-6xl sm:text-8xl lg:text-[10rem] font-black text-white/5 hidden md:block">
                    BMI
                    </div>
                    <div className="flex items-center gap-3 mb-4 lg:mb-6">
                    <div className="grid h-6 w-6 sm:h-8 sm:w-8 place-items-center rounded-full border border-white/20 text-sm sm:text-base">
                        +
                    </div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                        INPUT YOUR BMI
                    </h1>
                    </div>
                    <p className="max-w-md text-sm sm:text-base text-white/60 mb-6 lg:mb-8">
                    Duo graece ponderum ne, ei mel aliquando. Pro te tamquam nonumes, nam no nemore epicuri.
                    </p>

                    <div className="space-y-4 lg:space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <Input_element label="Height / cm"  styles={inputStyles}/>
                        <Input_element label="Weight / kg"  styles={inputStyles}/>
                        <Input_element label="Age"          styles={inputStyles}/>
                        <Input_element label="Gender"       styles={inputStyles}/>
                    </div>
                    <Input_element label="Select an activity factor:"  styles={inputStyles}/>

                    {button_withArrow("calculate")}
                    </div>
                </section>

                {/* Right: Circular table */}
                <section className="relative mx-auto flex aspect-square w-full max-w-[400px] sm:max-w-[480px] lg:max-w-[540px] items-center justify-center rounded-full bg-[#0B1013] ring-1 ring-white/10 order-1 lg:order-2">
                    <div className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-full bg-gradient-to-b from-white/5 to-transparent" />
                    <div className="relative w-[85%] sm:w-[82%]">
                    <div className="grid grid-cols-[1fr_auto_1fr] text-xs sm:text-sm gap-2">
                        <div className="pr-2 sm:pr-4 lg:pr-6 font-semibold tracking-wide text-white/70 text-center sm:text-left">BMI</div>
                        <div className="mx-1 sm:mx-2 h-6 w-px bg-white/20" />
                        <div className="pl-2 sm:pl-4 lg:pl-6 font-semibold tracking-wide text-white/70 text-center sm:text-left">WEIGHT STATUS</div>
                    </div>
                    <div className="mt-3 sm:mt-4 divide-y divide-white/10 overflow-hidden rounded-lg sm:rounded-xl border border-white/10">
                        {bmiData.map((row) => (
                        <div
                            key={row.range}
                            className="grid grid-cols-[1fr_auto_1fr] items-center bg-white/[0.02] backdrop-blur-sm"
                        >
                            <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white/80 text-center sm:text-left">{row.range}</div>
                            <div className="mx-0 h-px w-full bg-white/10 sm:h-8 lg:h-12 sm:w-px" />
                            <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white/90 text-center sm:text-left">{row.label}</div>
                        </div>
                        ))}
                    </div>

                    <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 text-[10px] sm:text-xs text-white/60">
                        <abbr title="Basal Metabolic Rate" className="no-underline">BMR</abbr>
                        <span className="text-white/30 hidden sm:inline">Metabolic Rate</span>
                        <span className="text-white/30 hidden sm:inline">/</span>
                        <abbr title="Body Mass Index" className="font-semibold no-underline">BMI</abbr>
                        <span className="text-white/30 hidden sm:inline">Body Mass Index</span>
                    </div>
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}

export default BMI