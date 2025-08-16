import React from "react";
import image from "../assets/JoinUs_img.jpg";
import circle from "../assets/joinUs_circle.png";
import { headerText } from "../config/index.jsx";
import arrow from "../assets/arrowRightUp.png";
import { Input_element } from "../config/index.jsx";
import { button_withArrow } from "../config/index.jsx";

function JoinUs() {
  const inputStyles = "w-full max-w-[399px] min-w-[150px]";
  const scales =
    "scale-70 sm:scale-75 md:scale-90  lg:scale-100 animate-on-scroll";

  return (
    <div className="w-full text-[#ffffff] ">
      {/* Background container */}
      <div className="joinUs_bg  h-[300px] sm:[h-400px] md:h-[700px]  lg:h-[900px] flex items-center justify-center relative">
        {/* Main image + circle */}
        <div className={scales}>
          <img
            src={image}
            alt=""
            className="max-w-full h-auto"
            width={960}
            height={600}
          />
          <img
            src={circle}
            alt=""
            className="
                    absolute
                    top-30 left-60
                    sm:top-50 sm:left-90
                    md:top-50 md:left-90
                    lg:top-50 lg:left-90
                    xl:top-50 xl:left-90
                    w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px]
                    transition-all duration-300
                    "
          />
        </div>
      </div>

      <h1 className="uppercase font-bold text-4xl sm:text-6xl md:text-8xl lg:text-[100px]  xl:text-[130px] 3xl:text-[160px] 5xl:text-[180px] text-center md:mt-[-75px] relative z-50 leading-none flex justify-center gap-3  animate-on-scroll ">
        Join Us
        <span className="flex-shrink-0">
          <img
            src={arrow}
            alt=""
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-[100px] xl:h-[100px] 2xl:w-[127.08px] 2xl:h-[127.08px] mt-0 sm:mt-2 lg:mt-[15px]"
          />
        </span>
      </h1>
      <div className="mx-auto  flex items-center flex-col  mt-[22px] sm:mt-[42px] md:mt-[62px]  lg:mt-[82px] font-heebo animate-on-scroll">
        {headerText(
          "COI",
          "Start Here",
          "Fill the form below to start your journey",
          "Subscribe"
        )}
        <form
          action=" "
          className="mt-[52px] flex justify-center items-center gap-5 flex-wrap sm:flex-nowrap px-1 w-full px-3"
        >
          <Input_element label={"Name"} styles={inputStyles} />
          <Input_element label={"Email"} styles={inputStyles} />
          {button_withArrow("subscribe")}
        </form>
      </div>
    </div>
  );
}

export default JoinUs;
