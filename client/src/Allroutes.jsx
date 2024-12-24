import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Singin from './pages/Singin'
import Singup from './pages/Singup'
import Notes from './pages/Notes'

function Allroutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/singin" element={<Singin />} />
            <Route path="/singup" element={<Singup />} />
        </Routes>
    </>
  )
}

export default Allroutes