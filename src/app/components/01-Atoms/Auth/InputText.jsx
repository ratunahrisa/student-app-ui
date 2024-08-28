import React from 'react'

export default function InputText({type, id, placeholder}) {
  return (
    <input 
        type={type}
        id={id}
        placeholder={placeholder}
        className='border border-gray-300 w-full rounded-lg p-2 mt-1' 
        />
  )
}
