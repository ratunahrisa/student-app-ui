import React from 'react'
import Image from '../../01-Atoms/Mahasiswa/Image'
import Heading from '../../01-Atoms/Mahasiswa/Heading'
import Paragraph from '../../01-Atoms/Mahasiswa/Paragraph'
import Icon from '../../01-Atoms/Mahasiswa/Icon'

export default function Profile({name, role, imageURL}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={imageURL} alt="User profile picture" width={100} className="mt-8"/>
      <Heading level={4} className="mt-3 text-xl text-white font-bold">{name}</Heading>
      <Paragraph className="text-white text-md">{role}</Paragraph>
    </div>
  )
}
