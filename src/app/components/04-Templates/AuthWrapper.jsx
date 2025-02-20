import React from 'react'

export default function AuthWrapper({children}) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
            {children}
        </div>
    </div>
  )
}
