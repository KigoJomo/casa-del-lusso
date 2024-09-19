import React from 'react'

const Button = ({ text, className }) => {
  return (
    <button className={`w-32 py-4 px-6 aspect-square flex-shrink-0 rounded-full bg-color-accent flex flex-col items-center justify-center cursor-pointer ${className}`}>
      <p className='w-full text-right'>+</p>
      <p className='uppercase text-left text-xs leading-3 font-medium'>{text}</p>
    </button>
  )
}

export default Button