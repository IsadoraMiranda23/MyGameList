import React, { useState } from 'react';


import './App.css';
import LoginPage from "./pages/login/loginPage.tsx";
import CadastroPage from "./pages/login/cadastroPage.tsx";

function App() {
    const [telaAtual, setTelaAtual] = useState<'login' | 'cadastro'>('login');

    const handleIrParaCadastro = () => {
        setTelaAtual('cadastro');
    };

    const handleVoltarParaLogin = () => {
        setTelaAtual('login');
    };

    return (
        <div className="App">
            {telaAtual === 'login' ? (
                <LoginPage onIrParaCadastro={handleIrParaCadastro} />
            ) : (
                <CadastroPage onVoltarParaLogin={handleVoltarParaLogin} />
            )}
        </div>
    );
}

export default App;