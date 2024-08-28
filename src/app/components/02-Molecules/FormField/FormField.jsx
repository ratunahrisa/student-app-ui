import React from 'react'
import Label from '../../01-Atoms/Auth/Label'
import InputText from '../../01-Atoms/Auth/InputText'

export default function FormField({id, label, type, placeholder}) {
  return (
    <div className="mb-4">
        <Label htmlFor={id}>{label}</Label>
        <InputText id={id} type={type} placeholder={placeholder}/>
    </div>
  )
}
