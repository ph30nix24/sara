import React from 'react'

const Button = ({heading, bgColor}) => {
  return (
    <div className={`${!bgColor ? 'bg-primary' : bgColor} tracking-wide shadow-2xl hover:bg-orange-500 text-white py-2 md:py-4 md:px-8 px-4 uppercase md:text-base text-sm cursor-pointer w-fit`}>{heading}</div>
  )
}

export default Button