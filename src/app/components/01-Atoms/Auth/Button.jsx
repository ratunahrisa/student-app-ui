import React, { Children } from 'react'

export default function Button({label}) {
  return (
    <button
    className='w-full bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-700'
    >
        {label}
    </button>
  )
}
