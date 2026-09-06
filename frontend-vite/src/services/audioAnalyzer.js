

export async function analisarAudio(audioFile) {
    const arrayBuffer = await audioFile.arrayBuffer();

    const audioContext = new AudioContext();

    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const dados = audioBuffer.getChannelData(0);

    const tamanhoJanela = 2048;
    const intervalo = 1024;

    const resultados = [];

    for (
        let inicio = 0;
        inicio < dados.length;
        inicio += intervalo
    ) {
        let energia = 0;

        const fim = Math.min(
            inicio + tamanhoJanela,
            dados.length
        );

        for (let i = inicio; i < fim; i++) {
            energia += dados[i] * dados[i];
        }

        energia = Math.sqrt(
            energia / (fim - inicio)
        );

        resultados.push({
            tempo: inicio / audioBuffer.sampleRate,
            energia
        });
    }

    await audioContext.close();

    return resultados;
}

export function detectarPicos(resultados) {

    if (resultados.length === 0) {
        return [];
    }

    // Média da energia da música
    const media =
        resultados.reduce(
            (soma, ponto) => soma + ponto.energia,
            0
        ) / resultados.length;

    // Só consideramos algo como pico
    // se estiver significativamente acima da média.
    const limite = media * 1.15;

    const picos = [];

    for (let i = 1; i < resultados.length - 1; i++) {

        const atual = resultados[i];
        const anterior = resultados[i - 1];
        const proximo = resultados[i + 1];

        const ehPico =
            atual.energia > limite &&
            atual.energia > anterior.energia &&
            atual.energia >= proximo.energia;

        if (ehPico) {
            picos.push({
                tempo: atual.tempo,
                energia: atual.energia
            });
        }
    }

    return picos;
}

export function filtrarPicos(picos, intervaloMinimo = 0.20) {

    const filtrados = [];

    for (const pico of picos) {

        if (filtrados.length === 0) {
            filtrados.push(pico);
            continue;
        }

        const ultimo =
            filtrados[filtrados.length - 1];

        const diferenca =
            pico.tempo - ultimo.tempo;

        if (diferenca >= intervaloMinimo) {
            filtrados.push(pico);
        }
    }

    return filtrados;
}