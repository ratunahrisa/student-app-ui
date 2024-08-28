import React from 'react'

export default function DashboardTemplate({text}) {
  return (
    <>
      <h1 className="text-4xl font-bold">Hello Susanto</h1>
      <p className="text-gray-600 text-lg mt-3">{text}</p>
    </>
  )
}
