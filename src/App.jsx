import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'


import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'



export default function App() {
  return (
   <div className="flex flex-col h-screen ">
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/*" element={<Admin />} />
     </Routes>
     
    </BrowserRouter>
    </div>
  )
}
