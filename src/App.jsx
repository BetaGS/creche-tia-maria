import React, { useState, useEffect } from 'react';
import './App.css';

// DADOS DA CRECHE E PROJETO PRINCIPAL
const CRECHE = {
  nome: "Creche Municipal Tia Maria - 02.08.605",
  tema: "FLIAR 2026: E O RIO DE JANEIRO CONTINUA INDÍGENA",
  foto: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=300&fit=crop&crop=center&auto=format",
  descricao: `A partir do trabalho anual da Creche Municipal Tia Maria - 02.08.605, com o tema Conviver descobrindo o Eu, o outro e o nós, as turmas que compõem nosso quadro pesquisaram e estão se envolvendo de modo lúdico em algumas práticas e redescobrindo diferentes movimentos e palavras que fazem parte do nosso vocabulário diário. E com isso, estamos incentivando a exploração do reconhecimento de si e das nossas origens que possuem raízes tanto africanas quanto indígenas, buscando a valorização do reconhecimento do nosso território, práticas, vocabulário, e alguns alimentos que estão presentes no nosso dia a dia e que também recebem nomeações de origem indígena, principalmente do TRONCO TUPI.

Sendo assim, cada turminha pôde se desdobrar sobre essas palavras e desenvolver algumas vivências tanto sensoriais quanto gustativas e sonoras, como também estão realizando algumas dramatizações por meio da musicalização, com o intuito de estimular o reconhecimento desde sempre dessas origens que nos formam e nos permeiam até os dias atuais seja em nosso modo de viver, agir, e na capacidade de nos communicarmos contribuindo e impactando de forma significativa em nossa cultura que segue sendo tão rica e cheia de histórias. Ao final desse projeto temos intenção de criar um dicionário coletivo com todas as palavras que cada um está conhecendo ao longo desse lindo trabalho.`
};

