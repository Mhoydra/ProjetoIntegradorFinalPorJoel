import { Link } from "react-router-dom";

export default function Card({ musica }) {

    return (

        <Link to={`/musica/${musica.id}`}>

            <div className="flex flex-col justify-evenly bg-gray-900 cursor-pointer transition-colors duration-300 hover:bg-gray-800 p-4 rounded-lg">

                <img
                    src={musica.imagem}
                    alt={musica.nome}
                    className="w-full aspect-video object-cover rounded-lg mb-3"
                />

                <h3 className="font-bold text-sm mt-2 line-clamp-2">
                    {musica.nome}
                </h3>

                <p className="text-xs text-gray-400 truncate">
                    {musica.artista}
                </p>

            </div>

        </Link>

    );
}