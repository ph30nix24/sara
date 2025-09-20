import React from 'react'
import Button from './Button'

const NewCard = ({ pic }) => {
  return (
    <div className="w-[30%] min-w-[300px] h-[300px] bg-gray-200 mb-12 relative rounded-lg overflow-hidden">
      <img 
        src={pic}  
        alt="new-arrival" 
        className="w-full h-full object-contain object-center" 
      />
      {/* Overlay (optional, e.g. for hover effects or text) */}
      <div className="absolute inset-0 element-center bg-orange-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <Button heading={'view product'} bgColor={'bg-primary'} />
      </div>
    </div>
  )
}

export default NewCard
