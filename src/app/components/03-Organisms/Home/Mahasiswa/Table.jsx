import React from 'react';

export default function Table({ data=[] }) {
  return (
    <table className='w-full border border-collapse mt-4'>
      <thead>
        <tr className='bg-gray-50'>
          <th className='border px-4 py-2'>No</th>
          <th className='border px-4 py-2'>Pelajaran</th>
          <th className='border px-4 py-2'>Nilai</th>
          <th className='border px-4 py-2'>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="text-center">
            <td className="border px-4 py-2">{row.no}</td>
            <td className="border px-4 py-2">{row.pelajaran}</td>
            <td className="border px-4 py-2">{row.nilai}</td>
            <td className="border px-4 py-2">{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
