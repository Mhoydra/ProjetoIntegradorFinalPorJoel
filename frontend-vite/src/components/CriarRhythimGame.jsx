import { 
    gerarChart 
} from "../services/chartGenerator";
import { 
    useEffect, 
    useState 
} from "react";
import {
    adicionarMusica,
    listarMusicas,
    deletarMusica
} from "../services/musicDB";
import {
    analisarAudio,
    detectarPicos,
    filtrarPicos
} from "../services/audioAnalyzer";

export default function CriarRhythmGame() {

    const [nome, setNome] = useState("");
    const [artista, setArtista] = useState("");
    const [audio, setAudio] = useState(null);
    const [imagem, setImagem] = useState(null);

    const [musicasSalvas, setMusicasSalvas] = useState([]);
    const [mensagem, setMensagem] = useState("");

    async function carregarMusicas() {
        const musicas = await listarMusicas();
        setMusicasSalvas(musicas);
    }

    useEffect(() => {
        carregarMusicas();
    }, []);

    async function testarAnalise(musica) {

        try {

            const resultado = await analisarAudio(musica.audio);

            console.log("Resultado da análise:", resultado);

            const picos = detectarPicos(resultado);

            console.log("Picos detectados:", picos);
            console.log("Quantidade de picos:", picos.length);

            const picosFiltrados = filtrarPicos(picos, 0.12);

            console.log("Picos após filtros:", picosFiltrados);
            console.log("Quantidade após filtros:",
                picosFiltrados.length
            );

            const chart = gerarChart(picosFiltrados);

            console.log("Chart gerado:", chart);
            console.log("Quantidade de notas:", chart.length);

        } catch (erro) {

            console.error(
                "Erro ao analisar áudio:",
                erro
            );

        }
    }

    async function salvarMusica(e) {
        e.preventDefault();

        if (!nome || !artista || !audio || !imagem) {
            setMensagem("Preencha todos os campos.");
            return;
        }

        try {

            await adicionarMusica({
                nome,
                artista,
                audio,
                imagem
            });

            setMensagem("Música salva com sucesso!");

            setNome("");
            setArtista("");
            setAudio(null);
            setImagem(null);

            e.target.reset();

            await carregarMusicas();

        } catch (erro) {

            console.error(erro);
            setMensagem("Erro ao salvar a música.");

        }
    }

    async function removerMusica(id) {

        await deletarMusica(id);

        await carregarMusicas();
    }

    return (
        <div className="min-h-screen bg-black text-white p-5">

            <div className="max-w-5xl mx-auto">

                <h1 className="text-3xl font-bold mb-8">
                    Criar Rhythm Game
                </h1>

                {/* FORMULÁRIO */}

                <form
                    onSubmit={salvarMusica}
                    className="bg-gray-900 p-8 rounded-2xl flex flex-col gap-5"
                >

                    <h2 className="text-2xl font-bold">
                        Adicionar música
                    </h2>

                    <div className="flex flex-col gap-2">
                        <label>Nome da música</label>

                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Nome da música"
                            className="p-3 rounded-lg bg-gray-800 outline-none"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Artista</label>

                        <input
                            type="text"
                            value={artista}
                            onChange={(e) => setArtista(e.target.value)}
                            placeholder="Nome do artista"
                            className="p-3 rounded-lg bg-gray-800 outline-none"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Arquivo MP3</label>

                        <input
                            type="file"
                            accept="audio/*"
                            onChange={(e) => setAudio(e.target.files[0])}
                            className="text-gray-300"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Capa da música</label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImagem(e.target.files[0])}
                            className="text-gray-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-purple-700 hover:bg-purple-600 transition p-3 rounded-lg font-bold"
                    >
                        Salvar música
                    </button>

                    {mensagem && (
                        <p className="text-center text-purple-400">
                            {mensagem}
                        </p>
                    )}

                </form>


                {/* MÚSICAS SALVAS */}

                <section className="mt-10">

                    <h2 className="text-2xl font-bold mb-5">
                        Músicas salvas
                    </h2>

                    <div className="grid gap-4">

                        {musicasSalvas.length === 0 ? (

                            <p className="text-gray-500">
                                Nenhuma música salva.
                            </p>

                        ) : (

                            musicasSalvas.map((musica) => {

                                const imagemURL =
                                    URL.createObjectURL(musica.imagem);

                                const audioURL =
                                    URL.createObjectURL(musica.audio);

                                return (
                                    <div
                                        key={musica.id}
                                        className="bg-gray-900 p-4 rounded-xl flex items-center gap-5"
                                    >

                                        <img
                                            src={imagemURL}
                                            alt={musica.nome}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />

                                        <div className="flex-1">

                                            <h3 className="font-bold">
                                                {musica.nome}
                                            </h3>

                                            <p className="text-gray-400 text-sm">
                                                {musica.artista}
                                            </p>

                                            <audio
                                                src={audioURL}
                                                controls
                                                className="w-full mt-3"
                                            />
                                            <button
                                                onClick={() => testarAnalise(musica)}
                                                className="bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-lg mt-3"
                                            >
                                                Analisar áudio
                                            </button>

                                        </div>

                                        <button
                                            onClick={() =>
                                                removerMusica(musica.id)
                                            }
                                            className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg"
                                        >
                                            Excluir
                                        </button>

                                    </div>
                                );
                            })

                        )}

                    </div>

                </section>

            </div>

        </div>
    );
}