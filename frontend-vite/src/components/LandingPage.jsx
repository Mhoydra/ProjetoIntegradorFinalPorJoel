import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cores from '../assets/imgAlbuns/cores.jpg';
//import cores from '../assets/imgAlbuns/cores.jpg';

function LandingPage() {

    const navigate = useNavigate();
    const [emailUsuario, setEmail] = useState('');
    const [senhaUsuario, setSenha] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const resposta = await fetch(
                'http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    emailUsuario, senhaUsuario
                })
            }
            );

            const dados = await resposta.json();
            console.log('STATUS:', resposta.status);
            console.log('DADOS:', dados);

            if (resposta.ok) {
                localStorage.setItem('token', dados.token);
                localStorage.setItem('usuario', JSON.stringify(dados.usuarios));
                navigate('/home');
            } else {
                alert(dados.mensagem);
            }
        }

        catch (erro) {
            console.log('ERRO:', erro);
        }
    }

  return (
    <div className='flex flex-col bg-gray-950 m-0 p-0'>
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
            className='flex bg-purple-500 text-white px-6 py-3 mx-5 rounded-2xl'
          >
            Fazer Login
          </button>
        </div>
      </nav>
      <main>
        <section className='flex flex-col-reverse md:flex-row p-10 gap-10 bg-gray-950'> 
          <div className='flex flex-col gap-5'>
            <h2 className='text-white font-bold text-4xl'>O site mais barato de musicas</h2>
            <p className='text-white text-[20px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam neque molestiae quod enim libero modi velit aliquid ea expedita, itaque ratione suscipit! Deserunt amet rerum neque sint repellat eligendi!</p>
          </div>
          <div>
            <img src={cores} alt="" className='w-full md:w-[500px]'/>
          </div>
        </section>
        <section className='flex flex-col-reverse md:flex-row-reverse p-10 gap-10 bg-gray-900'> 
          <div className='flex flex-col gap-5'>
            <h2 className='text-white font-bold text-4xl'>O site mais barato de musicas</h2>
            <p className='text-white text-[20px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam neque molestiae quod enim libero modi velit aliquid ea expedita, itaque ratione suscipit! Deserunt amet rerum neque sint repellat eligendi!</p>
          </div>
          <div>
            <img src={cores} alt="" className='w-full md:w-[500px]'/>
          </div>
        </section>
        <section className='flex flex-col-reverse md:flex-row p-10 gap-10 bg-gray-950'> 
          <div className='flex flex-col gap-5'>
            <h2 className='text-white font-bold text-4xl'>O site mais barato de musicas</h2>
            <p className='text-white text-[20px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam neque molestiae quod enim libero modi velit aliquid ea expedita, itaque ratione suscipit! Deserunt amet rerum neque sint repellat eligendi!</p>
          </div>
          <div>
            <img src={cores} alt="" className='w-full md:w-[500px]'/>
          </div>
        </section>
        <footer className='flex flex-col justify-center'>
            <form onSubmit={handleSubmit} className='p-10 bg-gray-900 flex flex-col gap-5 items-center'>

                    <h2 className="text-4xl font-bold mb-10 text-purple-700">
                        Login
                    </h2>

                    <input type="email" placeholder="E-mail" value={
                        emailUsuario
                    } onChange={
                        (e) => setEmail(e.target.value)
                    } className="w-72 p-3 shadow-inner shadow-gray-600 bg-gray-50 text-purple-700"/>

                    <input type="password" placeholder="Senha" value={
                        senhaUsuario
                    } onChange={
                        (e) => setSenha(e.target.value)
                    } className="w-72 p-3 shadow-inner shadow-gray-600 bg-gray-50 text-purple-700" />

                    <button className='flex bg-purple-700 text-white px-10 py-3 rounded'>
                        Entrar
                    </button>

                    <p className="text-purple-400">
                        Não tem conta?{' '}
                        <span onClick={
                            () => navigate('/cadastro')
                        } className="text-purple-500 cursor-pointer">
                            Criar conta
                        </span>
                    </p>
                </form>
                <div className='flex flex-col m-0 p-0'>
                  <div className='flex flex-col md:flex-row md:items-center text-white gap-10 py-10 justify-center'>
                    <div className='flex flex-col px-5'>

                      <h4 className='text-3xl font-bold'>Informações</h4>
                      <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui vero tenetur explicabo, corporis quia mollitia accusantium.</p>

                    </div>
                    <div className='flex flex-wrap gap-10 p-5'>
                      <div>

                        <h4 className='font-bold'>Integrantes</h4>
                        <p>Elena mendener</p>
                        <p>Joel miller</p>
                        <p>Carlos prelo</p>

                      </div>
                      <div>

                        <h4 className='font-bold'>Company</h4>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>CameraMan?</p>

                      </div>
                      <div>

                        <h4 className='font-bold'>Social</h4>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Linkedin</p>

                      </div>
                    </div>
                  </div>
                  <div className='flex w-full'>

                    <p className='w-full py-3 px-1 text-center bg-gray-800 text-white'>Todo o conteudo presente é protegido por lei do copyright</p>

                  </div>
                </div>
        </footer>
      </main>
    </div>
  );
}


export default LandingPage;