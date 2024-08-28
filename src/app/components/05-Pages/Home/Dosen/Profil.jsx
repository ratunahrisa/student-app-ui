import React from 'react'
import DashboardTemplate from '@/app/components/04-Templates/Dosen/DashboardTemplate'
import Sidebar from '@/app/components/03-Organisms/Home/Dosen/Sidebar'
import EditProfilForm from '@/app/components/03-Organisms/Home/Dosen/EditProfilForm'

export default function Profil() {
  return (
    <div className="h-screen flex">
      <Sidebar/>
      <div className="flex flex-col p-8">
      <DashboardTemplate text={"Edit profil kamu disini"}/>
      <EditProfilForm/>
      </div>
    </div>
  )
}
