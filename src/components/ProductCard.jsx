import React from 'react'

const ProductCard = ({pic, productName, productPrice}) => {
  return (
    <div className='w-1/4 min-w-[200px]  h-full element-shadow shadow-md mb-2 overflow-y-visibe'>
        <div className='w-full h-7/10 bg-gray-200 relative'>
            <img src={pic}  className='size-full object-center object-contain' alt="" />
            <div className='absolute md:w-16 w-12 md:h-8 h-8 bg-primary top-0 left-0 text-white md:text-xs text-xs element-center uppercase'>new</div>
        </div>
        <div className='w-full h-3/10 flex flex-col justify-start pt-4 md:pt-0  md:justify-center items-center'>
            <h1 className='text-sm md:text-base pb-2 font-semibold font-heading uppercase text-center'>{productName}</h1>
            <p className='text-sm md:text-sm text-gray-600 font-semibold'>{productPrice}</p>
        </div>
    </div>
  )
}

export default ProductCard