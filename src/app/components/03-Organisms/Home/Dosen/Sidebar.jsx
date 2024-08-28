import React from 'react'
import Link from 'next/link'
import SidebarItems from '../../../02-Molecules/Mahasiswa/SidebarItems'
import Profile from '../../../02-Molecules/Mahasiswa/Profile'
import { FaTh, FaUserAlt, FaSignOutAlt, FaEdit, FaTable } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div>
      <div className="w-72 bg-blue-600 h-screen">
        <h2 className='text-xl font-bold p-6'>InputNilai</h2>
        <Profile name="Risma" role="Dosen" imageURL="/images/avatarDosen.png"/>
        
        <div className="mt-4">

        <Link href='../../../../dosen' passHref>  
          <SidebarItems IconComponent={FaTh} label="Dashboard"/>
        </Link>

        <Link href='../../../../dosen/inputnilai' passHref>
          <SidebarItems IconComponent={FaEdit} label="Input Nilai"/>
        </Link>

        <Link href='../../../../dosen/tablenilai' passHref>
          <SidebarItems IconComponent={FaTable} label="Table Nilai"/>
        </Link>

        <Link href='../../../../dosen/profil' passHref>
          <SidebarItems IconComponent={FaUserAlt} label="Profile"/>
        </Link>

          <SidebarItems IconComponent={FaSignOutAlt} label="Logout"/>
        </div>
      </div>
    </div>
  )
}
