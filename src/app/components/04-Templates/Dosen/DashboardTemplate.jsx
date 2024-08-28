import React from 'react'
import Sidebar from '../../03-Organisms/Home/Dosen/Sidebar'

export default function DashboardTemplate({text}) {
  return (
    <>
      <h1 className="text-4xl font-bold">Hello Risma</h1>
      <p className="text-gray-600 text-lg mt-3">{text}</p>
    </>
  )
}
