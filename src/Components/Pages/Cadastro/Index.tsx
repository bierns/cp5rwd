import './Style.css';
import React, { useState } from 'react';
import axios from 'axios';

const Cadastro = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const handleCadastro = async () => {
        try {
            const response = await axios.post('https://caiohalbert.bsite.net/api/user/newUser', {
                username: username,
                email: email,
                passwordHash: password
            });
            console.log(response.data);
            alert('Cadastro bem-sucedido! Você pode fazer login agora.');
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            alert('Erro ao cadastrar. Por favor, tente novamente.'); 
        }
    };

    return (
        <div className="cadastro-container">
            <div className="card">
                <h2>Cadastro</h2>
                
                <h1 className="cad">Cadastro</h1>
                <input type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="subimit" onClick={handleCadastro}>
                    Cadastrar
                </button>
                
            </div>
        </div>
    );
}

export default Cadastro;
