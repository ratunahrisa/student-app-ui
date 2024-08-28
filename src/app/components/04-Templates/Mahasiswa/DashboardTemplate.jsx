import React from 'react'
import Sidebar from '../../03-Organisms/Home/Mahasiswa/Sidebar'
import Table from '../../03-Organisms/Home/Mahasiswa/Table'

export default function DashboardTemplate() {
  const tableData = [
    { no: 1, pelajaran: 'Matematika', nilai: 98, status: 'Approved' },
    { no: 2, pelajaran: 'Bahasa Inggris', nilai: 87, status: 'Approved' },
    { no: 3, pelajaran: 'Sosiologi', nilai: 65, status: 'Approved' }
  ];
  return (
    <div className='h-screen flex'>
      <Sidebar/>
      <div className='flex flex-1 flex-col p-8'>
        <h1 className="text-4xl font-bold">Hello John</h1>
        <p className="text-gray-600 text-lg mt-3">Lihat nilai kamu yang sudah diapprove disini</p>
        <Table data={tableData} />
      </div>
    </div>
  )
}
