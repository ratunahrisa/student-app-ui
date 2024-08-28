import React from 'react'
import InputField from '../../01-Atoms/Dosen/InputField'

export default function FormGroup({label, type, placeholder, value}) {
  return (
    <div className='mb-4'>
      <label className="block text-gray-700 mb-2">{label}</label>
      <InputField type={type} placeholder={placeholder} value={value} />
    </div>
  )
}
