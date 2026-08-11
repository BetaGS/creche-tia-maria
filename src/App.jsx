import React, { useState, useEffect } from 'react';
import './App.css';

// DADOS DA CRECHE E PROJETO PRINCIPAL
const CRECHE = {
  nome: "Creche Municipal Tia Maria - 02.08.605",
  tema: "FLIAR 2026: E O RIO DE JANEIRO CONTINUA INDÍGENA",
  foto: 'arara.png',
  descricao: `A partir do trabalho anual da Creche Municipal Tia Maria - 02.08.605, com o tema Conviver descobrindo o Eu, o outro e o nós, as turmas que compõem nosso quadro pesquisaram e estão se envolvendo de modo lúdico em algumas práticas e redescobrindo diferentes movimentos e palavras que fazem parte do nosso vocabulário diário. E com isso, estamos incentivando a exploração do reconhecimento de si e das nossas origens que possuem raízes tanto africanas quanto indígenas, buscando a valorização do reconhecimento do nosso território, práticas, vocabulário, e alguns alimentos que estão presentes no nosso dia a dia e que também recebem nomeações de origem indígena, principalmente do TRONCO TUPI.

Sendo assim, cada turminha pôde se desdobrar sobre essas palavras e desenvolver algumas vivências tanto sensoriais quanto gustativas e sonoras, como também estão realizando algumas dramatizações por meio da musicalização, com o intuito de estimular o reconhecimento desde sempre dessas origens que nos formam e nos permeiam até os dias atuais seja em nosso modo de viver, agir, e na capacidade de nos communicarmos contribuindo e impactando de forma significativa em nossa cultura que segue sendo tão rica e cheia de histórias. Ao final desse projeto temos intenção de criar um dicionário coletivo com todas as palavras que cada um está conhecendo ao longo desse lindo trabalho.`
};

