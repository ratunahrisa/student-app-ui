import React from 'react'

export default function ButtonSave({children}) {
  return (
    <button className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800'>
        {children}
    </button>
  )
}
