import React from "react";

import { Input_element } from "../../config/index.jsx";
import { button_withArrow } from "../../config/index.jsx";
import plus from "../../assets/plus.png";
//import { infoText_Plus } from '../../config/index.jsx';

function BMI() {
  const infoText_Plus = (outlinedText, header, desc, buttonText) => {
    return (
      <>
        <div className="relative w-full">
          <div className="absolute -z-0 -left-3 -top-4 sm:-top-7 sm:-left-10 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[112px] select-none">
            <h1 className="font-bold text-outline  text-black m-0 p-0 leading-none whitespace-nowrap overflow-hidden">
              {outlinedText}
            </h1>
          </div>
          <div className="relative z-10">
            <img
              src={plus}
              alt="plus sign"
              className="w-4 h-6 sm:w-5 sm:h-7 lg:w-[26px] lg:h-[40px] absolute -left-8 "
            />
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-[40px] font-bold uppercase leading-tight mb-3 sm:mb-4 flex">
              <span>{header}</span>
            </h2>
            <p className="w-full max-w-[386px] font-light uppercase text-sm sm:text-base lg:text-lg leading-relaxed">
              {desc}
            </p>
            {buttonText && (
              <div className="w-full max-w-[193px] mt-6 sm:mt-8 lg:mt-[37px]">
                {button_withArrow(buttonText)}
              </div>
            )}
          </div>
        </div>
      </>
    );
  };
  const inputStyles = "w-full";
  const BMI_style = {};
  const bmiData = [
    { range: "Below 18.5", label: "Underweight" },
    { range: "18.5 - 24.9", label: "Healthy" },
    { range: "25.0 - 29.9", label: "Overweight" },
    { range: "30.0 - and Above", label: "Obese" },
  ];

  //{infoText("bmi","Input your bmi", "Duo graece ponderum ne, ei mel aliquando. Pro te tamquam nonumes, nam no nemore epicurei")}

  return (
    <>
      <div className="w-full max-w-[1280px] min-h-[600px] lg:h-[725px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Form Section */}
          <section className="relative order-2 lg:order-1 animate-on-scroll">
            {infoText_Plus(
              "BMI",
              "Input Your BMI",
              "Duo graece ponderum ne, ei mel aliquando. Pro te tamquam nonumes, nam no nemore epicuri."
            )}

            <div className="space-y-4 lg:space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input_element label="Height / cm" styles={inputStyles} />
                <Input_element label="Weight / kg" styles={inputStyles} />
                <Input_element label="Age" styles={inputStyles} />
                <Input_element label="Gender" styles={inputStyles} />
              </div>
              <Input_element
                label="Select an activity factor:"
                styles={inputStyles}
              />
              <div className="mt-[26px]">{button_withArrow("calculate")}</div>
            </div>
          </section>

          {/* Right: Circular table */}
          <section className="relative mx-auto flex aspect-square w-full ] max-h-[400px] max-w-[400px] sm:max-h-[500px] sm:max-w-[500px] lg:max-w-[610px] lg:max-h-[610px] items-center justify-center rounded-full bg-[#000000] ring-1 ring-white/10 order-1 lg:order-2 animate-on-scroll">
            <div className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-full" />
            <div className="relative w-[85%] sm:w-[82%]">
              <div className="grid grid-cols-[1fr_auto_1fr] text-xs sm:text-sm gap-2">
                <div className="pr-2 sm:pr-4 lg:pr-6 font-semibold tracking-wide text-white/70 text-center sm:text-left">
                  BMI
                </div>
                <div className="mx-1 sm:mx-2 h-6 w-px bg-white/20" />
                <div className="pl-2 sm:pl-4 lg:pl-6 font-semibold tracking-wide text-white/70 text-center sm:text-left">
                  WEIGHT STATUS
                </div>
              </div>
              <div className="mt-3 sm:mt-4 divide-y divide-white/10 overflow-hidden rounded-lg sm:rounded-xl border border-white/10">
                {bmiData.map((row) => (
                  <div
                    key={row.range}
                    className="grid grid-cols-[1fr_auto_1fr] items-center bg-white/[0.02] backdrop-blur-sm"
                  >
                    <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white/80 text-center sm:text-left">
                      {row.range}
                    </div>
                    <div className="mx-0 h-px w-full bg-white/10 sm:h-8 lg:h-12 sm:w-px" />
                    <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-white/90 text-center sm:text-left">
                      {row.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 text-[10px] sm:text-xs text-white/60">
                <abbr title="Basal Metabolic Rate" className="no-underline">
                  BMR
                </abbr>
                <span className="text-white/30 hidden sm:inline">
                  Metabolic Rate
                </span>
                <span className="text-white/30 hidden sm:inline">/</span>
                <abbr
                  title="Body Mass Index"
                  className="font-semibold no-underline"
                >
                  BMI
                </abbr>
                <span className="text-white/30 hidden sm:inline">
                  Body Mass Index
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default BMI;
