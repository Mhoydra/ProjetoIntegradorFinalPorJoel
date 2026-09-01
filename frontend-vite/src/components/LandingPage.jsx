import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import cores from '../assets/imgAlbuns/cores.jpg';

function LandingPage() {

  const navigate = useNavigate();

  const [emailUsuario, setEmail] = useState('');
  const [senhaUsuario, setSenha] = useState('');

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      const resposta = await fetch(
        'http://localhost:3000/api/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            emailUsuario,
            senhaUsuario
          })
        }
      );

      const dados = await resposta.json();

      if (resposta.ok) {

        localStorage.setItem('token', dados.token);

        localStorage.setItem(
          'usuario',
          JSON.stringify(dados.usuarios)
        );

        navigate('/home');

      } else {

        alert(dados.mensagem);

      }

    } catch (erro) {

      console.error('ERRO:', erro);

    }
  }

  return (

    <div className="min-h-screen bg-gray-950 text-white">

      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h2 className="font-bold text-3xl">
            Biblio
            <span className="text-purple-600">
              verso
            </span>
          </h2>

          <button
            onClick={() => navigate('/login')}
            className="bg-purple-700 hover:bg-purple-600 transition-colors text-white px-6 py-3 rounded-lg font-semibold"
          >
            Fazer Login
          </button>

        </div>

      </nav>


      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">

          <span className="text-purple-500 font-semibold">
            BIBLOVERSO
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Sua música.
            <br />
            Seu universo.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl">
            Descubra músicas, artistas e novos sons em um
            único lugar. Crie sua conta e faça parte do
            Biblioverso.
          </p>

          <div className="flex flex-wrap gap-4">

            <button
              onClick={() => navigate('/cadastro')}
              className="bg-purple-700 hover:bg-purple-600 transition-colors px-7 py-3 rounded-lg font-semibold"
            >
              Criar conta
            </button>

            <button
              onClick={() => navigate('/home')}
              className="border border-gray-700 hover:bg-gray-900 transition-colors px-7 py-3 rounded-lg"
            >
              Explorar músicas
            </button>

          </div>

        </div>


        <div className="relative">

          <div className="absolute inset-0 bg-purple-700/20 blur-3xl rounded-full" />

          <img
            src={cores}
            alt="Capa musical"
            className="relative w-full aspect-square object-cover rounded-3xl shadow-2xl"
          />

        </div>

      </section>


      {/* SEÇÃO 1 */}

      <section className="bg-gray-900">

        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

          <img
            src={cores}
            alt=""
            className="w-full aspect-video object-cover rounded-2xl"
          />

          <div className="space-y-5">

            <span className="text-purple-500 font-semibold">
              DESCUBRA
            </span>

            <h2 className="text-4xl font-bold">
              Encontre novos sons
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Explore diferentes músicas e artistas,
              encontre novos estilos e descubra aquilo
              que combina com você.
            </p>

          </div>

        </div>

      </section>


      {/* SEÇÃO 2 */}

      <section>

        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-5">

            <span className="text-purple-500 font-semibold">
              BIBLIOTECA
            </span>

            <h2 className="text-4xl font-bold">
              Tudo em um só lugar
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Organize suas músicas e tenha acesso ao
              seu conteúdo de forma simples e rápida.
            </p>

          </div>

          <img
            src={cores}
            alt=""
            className="w-full aspect-video object-cover rounded-2xl"
          />

        </div>

      </section>


      {/* LOGIN / CTA */}

      <section className="bg-gray-900 py-20">

        <div className="max-w-xl mx-auto px-6">

          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8 md:p-10">

            <h2 className="text-3xl font-bold text-center mb-3">
              Faça parte do Biblioverso
            </h2>

            <p className="text-gray-400 text-center mb-8">
              Entre na sua conta para continuar.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >

              <input
                type="email"
                placeholder="E-mail"
                value={emailUsuario}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-purple-600"
              />

              <input
                type="password"
                placeholder="Senha"
                value={senhaUsuario}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-purple-600"
              />

              <button
                className="w-full bg-purple-700 hover:bg-purple-600 transition-colors text-white py-3 rounded-lg font-semibold"
              >
                Entrar
              </button>

            </form>

            <p className="text-center text-gray-400 mt-5">

              Não tem conta?{' '}

              <span
                onClick={() => navigate('/cadastro')}
                className="text-purple-500 hover:text-purple-400 cursor-pointer"
              >
                Criar conta
              </span>

            </p>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

          <div>

            <h3 className="text-2xl font-bold">
              Biblio
              <span className="text-purple-600">
                verso
              </span>
            </h3>

            <p className="text-gray-500 mt-3">
              Seu universo musical.
            </p>

          </div>


          <div>

            <h4 className="font-bold mb-3">
              Integrantes
            </h4>

            <p className="text-gray-500">Elena Mendener</p>
            <p className="text-gray-500">Joel Miller</p>
            <p className="text-gray-500">Carlos Prelo</p>

          </div>
          <div>

            <h4 className="font-bold mb-3">
              Social
            </h4>

            <p className="text-gray-500">Facebook</p>
            <p className="text-gray-500">Instagram</p>
            <p className="text-gray-500">LinkedIn</p>

          </div>
        </div>
        <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-600">

          Todo o conteúdo presente é protegido por lei de copyright.

        </div>
      </footer>
    </div>
  );
}

export default LandingPage;