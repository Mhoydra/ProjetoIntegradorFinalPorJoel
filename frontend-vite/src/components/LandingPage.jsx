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
    <div className='bg-gray-950'>
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
        <section className='flex p-10 gap-10 bg-gray-950'> 
          <div className='flex flex-col gap-5'>
            <h2 className='text-white font-bold text-4xl'>O site mais barato de musicas</h2>
            <p className='text-white text-[20px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam neque molestiae quod enim libero modi velit aliquid ea expedita, itaque ratione suscipit! Deserunt amet rerum neque sint repellat eligendi!</p>
          </div>
          <div>
            <img src={cores} alt="" className='w-200'/>
          </div>
        </section>
        <section className='flex flex-row-reverse p-10 gap-10 bg-gray-900'> 
          <div className='flex flex-col gap-5'>
            <h2 className='text-white font-bold text-4xl'>O site mais barato de musicas</h2>
            <p className='text-white text-[20px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam neque molestiae quod enim libero modi velit aliquid ea expedita, itaque ratione suscipit! Deserunt amet rerum neque sint repellat eligendi!</p>
          </div>
          <div>
            <img src={cores} alt="" className='w-200'/>
          </div>
        </section>
        <section className='flex p-10 gap-10 bg-gray-950'> 
          <div className='flex flex-col gap-5'>
            <h2 className='text-white font-bold text-4xl'>O site mais barato de musicas</h2>
            <p className='text-white text-[20px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam neque molestiae quod enim libero modi velit aliquid ea expedita, itaque ratione suscipit! Deserunt amet rerum neque sint repellat eligendi!</p>
          </div>
          <div>
            <img src={cores} alt="" className='w-200 p-0'/>
          </div>
        </section>
        <footer className='flex justify-center'>
            <form onSubmit={handleSubmit} className='m-10 flex flex-col gap-5 items-center'>

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
        </footer>
      </main>
    </div>
  );
}


export default LandingPage;