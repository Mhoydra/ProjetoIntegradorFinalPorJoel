import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForms() {
    const [emailUsuario, setEmail] = useState('');
    const [senhaUsuario, setSenha] = useState('');

    return (
        <div>
            <input
                value={emailUsuario}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                value={senhaUsuario}
                onChange={(e) => setSenha(e.target.value)}
            />
        </div>
    );
}