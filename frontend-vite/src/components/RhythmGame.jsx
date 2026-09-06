import { gerarChart } from "../services/chartGenerator";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { listarMusicas } from "../services/musicDB";
import {
    analisarAudio,
    detectarPicos,
    filtrarPicos
} from "../services/audioAnalyzer";

export default function RhythmGame() {
    const [teclasPressionadas, setTeclasPressionadas] = useState({});
    const [notasAcertadas, setNotasAcertadas] = useState(new Set());
    const [notasPerdidas, setNotasPerdidas] = useState(new Set());
    const [jogoFinalizado, setJogoFinalizado] = useState(false);
    const [contagem, setContagem] = useState(null);
    const [musica, setMusica] = useState(null);
    const [audioURL, setAudioURL] = useState(null);
    const [chart, setChart] = useState([]);
    const [tempo, setTempo] = useState(0);
    const [vida, setVida] = useState(100);
    const [pontuacao, setPontuacao] = useState(0);
    const audioRef = useRef(null);
    const animationRef = useRef(null);
    const teclas = ["D", "F", "J", "K"];
    const tempoQueda = 2;
    const coresColunas = [
        "from-green-500/80",
        "from-yellow-400/80",
        "from-blue-500/80",
        "from-red-500/80"
    ];
    const coresNotas = [
        "bg-green-500",
        "bg-yellow-400",
        "bg-blue-500",
        "bg-red-500"
    ];
    const navigate = useNavigate();

    // CARREGAR MÚSICA

    useEffect(() => {
        async function carregarMusica() {
            const musicas = await listarMusicas();
            if (musicas.length > 0) {
                setMusica(musicas[0]);
            }
        }
        carregarMusica();
    }, []);

    // CRIAR URL DO ÁUDIO

    useEffect(() => {
        if (!musica) {
            return;
        }
        const url = URL.createObjectURL(musica.audio);
        setAudioURL(url);
        return () => {
            URL.revokeObjectURL(url);
        };
    }, [musica]);

    // GERAR CHART

    useEffect(() => {

        if (!musica) {
            return;
        }

        async function gerarMusicaChart() {

            console.log("Analisando música...");
            const resultado = await analisarAudio(musica.audio);
            const picos = detectarPicos(resultado);
            const picosFiltrados = filtrarPicos(picos, 0.12);
            const novoChart = gerarChart(picosFiltrados);
            console.log("Chart:", novoChart);
            console.log("Quantidade de notas:", novoChart.length);
            setChart(novoChart);
        }
        gerarMusicaChart();
    }, [musica]);

    // ATUALIZAR TEMPO/INICIAR/PARAR/REINICIAR(morte)

    function atualizarTempo() {
        if (!audioRef.current) {
            return;
        }
        setTempo(audioRef.current.currentTime);
        animationRef.current = requestAnimationFrame(atualizarTempo);
    }

    function iniciarJogo() {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = requestAnimationFrame(atualizarTempo);
    }

    function pararJogo() {
        cancelAnimationFrame(animationRef.current);
    }

    function reiniciarJogo() {
        setJogoFinalizado(false);
        setVida(100);
        setPontuacao(0);
        setNotasAcertadas(new Set());
        setNotasPerdidas(new Set());
        setTempo(0);
        setContagem(3);

        if (audioRef.current) {
            audioRef.current.currentTime = 0;
        }

        let contador = 3;

        const intervalo = setInterval(() => {
            contador--;

            if (contador === 0) {
                clearInterval(intervalo);
                setContagem(null);

                if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play();
                }

                return;
            }

            setContagem(contador);
        }, 1000);
    }

    //NÃO LEMBOR OQUE É

    useEffect(() => {
        return () => {
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    //ACERT

    useEffect(() => {
        function teclaPressionada(event) {
            
            const tecla = event.key.toLowerCase();
            if (contagem !== null) {
                return;
            }
            if (!["d", "f", "j", "k"].includes(tecla)) {
                return;
            }

            setTeclasPressionadas(prev => ({
                ...prev,
                [tecla]: true
            }));

            if (!audioRef.current) {
                return;
            }

            const tempoAtual = audioRef.current.currentTime;
            const coluna = {
                d: 0,
                f: 1,
                j: 2,
                k: 3
            }[tecla];
            const janelaAcerto = 0.15;

            let melhorNota = null;
            let melhorDiferenca = Infinity;

            chart.forEach((nota, index) => {
                if (nota.coluna !== coluna) {
                    return null;
                }
                if (notasAcertadas.has(index)) {
                    return null;
                }
                const diferenca = Math.abs(nota.tempo - tempoAtual);
                if (
                    diferenca <= janelaAcerto &&
                    diferenca < melhorDiferenca
                ) {
                    melhorNota = index;
                    melhorDiferenca = diferenca;
                }
            });

            if (melhorNota !== null) {
                setNotasAcertadas(prev => {
                    const novoSet = new Set(prev);
                    novoSet.add(melhorNota);
                    return novoSet;
                });
                setPontuacao(prev => prev + 1);
                setVida(prev => Math.min(100, prev + 15));
                console.log("HIT!", tecla);
            }
        }

        function teclaSolta(event) {
            const tecla = event.key.toLowerCase();
            if (!["d", "f", "j", "k"].includes(tecla)) {
                return;
            }
            setTeclasPressionadas(prev => ({
                ...prev, [tecla]: false
            }));
        }

        window.addEventListener("keydown", teclaPressionada);
        window.addEventListener("keyup", teclaSolta);

        return () => {

            window.removeEventListener("keydown", teclaPressionada);
            window.removeEventListener("keyup", teclaSolta);

        };
    }, [chart, notasAcertadas, contagem]);;

    //ERRO

    useEffect(() => {
        if (!audioRef.current || chart.length === 0) {
            return;
        }

        const notasQuePassaram = [];

        chart.forEach((nota, index) => {
            if (notasAcertadas.has(index)) {
                return;
            }

            if (notasPerdidas.has(index)) {
                return;
            }

            const tempoNota =
                nota.tempo + (tempoQueda * 0.25);

            if (tempo >= tempoNota) {
                notasQuePassaram.push(index);
            }
        });

        if (notasQuePassaram.length === 0) {
            return;
        }

        setNotasPerdidas(prev => {
            const novoSet = new Set(prev);

            notasQuePassaram.forEach(index => {
                novoSet.add(index);
            });

            return novoSet;
        });

        setVida(prev =>
            Math.max(
                0,
                prev - (notasQuePassaram.length * 10)
            )
        );

    }, [
        tempo,
        chart,
        notasAcertadas,
        notasPerdidas
    ]);

    //MORTE

    useEffect(() => {
        if (vida <= 0) {
            setJogoFinalizado(true);

            if (audioRef.current) {
                audioRef.current.pause();
            }
        }
    }, [vida]);

    // LOAING / TELA DE MORTE

    if (!musica || !audioURL) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <p>Carregando musica...</p>
            </div>
        );

    }

    if (jogoFinalizado) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">

                    <h1 className="text-6xl font-bold mb-10">
                        DESAFINOU
                    </h1>

                    <div className="flex flex-col gap-4 w-64 mx-auto">

                        <button
                            onClick={reiniciarJogo}
                            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl font-bold"
                        >
                            🔄 Repetir música
                        </button>

                        <button
                            onClick={() => navigate("/criar-rhythm-game")}
                            className="bg-gray-800 hover:bg-gray-700 transition px-6 py-3 rounded-xl font-bold"
                        >
                            🎵 Criar música
                        </button>

                    </div>

                </div>
            </div>
        );
    }

    return (
        <>
            {contagem !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                    <span className="text-9xl text-purple-600 font-bold">
                        {contagem}
                    </span>
                </div>
            )}

            <div className="min-h-screen bg-black text-white flex flex-col">

                {/* MÚSICA */}

                <div className="p-4 bg-gray-900">
                    <h1 className="text-xl font-bold">

                        {musica.nome}

                    </h1>
                    <p className="text-gray-400 mb-3">

                        {musica.artista}

                    </p>
                    <audio
                        ref={audioRef}
                        src={audioURL}
                        controls
                        className="w-full"
                        onPlay={iniciarJogo}
                        onPause={pararJogo}
                    />
                    <p className="text-gray-500 text-sm mt-2">

                        Tempo: {tempo.toFixed(2)}

                    </p>
                </div>

                {/* JOGO */}

                <div className="flex-1 flex justify-center">
                    <div className="relative w-full max-w-2xl grid grid-cols-4">

                        {/* Linha de acerto */}

                        <div className="absolute left-0 right-0 bottom-16 h-1 bg-white z-10" />
                        {teclas.map((tecla, index) => (
                            <div
                                key={tecla}
                                className="relative h-[calc(100vh-180px)] border-x border-gray-800 bg-gray-950 overflow-hidden"
                            >
                                <div
                                    className={`
                                        absolute
                                        bottom-0
                                        left-0
                                        right-0
                                        h-24
                                        bg-gradient-to-t
                                        ${coresColunas[index]}
                                        to-transparent
                                        transition-opacity
                                        duration-100
                                        ${teclasPressionadas[tecla.toLowerCase()]
                                            ? "opacity-100"
                                            : "opacity-0"
                                        }
                                    `}
                                />

                                {/* NOTAS DA COLUNA */}

                                {chart.map((nota, notaIndex) => {
                                    if (notasAcertadas.has(notaIndex)) {
                                        return null;
                                    }

                                    if (nota.coluna !== index) {
                                        return null;
                                    }

                                    const inicio = nota.tempo - tempoQueda;
                                    const progresso = (tempo - inicio) / tempoQueda;

                                    if (progresso < 0) {
                                        return null;
                                    }
                                    // Se apareceu no certo certo
                                    if (progresso > 1.25) {
                                        return null;
                                    }

                                    return (
                                        <div
                                            key={notaIndex}
                                            className={`absolute left-2 right-2 h-2 ${coresNotas[index]}`}
                                            style={{
                                                top: `calc(${progresso * 100}% - ${progresso * 64}px)`,
                                                transform: "translateY(-50%)"
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                {/*HUD: Pontução + Vida */}

                <div className="fixed bottom-6 right-6 w-40">
                    <div className="bg-gray-900/90 border border-gray-700 rounded-xl p-4">

                        <div>
                            <p className="text-xs text-gray-400">
                                VIDA
                            </p>

                            <p className="text-2xl font-bold">
                                {vida}
                            </p>
                        </div>

                        <div className="mt-4">
                            <p className="text-xs text-gray-400">
                                PONTOS
                            </p>

                            <p className="text-2xl font-bold">
                                {pontuacao}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );

}