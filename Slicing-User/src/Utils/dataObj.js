import DashboardIcon from '../assets/images/DashboardIcon.png'
import DashboardIconWh from '../assets/images/DashboardIconWh.png'
import HitungIcon from '../assets/images/HitungIcon.svg'
import HitungIconWh from '../assets/images/HitungIconWh.svg'
import RiwayatIcon from '../assets/images/RiwayatIcon.svg'
import RiwayatIconWh from '../assets/images/RiwayatIconWh.png'
import ProfilIcon from '../assets/images/ProfilIcon.svg'
import ProfilIconWh from '../assets/images/ProfilIconWh.png'

export const navTitle = [
    {
        route: '',
        title: 'Dashboard',
    },
    {
        route: 'Makanan',
        title: 'Hitung Makanan',
    },
    {
        route: 'RiwayatHitung',
        title: 'Riwayat Perhitungan',
    },
    {
      route: 'Users',
      title: 'Kelola User',
    },
  ]

export const sides = [
  {
    icon: DashboardIcon,
    icon2: DashboardIconWh,
    label: 'Dashboard',
    link: '/'
  },
  {
    icon: HitungIcon,
    icon2: HitungIconWh,
    label: 'Perhitungan',
    link: '/Makanan'
  },
  {
    icon: RiwayatIcon,
    icon2: RiwayatIconWh,
    label: 'Riwayat Perhitungan',
    link: '/RiwayatHitung'
  },
  {
    icon: ProfilIcon,
    icon2: ProfilIconWh,
    label: 'Kelola User',
    link: '/Users'
  },
]

export const theadRiwayat = ["ID", "Tanggal", "Jenis Makanan", "Total Kalori"];