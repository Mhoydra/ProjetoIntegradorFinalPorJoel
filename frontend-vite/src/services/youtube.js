const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export async function buscarVideos(pesquisa) {

    const url = new URL(
        "https://www.googleapis.com/youtube/v3/search"
    );

    url.searchParams.set("part", "snippet");
    url.searchParams.set("q", pesquisa);
    url.searchParams.set("type", "video");
    url.searchParams.set("maxResults", "10");
    url.searchParams.set("videoEmbeddable", "true");
    url.searchParams.set("videoSyndicated", "true");
    url.searchParams.set("key", API_KEY);

    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error("Erro ao buscar vídeos no YouTube.");
    }

    const dados = await resposta.json();

    return dados.items;
}