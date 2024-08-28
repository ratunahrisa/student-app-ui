import React from 'react'

export default function Label({htmlFor, children}) {
  return (
    <label 
        htmlFor={htmlFor}
        className='block text-sm'>
        {children}
    </label>
  )
}
