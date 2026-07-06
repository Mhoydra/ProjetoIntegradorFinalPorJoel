import NavBar from "../components/NavBar";

import { Routes, Route, Navigate } from "react-router-dom";

import Amigos from "../pages/Amigos";
import Explorar from "../pages/Explorar";
import Criacoes from "../pages/Criacoes";
import Perfil from "../pages/Perfil";


export default function App(){
    return(
        <div>

            <NavBar />

            <Routes>

                <Route path="/" element={<Navigate to="/explorar" />} />

                <Route path="/explorar" element={<Explorar />} />

                <Route path="/criacoes" element={<Criacoes />} />

                <Route path="/amigos" element={<Amigos />} />

                <Route path="/perfil" element={<Perfil />} />

            </Routes>

        </div>
    );
};