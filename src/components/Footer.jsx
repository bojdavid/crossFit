import React from "react";
import Logo from "../assets/Logo.png";
import arrow from "../assets/buttonArrow.png";
import arrow_down from "../assets/arrow_down.png";

function Footer() {
  const fieldTextStyle =
    "text-lg sm:text-xl lg:text-[22px] font-bold uppercase tracking-wide mb-4 lg:mb-[16.98px]";
  const desc_TextStyle =
    "font-light text-[#FFFFFF] leading-6 sm:leading-7 lg:leading-[28px] tracking-wide lg:tracking-[0.8px]";

  return (
    <div>
      <footer className="min-w-[300px] w-full bg-[#0b0b0b] text-white flex flex-col px-4 sm:px-6 lg:px-10">
        {/* ===== Top title section ===== */}
        <div className="w-full max-w-[1330px] mx-auto ">
          <section className="min-h-[200px] sm:min-h-[220px] lg:h-[260px] flex items-center py-8 lg:py-0">
            <div className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src={Logo}
                  alt="KroppLogoImage"
                  className="w-[200px] sm:w-[240px] lg:w-[270px] h-auto max-h-[40px] sm:max-h-[45px] lg:max-h-[50px]"
                />
              </div>

              {/* Tagline */}
              <div className="flex-1">
                <p className="uppercase tracking-wider text-sm sm:text-lg lg:text-[20px] leading-relaxed">
                  Please feel free to send us an e-mail at{" "}
                  <span className="underline break-all sm:break-normal">
                    kropp@qodeinteractive.com
                  </span>{" "}
                  for any additional inquiries
                </p>
              </div>
            </div>
          </section>

          {/* ===== Middle content ===== */}
          <section className="py-8 lg:py-12 w-full">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-10">
              {/* About */}
              <div className="col-span-1">
                <h3 className={`${fieldTextStyle}`}>About</h3>
                <p className={`${desc_TextStyle}`}>
                  Shape up your site with Kropp, a theme especially made for
                  fitness &amp; gym websites.
                </p>
              </div>

              {/* Working Hours */}
              <div className="col-span-1">
                <h3 className={`${fieldTextStyle}`}>Working Hours</h3>
                <div
                  className={`${desc_TextStyle} space-y-3 lg:space-y-[13px]`}
                >
                  <div>
                    <div>Monday - Friday</div>
                    <div>05:30 - 24:00</div>
                  </div>
                  <div>
                    <div>Weekdays</div>
                    <div>00:00 - 24:00</div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="col-span-1">
                <h3 className={`${fieldTextStyle}`}>Location</h3>
                <p className={`${desc_TextStyle}`}>
                  68 Jay Street, Brooklyn,
                  <br />
                  NY 11201, United States
                </p>
                <div className="mt-4 lg:mt-[26px] text-neutral-300 space-y-1">
                  <p className="break-all sm:break-normal">
                    kropp@qodeinteractive.com
                  </p>
                  <p>+ (1) 718 - 407 - 6400</p>
                </div>
              </div>

              {/* Start Now / Email */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                <h3 className={`${fieldTextStyle} flex items-center gap-3`}>
                  Start Now{" "}
                  <img
                    src={arrow_down}
                    alt=""
                    className="w-4 h-4 lg:w-[16.3px] lg:h-[16.3px]"
                  />
                </h3>

                <form className="flex items-center w-full max-w-[302.5px] mb-6 lg:mb-[26px]">
                  <div className="border border-white/40 border-r-0 rounded-full flex w-full">
                    <input
                      type="email"
                      placeholder="Email"
                      className="flex-1 h-12 lg:h-[54px] bg-transparent px-4 lg:px-6 py-3 placeholder-white/70 focus:outline-none text-sm lg:text-base"
                    />
                    <button
                      type="submit"
                      className="h-12 lg:h-[54px] w-12 lg:w-[74px] rounded-full flex items-center justify-center flex-shrink-0"
                      aria-label="Submit email"
                    >
                      <img
                        src={arrow}
                        alt=""
                        className="w-6 h-6 lg:w-auto lg:h-auto"
                      />
                    </button>
                  </div>
                </form>

                {/* Social icons */}
                <div className="flex justify-start text-lg sm:text-xl lg:text-[21px] gap-3 lg:gap-3">
                  <span className="hover:text-gray-300 transition-colors cursor-pointer">
                    <i className="fa-brands fa-tiktok"></i>
                  </span>
                  <span className="hover:text-gray-300 transition-colors cursor-pointer">
                    <i className="fa-brands fa-youtube"></i>
                  </span>
                  <span className="hover:text-gray-300 transition-colors cursor-pointer">
                    <i className="fa-brands fa-instagram"></i>
                  </span>
                  <span className="hover:text-gray-300 transition-colors cursor-pointer">
                    <i className="fa-brands fa-facebook-f"></i>
                  </span>
                  <span className="hover:text-gray-300 transition-colors cursor-pointer">
                    <i className="fa-brands fa-twitter"></i>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ===== Bottom bar ===== */}
          <section className="min-h-[52px] w-full border-t border-white/10 py-4">
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-neutral-400">
              <div>© 2022 Qode Interactive, All Rights Reserved</div>
              <div className="flex items-center flex-wrap gap-2">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <span className="opacity-90">|</span>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
