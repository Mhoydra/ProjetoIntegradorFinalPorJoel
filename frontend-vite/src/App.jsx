//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import LandingPage from './components/LandingPage.jsx';
import Cadastro from './components/Cadastro.jsx';
import Home from './components/Home.jsx';
import Musica from './components/Pages/Musica.jsx';
import CriarRhythmGame from './components/CriarRhythimGame.jsx';
import RhythmGame from "./components/RhythmGame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/home" element={<Home/>} />
      <Route path='/musica/:id' element={<Musica />} />
      <Route path="/criar-rhythm-game" element={<CriarRhythmGame />} />
      <Route path="/rhythm-game" element={<RhythmGame />}/>
    </Routes>
  )
}

export default App
