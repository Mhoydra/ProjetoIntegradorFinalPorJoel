import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CadastroForms() {

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

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
                        nome,
                        email,
                        senha
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
        <div className="justify-center items-center">

            <h2 className="text-4xl font-bold mb-10 text-purple-700">
                Realizar cadastro
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">

                <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" className="w-72 p-3 bg-white text-purple-800" />

                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-72 p-3 bg-white text-purple-800" />

                <input value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" className="w-72 p-3 bg-white text-purple-800" />

                <button className="bg-purple-800 text-white px-10 py-3 rounded">
                    Cadastrar
                </button>

                <p className="text-purple-500">
                    Já tem conta?{' '}
                    <span onClick={() => navigate('/login')} className="text-purple-700 cursor-pointer">
                        Login
                    </span>
                </p>

            </form>

        </div>
    );
}

export default CadastroForms;