// DADOS DAS TURMAS
const TURMAS = [
  {
    id: 'bercario',
    nome: 'BERÇÁRIO',
    subtitulo: 'EI-11',
    fotoBotao: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop&crop=center&auto=format', 
    imagensGaleria: [
      'https://via.placeholder.com/600x400?text=Foto+Atividade+Jacare',
      'https://via.placeholder.com/600x400?text=Foto+Atividade+Tatu'
    ],
    trabalho: `A nossa turma do berçário (EI-11) criou algumas possibilidades para que nossos bebês pudessem participar de maneira ativa, prazerosa e significativa desses momentos. Por ser uma turma que adora música, iniciaram essa jornada brincando com a música O jacaré foi passear lá na lagoa disponível em: https://youtu.be/jgy_y7n5kRE . Enfatizando a palavra jacaré, ouvindo histórias que tinham esse animal como tema incentivando as crianças a reproduzirem o nome, seus movimentos, chamando a atenção para as partes do corpo e brincando de passear na lagoa igual ao jacaré, e ao final construíram um jacaré coletivo. Nossos bebês amaram participar desse momento.

Fortalecendo o movimento de pega utilizando pincéis do tipo batedor, estimulando as percepções visuais e táteis, e desenvolvendo a capacidade atenção ao ser conduzido para explorar novas propostas.

Assim como a palavra jacaré, eles também aproveitaram para conhecer a música do O TATU do grupo formiga balão, disponível em https://youtu.be/xmxUCG_0glQ . Brincaram ao imitar os gestos feitos tanto pelas professoras do grupamento quanto pelo o que é reproduzido no vídeo. Nossa turma brincou, dançou, envolveu-se de forma lúdica e ainda ampliou o seu vocabulário utilizando mais uma palavra que é de origem indígena da linha TUPI.

Manipulação de tintas utilizando as mãos, estimulando a percepção tátil e a coordenação motora fina.`
  },
  {
    id: 'maternal1',
    nome: 'MATERNAL 1',
    subtitulo: 'EI-21',
    fotoBotao: 'https://images.unsplash.com/photo-1516627145497-ae0b6cf1e9ef?w=300&h=200&fit=crop&crop=center&auto=format',
    imagensGaleria: [
      'https://via.placeholder.com/600x400?text=Foto+Atividade+Pipoca'
    ],
    trabalho: `Já a nossa turma do maternal 1 (EI-21) está explorando uma das delícias mais saborosas que eles conhecem, a PIPOCA! Estão observando o milho em diferentes estágios e também puderam observar como essa transformação acontece, fazendo a pipoca e ouvindo o som junto com as professoras do grupamento e depois degustaram essa delicia. Além de expandir seu repertório de palavras dando um maior significado a essa palavra que está tão presente no cotidiano deles.`
  },
  {
    id: 'maternal2',
    nome: 'MATERNAL 2',
    subtitulo: 'EI-31',
    fotoBotao: 'https://images.unsplash.com/photo-1558403194-611308249627?w=300&h=200&fit=crop&crop=center&auto=format',
    imagensGaleria: [
      'https://via.placeholder.com/600x400?text=Foto+Atividade+Sagui',
      'https://via.placeholder.com/600x400?text=Foto+Atividade+Sucuri'
    ],
    trabalho: `Em nossa turma do maternal 2 (EI-31) nossos pequenos estão conhecendo algumas palavras que despertam muito a curiosidade, como a palavra SAGUI que vem do tronco TUPI. Em uma roda de conversa as professoras indagaram a turma sobre essa palavra e se alguém já havia escutado em algum momento, criando hipóteses sobre o que é e, de onde vem essa palavra com sonoridade tão diferente. Cada criança pôde verbalizar o que achava que era e ao longo da conversa descobriram que se tratava de uma espécie de primata que conseguimos observar muito por aqui onde estamos localizados. Foi um encanto para eles explorar e perceber que essa palavra está associada há algo com o qual eles já conheciam e observavam em seu território, porém, conseguimos estimular a origem da palavra e o quanto essa cultura TUPI nos envolve até os dias atuais.

Conhecendo a palavra SAGUI e em quais lugares podemos observá-los, utilizando imagens reais para demonstrar ao grupo como eles são e quais lugares podem viver. Ressaltando a importância do respeito e cuidado que também devemos ter.

Outra palavra que a turma também está explorando é SUCURI, devido ao sucesso que foi descobrir a outra palavra, o grupamento está dando continuidade a suas pesquisas para saber se essa palavra também é de origem TUPI.`
  },
  {
    id: 'pre1',
    nome: 'PRÉ 1',
    subtitulo: 'EI-41',
    fotoBotao: 'IMG_20260714_074506.jpg',
    imagensGaleria: [
      'IMG_20260513_095227.jpg',
      'IMG_20260519_105911.jpg',
      'IMG_20260519_104634.jpg',
      'IMG_20260527_110228817_MFNR.jpg',
      'IMG_20260527_110233688_MFNR.jpg',
      'IMG_20260602_100702448_MFNR.jpg',
      'IMG_20260602_100813634_MFNR.jpg',
      'IMG_20260602_101116534_MFNR.jpg',
      'IMG_20260602_104505028_MFNR.jpg',
      'IMG_20260602_111150725_MFNR.jpg',
      'IMG_20260609_094320.jpg',
      'IMG_20260609_094530.jpg',
      'IMG_20260610_105842.jpg',
      'IMG_20260610_105845.jpg',
      'IMG_20260610_105850.jpg',
      'IMG_20260610_105911.jpg',
      'IMG_20260610_105913.jpg',
      'IMG_20260610_111256.jpg',
      'IMG_20260610_111304.jpg',
      'IMG_20260619_102714.jpg',
      'IMG_20260619_103323.jpg',
      'IMG_20260619_104827.jpg',
      'IMG_20260619_140218.jpg',
      'IMG_20260623_112221.jpg',
      'IMG_20260623_112227.jpg',
      'IMG_20260703_111419.jpg',
      'IMG_20260703_111619.jpg',
      'IMG_20260709_151330.jpg',
      'IMG_20260709_151353.jpg',
      'IMG_20260709_151413.jpg',
      'IMG_20260713_093106.jpg',
      'IMG_20260713_093759.jpg',
      'IMG_20260713_095056.jpg',
      'IMG_20260714_074500.jpg',
      'IMG_20260714_074516.jpg',
      'IMG_20260714_074526.jpg',
      'IMG_20260714_080510.jpg',
      'IMG_20260714_080936.jpg',
      'IMG_20260714_082319.jpg',
      'IMG_20260714_091224.jpg',
    ],
    trabalho: `Na turma do pré 1 (E.I. 41), a caminhada começou a partir da escuta atenta das palavras e costumes que herdamos dos povos indígenas. No Rio de Janeiro, nomeamos animais, brincamos, preparamos alimentos e nos expressamos através de saberes cujas raízes vêm diretamente da herança originária.
Ao longo do projeto, as crianças mergulharam em vivências práticas, artísticas e sensoriais que uniram letramento, cultura, culinária, ciência e movimento.
       Inspirados na tradição indígena de extrair cores da natureza, investigamos e produzimos nossas próprias tintas artísticas usando colorau, cúrcuma, spirulina e farinha de beterraba. As crianças exploraram misturas, aromas, texturas e tonalidades vibrantes em suas criações plásticas.
Investigamos o significado de palavras como Jacaré ("aquele que olha de lado") e Taturana ("semelhante ao fogo"), construindo animais de sucata e estudando o ciclo de vida de cada animal.
Inspirados pelos costumes indígenas de navegação e pesca, as crianças produziram seus próprios peixinhos com a letra inicial do seu nome e participaram de uma pescaria lúdica na "canoa" (que na língua Aruak significa “pequenas embarcações”) da turma, fortalecendo a consciência fonológica de forma afetiva.
Descobrimos a Peteca (que em Tupi significa "golpear com as mãos"). As crianças exploraram essa brincadeira tradicional indígena, desenvolvendo a coordenação motora, o ritmo, o equilíbrio e a cooperação.
Trabalhamos a lenda indígena da Mandioca e apresentamos a Mandioca (que na língua Tupi significa “Casa de Mani”) na sua forma natural, permitindo que as crianças explorassem sua textura e origem. A vivência culminou na culinária de um delicioso Bolo de Mandioca, produzido para ser partilhado com as famílias, celebrando o afeto e a ancestralidade à mesa.

Mandioca no prato, peteca no ar, tinta natural no papel e palavras Tupi na ponta da língua: assim celebramos a nossa história no Pré 1.
Agradecemos a cada família por caminhar conosco nessa jornada de descobertas e afeto!

Respeitar as raízes do nosso país é o primeiro passo para construir um futuro com mais consciência.
E aprender sobre as nossas raízes através do brincar, do sentir e do saborear é o caminho mais bonito para construir o afeto e o pertencimento.`
  }
];

