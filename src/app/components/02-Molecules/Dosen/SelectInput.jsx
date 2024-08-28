import React from 'react'
import SelectField from '../../01-Atoms/Dosen/SelectField'

export default function SelectInput({label, options, value}) {
  return (
    <div className='mb-4'>
      <label className="block text-gray-700 mb-2">{label}</label>
      <SelectField options={options} value={value}/>
    </div>
  )
}
