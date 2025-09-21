import React from 'react'
import Button from './Button'
import SubscriberCard from './SubscriberCard'
import { subscribers } from '../utils'

const Subscribed = () => {
  return (
    <div className='w-full h-fit md:h-fit' id='subscribed'>
        <h1 className=' text-4xl md:text-5xl text-center md:pt-40 uppercase tracking-wider'>our <br className='block md:hidden'/> newsletter</h1>
        <p className='px-4 md:px-0 text-lg md:text-lg text-center pt-2 md:pt-3 pb-14 tracking-wide'>Promotion of new products and sales. Directly to you</p>
        <div className='w-full h-fit element-center md:pl-5'>
            <input type="text" name="email" id="" className='md:w-3/10 w-3/5 md:h-10 h-9 bg-gray-200 px-5 outline-none' placeholder='Enter your email' />
            <Button heading={'subscribe'} bgColor={'bg-primary'} />
        </div>
        <div className='w-full h-fit element-center gap-[5%] md:px-40 md:pt-40 py-10'>
            {subscribers.map((subscriber, index) => (<SubscriberCard key={index} pic={subscriber} />))}
        </div>
    </div>
  )
}

export default Subscribed