import React from 'react'
import Sidebar from '@/app/components/03-Organisms/Home/Kajur/Sidebar'
import DashboardTemplate from '@/app/components/04-Templates/Kajur/DashboardTemplate'

export default function Profil() {
  return (
    <div className="h-screen flex">
      <Sidebar/>
      <div className="flex flex-col p-8">
      <DashboardTemplate text={"Edit profil kamu disini"}/>
      </div>
    </div>
  )
}
