import React from 'react'
import DashboardTemplate from '@/app/components/04-Templates/Dosen/DashboardTemplate'
import Sidebar from '@/app/components/03-Organisms/Home/Dosen/Sidebar'

export default function Index() {
  return (
    <div className="h-screen flex">
      <Sidebar/>
      <div className="flex flex-col p-8">
      <DashboardTemplate text={"Lihat overview nilai mahasiswa kamu disini"}/>
      </div>
        
    </div>
  )
}
