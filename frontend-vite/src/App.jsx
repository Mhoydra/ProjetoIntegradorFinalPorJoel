//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import LandingPage from './components/LandingPage.jsx'
import Cadastro from './components/Cadastro.jsx'
import Home from './components/Home.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/home" element={<Home/>}/>
    </Routes>
  )
}

export default App
