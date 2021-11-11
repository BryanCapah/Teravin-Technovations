import { useEffect, useState } from "react";

export const useDimention = () => {
    const [dimension, setDimension] = useState({
        height: window.innerHeight - 35,
        width: window.innerWidth
    });
    const { width, height } = dimension;
    const isMobile = width <= 500

    useEffect(() => {
        const handleResize = () => {
            setDimension({
                height: window.innerHeight - 35,
                width: window.innerWidth
            });
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return { width, height, isMobile }
}

export const personalData = [
    {
        formName: 'personalData',
        name: 'namaLengkap',
        title: 'Nama Lengkap',
        value: '',
        required: false,
        inputType: 'text'
    },
    {
        formName: 'personalData',
        name: 'jenisKelamin',
        title: 'Jenis Kelamin',
        value: '',
        required: false,
        inputType: 'radio',
        options: [
            {
                label: 'Pria',
                value: 'pria'
            },
            {
                label: 'Wanita',
                value: 'wanita'
            },
        ]
    },
    {
        formName: 'personalData',
        name: 'nomorHp',
        title: 'Nomor Hp',
        value: '',
        required: false,
        inputType: 'text'
    },
    {
        formName: 'personalData',
        name: 'email',
        title: 'Email',
        value: '',
        required: false,
        inputType: 'text',
    },
    {
        formName: 'personalData',
        name: 'alamat',
        title: 'Alamat',
        value: '',
        required: false,
        inputType: 'text'
    },
    {
        formName: 'personalData',
        name: 'domisili',
        title: 'Domisili',
        value: '',
        required: false,
        inputType: 'text'
    },
]

export const riwayatPendidikan = [
    {
        formName: 'riwayatPendidikan',
        name: 'jenjang',
        title: 'Jenjang',
        value: '',
        required: false,
        inputType: 'text'
    },
    {
        formName: 'riwayatPendidikan',
        name: 'satuanPendidikan',
        title: 'Satuan Pendidikan',
        value: '',
        required: false,
        inputType: 'text',
    },
    {
        formName: 'riwayatPendidikan',
        name: 'masaPendidikan',
        title: 'Masa Pendidikan',
        value: '',
        required: false,
        inputType: 'text'
    },
    {
        formName: 'riwayatPendidikan',
        name: 'tahunMasuk',
        title: 'Tahun Masuk',
        value: '',
        required: false,
        inputType: 'text'
    },
    {
        formName: 'riwayatPendidikan',
        name: 'tahunKeluar',
        title: 'Tahun Keluar',
        value: '',
        required: false,
        inputType: 'text'
    },
    {
        formName: 'riwayatPendidikan',
        name: 'tahunKeluar',
        title: 'Tambah Pendidikan',
        value: '',
        required: false,
        inputType: 'action'
    },
]

export const pengalamanKerja = [
    {
        formName: 'pengalamanKerja',
        name: 'namaPerusahaan',
        title: 'Nama Perusahaan',
        value: '',
        required: false,
        inputType: 'text'
    },
    {
        formName: 'pengalamanKerja',
        name: 'posisi',
        title: 'Posisi',
        value: '',
        required: false,
        inputType: 'text',
    },
    {
        formName: 'pengalamanKerja',
        name: 'tahunMasuk',
        title: 'Tahun Masuk',
        value: '',
        required: false,
        inputType: 'text'
    },
    {
        formName: 'pengalamanKerja',
        name: 'sampaiSekarang',
        title: 'Sampai Sekarang',
        required: false,
        inputType: 'radio',
        options: [
            {
                value: 'true',
                label: 'Sampai Sekarang'
            }
        ]
    },
    {
        formName: 'pengalamanKerja',
        name: 'tahun Keluar',
        title: 'Tahun Keluar',
        value: '',
        required: false,
        inputType: 'text'
    },
    {
        formName: 'pengalamanKerja',
        name: 'tahunKeluar',
        title: 'Tambah Pengalaman Kerja',
        value: '',
        required: false,
        inputType: 'action'
    },
]

export const keahlian = [
    {
        formName: 'keahlian',
        name: 'keahlian',
        title: 'Keahlian',
        value: '',
        required: false,
        inputType: 'text'
    },
    {
        formName: 'keahlian',
        name: 'tahun',
        title: 'Tahun',
        value: '',
        required: false,
        inputType: 'text',
    },
    {
        formName: 'keahlian',
        name: 'range',
        title: 'Range',
        value: '',
        required: false,
        inputType: 'select',
        options: [
            {
                label: 'Dibawah 1 Tahun',
                value: '0'
            },

            {
                label: '1 - 3 Tahun',
                value: '3'
            },

            {
                label: '4 - 5 Tahun',
                value: '5'
            },

            {
                label: '5 - 9 Tahun',
                value: '9'
            },

            {
                label: 'Diatas 10 Tahun',
                value: '10'
            },


        ]
    },
    {
        formName: 'keahlian',
        name: 'tahunKeluar',
        title: 'Tambah Keahlian',
        value: '',
        required: false,
        inputType: 'action'
    },
]