import React, { useState } from 'react';
import './App.css';

// DADOS
const CRECHE = {
  nome: "Creche Encantada",
  foto: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=300&fit=crop&crop=center&auto=format",
  descricao: "🌳 No coração da floresta, cada criança cresce como uma pequena árvore. Aqui a natureza inspira o aprendizado, com amor, brincadeiras e muita luz."
};

const TURMAS = [
  {
    id: 't1',
    nome: 'Bebês Azul',
    foto: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=200&fit=crop&crop=center&auto=format',
    trabalho: '🖐️ Estimulação sensorial com elementos naturais: terra, água, folhas e tintas de frutas. Exploramos texturas e sons da floresta.'
  },
  {
    id: 't2',
    nome: 'Maternal Sol',
    foto: 'https://images.unsplash.com/photo-1516627145497-ae0b6cf1e9ef?w=200&h=200&fit=crop&crop=center&auto=format',
    trabalho: '🌱 Projeto "Pequenos Guardiões": plantio de mudas, observação de insetos (sem tocar) e arte com pigmentos naturais.'
  },
  {
    id: 't3',
    nome: 'Jardim Estrela',
    foto: 'https://images.unsplash.com/photo-1558403194-611308249627?w=200&h=200&fit=crop&crop=center&auto=format',
    trabalho: '🎨 Ateliê da Floresta: esculturas com argila, pintura com carvão e folhas, e colagem com materiais recolhidos na natureza.'
  },
  {
    id: 't4',
    nome: 'Pré Anjo',
    foto: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=200&h=200&fit=crop&crop=center&auto=format',
    trabalho: '📚 Histórias da Mata: contação de lendas da floresta, produção de livros ilustrados e jogos de palavras inspirados na natureza.'
  }
];

// COMPONENTE PRINCIPAL
function App() {
  const [turmaSelecionada, setTurmaSelecionada] = useState(null);

  // Se uma turma estiver selecionada, mostra o detalhe
  if (turmaSelecionada) {
    return (
      <div className="app">
        <TurmaDetail 
          turma={turmaSelecionada} 
          onBack={() => setTurmaSelecionada(null)} 
        />
      </div>
    );
  }

  // Tela inicial
  return (
    <div className="app">
      <header className="hero">
        <img 
          className="hero-image" 
          src={CRECHE.foto} 
          alt={CRECHE.nome} 
        />
        <h1>{CRECHE.nome}</h1>
        <div className="subtitle">{CRECHE.descricao}</div>
      </header>

      <div className="turmas-grid">
        {TURMAS.map((turma) => (
          <button 
            key={turma.id} 
            className="turma-card"
            onClick={() => setTurmaSelecionada(turma)}
            aria-label={`Abrir trabalho da turma ${turma.nome}`}
          >
            <img 
              src={turma.foto} 
              alt={turma.nome} 
              loading="lazy"
            />
            <span>{turma.nome}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// COMPONENTE DE DETALHE DA TURMA
function TurmaDetail({ turma, onBack }) {
  return (
    <div className="turma-detail">
      <h2>{turma.nome}</h2>
      <div className="badge">
        <i className="fas fa-leaf" style={{marginRight: 6}}></i> trabalho
      </div>
      <div className="turma-detail-image">
        <img src={turma.foto} alt={turma.nome} />
      </div>
      <p>{turma.trabalho}</p>
      <button className="back-btn" onClick={onBack}>
        <i className="fas fa-arrow-left"></i> Voltar para turmas
      </button>
    </div>
  );
}

export default App;