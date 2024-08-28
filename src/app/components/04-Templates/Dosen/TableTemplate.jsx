import React from 'react';
import Table from '../../03-Organisms/Home/Dosen/Table';
import { FaEdit, FaTrashAlt, FaPaperPlane } from 'react-icons/fa'; // Import the icons

export default function TableTemplate() {
    const tableData = [
        { no: 1, mahasiswa: 'John', pelajaran: 'Matematika', nilai: 98, status: 'Approved' },
        { no: 2, mahasiswa: 'Rizka', pelajaran: 'Bahasa Inggris', nilai: 87, status: 'Approved' },
        { no: 3, mahasiswa: 'Putri', pelajaran: 'Sosiologi', nilai: 65, status: 'Approved' }
    ];

    return (
        <Table data={tableData} />
    );
}
