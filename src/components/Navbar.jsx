import React, { useState } from 'react'
import { navlinks } from '../utils'
import { RiShoppingCartLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
    const [navHandler, setNavHandler] = useState(false)
  return (
    <div className={`fixed md:w-9/10 w-[95%] h-fit flex md:items-center justify-between md:py-4 md:px-20 z-20 mt-4 md:mt-6 top-0 left-1/2 -translate-x-1/2 ${navHandler ? 'flex-col rounded-xl py-6 px-4' : 'flex-row rounded-full py-2 px-4'} nav-bg`}>
        <a href='#' className='text-lg md:text-base uppercase font-heading font-medium'>
            Sara
        </a>
        <div className={`flex md:gap-10 md:items-center ${ navHandler ? 'flex-col gap-0 pt-4' : 'flex-row gap-4'}  capitalize text-base font-semibold`}>
            <ul className={`md:flex md:gap-8 md:flex-row ${navHandler ? 'flex flex-col' : 'hidden flex-row'}`}>
                {navlinks.map((link) => (
                    <a href={`#${link === 'home' ? '' : link}`} key={link}>{link}</a>
                ))}
            </ul>
            <div className={`md:hidden text-white md:text-black text-xl cursor-pointer flex gap-4 ${navHandler ? 'justify-between pt-4' : ''} items-center`} >
                <div className={`icon text-xl cursor-pointer `}>
                    <RiShoppingCartLine />
                </div>
                {navHandler ? <RxCross2 onClick={() => setNavHandler(!navHandler)}/> : <IoMenu onClick={() => setNavHandler(!navHandler)}/>}
            </div>
            <div className={`icon text-2xl cursor-pointer hidden md:block`}>
                    <RiShoppingCartLine />
            </div>
        </div>
    </div>
  )
}

export default Navbar