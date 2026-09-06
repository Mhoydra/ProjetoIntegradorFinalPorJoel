import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CadastroForms() {

    const navigate = useNavigate();

    const [nomeUsuario, setNome] = useState('');
    const [emailUsuario, setEmail] = useState('');
    const [senhaUsuario, setSenha] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const resposta = await fetch(
                'http://localhost:3000/api/usuarios',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nomeUsuario,
                        emailUsuario,
                        senhaUsuario
                    })
                }
            );

            const dados = await resposta.json();

            if (resposta.ok) {
                alert(dados.mensagem);
                navigate('/login');
            } else {
                alert(dados.mensagem);
            }

        } catch (erro) {
            console.error(erro);
        }
    }

    return (
        <div className="w-full max-w-md bg-gray-900 p-10 rounded-2xl shadow-2xl">

    <h2 className="text-4xl font-bold mb-8 text-purple-600 text-center">
        Realizar cadastro
    </h2>

    <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center"
    >

        <input
            value={nomeUsuario}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            className="w-full p-3 rounded-lg bg-gray-50 text-gray-900 outline-none focus:ring-2 focus:ring-purple-600"
        />

        <input
            value={emailUsuario}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-50 text-gray-900 outline-none focus:ring-2 focus:ring-purple-600"
        />

        <input
            type="password"
            value={senhaUsuario}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            className="w-full p-3 rounded-lg bg-gray-50 text-gray-900 outline-none focus:ring-2 focus:ring-purple-600"
        />

        <button
            className="w-full bg-purple-800 hover:bg-purple-700 transition-colors text-white px-10 py-3 rounded-lg"
        >
            Cadastrar
        </button>

        <p className="text-purple-400">
            Já tem conta?{' '}

            <span
                onClick={() => navigate('/login')}
                className="text-purple-600 hover:text-purple-500 cursor-pointer"
            >
                Login
            </span>
        </p>

    </form>

</div>
    );
}

export default CadastroForms;