import arrow from "../assets/buttonArrow.png";
import plus from "../assets/plus.png";

export const infoText = (outlinedText, header, desc, buttonText) => {
  return (
    <>
      <div className="relative w-full">
        <div className="absolute -z-0 -left-3 -top-4 sm:-top-7 sm:-left-10 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[112px] select-none">
          <h1 className="font-bold text-outline  text-black m-0 p-0 leading-none whitespace-nowrap overflow-hidden">
            {outlinedText}
          </h1>
        </div>
        <div className="relative z-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-[40px] font-bold uppercase leading-tight mb-3 sm:mb-4">
            {header}
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

export const infoText_Plus = (outlinedText, header, desc, buttonText) => {
  return (
    <>
      <div className="relative w-full">
        <div className="absolute -z-0 -top-10 left-1/2 transform -translate-x-1/2 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[112px] select-none">
          <h1 className="font-bold text-outline text-black m-0 p-0 leading-none whitespace-nowrap">
            {outlinedText}
          </h1>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-[40px] font-bold uppercase flex justify-center items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <img
              src={plus}
              alt="plus sign"
              className="w-4 h-6 sm:w-5 sm:h-7 lg:w-[26px] lg:h-[40px]"
            />
            <span>{header}</span>
          </h2>
          <p className="w-full max-w-[490px] font-light text-sm sm:text-base lg:text-lg text-[#C4C4C4] text-center mx-auto leading-relaxed">
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
  );
};

export const headerText = (outlinedText, header, desc) => {
  return (
    <>
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="absolute -z-0  sm:-top-8 left-1/2 transform -translate-x-1/2 text-6xl sm:text-8xl lg:text-9xl xl:text-[140px] 2xl:text-[180px] select-none">
          <h1 className="font-bold text-outline text-[#131619] m-0 p-0 leading-none whitespace-nowrap">
            {outlinedText}
          </h1>
        </div>
        <div className="text-center relative z-10 pt-4 sm:pt-6 lg:pt-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[60px] font-bold uppercase leading-tight mb-3 sm:mb-4 lg:mb-6">
            {header}
          </h2>
          <p className="font-light uppercase mx-auto text-sm sm:text-base lg:text-lg xl:text-[20px] max-w-2xl leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
};

export function Input_element({ label, styles }) {
  return (
    <label className={`${styles}`}>
      <input
        className={`w-full rounded-full border border-[#404040] bg-transparent px-[25px] sm:px-5 h-12 sm:h-[54px] text-[16px] text-[#C4C4C4] placeholder-[#C4C4C4] focus:outline-none focus:border-white/40 transition-colors `}
        placeholder={label}
      />
    </label>
  );
}

export const button_withArrow = (text) => {
  return (
    <button className="h-12 sm:h-[54px] border border-white rounded-l-full flex items-center justify-between text-xs sm:text-[13px] hover:bg-white/5 transition-colors group border-r-0 relative">
      <span className="flex-1 text-center font-bold px-[31px] leading-none uppercase text-nowrap">
        {text}
      </span>
      <span className="flex-shrink-0 w-12 sm:w-[60px] h-12 sm:h-[54px] flex items-center justify-center">
        <img
          src={arrow}
          alt=""
          className="w-12 sm:w-[55px] h-auto transition-transform absolute -right-6"
        />
      </span>
    </button>
  );
};
