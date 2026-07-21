//Artistas
import sertanejo from "../assets/imgArtists/sertanejo.webp";
import justin from "../assets/imgArtists/justin.webp";
import roberto from "../assets/imgArtists/robertoCarlos.avif";
import canator from "../assets/imgArtists/canator.jpg"
//Albums
import prisma from "../assets/imgAlbuns/prisma.webp";
import nene from "../assets/imgAlbuns/nene.jpg";
import mundo from "../assets/imgAlbuns/mundo.jpg";
import tango from "../assets/imgAlbuns/tango.jpg";

export default function Home() {

    const artistsData = [
        {
            name: "Música 1",
            image: sertanejo
        },
        {
            name: "Música 2",
            image: justin
        },
        {
            name: "Música 3",
            image: roberto
        },
        {
            name: "Musica 4",
            image: canator
        },
        {
            name: "Música 1",
            image: sertanejo
        },
        {
            name: "Música 2",
            image: justin
        },
        {
            name: "Música 3",
            image: roberto
        },
        {
            name: "Musica 4",
            image: canator
        }
    ];

    const albunsData = [
            {
                name: "Albun 1",
                artist: "Artista 1",
                image: prisma
            },
            {
                name: "Albun 2",
                artist: "Artista 1",
                image: nene
            },
            {
                name: "Albun 3",
                artist: "Artista 3",
                image: mundo    
            },
            {
                name: "Albun 4",
                artist: "Artista 4",
                image: tango    
            }
    ];

        return(
            <div>
                <div className="flex h-screen bg-black text-white font-sans">
                    <nav className=" flex flex-col w-70 bg-gray-900 p-4 pb-10 gap-5">

                        <h2 className='font-semibold text-3xl text-white'>
                            Biblio
                            <span className='text-purple-600'>
                                verso
                            </span>
                        </h2>

                        <div className="flex gap-2 cursor-pointer">
                            <p className="font-extrabold">O</p>
                            <p className="text-white">Sua Biblioteca +</p>
                        </div>

                        <div className="flex flex-col gap-1 bg-gray-800 p-3 rounded-2xl">
                            <h5 className="font-bold">Crie sua Primeira Playlist</h5>
                            <p className=""> É Facil, vamos te ajudar</p>
                            <button className="bg-white text-black p-2 rounded-2xl border-none">Criar Playlist</button>
                        </div>

                        <div className="flex flex-col gap-2 bg-gray-800 p-3 rounded-2xl">
                            <h5 className="font-bold">Que tal seguir um podcast?</h5>
                            <p className="">Avisaremos voçê sobre nossos episódeos</p>
                            <button className="bg-white text-black p-2 rounded-2xl border-none">Explore Podcast</button>
                        </div>

                        <div className="mt-auto">
                            <a className="text-xs mr-2 mb-1 text-gray-600 no-underline" href="">Legal</a>
                            <a className="text-xs mr-2 mb-2 text-gray-600 no-underline" href="">Centro de Privacidade</a>
                            <a className="text-xs mr-2 mb-2 text-gray-600 no-underline" href="">Politica de privacidade</a>
                            <a className="text-xs mr-2 mb-2 text-gray-600 no-underline" href="">Politica</a>
                            <a className="text-xs mr-2 mb-2 text-gray-600 no-underline" href="Cokies">Cokies</a>
                            <a className="text-xs mr-2 mb-2 text-gray-600 no-underline" href="Sobre Anuncios">Sobre Anuncios</a>
                            <a className="text-xs mr-2 mb-2 text-gray-600 no-underline" href="Acessibilidade">Acessibilidade</a>
                        </div>

                        <button className="bg-transparent p-3 border-2 border-solid border-white rounded-2xl">
                            <p>PT-BR</p>
                        </button>

                    </nav>
                    <main className="flex-1 overflow-auto p-5">

                        <header className="flex items-center bg-gray-700 px-4 py-2 w-60 rounded-3xl">
                            <p className="font-bold text-2xl items-center justify-center">O</p>
                            <input className="bg-transparent border-none text-white ml-2 outline-none" type="text" placeholder="Oque deseja ouvir?"/>
                        </header>

                        <section className="p-6">

                            <h2 className="text-2xl font-bold mb-4">
                                Artistas Populares
                            </h2>

                            <div className="artists-grid grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
                                {artistsData.map((artist, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col justify-evenly artist-card bg-gray-900 cursor-pointer transition-colors duration-300 hover:bg-gray-800 p-4 rounded-lg"
                                    >
                                        <img
                                            src={artist.image}
                                            alt={`Imagem do ${artist.name}`}
                                            className="w-full rounded-full mb-3"
                                        />

                                        <h3 className="font-bold text-[12px] mt-2">
                                            {artist.name}
                                        </h3>

                                        <p className="text-[10px] text-gray-400">
                                            Artista
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-bold mt-10 mb-4">
                                Álbuns Populares
                            </h2>

                            <div className="albuns-grid grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
                                {albunsData.map((album, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col justify-evenly album-card bg-gray-900 transition-colors duration-300 hover:bg-gray-800 p-4 rounded-lg"
                                    >
                                        <img
                                            src={album.image}
                                            alt={`Imagem do ${album.name}`}
                                            className="rounded-lg"
                                        />

                                        <h3 className="font-bold text-[12px] mt-2">
                                            {album.name}
                                        </h3>

                                        <p className="text-[10px] text-gray-400">
                                            {album.artist}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>
                </div>
                <div className="flex justify-between items-center fixed p-2 bottom-0 right-0 left-0 bg-gradient-to-r from-purple-600 to-blue-600">
                    <div className="">
                        <h2 className="text-white font-bold text-[14px]">Test nosso plano Premium de graça</h2>
                        <p className="text-white text-[10px]">Increva-se para curtir músicas ilimitadas e podcasts sem anúncios. Não precisa de cartão de crédito.</p>
                    </div>
                    <button className="text-black bg-white px-4 py-2 font-bold text-[12px] border-none rounded-2xl">Escreva-se Gratis</button>
                </div>
            </div>
        );
    };