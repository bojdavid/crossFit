import React from "react";
import Logo from "../assets/Logo.png";
import hamburger from "../assets/hamburger.png";

function NavBar() {
  const navItems = ["Home", "Pages", "Portfolio", "Blog", "Shop"];

  return (
    <nav className="py-4 px-4 sm:px-6 lg:px-10 flex justify-between items-center bg-black text-white">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={Logo} alt="Logo" className="h-8 sm:h-10 w-auto" />
      </div>

      {/* Nav links (hidden on mobile) */}
      <ul className="hidden md:flex gap-6 lg:gap-10">
        {navItems.map((item, idx) => (
          <li
            key={idx}
            className="text-[12px] font-[700] uppercase tracking-wide hover:text-gray-300 transition"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Book Now button (hidden on small screens) */}
        <button className="hidden sm:inline-block bg-white text-black rounded-2xl px-5 lg:px-7 text-[12px] h-[36px] lg:h-[40px] font-bold">
          Book Now
        </button>

        <button className="">
          <img
            src={hamburger}
            alt="Menu"
            className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]"
          />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
