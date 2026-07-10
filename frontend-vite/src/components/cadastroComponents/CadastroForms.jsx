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
        <div className="text-center">

            <h2 className="text-4xl font-bold mb-10 text-white">
                Realizar cadastro
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">

                <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" className="w-72 p-3 bg-white text-black" />

                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-72 p-3 bg-white text-black" />

                <input value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" className="w-72 p-3 bg-white text-black" />

                <button className="bg-black text-red-500 px-10 py-3 rounded">
                    Cadastrar
                </button>

                <p className="text-white">
                    Já tem conta?{' '}
                    <span onClick={() => navigate('/login')} className="text-red-500 cursor-pointer">
                        Login
                    </span>
                </p>

            </form>

        </div>
    );
}

export default CadastroForms;