// COMPONENTE PARA DETECTAR E TRANSFORMAR LINKS EM CLICÁVEIS
function TextoFormatadoComLinks({ texto }) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const partes = texto.split(urlRegex);

  return (
    <p style={{ whiteSpace: 'pre-line' }}>
      {partes.map((parte, index) => {
        if (parte.match(urlRegex)) {
          return (
            <a 
              key={index} 
              href={parte} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#0066cc', textDecoration: 'underline', fontWeight: 'bold' }}
            >
              {parte}
            </a>
          );
        }
        return parte;
      })}
    </p>
  );
}

// COMPONENTE DE CARROSSEL DE IMAGENS
function Carrossel({ imagens }) {
  const [indiceAtual, setIndiceAtual] = useState(0);

  if (!imagens || imagens.length === 0) return null;

  const proximoSlide = () => {
    setIndiceAtual((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  const slideAnterior = () => {
    setIndiceAtual((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  return (
    <div className="carrossel-container">
      <div className="carrossel-slide">
        <img 
          src={imagens[indiceAtual]} 
          alt={`Foto ${indiceAtual + 1} de ${imagens.length}`} 
        />
      </div>

      {imagens.length > 1 && (
        <>
          <button className="carrossel-btn btn-prev" onClick={slideAnterior}>
            &#10094;
          </button>
          <button className="carrossel-btn btn-next" onClick={proximoSlide}>
            &#10095;
          </button>

          <div className="carrossel-indicadores">
            {imagens.map((_, idx) => (
              <span
                key={idx}
                className={`indicador ${idx === indiceAtual ? 'ativo' : ''}`}
                onClick={() => setIndiceAtual(idx)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// COMPONENTE PRINCIPAL
export default function App() {
  const [turmaSelecionada, setTurmaSelecionada] = useState(null);

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

  return (
    <div className="app">
      <header className="hero">
        <img 
          className="hero-image" 
          src={CRECHE.foto} 
          alt={CRECHE.nome} 
        />
        <h1>{CRECHE.nome}</h1>
        <h2>{CRECHE.tema}</h2>
        <div className="subtitle">
          <TextoFormatadoComLinks texto={CRECHE.descricao} />
        </div>
      </header>

      <section className="turmas-section">
        <h3>Conheça os Trabalhos de Cada Turma:</h3>
        <div className="turmas-grid">
          {TURMAS.map((turma) => (
            <button 
              key={turma.id} 
              className="turma-card"
              onClick={() => setTurmaSelecionada(turma)}
            >
              <div className="img-container">
                <img 
                  src={turma.fotoBotao} 
                  alt={turma.nome} 
                  loading="lazy"
                />
              </div>
              <div className="card-info">
                <span>{turma.nome}</span>
                <small>{turma.subtitulo}</small>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

// COMPONENTE DE DETALHE DA TURMA
function TurmaDetail({ turma, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="turma-detail">
      <button className="back-btn" onClick={onBack}>
        &larr; Voltar para o projeto principal
      </button>

      <h2>{turma.nome} ({turma.subtitulo})</h2>

      {/* Carrossel inserido aqui */}
      <Carrossel imagens={turma.imagensGaleria} />

      <div className="trabalho-texto">
        <TextoFormatadoComLinks texto={turma.trabalho} />
      </div>

      <button className="back-btn" onClick={onBack}>
        &larr; Voltar para o projeto principal
      </button>
    </div>
  );
}