import React from 'react'
import { FaEdit, FaTrashAlt, FaPaperPlane } from 'react-icons/fa'

export default function Table({data=[]}) {
  return (
    <table className='w-full border border-collapse mt-4'>
      <thead>
        <tr className='bg-gray-50'>
          <th className='border px-4 py-2'>No</th>
          <th className='border px-4 py-2'>Mahasiswa</th>
          <th className='border px-4 py-2'>Pelajaran</th>
          <th className='border px-4 py-2'>Nilai</th>
          <th className='border px-4 py-2'>Status</th>
          <th className='border px-4 py-2'>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="text-center">
            <td className="border px-4 py-2">{row.no}</td>
            <td className="border px-4 py-2">{row.mahasiswa}</td>
            <td className="border px-4 py-2">{row.pelajaran}</td>
            <td className="border px-4 py-2">{row.nilai}</td>
            <td className="border px-4 py-2">{row.status}</td>
            <td className="border px-4 py-2">
              <button className='mr-4'>
                <FaEdit/>
              </button>
              <button className='mr-4'>
                <FaTrashAlt/>
              </button>
              <button>
                <FaPaperPlane/>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
