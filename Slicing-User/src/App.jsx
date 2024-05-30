import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Layout} from './Layout'
import { Sinew } from './components/Sidebar/SiNew'
import { Perhitungan } from './pages/PerhitunganPage/Perhitungan'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Kelola } from './pages/Kelola Page/Kelola';
import { RiwayatPage } from './pages/RiwayatPage/RiwayatPage';

function App() {

  return (
    <>
      {/* <Sinew /> */}
      {/* <Perhitungan /> */}
      {/* <RiwayatPage /> */}
      <Layout/>
      {/* <Routes>
        <Route element={<Layout/>} />
        <Route path="/" element={<Dashboard />} />
        <Route path='/Makanan' element={<Perhitungan />} />
        <Route path='/RiwayatHitung' element={<RiwayatPage />} />
        <Route path='/Users' element={<Kelola />} />
      </Routes> */}
    </>
  )
}

export default App
