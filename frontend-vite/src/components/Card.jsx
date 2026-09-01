import { Link } from "react-router-dom";
import { TbPlayerPlay } from "react-icons/tb";

export default function Card({ musica }) {

    return (
        <Link
            to={`/musica/${musica.id}`}
            className="group"
        >
            <div className="bg-gray-900 p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative overflow-hidden rounded-lg">
                    <img
                        src={musica.imagem}
                        alt={musica.nome}
                        className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 right-3 w-11 h-11 flex items-center justify-center bg-purple-600 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                        <span className="text-white text-lg ml-0.5">
                            <TbPlayerPlay />
                        </span>
                    </div>
                </div>
                <div className="mt-3">
                    <h3 className="font-bold text-sm line-clamp-2 text-white">
                        {musica.nome}
                    </h3>
                    <p className="text-xs text-gray-400 truncate mt-1">
                        {musica.artista}
                    </p>
                </div>
            </div>
        </Link>
    );
}