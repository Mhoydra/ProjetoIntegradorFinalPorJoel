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
                navigate('/home');
            } else {
                alert(dados.mensagem);
            }
        }

        catch (erro) {
            console.log('ERRO:', erro);
        }

    } return (
        
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-5 items-center bg-gray-900 p-10 rounded-2xl shadow-2xl"
        >

            <h2 className="text-4xl font-bold mb-5 text-purple-600">
                Login
            </h2>

            <input
                type="email"
                placeholder="E-mail"
                value={emailUsuario}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-50 text-gray-900 outline-none focus:ring-2 focus:ring-purple-600"
            />

            <input
                type="password"
                placeholder="Senha"
                value={senhaUsuario}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-50 text-gray-900 outline-none focus:ring-2 focus:ring-purple-600"
            />

            <button
                className="w-full bg-purple-700 hover:bg-purple-600 transition-colors text-white px-10 py-3 rounded-lg"
            >
                Entrar
            </button>

            <p className="text-purple-400">
                Não tem conta?{' '}

                <span
                    onClick={() => navigate('/cadastro')}
                    className="text-purple-500 hover:text-purple-400 cursor-pointer"
                >
                    Criar conta
                </span>

            </p>

        </form>
       
    );
}