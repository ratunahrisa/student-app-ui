import React from 'react'
import Heading from '@/app/components/01-Atoms/Mahasiswa/Heading'
import SelectInput from '@/app/components/02-Molecules/Dosen/SelectInput'
import FormGroup from '@/app/components/02-Molecules/Dosen/FormGroup'
import ButtonSave from '@/app/components/01-Atoms/Dosen/ButtonSave'

export default function InputNilaiForm() {
  const opsiPelajaran = [
    {value: 'Bahasa Inggris', label: 'Bahasa Inggris'},
    {value: 'Matematika', label: 'Matematika'},
    {value: 'Sosiologi', label: 'Sosiologi'}
  ]
  
  const opsiMahasiswa = [
    { value: 'john', label: 'John' },
    { value: 'rizka', label: 'Rizka' },
    { value: 'putri', label: 'Putri' }
  ];
    return (
    <>
    <div className="mt-4">
        <Heading level={4} className="mb-4 text-xl font-bold">Input Nilai</Heading>
        <form action="#">
            <SelectInput 
            label={"Pelajaran"}
            options={opsiPelajaran}
            />

            <SelectInput
            label={"Mahasiswa"}
            options={opsiMahasiswa}
            />

            <FormGroup
            label={"Nilai"}
            placeholder={"0-100"}
            />

            <ButtonSave>Save</ButtonSave>
        </form>
    </div>
    </>
  )
}
