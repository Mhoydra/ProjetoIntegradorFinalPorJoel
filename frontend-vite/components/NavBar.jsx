import { Link } from "react-router-dom";

export default function NavBar(){
    <div className="">

        <div className="">
            <Link to="/explorar">Explorar</Link>
            <Link to="/criacoes">Suas criações</Link>
            <Link to="/amigos">Amigos</Link>
        </div>

        <div>
            <Link to="/perfil">
                <p className="">Nome do usuário</p>
            </Link>

            <Link to="/perfil">
                <img src={fotoPerfil} alt="Foto de Perfil" className=""/>
            </Link>
        </div>
    </div>
};