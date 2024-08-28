import React from 'react'
import Link from 'next/link'
import SidebarItems from '@/app/components/02-Molecules/Mahasiswa/SidebarItems';
import Profile from '@/app/components/02-Molecules/Mahasiswa/Profile';
import { FaTh, FaUserAlt, FaSignOutAlt, FaEdit, FaTable } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div>
      <div className="w-72 bg-blue-600 h-screen">
        <h2 className='text-xl font-bold p-6'>InputNilai</h2>
        <Profile name="Susanto" role="Kajur" imageURL="/images/avatarKajur.png"/>
        
        <div className="mt-4">

        <Link href='../../../../kajur' passHref>  
          <SidebarItems IconComponent={FaTh} label="Dashboard"/>
        </Link>

        <Link href='../../../../kajur/profil' passHref>
          <SidebarItems IconComponent={FaUserAlt} label="Profile"/>
        </Link>

          <SidebarItems IconComponent={FaSignOutAlt} label="Logout"/>
        </div>
      </div>
    </div>
  )
}
