import React from 'react'

export default function Title({label, children}) {
  return (
    <>
    <h1 className='text-2xl font-bold text-blue-600'>{label}</h1>
    <p className='text-gray-500'>{children}</p>
    </>
  )
}
