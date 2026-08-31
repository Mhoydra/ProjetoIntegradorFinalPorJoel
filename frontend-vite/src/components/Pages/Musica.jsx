import { IoMdArrowRoundBack } from "react-icons/io";
import { musicas } from "../../data/musicas"
import { useNavigate, useParams } from "react-router-dom";
 
export default function Musica() {

    const navigate = useNavigate();
    const { id } = useParams();

    const musica = musicas.find(
        (m) => m.id === Number(id)
    );

    if (!musica) {
        return <h1>Música não encontrada.</h1>;
    }

    return (
        <div className="bg-black">
            <button className="text-white text-2xl m-5  hover:text-gray-500" onClick={ () => navigate(-1)}>
                <IoMdArrowRoundBack/>
            </button>
            <div className="min-h-screen flex flex-col min-w-0 justify-center items-center text-white">

                <img
                    src={musica.imagem}
                    alt={musica.nome}
                    className="w-80 rounded-xl shadow-lg"
                />

                <h1 className="text-4xl font-bold mt-6 w-80 truncate">
                    {musica.nome}
                </h1>

                <p className="block w-full min-w-0 overflow-hidden whitespace-nowrap text-ellipsis text-xs text-gray-400">
                    {musica.artista}
                </p>

                <audio
                    controls
                    src={musica.audio}
                    className="w-96"
                />

            </div>
        </div>

    );

}