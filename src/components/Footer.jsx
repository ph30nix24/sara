import React from 'react'
import { navlinks } from '../utils'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-fit bg-zinc-950 text-white '>
        <div className='w-full py-10 md:py-20 px-4 md:px-30 flex justify-between items-start md:gap-10 gap-2'>
            <div className='w-1/4 md:w-1/5 h-fit flex flex-col justify-start'>
                <h1 className="uppercase text-sm md:text-2xl font-semibold tracking-wider pb-2 md:pb-4">Sara</h1>
                <p className='text-sm md:text-xl font-semibold capitalize'>product store</p>
                <div className='w-full h-fit flex gap-2 md:flex-row flex-col pt-2 md:pt-4'>
                    <img src="/assets/img/footerstore1.png" className='md:w-1/2 w-full h-full object-center object-contain' alt="" />
                    <img src="/assets/img/footerstore2.png" className='md:w-1/2 h-full object-center object-contain' alt="" />
                </div>
            </div>
            <div className='w-1/3 md:w-1/5 h-fit flex flex-col justify-start pl-4 md:pl-0'>
                <h1 className="uppercase text-sm md:text-2xl font-semibold tracking-wider pb-2 md:pb-4">Explore</h1>
                <ul className='flex flex-col md:gap-2'>
                    {navlinks.map((link) => (<a className=' text-sm md:text-base w-fit uppercase text-gray-400 hover:text-white' href={link === 'home' ? '' : `#${link}`} key={link}>{link}</a>))}
                </ul>
            </div>
            <div className='w-1/5 h-fit hidden md:flex flex-col justify-start '>
                <h1 className="uppercase text-sm md:text-2xl font-semibold tracking-wider pb-4">our services</h1>
                <ul className='gap-1 flex flex-col '>
                    <li><a className='text-lg text-gray-400 capitalize hover:text-white' href="#">pricing </a></li>
                    <li><a className='text-lg text-gray-400 capitalize hover:text-white' href="#">free shopping</a></li>
                    <li><a className='text-lg text-gray-400 capitalize hover:text-white' href="#">gift cards</a></li>
                </ul>
            </div>
            <div className='w-1/3 md:w-1/5 h-fit flex flex-col justify-start'>
                <h1 className="uppercase text-sm md:text-2xl font-semibold tracking-wider pb-2  md:pb-4">follow</h1>
                <ul className='flex gap-4 text-xl md:text-2xl'>
                    <li><a className='text-gray-400 capitalize hover:text-white' href="#"><FaInstagram /></a></li>
                    <li><a className=' text-gray-400 capitalize hover:text-white' href="#"><FaFacebook /></a></li>
                    <li><a className=' text-gray-400 capitalize hover:text-white' href="#"><FaTwitter/></a></li>
                </ul>
            </div>
        </div>
        <div className='w-9/10 h-[1px] bg-gray-200 mx-auto'></div>
        <div className='w-full py-2 md:py-5 h-fit element-center font-heading captialize'>
            <p className='md:text-base text-xs '>@2025 sara. all rights reserved</p>
        </div>
    </div>
  )
}

export default Footer