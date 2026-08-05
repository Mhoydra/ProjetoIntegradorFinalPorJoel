// Artistas
import sertanejo from "../assets/imgArtists/moca.webp";
import justin from "../assets/imgArtists/justin.webp";
import michael from "../assets/imgArtists/michael.jpg";
import canator from "../assets/imgArtists/canator.jpg";

// Músicas
import mariliaMusic from "../assets/musics/mariliaDuvidosa.mp3";
import justinMusic from "../assets/musics/justinBieberDuvidoso.mp3";
import michaelMusic from "../assets/musics/michaelJackson.mp3";
import canatorMusic from "../assets/musics/canator.mp3";

export const musicas = [
  {
    id: 1,
    nome: "Marília Mendonça",
    artista: "Marília Mendonça",
    imagem: sertanejo,
    audio: mariliaMusic,
  },
  {
    id: 2,
    nome: "Stay",
    artista: "Justin Bieber",
    imagem: justin,
    audio: justinMusic,
  },
  {
    id: 3,
    nome: "Billie Jean",
    artista: "Michael Jackson",
    imagem: michael,
    audio: michaelMusic,
  },
  {
    id: 4,
    nome: "Canator",
    artista: "Canator",
    imagem: canator,
    audio: canatorMusic,
  },
];