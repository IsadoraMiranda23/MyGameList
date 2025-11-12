import React, { useState } from 'react';
import './LoginPage.css';
interface CadastroPageProps {
    onVoltarParaLogin: () => void;
}

const CadastroPage: React.FC<CadastroPageProps> = ({ onVoltarParaLogin }) => {
    const [nomeCompleto, setNomeCompleto] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmarSenha, setConfirmarSenha] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validação básica
        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }
        // Aqui você pode adicionar a lógica de cadastro
        console.log('Nome:', nomeCompleto, 'Email:', email, 'Senha:', senha);
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <h1 className="title">MyGameList</h1>
                <p className="description">Crie sua conta</p>

                <div className="login-box">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Nome completo"
                                value={nomeCompleto}
                                onChange={(e) => setNomeCompleto(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>

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
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>

                        <div className="input-group">
                            <input
                                type="password"
                                placeholder="Confirmar senha"
                                value={confirmarSenha}
                                onChange={(e) => setConfirmarSenha(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>

                        <button type="submit" className="login-button">
                            Cadastrar
                        </button>
                    </form>

                    <div className="register-section">
                        <span>Já tem conta? </span>
                        <span className="register-link" onClick={onVoltarParaLogin}>
                            Entrar
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CadastroPage;