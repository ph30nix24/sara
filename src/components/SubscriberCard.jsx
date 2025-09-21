import React from 'react'

const SubscriberCard = ({pic}) => {
  return (
    <div className='w-1/5 md:h-[220px] h-20 element-center'>
      <img src={pic} className='size-1/2 object-center object-cover opacity-80 hover:opacity-100' alt="" />
    </div>
  )
}

export default SubscriberCard