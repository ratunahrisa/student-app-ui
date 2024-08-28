import React from 'react'
import AuthWrapper from '../../04-Templates/AuthWrapper'
import Title from '../../01-Atoms/Auth/Title'
import FormField from '../../02-Molecules/FormField/FormField'
import Button from '../../01-Atoms/Auth/Button'

export default function Index() {
  return (
    <AuthWrapper>
      <div className="mb-4">
        <Title label={"Login"} children={"Silahkan login terlebih dahulu"}/>
      </div>
      <div className="mb-2">
        <FormField type={"text"} id={"email"} label={"Email"} placeholder={"name@gmail.com"} />
      </div>
      <div className="mb-4">
        <FormField type={"password"} id={"password"} label={"Password"} placeholder={"******"} />
      </div>
      <div>
        <Button label={"Login"}/>
      </div>

    </AuthWrapper>
  )
}
