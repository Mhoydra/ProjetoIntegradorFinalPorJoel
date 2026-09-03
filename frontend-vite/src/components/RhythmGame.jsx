import { useEffect, useRef, useState } from "react";

import { listarMusicas } from "../services/musicDB";

import {
    analisarAudio,
    detectarPicos,
    filtrarPicos
} from "../services/audioAnalyzer";

import { gerarChart } from "../services/chartGenerator";


export default function RhythmGame() {
    const [teclasPressionadas, setTeclasPressionadas] = useState({});
    const [musica, setMusica] = useState(null);
    const [audioURL, setAudioURL] = useState(null);
    const [chart, setChart] = useState([]);
    const [tempo, setTempo] = useState(0);

    const audioRef = useRef(null);
    const animationRef = useRef(null);

    const teclas = ["D", "F", "J", "K"];

    // Quanto tempo uma nota leva para atravessar a pista
    const tempoQueda = 2;


    // =========================
    // CARREGAR MÚSICA
    // =========================

    useEffect(() => {

        async function carregarMusica() {

            const musicas = await listarMusicas();

            if (musicas.length > 0) {
                setMusica(musicas[0]);
            }

        }

        carregarMusica();

    }, []);


    // =========================
    // CRIAR URL DO ÁUDIO
    // =========================

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


    // =========================
    // GERAR CHART
    // =========================

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


    // =========================
    // ATUALIZAR TEMPO
    // =========================

    function atualizarTempo() {

        if (!audioRef.current) {
            return;
        }

        setTempo(audioRef.current.currentTime);

        animationRef.current =
            requestAnimationFrame(atualizarTempo);

    }


    function iniciarJogo() {

        cancelAnimationFrame(animationRef.current);

        animationRef.current =
            requestAnimationFrame(atualizarTempo);

    }


    function pararJogo() {

        cancelAnimationFrame(animationRef.current);

    }


    useEffect(() => {

        return () => {
            cancelAnimationFrame(animationRef.current);
        };

    }, []);

    useEffect(() => {

        function teclaPressionada(event) {

            const tecla = event.key.toLowerCase();

            if (!["d", "f", "j", "k"].includes(tecla)) {
                return;
            }

            setTeclasPressionadas(prev => ({
                ...prev,
                [tecla]: true
            }));

            console.log("Tecla:", tecla);
        }


        function teclaSolta(event) {

            const tecla = event.key.toLowerCase();

            if (!["d", "f", "j", "k"].includes(tecla)) {
                return;
            }

            setTeclasPressionadas(prev => ({
                ...prev,
                [tecla]: false
            }));

        }


        window.addEventListener("keydown", teclaPressionada);
        window.addEventListener("keyup", teclaSolta);


        return () => {

            window.removeEventListener("keydown", teclaPressionada);
            window.removeEventListener("keyup", teclaSolta);

        };

    }, []);
    // =========================
    // LOADING
    // =========================

    if (!musica || !audioURL) {

        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <p>Carregando música...</p>
            </div>
        );

    }

    return (

        <div className="min-h-screen bg-black text-white flex flex-col">

            {/* ========================= */}
            {/* MÚSICA */}
            {/* ========================= */}

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
                    Tempo: {tempo.toFixed(2)}s
                </p>

            </div>


            {/* ========================= */}
            {/* JOGO */}
            {/* ========================= */}

            <div className="flex-1 flex justify-center">

                <div className="w-full max-w-2xl grid grid-cols-4">

                    {teclas.map((tecla, index) => (

                        <div
                            key={tecla}
                            className="relative h-[calc(100vh-180px)] border-x border-gray-800 bg-gray-950 overflow-hidden"
                        >

                            {/* NOTAS DA COLUNA */}

                            {chart.map((nota, notaIndex) => {

                                if (nota.coluna !== index) {
                                    return null;
                                }

                                const inicio =
                                    nota.tempo - tempoQueda;

                                const progresso =
                                    (tempo - inicio) / tempoQueda;


                                // Ainda não chegou a hora de aparecer
                                if (progresso < 0) {
                                    return null;
                                }


                                // Já passou da área de jogo
                                if (progresso > 1) {
                                    return null;
                                }


                                return (

                                    <div
                                        key={notaIndex}
                                        className="absolute left-2 right-2 h-16 bg-purple-600"
                                        style={{
                                            top: `${progresso * 100}%`
                                        }}
                                    />

                                );

                            })}

                        </div>

                    ))}

                </div>

            </div>


            {/* ========================= */}
            {/* TECLAS */}
            {/* ========================= */}

            <div className="h-24 bg-gray-900 border-t border-gray-700 flex justify-center">

                <div className="w-full max-w-2xl grid grid-cols-4">

                    {teclas.map((tecla) => (

                        <div
                            key={tecla}
                            className="flex items-center justify-center border-x border-gray-800"
                        >

                            <div
                                className={`
                                    w-16 h-12
                                    flex items-center justify-center
                                    rounded-lg
                                    font-bold text-xl
                                    transition-all duration-75
                                    ${teclasPressionadas[tecla.toLowerCase()]
                                        ? "bg-purple-600 scale-95"
                                        : "bg-gray-800"
                                    }
                                `}
                            >
                                {tecla}
                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );

}