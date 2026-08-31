import { IoMdArrowRoundBack } from "react-icons/io";

import { musicas } from "../../data/musicas";

import { useNavigate, useParams } from "react-router-dom";

export default function Musica() {

    const navigate = useNavigate();

    const { id } = useParams();

    const musica = musicas.find(
        m => m.id === Number(id)
    );

    // Se não for uma música local,
    // vamos tratar o ID como um vídeo do YouTube
    if (!musica) {

        const videoId = id;

        return (

            <div className="bg-black min-h-screen text-white">

                <button
                    className="text-white text-2xl m-5 hover:text-gray-500"
                    onClick={() => navigate(-1)}
                >
                    <IoMdArrowRoundBack />
                </button>

                <div className="min-h-screen flex flex-col text-center gap-4 justify-center items-center">

                    <div className="w-full max-w-4xl aspect-video">

                        <iframe
                            className="w-full h-full rounded-xl"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />

                    </div>

                </div>

            </div>

        );

    }

    // Música local

    return (

        <div className="bg-black min-h-screen">

            <button
                className="text-white text-2xl m-5 hover:text-gray-500"
                onClick={() => navigate(-1)}
            >
                <IoMdArrowRoundBack />
            </button>

            <div className="min-h-screen flex flex-col text-center gap-2 justify-center items-center text-white">

                <img
                    src={musica.imagem}
                    alt={musica.nome}
                    className="w-80 rounded-xl shadow-lg"
                />

                <h1 className="text-4xl font-bold mt-6 w-80 truncate">
                    {musica.nome}
                </h1>

                <p className="text-xs text-gray-400">
                    {musica.artista}
                </p>

                <audio
                    controls
                    src={musica.audio}
                    className="w-96"
                    autoPlay
                />

            </div>

        </div>

    );
}