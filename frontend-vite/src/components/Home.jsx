//import { useNavigate } from "react-router-dom";

export default function Home() {
    const artistsData = [
        {
            name: "musica 1",
            image: "../../assets/"
        },
        {},
        {}
    ] 
    const albunsData = [
        {},
        {},
        {}
    ]

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
                <main>

                    <header>
                        <p>pesquiza</p>
                        <input type="text" placeholder="Oque deseja ouvir?"/>
                    </header>

                    <section>
                        <h2>Artistas Populares</h2>
                        <div></div>

                        <h2>Albuns Populares</h2>
                        <div></div>
                    </section>
                </main>
            </div>
        </div>
    )
}