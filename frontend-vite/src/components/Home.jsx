import { useState } from "react";
import { Link } from "react-router-dom";
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
            <div className="bg-gray-950 min-h-screen">
                <div className="flex max-md:flex-col h-screen bg-black text-white font-sans">
                    <nav className=" flex flex-col sm:w-70 bg-gray-900 p-4 pb-10 gap-5">

                        <h2 className='font-semibold text-3xl text-white'>
                            Biblio
                            <span className='text-purple-600'>
                                verso
                            </span>
                        </h2>

                        <div className="flex gap-2 cursor-pointer">
                            <LuBookMarked className="font-extrabold"/>
                            <p className="text-white">Sua Biblioteca</p>
                        </div>

                        <div className="flex flex-col gap-3 bg-gray-800 p-3 rounded-2xl">
                            <h5 className="font-bold">Crie sua Primeira Playlist</h5>
                            <p className=""> É Facil, vamos te ajudar</p>
                            <button className="bg-white text-black p-2 rounded-2xl border-none">Criar Playlist</button>
                        </div>

                        <div className="flex flex-col gap-3 bg-gray-800 p-3 rounded-2xl">
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
                    <main className="flex-1 md:overflow-auto bg-black p-5">

                        <header className="flex items-center bg-gray-800 px-4 py-2 w-60 rounded-3xl">
                            <IoSearch className="font-bold text-2xl items-center justify-center"/>
                            <input className="bg-transparent border-none text-white ml-2 outline-none" type="text" placeholder="Oque deseja ouvir?"/>
                        </header>

                        <section className="p-6">

                            <h2 className="text-2xl font-bold mb-4">
                                Artistas Populares
                            </h2>

                            <div className="artists-grid grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
                                {musicas.map((musica) => (
                                    <Card
                                        key={musica.id}
                                        musica={musica}
                                    />
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
            </div>
        );
    };