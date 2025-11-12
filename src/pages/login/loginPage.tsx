import React, { useState } from 'react';
import './LoginPage.css';

interface LoginPageProps {
    onIrParaCadastro: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onIrParaCadastro }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica de login
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <h1 className="title">MyGameList</h1>
                <p className="description">Entre para continuar</p>

                <div className="login-box">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>

                        <div className="input-group">
                            <input
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>

                        <button type="submit" className="login-button">
                            Entrar
                        </button>
                    </form>

                    <div className="register-section">
                        <span>Não tem conta? </span>
                        <span className="register-link" onClick={onIrParaCadastro}>
                            Cadastre-se
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;