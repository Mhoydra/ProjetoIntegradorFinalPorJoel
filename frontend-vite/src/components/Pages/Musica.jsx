import { IoMdArrowRoundBack } from "react-icons/io";
import { musicas } from "../../data/musicas";
import { useNavigate, useParams } from "react-router-dom";

export default function Musica() {
    const navigate = useNavigate();
    const { id } = useParams();
    const musica = musicas.find(
        m => m.id === Number(id)
    );
    if (!musica) {
        const videoId = id;
        return (
            <div className="min-h-screen bg-linear-to-b from-purple-900 to-black bg-gray-950 text-white">
                <header className="p-5">
                    <button
                        className="
                            flex items-center justify-center
                            w-10 h-10
                            rounded-full
                            bg-gray-900
                            text-gray-300
                            text-2xl
                            transition-all duration-200
                            hover:bg-gray-800
                            hover:text-white
                        "
                        onClick={() => navigate(-1)}
                    >
                        <IoMdArrowRoundBack />
                    </button>
                </header>
                <main className="max-w-5xl mx-auto px-5 pb-10">
                    <div
                        className="
                            w-full
                            aspect-video
                            rounded-2xl
                            overflow-hidden
                            bg-black
                            shadow-2xl
                            ring-1 ring-gray-800
                        "
                    >
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                    <div className="mt-6">
                        <h1 className="text-2xl md:text-3xl font-bold">
                            Vídeo do YouTube
                        </h1>
                        <p className="text-gray-400 mt-2">
                            Reproduzido pelo YouTube
                        </p>
                    </div>
                </main>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-linear-to-b from-purple-900 to-black bg-gray-950 text-white">
            <header className="p-5">
                <button
                    className="
                        flex items-center justify-center
                        w-10 h-10
                        rounded-full
                        bg-gray-900
                        text-gray-300
                        text-2xl
                        transition-all duration-200
                        hover:bg-gray-800
                        hover:text-white
                    "
                    onClick={() => navigate(-1)}
                >
                    <IoMdArrowRoundBack />
                </button>
            </header>
            <main className="flex flex-col items-center px-5 pb-10">
                <div className="
                    w-64
                    md:w-80
                    aspect-square
                    rounded-2xl
                    overflow-hidden
                    shadow-2xl
                    ring-1 ring-gray-800
                ">
                    <img
                        src={musica.imagem}
                        alt={musica.nome}
                        className="
                            w-full
                            h-full
                            object-cover
                        "
                    />
                </div>
                <div className="text-center mt-6 max-w-xl w-full">
                    <h1 className="text-3xl md:text-4xl font-bold">

                        {musica.nome}

                    </h1>
                    <p className="text-gray-400 mt-2">

                        {musica.artista}

                    </p>
                </div>
                <div className="w-full max-w-xl mt-8">
                    <audio
                        controls
                        src={musica.audio}
                        autoPlay
                        className="w-full"
                    />
                </div>
            </main>
        </div>
    );
}