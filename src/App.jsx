import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import Executive from './pages/Executive.jsx'
import ChinaDetail from './pages/ChinaDetail.jsx'
import SeaDetail from './pages/SeaDetail.jsx'
import HapoDetail from './pages/HapoDetail.jsx'

export default function App(){
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Executive/>}/>
        <Route path="/china" element={<ChinaDetail/>}/>
        <Route path="/sea" element={<SeaDetail/>}/>
        <Route path="/hapoday" element={<HapoDetail/>}/>
      </Routes>
    </Layout>
  )
}
