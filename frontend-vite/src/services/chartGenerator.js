export function gerarChart(picos) {
    const teclas = ["d", "f", "j", "k"];

    return picos.map((pico, index) => {
        const coluna = index % 4;

        return {
            tempo: pico.tempo,
            coluna: coluna,
            tecla: teclas[coluna],
            energia: pico.energia
        };
    });
}