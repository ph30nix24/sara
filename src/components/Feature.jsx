import React from 'react'
import GenderCard from './GenderCard'
import ProductCard from './ProductCard'
import { featureProducts } from '../utils'
const Feature = () => {
  return (
    <div  className='w-full min-h-screen pt-30'>
      <div className='w-full md:h-[372px] h-[200px] flex flex-col md:flex-row items-center justify-center gap-[5%] md:px-40 px-5'>
        <GenderCard pic={"/assets/img/backpackMan.png"} order={"1"} heading={"Men"}/>
        <GenderCard pic={"/assets/img/backpackWoman.png"} order={"2"} heading={"Women"}/>
      </div>
      <div id='featured' className='w-full h-fit md:py-40 py-20'>
        <h1 className='w-full text-4xl uppercase mt-20 text-center'>Featured Products</h1>
        <h2 className='w-full text-xl text-center text-gray-400 capitalize mt-2 md:mt-5 md:mb-20 mb-10'>view all</h2>
        <div className='w-full md:h-[460px] h-[320px] flex items-center md:justify-center gap-[5%] md:px-40 px-4 overflow-x-auto md:overflow-visible '>
          {featureProducts.map((product) => (
            <ProductCard key={product.id} pic={product.img} productName={product.name} productPrice={product.price}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feature