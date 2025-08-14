import React from 'react'
import { infoText } from '../../config/index.jsx'
import { Input_element } from '../../config/index.jsx';

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
        <div className='w-[1280px] h-[725px] mx-auto  flex flex-col justify-center'>
            <div className='grid grid-cols-2'>
                <section className="relative">
                    <div className="absolute -left-2 -top-6 select-none text-[10rem] font-black  text-white/5 md:block hidden">
                    BMI
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                    <div className="grid h-8 w-8 place-items-center rounded-full border border-white/20">
                        +
                    </div>
                    <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                        INPUT YOUR BMI
                    </h1>
                    </div>
                    <p className="max-w-md text-sm text-white/60">
                    Duo graece ponderum ne, ei mel aliquando. Pro te tamquam nonumes, nam no nemore epicuri.
                    </p>

                    <div className="mt-8 space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <Input_element label="Height / cm"  styles={inputStyles}/>
                        <Input_element label="Weight / kg"  styles={inputStyles}/>
                        <Input_element label="Age"          styles={inputStyles}/>
                        <Input_element label="Gender"       styles={inputStyles}/>
                    </div>
                    <Input_element label="Select an activity factor:"  styles={inputStyles}/>

                    <button
                        className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold tracking-wide transition hover:border-white/40"
                    >
                        CALCULATE
                        <span className="grid h-8 w-8 place-items-center rounded-full border border-white/20 transition group-hover:border-white/40">
                         ----
                        </span>
                    </button>
                    </div>
                </section>

                {/* Right: Circular table */}
                <section className="relative mx-auto flex aspect-square w-full max-w-[540px] items-center justify-center rounded-full bg-[#0B1013] ring-1 ring-white/10">
                    <div className="absolute inset-8 rounded-full bg-gradient-to-b from-white/5 to-transparent" />
                    <div className="relative w-[82%]">
                    <div className="grid grid-cols-[1fr_auto_1fr] text-sm">
                        <div className="pr-6 font-semibold tracking-wide text-white/70">BMI</div>
                        <div className="mx-2 h-6 w-px bg-white/20" />
                        <div className="pl-6 font-semibold tracking-wide text-white/70">WEIGHT STATUS</div>
                    </div>
                    <div className="mt-4 divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10">
                        {bmiData.map((row) => (
                        <div
                            key={row.range}
                            className="grid grid-cols-[1fr_auto_1fr] items-center bg-white/[0.02] backdrop-blur-sm"
                        >
                            <div className="px-6 py-4 text-white/80">{row.range}</div>
                            <div className="mx-0 h-px w-full bg-white/10 md:h-12 md:w-px" />
                            <div className="px-6 py-4 text-white/90">{row.label}</div>
                        </div>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/60">
                        <abbr title="Basal Metabolic Rate" className="no-underline">BMR</abbr>
                        <span className="text-white/30">Metabolic Rate</span>
                        <span className="text-white/30">/</span>
                        <abbr title="Body Mass Index" className="font-semibold no-underline">BMI</abbr>
                        <span className="text-white/30">Body Mass Index</span>
                    </div>
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}

export default BMI