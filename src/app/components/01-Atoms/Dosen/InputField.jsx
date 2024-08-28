import React from 'react'

export default function InputField({type = 'text', placeholder, value}) {
  return (
    <input
    type={type}
    placeholder={placeholder}
    value={value}
    className='border border-gray-300 rounded py-2 px-4 w-full'
    />
  )
}
