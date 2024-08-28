import React from 'react'
import DashboardTemplate from '@/app/components/04-Templates/Dosen/DashboardTemplate'
import Sidebar from '@/app/components/03-Organisms/Home/Dosen/Sidebar'
import InputNilaiForm from '@/app/components/03-Organisms/Home/Dosen/InputNilaiForm'

export default function InputNilai() {
  return (
    <>
    <div className="h-screen flex">
      <Sidebar/>
      <div className="flex flex-col p-8">
      <DashboardTemplate text={"Input nilai mahasiswa kamu disini"}/>
      <InputNilaiForm/>
      </div>
    </div>
    </>
  )
}
