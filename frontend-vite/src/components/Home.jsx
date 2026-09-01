import { buscarVideos } from "../services/youtube";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { LuBookMarked } from "react-icons/lu";
import { musicas } from "../data/musicas";
import Card from "./Card";

import prisma from "../assets/imgAlbuns/prisma.webp";
import nene from "../assets/imgAlbuns/nene.jpg";
import mundo from "../assets/imgAlbuns/mundo.jpg";
import tango from "../assets/imgAlbuns/tango.jpg";

export default function Home() {

    const albunsData = [
        {
            name: "Álbum 1",
            artist: "Artista 1",
            image: prisma
        },
        {
            name: "Álbum 2",
            artist: "Artista 1",
            image: nene
        },
        {
            name: "Álbum 3",
            artist: "Artista 3",
            image: mundo
        },
        {
            name: "Álbum 4",
            artist: "Artista 4",
            image: tango
        }
    ];

    const [pesquisa, setPesquisa] = useState("");
    const [resultados, setResultados] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [erroBusca, setErroBusca] = useState("");

    const musicasFiltradas = musicas.filter((musica) =>
        musica.nome
            .toLowerCase()
            .includes(pesquisa.toLowerCase())
    );

    async function pesquisarYouTube() {

        if (!pesquisa.trim()) {
            setResultados([]);
            return;
        }

        try {

            setCarregando(true);
            setErroBusca("");

            const resultadosYouTube = await buscarVideos(pesquisa);

            setResultados(resultadosYouTube);

        } catch (erro) {

            console.error(erro);
            setErroBusca("Não foi possível realizar a busca.");

        } finally {

            setCarregando(false);

        }
    }

    function handleSubmit(e) {

        e.preventDefault();
        pesquisarYouTube();

    }

    return (

        <div className="min-h-screen bg-black text-white">

            <div className="min-h-screen flex flex-col md:flex-row">

                {/* SIDEBAR */}

                <aside className="md:w-72 md:h-screen md:sticky md:top-0 bg-gray-950 border-b md:border-b-0 md:border-r border-gray-800 p-5 flex flex-col gap-6">

                    {/* LOGO */}

                    <h1 className="font-bold text-3xl">
                        Biblio
                        <span className="text-purple-600">
                            verso
                        </span>
                    </h1>


                    {/* BIBLIOTECA */}

                    <div className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer transition-colors">

                        <LuBookMarked className="text-xl" />

                        <p className="font-semibold">
                            Sua Biblioteca
                        </p>

                    </div>


                    {/* PLAYLIST */}

                    <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl space-y-3">

                        <h3 className="font-bold">
                            Crie sua primeira playlist
                        </h3>

                        <p className="text-sm text-gray-400">
                            É fácil. Vamos te ajudar.
                        </p>

                        <button
                            className="bg-white hover:bg-gray-200 transition-colors text-black px-4 py-2 rounded-full font-semibold"
                        >
                            Criar playlist
                        </button>

                    </div>


                    {/* PODCAST */}

                    <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl space-y-3">

                        <h3 className="font-bold">
                            Que tal seguir um podcast?
                        </h3>

                        <p className="text-sm text-gray-400">
                            Avisaremos você sobre novos episódios.
                        </p>

                        <button
                            className="bg-white hover:bg-gray-200 transition-colors text-black px-4 py-2 rounded-full font-semibold"
                        >
                            Explorar podcasts
                        </button>

                    </div>


                    {/* LINKS */}

                    <div className="hidden md:flex flex-wrap gap-x-3 gap-y-2 mt-auto">

                        <span className="text-xs text-gray-600 cursor-pointer hover:text-gray-400">
                            Legal
                        </span>

                        <span className="text-xs text-gray-600 cursor-pointer hover:text-gray-400">
                            Privacidade
                        </span>

                        <span className="text-xs text-gray-600 cursor-pointer hover:text-gray-400">
                            Cookies
                        </span>

                        <span className="text-xs text-gray-600 cursor-pointer hover:text-gray-400">
                            Acessibilidade
                        </span>

                    </div>


                    {/* IDIOMA */}

                    <button className="w-fit border border-gray-600 hover:border-white transition-colors px-4 py-2 rounded-full text-sm">
                        PT-BR
                    </button>

                </aside>


                {/* CONTEÚDO */}

                <main className="flex-1 min-w-0 overflow-y-auto">

                    {/* HEADER */}

                    <header className="sticky top-0 z-20 bg-black/90 backdrop-blur border-b border-gray-900 px-5 py-4">

                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-2xl flex items-center bg-gray-900 border border-gray-800 rounded-full px-4 py-2 focus-within:border-purple-600 transition-colors"
                        >

                            <IoSearch className="text-xl text-gray-400 shrink-0" />

                            <input
                                className="flex-1 min-w-0 bg-transparent border-none text-white ml-3 outline-none placeholder:text-gray-500"
                                type="text"
                                placeholder="O que deseja ouvir?"
                                value={pesquisa}
                                onChange={(e) => setPesquisa(e.target.value)}
                            />

                            <button
                                type="submit"
                                disabled={carregando}
                                className="ml-2 bg-purple-700 hover:bg-purple-600 disabled:bg-gray-700 transition-colors px-4 py-2 rounded-full text-sm font-semibold shrink-0"
                            >
                                {carregando ? "Buscando..." : "Buscar"}
                            </button>

                        </form>

                    </header>


                    <div className="p-5 md:p-8 space-y-12">


                        {/* RESULTADOS YOUTUBE */}

                        {pesquisa && (

                            <section>

                                <div className="flex items-center justify-between mb-5">

                                    <h2 className="text-2xl font-bold">
                                        Resultados para "{pesquisa}"
                                    </h2>

                                    {resultados.length > 0 && (
                                        <span className="text-sm text-gray-500">
                                            {resultados.length} resultados
                                        </span>
                                    )}

                                </div>


                                {erroBusca && (
                                    <p className="text-red-400 mb-4">
                                        {erroBusca}
                                    </p>
                                )}


                                {resultados.length > 0 ? (

                                    <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">

                                        {resultados.map((video) => {

                                            const musicaYouTube = {

                                                id: video.id.videoId,

                                                nome: video.snippet.title,

                                                artista: video.snippet.channelTitle,

                                                imagem: video.snippet.thumbnails.medium.url,

                                                videoId: video.id.videoId

                                            };

                                            return (

                                                <Card
                                                    key={video.id.videoId}
                                                    musica={musicaYouTube}
                                                />

                                            );

                                        })}

                                    </div>

                                ) : (

                                    !carregando && !erroBusca && (

                                        <p className="text-gray-500">
                                            Pesquise uma música ou artista no YouTube.
                                        </p>

                                    )

                                )}

                            </section>

                        )}


                        {/* MÚSICAS LOCAIS */}

                        <section>

                            <div className="flex items-center justify-between mb-5">

                                <h2 className="text-2xl font-bold">
                                    {pesquisa
                                        ? "Músicas da sua biblioteca"
                                        : "Músicas populares"
                                    }
                                </h2>

                            </div>


                            {musicasFiltradas.length > 0 ? (

                                <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">

                                    {musicasFiltradas.map((musica) => (

                                        <Card
                                            key={musica.id}
                                            musica={musica}
                                        />

                                    ))}

                                </div>

                            ) : (

                                <p className="text-gray-500">
                                    Nenhuma música encontrada na sua biblioteca.
                                </p>

                            )}

                        </section>


                        {/* ÁLBUNS */}

                        <section>

                            <h2 className="text-2xl font-bold mb-5">
                                Álbuns populares
                            </h2>

                            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">

                                {albunsData.map((album, index) => (

                                    <div
                                        key={index}
                                        className="bg-gray-900 border border-gray-800 hover:bg-gray-800 transition-colors p-4 rounded-xl cursor-pointer"
                                    >

                                        <img
                                            src={album.image}
                                            alt={`Imagem do ${album.name}`}
                                            className="w-full aspect-square object-cover rounded-lg"
                                        />

                                        <h3 className="font-bold text-sm mt-3 truncate">
                                            {album.name}
                                        </h3>

                                        <p className="text-xs text-gray-400 truncate">
                                            {album.artist}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </section>


                        {/* ESPAÇO PARA FUTURAS SEÇÕES */}

                        <section>

                            <h2 className="text-2xl font-bold mb-5">
                                Mais para você
                            </h2>

                            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">

                                <p className="text-gray-500">
                                    Em breve teremos mais conteúdos personalizados para você.
                                </p>

                            </div>

                        </section>

                    </div>

                </main>

            </div>

        </div>
    );
}