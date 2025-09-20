import React from 'react'
import Button from './Button'

const Special = () => {
  return (
    <div className='w-full md:h-[500px] h-[320px] relative'>
        <img src="/assets/img/offer.jpg" className='size-full object-center object-cover absolute z-10' alt="" />
        <div className='absolute z-20 top-0 left-0 w-full h-full bg-black opacity-50'></div>
        <div className='relative z-30 w-full h-full element-center flex-col'>
            <h1 className='text-4xl md:text-6xl font-semibold text-white uppercase tracking-wide'>Special offer</h1>
            <p className='text-lg md:text-2xl text-center text-white pt-2 md:tracking-wider md:word-spacing-wide md:pb-20 pb-10'>Special offers discounts for women this week only</p>
            <Button heading={'Shop Now'} bgColor={'bg-primary'} />
        </div>
    </div>
  )
}

export default Special