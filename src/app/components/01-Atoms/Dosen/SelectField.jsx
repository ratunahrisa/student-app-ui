import React from 'react'

export default function SelectField({options, value}) {
  return (
    <select
    value={value}
    className='border border-gray-300 rounded py-2 px-4 w-full'
    >
        {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
