import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
