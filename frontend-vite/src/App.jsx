//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import LandingPage from './components/LandingPage.jsx'
import Cadastro from './components/Cadastro.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  )
}

export default App
