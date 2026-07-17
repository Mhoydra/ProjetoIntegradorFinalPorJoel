import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForms() {

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
                navigate('/landingPage');
            } else {
                alert(dados.mensagem);
            }
        }

        catch (erro) {
            console.log('ERRO:', erro);
        }

    } return (

        <div>
            <form onSubmit={handleSubmit} className="flex flex-col w- gap-5 items-center">

                <h2 className="text-4xl font-bold mb-10 text-purple-700">
                    Login
                </h2>

                <input type="email" placeholder="E-mail" value={
                    emailUsuario
                } onChange={
                    (e) => setEmail(e.target.value)
                } className="w-72 p-3 bg-white text-purple-700" />

                <input type="password" placeholder="Senha" value={
                    senhaUsuario
                } onChange={
                    (e) => setSenha(e.target.value)
                } className="w-72 p-3 bg-white text-purple-700" />

                <button className='flex bg-purple-700 text-white px-10 py-3 rounded'>
                    Entrar
                </button>

                <p className="text-purple-500">
                    Não tem conta?{' '}
                    <span onClick={
                        () => navigate('/cadastro')
                    } className="text-purple-700 cursor-pointer">
                        Criar conta
                    </span>
                </p>
            </form>
        </div>
    );
}