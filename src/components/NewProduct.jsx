import React from 'react'
import NewCard from './NewCard'
import { newCardres } from '../utils'

const NewProduct = () => {
  return (
    <div id='new' className='w-full h-fit md:h-screen md:py-30 py-10 '>
        <h1 className='text-center text-4xl tracking-wider w-full uppercase'>
            new arrival
        </h1>
        <h2 className='w-full text-lg text-center text-gray-400 capitalize mt-2 md:mt-3 md:mb-20 mb-8 tracking-wider'>view all</h2>
        <div className='w-full h-fit flex gap-[3%] px-4 md:px-40 md:flex-wrap md:justify-center overflow-x-auto'>
            {newCardres.map((card, index) => (
                <NewCard key={index} pic={card} />
            ))}
        </div>
    </div>
  )
}

export default NewProduct