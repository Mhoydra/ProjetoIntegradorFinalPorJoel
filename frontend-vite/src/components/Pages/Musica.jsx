export default function Musica() {

    const { id } = useParams();

    const musica = musicas.find(
        (m) => m.id === Number(id)
    );

    if (!musica) {
        return <h1>Música não encontrada.</h1>;
    }

    return (

        <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white">

            <img
                src={musica.imagem}
                alt={musica.nome}
                className="w-80 rounded-xl shadow-lg"
            />

            <h1 className="text-4xl font-bold mt-6">
                {musica.nome}
            </h1>

            <p className="text-gray-400 text-xl mb-6">
                {musica.artista}
            </p>

            <audio
                controls
                src={musica.audio}
                className="w-96"
            />

        </div>

    );

}