// DADOS DAS TURMAS
const TURMAS = [
  {
    id: 'bercario',
    nome: 'BERÇÁRIO',
    subtitulo: 'EI-11',
    fotoBotao: '5463a6c1-1f00-4c2e-a74c-d1266af6642c.JPG',
    imagensGaleria: [
      '1bb8d2d9-eb69-4f3c-beb5-e3448aa38c60.JPG',
      '3f80bbac-3740-4934-8638-6c25e9eca247.JPG',
      '5b2e9e8b-958e-43ca-ae72-ce3adb45f4d0.JPG',
      '7d121087-e2ec-4454-a200-fe914c5f5d62.JPG',
      '93e1b1e3-8b06-4d19-b3ad-fe372bd985cc.JPG',
      '684a27b0-66b1-438c-8222-ac5f61566d6d.JPG',
      '890ed40e-bb25-4536-8ef2-35a10b873f8d.JPG',
      '5001c7f0-5124-4cb4-bd4b-e483d8adc3be.JPG',
      '5463a6c1-1f00-4c2e-a74c-d1266af6642c.JPG',
      '2646133f-7394-4274-8905-d4f39ec8c527.JPG',
      'b02e6c61-f18c-45a0-8905-2f621bb706d0.JPG',
      'b418321b-2456-4c3c-95a0-e8d90d4485e9.JPG',
      'c6e1a18d-1855-4d2a-89b2-34e16b1da101.JPG',
      'cadefcec-46b3-4a27-8a86-4bac2a1117df.JPG',
      'cdbf47f3-d3dc-4a82-a584-1fc664c5eb8d.JPG',
    ],
    trabalho: `A nossa turma do berçário (EI-11) criou algumas possibilidades para que nossos bebês pudessem participar de maneira ativa, prazerosa e significativa desses momentos. Por ser uma turma que adora música, iniciaram essa jornada brincando com a música O jacaré foi passear lá na lagoa disponível em: https://www.youtube.com/watch?v=jqy_y7n5KREando as crianças a reproduzirem o nome, seus movimentos, chamando a atenção para as partes do corpo e brincando de passear na lagoa igual ao jacaré, e ao final construíram um jacaré coletivo. Nossos bebês amaram participar desse momento.

Fortalecendo o movimento de pega utilizando pincéis do tipo batedor, estimulando as percepções visuais e táteis, e desenvolvendo a capacidade atenção ao ser conduzido para explorar novas propostas.

Assim como a palavra jacaré, eles também aproveitaram para conhecer a música do O TATU do grupo formiga balão, disponível em https://youtu.be/jqy_y7n5KRE?si=-f9ORIw_C7Eq3cKSpelas professoras do grupamento quanto pelo o que é reproduzido no vídeo. Nossa turma brincou, dançou, envolveu-se de forma lúdica e ainda ampliou o seu vocabulário utilizando mais uma palavra que é de origem indígena da linha TUPI.

Manipulação de tintas utilizando as mãos, estimulando a percepção tátil e a coordenação motora fina.`
  },
  {
    id: 'maternal1',
    nome: 'MATERNAL 1',
    subtitulo: 'EI-21',
    fotoBotao: '8da26337-5461-4114-9da1-2bfa0d305167.JPG',
    imagensGaleria: [
      '0e2a6346-f605-4eb4-98b0-8101b8af69d3.JPG',
      '5f47d920-5f21-4f32-b25b-1e715c7a9a47.JPG',
      '7e0ab070-2326-4396-a952-798d260330c8.JPG',
      '8c973fdc-2af9-4d7d-88c9-3e8e7d09e6f8.JPG',
      '8da26337-5461-4114-9da1-2bfa0d305167.JPG',
      '9fe241a5-1786-4e2b-90ad-cfaf0b242305.JPG',
      '9fe241a5-1786-4e2b-90ad-cfaf0b242305.JPG',
      '54a62fe4-1791-4ff0-9bbb-dbcc26444e3f.JPG',
      '80d8fa80-a6f5-4b20-88a2-65fe6957ab97.JPG',
      '85e23909-c883-449f-91f6-7e0cec2f186c.JPG',
      '97c0a184-305d-432c-b2f7-93e6e7560a98.JPG',
      '405cfe39-cd27-4134-a52b-6e5bfdf827cf.JPG',
      '773701ed-4f7d-41b7-9e58-284f67664528.JPG',
      '04225541-0f98-43e5-8e54-668a2a6508a9.JPG',
      '70604466-08a0-4efd-8320-d861d8ab8773.JPG',
      'c5b9b6f4-68ea-463b-ad59-cce8b2a4b636.JPG',
      'c518e1d8-210c-4df2-951f-f2b15d076f14.JPG',
      'd192b2a4-b4f0-4dc7-afa4-74d7a8bd55de.JPG',
      'e7487f65-ee0e-4641-bf08-cedb35c62ecc.JPG',
      'eb82c92a-afdd-48a8-a8b5-a0af40baa14b.JPG',
      'f518d4f2-537b-43b4-b5d9-c864b3c143a8.JPG',
      'fa6638d3-3977-47c0-9c4e-b5f186f00a4e.JPG',
      
    ],
    trabalho: `Já a nossa turma do maternal 1 (EI-21) está explorando uma das delícias mais saborosas que eles conhecem, a PIPOCA! Estão observando o milho em diferentes estágios e também puderam observar como essa transformação acontece, fazendo a pipoca e ouvindo o som junto com as professoras do grupamento e depois degustaram essa delicia. Além de expandir seu repertório de palavras dando um maior significado a essa palavra que está tão presente no cotidiano deles.`
  },
  {
    id: 'maternal2',
    nome: 'MATERNAL 2',
    subtitulo: 'EI-31',
    fotoBotao: '6958dde3-f101-442c-a4fb-61037425c314.JPG',
    imagensGaleria: [
      '0b184932-d3ca-46fe-ab9c-501820f6de21.JPG',
      '1e4eb96d-f81d-4057-aed5-3bf4321b6725.JPG',
      '2bea8f9c-a26b-4289-a08e-3e681c892d68.JPG',
      '5d6f7ce2-635c-46be-b116-23db8369dc66.JPG',
      '7adaf329-4549-482a-86b0-205c1ff17a88.JPG',
      '8b62905e-db76-4bac-8d0e-9c4e7839dbce.JPG',
      '08f544eb-95ae-46bd-94d4-6f2c69419c95.JPG',
      '09c68994-e0d9-4dcf-b3a3-12925c782685.JPG',
      '9efcaf08-6ba6-47ee-b83d-a0447c060a49.JPG',
      '092aa0a3-1971-425a-a1b6-4512e07e3619.JPG',
      '590f548d-9109-434a-83d0-5cec7004671e.JPG',
      '795b6cd0-936d-437a-b181-f3a66544b4e4.JPG',
      '6821cecd-9e67-43e2-9839-cbca2a148922.JPG',
      'b25af2ac-7577-4f25-a03f-5a8c3403fc63.JPG',
      'b234b5e2-517a-4207-9c57-ed7d561bb630.JPG',
      'bd2b1281-c8fe-4caf-8bbf-fc764bfbd2c3.JPG',
      'c6eef51b-8b83-4d06-93ff-ccd02580155a.JPG',
      'cd311105-1e57-4beb-a3b5-a545e82ff9e0.JPG',
      'd09f8bd4-b684-4e62-9ab7-e9a84b5e7e0f.JPG',
      'def8f123-aaf7-415f-b194-c35ee9f64ca1.JPG',
      'e4ade2a2-e36b-472d-a810-7f8390cba2f2.JPG',
      'f4b67b3e-df04-4bca-ad1c-4c6bab1fe95e.JPG',
      'f82df7d9-d4d9-437e-83af-58d08cd8f3d9.JPG',
    
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