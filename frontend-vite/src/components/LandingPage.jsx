import { useNavigate } from 'react-router-dom'
import Seccao from './LandingPageComponentes/Seccao';
import cores from '../assets/imgAlbuns/cores.jpg';

function LandingPage() {
  const navigate = useNavigate()

  return (
    <body className='bg-gray-950'>
      <nav className="flex items-center bg-gray-900 justify-between">
        <div className='m-5'>
          <h2 className='font-semibold text-3xl text-white'>
            Biblio
            <span className='text-purple-600'>
              verso
            </span>
          </h2>
        </div>

        <div>
          <button
            onClick={() => navigate('/login')}
            className='flex bg-purple-500 text-white px-6 py-3 rounded-2xl'
          >
            Fazer Login
          </button>
        </div>
      </nav>
      <main>
        <Seccao
          title="O Melhor site de musicas do Brasil"
          text="Escute musicas de graça e sem anúncios"
          img={cores}
        />
        <Seccao
          title="Baixe e crie sua biblioteca"
          text="Voce tem acesso ao nosso acervo de musicas e este pode crescer se você o alimentar com mais musicas"
          img={cores}
        />
        <Seccao
          title="OI"
          text="Acima está escrito io"
          img={cores}
        />
      </main>
    </body>
  );
}

export default LandingPage;