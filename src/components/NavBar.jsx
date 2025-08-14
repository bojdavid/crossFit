import React from 'react'
import Logo from "../assets/Logo.png"
import hamburger from "../assets/hamburger.png"

function NavBar() {
    let navItems = ["Home", "pages", "portfolio", "Blog", "Shop"];
    const displayList = (listItems) =>{
        return <li className='text-[12px] font-[700]'> {listItems}</li>
    }

  return (
   <nav className='py-5 flex justify-between text-white px-10'>
    <div className='my-auto'><img src={Logo} alt="Logo" /></div>
    <div className='my-auto'>
        <ul className='flex gap-15'>
            {navItems.map(displayList)}
        </ul>
    </div>
    <div className='flex gap-10 my-auto'>
        <button className='bg-white text-black rounded-2xl px-7 text-[12px] h-[40px]'>
            Book Now
        </button>
        <div className=''>
            <img src={hamburger} alt="hamburger icon" className='w-[40px] h-[40px]' />
        </div>
    </div>
   </nav>
  )
}

export default NavBar