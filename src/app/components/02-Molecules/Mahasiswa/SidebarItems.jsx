import React from 'react';
import Icon from '../../01-Atoms/Mahasiswa/Icon'
import Heading from '../../01-Atoms/Mahasiswa/Heading'

export default function SidebarItems({ IconComponent, label }) {
  return (
    <div>
      <div className="w-full p-4 text-white flex items-center hover:bg-blue-800 cursor-pointer">
        <Icon IconComponent={IconComponent} className="mr-2" />
        <Heading level={4}>{label}</Heading>
      </div>
    </div>
  );
}
