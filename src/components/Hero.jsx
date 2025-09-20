import React, { useEffect, useState } from 'react'
import Button from './Button'


const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    if (width <= 600) {
      setIsMobile(true)
    }
    else {
      setIsMobile(false)
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [width]);
  return (
    <div className='w-full h-screen bg-gray-300 relative z-0'>
        {isMobile ? 
        <div className='w-full h-full relative z-0'>
          <img src='/assets/img/home.png' className='size-3/4 object-contain absolute bottom-0 object-bottom right-0'/> 
          <img src="/assets/img/hero2.png" className='absolute z-10 top-0 right-0 opacity-80 -translate-y-1/4 translate-x-1/10 object-contain size-4/5 rotate-12' alt="" />
        </div> : <video src="/assets/videos/home2.mp4" className={`object-cover w-full h-full relative z-0`} autoPlay loop muted />}
        
        <div className='absolute z-10 top-0 md:translate-y-1/2 md:right-0 md:translate-x-1/10 text-center md:w-1/2 w-full md:h-1/2 h-full md:px-40 flex flex-col md:justify-center pl-10 md:pt-10 pt-50'>
          <h1 className='text-start text-xl uppercase md:pb-8 pb-10'> <span className='md:text-7xl text-5xl uppercase leading-relaxed tracking-widest '>Unveiling</span> <br /> the Latest Trends</h1>
          <p className='text-start md:text-2xl text-lg pr-10 font-semibold md:pb-40 pb-10 hidden md:block'>Discover the latest arrivals crafted for trendsetters. From everyday essentials to statement pieces, upgrade your wardrobe with styles made to turn heads</p>
          <Button heading={'Go Shopping'} bgColor={'bg-black'} />
        </div>
    </div>
  )
}

export default Hero

