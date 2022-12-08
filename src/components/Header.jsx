import React from 'react'

function Header() {
  return (
    <div className='fixed z-50 w-screen bg-slate-300 p-6 px-16'>
        {/* Desktop and Tablet Menu  */}
        <div className='hidden md:flex'>Hello</div>

        {/* Mobile Menu  */}
        <div className='flex md:hidden'>Hi</div>
    </div>
  )
}

export default Header