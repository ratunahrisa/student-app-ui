import React from 'react'
import DashboardTemplate from '@/app/components/04-Templates/Dosen/DashboardTemplate'
import TableTemplate from '@/app/components/04-Templates/Dosen/TableTemplate'
import Sidebar from '@/app/components/03-Organisms/Home/Dosen/Sidebar'

export default function TableNilai() {
  return (
    <>
    <div className="h-screen flex">
    <Sidebar/>
        <div className="flex flex-1 flex-col p-8">
            <DashboardTemplate text={"Edit dan submit nilai mahasiswa kamu disini"}/>
            <TableTemplate/>
        </div>
    </div>
    </>
  )
}
