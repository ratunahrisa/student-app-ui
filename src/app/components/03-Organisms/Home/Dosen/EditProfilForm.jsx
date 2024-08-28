import React from 'react'
import FormGroup from '@/app/components/02-Molecules/Dosen/FormGroup'
import SelectInput from '@/app/components/02-Molecules/Dosen/SelectInput'
import ButtonSave from '@/app/components/01-Atoms/Dosen/ButtonSave'
import Heading from '@/app/components/01-Atoms/Mahasiswa/Heading'

export default function EditProfilForm() {
  return (
    <>
    <div className="mt-4">
        <Heading level={4} className="mb-4 text-xl font-bold">Edit Profil</Heading>
        <form action="#">
            <FormGroup
            label={"Nama"}
            value={"Risma Kusuma"}
            />

            <FormGroup
            label={"Email"}
            value={"risma@gmail.com"}
            />

            <FormGroup
            label={"Password"}
            value={"******"}
            />



            <ButtonSave>Edit</ButtonSave>
        </form>
    </div>
    </>
  )
}
