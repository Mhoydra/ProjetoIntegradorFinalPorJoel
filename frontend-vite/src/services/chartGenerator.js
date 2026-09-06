export function gerarChart(picos) {
    const teclas = ["d", "f", "j", "k"];

    let ultimaColuna = -1;

    return picos.map((pico) => {

        let coluna;

        do {
            coluna = Math.floor(Math.random() * 4);
        } while (coluna === ultimaColuna);

        ultimaColuna = coluna;

        return {
            tempo: pico.tempo,
            coluna: coluna,
            tecla: teclas[coluna],
            energia: pico.energia
        };
    });
}