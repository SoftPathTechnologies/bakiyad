import React from 'react'
import Logo from '../img/updated logo.png'
import { MdShoppingBasket } from "react-icons/md";function Header() {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
        {/* Desktop and Tablet Menu  */}
        <div className='hidden md:flex w-full h-full items-center justify-between'>
            {/* Logo  */}
            <div className="flex items-center gap-2">
                <img src={Logo} className="w-28 object-cover" alt="logo"/>
            </div>
            {/* Menu List  */}
            <ul className='flex items-center gap-8'>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Services</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Contact</li>
            </ul>

            {/* Cart Basket  */}
            <div className="relative flex items-center justify-center">
                <MdShoppingBasket className='text-textColor ml-8 text-2xl cursor-pointer'/>
                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                    <p className="text-xs text-white font-semibold">2</p>
                </div>
            </div>
        </div>

        {/* Mobile Menu  */}
        <div className='flex md:hidden'>Hi</div>
    </header>
  )
}

export default Header