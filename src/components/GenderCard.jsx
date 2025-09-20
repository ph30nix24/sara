import React from 'react'

const GenderCard = ({pic, order, heading}) => {
  return (
    <div className='md:w-1/2 w-full h-full bg-gray-200 flex justify-between items-center element-shadow '>
        <img src={pic} className={`w-1/2 h-9/10 self-end object-contain object-bottom ${order === '1' ? 'order-1' : 'order-2'}`} alt="" />
        <div className={`w-1/2 h-full order-1 ${order === '1' ? 'order-2' : 'order-1 md:pl-20 pl-5'} justify-center items-start flex flex-col uppercase `}>
            <h1 className='md:text-4xl text-base text-gray-500 md:leading-relaxed '>{heading}</h1>
            <p className='md:text-5xl text-3xl md:pb-24 pb-10 '>backpack</p>
            <a href="#" className='md:text-sm text-xs text-gray-500 hover:text-black hover:underline'>view collection</a>
        </div>
    </div>
  )
}

export default GenderCard