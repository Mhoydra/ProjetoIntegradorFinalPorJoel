import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForms() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

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
                        email,
                        senha
                    })
                }
            );

            const dados = await resposta.json();

            console.log('STATUS:', resposta.status);
            console.log('DADOS:', dados);

            if (resposta.ok) {

                localStorage.setItem('token', dados.token);
                localStorage.setItem('usuario', JSON.stringify(dados.usuario));

                navigate('/home');

            } else {
                alert(dados.mensagem);
            }

        } catch (erro) {
            console.log('ERRO:', erro);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">

            <h2 className="text-4xl font-bold mb-10 text-white">Login</h2>

            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-72 p-3 bg-white text-black"
            />

            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-72 p-3 bg-white text-black"
            />

            <button className="bg-black text-red-500 px-10 py-3 rounded-full">
                Entrar
            </button>

            <p className="text-white">
                Não tem conta?{' '}
                <span onClick={() => navigate('/cadastro')} className="text-red-500 cursor-pointer">
                    Criar conta
                </span>
            </p>

        </form>
    );
}

export default LoginForms;