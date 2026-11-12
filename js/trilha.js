"use strict";

// ======================================================
// TRILHA MISSIONÁRIA
// O GRANDE DESAFIO DOS EMBAIXADORES DO REI
// MOTOR PRINCIPAL DO JOGO
// ======================================================


// ======================================================
// ELEMENTOS HTML
// ======================================================

const telaInicial = document.getElementById("telaInicial");
const telaJogo = document.getElementById("telaJogo");
const telaVitoria = document.getElementById("telaVitoria");

const nomeJogador = document.getElementById("nomeJogador");
const faixaEtaria = document.getElementById("faixaEtaria");

const btnComecar = document.getElementById("btnComecar");
const btnLancarDado = document.getElementById("btnLancarDado");
const btnContinuar = document.getElementById("btnContinuar");
const btnJogarNovamente = document.getElementById("btnJogarNovamente");

const nomeExibido = document.getElementById("nomeExibido");
const posicaoAtual = document.getElementById("posicaoAtual");
const pontuacao = document.getElementById("pontuacao");

const tabuleiro = document.getElementById("tabuleiro");

const dado = document.getElementById("dado");
const mensagemDado = document.getElementById("mensagemDado");

const tituloJornada = document.getElementById("tituloJornada");
const mensagemJornada = document.getElementById("mensagemJornada");

const painelDesafio = document.getElementById("painelDesafio");
const categoriaDesafio = document.getElementById("categoriaDesafio");
const tituloDesafio = document.getElementById("tituloDesafio");
const perguntaDesafio = document.getElementById("perguntaDesafio");
const alternativas = document.getElementById("alternativas");
const resultadoDesafio = document.getElementById("resultadoDesafio");

const vencedorNome = document.getElementById("vencedorNome");
const pontuacaoFinal = document.getElementById("pontuacaoFinal");


// ======================================================
// VARIÁVEIS DO JOGO
// ======================================================

const TOTAL_CASAS = 30;

let jogador = {
    nome: "",
    idade: "formacao",
    posicao: 1,
    pontos: 0
};

let casas = [];

let desafioAtual = null;
let desafioRespondido = false;
let jogoAtivo = false;
let perguntasUtilizadas = new Set();


// ======================================================
// BANCO DE PERGUNTAS — TRILHA MISSIONÁRIA
// 50 QUESTÕES INÉDITAS
// ======================================================

const perguntas = [

    // ==================================================
    // BÍBLIA — PEQUENOS EMBAIXADORES
    // ==================================================

    {
        categoria: "BÍBLIA",
        nivel: "pequenos",
        pergunta: "Quem recebeu os Dez Mandamentos de Deus?",
        alternativas: ["Abraão", "Moisés", "José", "Noé"],
        correta: 1,
        explicacao: "Moisés recebeu os Dez Mandamentos no monte Sinai."
    },

    {
        categoria: "BÍBLIA",
        nivel: "pequenos",
        pergunta: "Quem foi engolido por um grande peixe?",
        alternativas: ["Jonas", "Pedro", "Paulo", "Elias"],
        correta: 0,
        explicacao: "Jonas foi engolido por um grande peixe depois de fugir da missão que Deus lhe confiou."
    },

    {
        categoria: "BÍBLIA",
        nivel: "pequenos",
        pergunta: "Em qual cidade Jesus nasceu?",
        alternativas: ["Jerusalém", "Nazaré", "Belém", "Jericó"],
        correta: 2,
        explicacao: "Jesus nasceu em Belém, conforme o relato dos Evangelhos."
    },

    // ==================================================
    // BÍBLIA — FORMAÇÃO
    // ==================================================

    {
        categoria: "BÍBLIA",
        nivel: "formacao",
        pergunta: "Qual era o nome do irmão de Moisés?",
        alternativas: ["Arão", "Calebe", "Josué", "Gideão"],
        correta: 0,
        explicacao: "Arão era irmão de Moisés e foi escolhido para ajudá-lo."
    },

    {
        categoria: "BÍBLIA",
        nivel: "formacao",
        pergunta: "Quem interpretou os sonhos do faraó no Egito?",
        alternativas: ["Daniel", "José", "Moisés", "Ezequiel"],
        correta: 1,
        explicacao: "José interpretou os sonhos do faraó e orientou o Egito durante os anos de abundância e fome."
    },

    {
        categoria: "BÍBLIA",
        nivel: "formacao",
        pergunta: "Qual rainha arriscou sua vida para salvar seu povo?",
        alternativas: ["Rute", "Débora", "Ester", "Miriã"],
        correta: 2,
        explicacao: "Ester intercedeu diante do rei para impedir a destruição dos judeus."
    },

    {
        categoria: "BÍBLIA",
        nivel: "formacao",
        pergunta: "Quem batizou Jesus no rio Jordão?",
        alternativas: ["Pedro", "João Batista", "André", "Tiago"],
        correta: 1,
        explicacao: "João Batista batizou Jesus no rio Jordão."
    },

    // ==================================================
    // BÍBLIA — GRANDES DESAFIOS
    // ==================================================

    {
        categoria: "BÍBLIA",
        nivel: "grandes",
        pergunta: "Qual livro do Antigo Testamento relata a reconstrução dos muros de Jerusalém?",
        alternativas: ["Esdras", "Neemias", "Ester", "Ageu"],
        correta: 1,
        explicacao: "O livro de Neemias relata a reconstrução dos muros de Jerusalém."
    },

    {
        categoria: "BÍBLIA",
        nivel: "grandes",
        pergunta: "Quem foi o primeiro rei de Israel?",
        alternativas: ["Davi", "Salomão", "Saul", "Josias"],
        correta: 2,
        explicacao: "Saul foi ungido por Samuel como primeiro rei de Israel."
    },

    {
        categoria: "BÍBLIA",
        nivel: "grandes",
        pergunta: "Qual apóstolo escreveu a maior parte das cartas do Novo Testamento?",
        alternativas: ["Pedro", "João", "Paulo", "Tiago"],
        correta: 2,
        explicacao: "Paulo escreveu diversas cartas que fazem parte do Novo Testamento."
    },


    // ==================================================
    // MISSÕES — PEQUENOS EMBAIXADORES
    // ==================================================

    {
        categoria: "MISSÕES",
        nivel: "pequenos",
        pergunta: "Quem ensinou aos discípulos que deveriam anunciar o Evangelho?",
        alternativas: ["Jesus", "Pilatos", "Herodes", "Faraó"],
        correta: 0,
        explicacao: "Jesus ensinou seus discípulos e os enviou para anunciar o Evangelho."
    },

    {
        categoria: "MISSÕES",
        nivel: "pequenos",
        pergunta: "Qual é a principal mensagem que os cristãos anunciam?",
        alternativas: [
            "A fama dos homens",
            "O Evangelho de Jesus Cristo",
            "A riqueza material",
            "As conquistas dos reis"
        ],
        correta: 1,
        explicacao: "Os cristãos anunciam a mensagem de salvação em Jesus Cristo."
    },

    {
        categoria: "MISSÕES",
        nivel: "pequenos",
        pergunta: "Como podemos participar das missões mesmo sem viajar?",
        alternativas: [
            "Orando e contribuindo",
            "Ignorando os missionários",
            "Deixando de estudar",
            "Evitando ajudar"
        ],
        correta: 0,
        explicacao: "A oração, a contribuição e o testemunho são formas de participar da obra missionária."
    },

    // ==================================================
    // MISSÕES — FORMAÇÃO
    // ==================================================

    {
        categoria: "MISSÕES",
        nivel: "formacao",
        pergunta: "Qual cidade foi importante no início das viagens missionárias de Paulo?",
        alternativas: ["Antioquia", "Roma", "Belém", "Jericó"],
        correta: 0,
        explicacao: "A igreja de Antioquia enviou Paulo e Barnabé para a obra missionária."
    },

    {
        categoria: "MISSÕES",
        nivel: "formacao",
        pergunta: "Quem acompanhou Paulo em sua primeira viagem missionária?",
        alternativas: ["Barnabé", "Timóteo", "Lucas", "Silas"],
        correta: 0,
        explicacao: "Barnabé acompanhou Paulo no início da primeira viagem missionária."
    },

    {
        categoria: "MISSÕES",
        nivel: "formacao",
        pergunta: "Qual missionária batista ficou conhecida por seu trabalho na China e por seu serviço entre mulheres chinesas?",
        alternativas: [
            "Lottie Moon",
            "Florence Nightingale",
            "Amy Carmichael",
            "Corrie ten Boom"
        ],
        correta: 0,
        explicacao: "Lottie Moon foi uma missionária batista que dedicou sua vida ao trabalho na China."
    },

    {
        categoria: "MISSÕES",
        nivel: "formacao",
        pergunta: "Qual continente foi o principal destino missionário de William Carey?",
        alternativas: ["Europa", "África", "Ásia", "Oceania"],
        correta: 2,
        explicacao: "William Carey desenvolveu seu trabalho missionário na Índia, na Ásia."
    },

    // ==================================================
    // MISSÕES — GRANDES DESAFIOS
    // ==================================================

    {
        categoria: "MISSÕES",
        nivel: "grandes",
        pergunta: "Em qual cidade chinesa Lottie Moon desenvolveu parte importante de seu trabalho missionário?",
        alternativas: ["Pequim", "Tengchow", "Xangai", "Cantão"],
        correta: 1,
        explicacao: "Lottie Moon trabalhou em Tengchow, na China."
    },

    {
        categoria: "MISSÕES",
        nivel: "grandes",
        pergunta: "Qual organização missionária William Carey ajudou a fundar em 1792?",
        alternativas: [
            "Sociedade Missionária Batista",
            "Sociedade Bíblica Americana",
            "Cruz Vermelha",
            "Missão de Oxford"
        ],
        correta: 0,
        explicacao: "William Carey participou da fundação da Sociedade Missionária Batista em 1792."
    },

    {
        categoria: "MISSÕES",
        nivel: "grandes",
        pergunta: "Qual é o principal objetivo da tradução da Bíblia para outros idiomas?",
        alternativas: [
            "Substituir todos os idiomas",
            "Permitir que mais povos tenham acesso às Escrituras em sua própria língua",
            "Criar novas religiões",
            "Eliminar as culturas locais"
        ],
        correta: 1,
        explicacao: "A tradução bíblica permite que pessoas de diferentes povos leiam e compreendam as Escrituras em sua própria língua."
    },


    // ==================================================
    // HISTÓRIA ER — PEQUENOS EMBAIXADORES
    // ==================================================

    {
        categoria: "HISTÓRIA ER",
        nivel: "pequenos",
        pergunta: "Qual é o nome dado ao grupo local dos Embaixadores do Rei?",
        alternativas: ["Embaixada", "Expedição", "Patrulha", "Equipe Real"],
        correta: 0,
        explicacao: "O grupo local dos Embaixadores do Rei é chamado de Embaixada."
    },

    {
        categoria: "HISTÓRIA ER",
        nivel: "pequenos",
        pergunta: "Qual é o nome da pessoa responsável por orientar os meninos na Embaixada?",
        alternativas: ["Capitão", "Conselheiro", "Prefeito", "Diretor escolar"],
        correta: 1,
        explicacao: "O conselheiro orienta e acompanha os Embaixadores do Rei."
    },

    {
        categoria: "HISTÓRIA ER",
        nivel: "pequenos",
        pergunta: "A organização Embaixadores do Rei está ligada a qual tradição cristã?",
        alternativas: ["Batista", "Budista", "Hinduísta", "Muçulmana"],
        correta: 0,
        explicacao: "Embaixadores do Rei é uma organização ligada à tradição batista."
    },

    // ==================================================
    // HISTÓRIA ER — FORMAÇÃO
    // ==================================================

    {
        categoria: "HISTÓRIA ER",
        nivel: "formacao",
        pergunta: "Em qual estado norte-americano ocorreu a experiência de meninos que deu origem ao movimento dos Embaixadores do Rei?",
        alternativas: ["Texas", "Kentucky", "Flórida", "Califórnia"],
        correta: 1,
        explicacao: "A experiência ocorreu em Owensboro, no estado de Kentucky."
    },

    {
        categoria: "HISTÓRIA ER",
        nivel: "formacao",
        pergunta: "Qual era uma das atividades dos meninos envolvidos na experiência de 1883?",
        alternativas: [
            "Estudar missões e orar",
            "Treinar para competições militares",
            "Construir navios",
            "Organizar campanhas políticas"
        ],
        correta: 0,
        explicacao: "Os meninos estudavam missões, oravam e se mobilizavam para apoiar o trabalho missionário."
    },

    {
        categoria: "HISTÓRIA ER",
        nivel: "formacao",
        pergunta: "Em qual igreja brasileira surgiu a primeira Embaixada do Rei?",
        alternativas: [
            "Igreja Batista da Tijuca",
            "Igreja Batista do Brás",
            "Primeira Igreja Batista de Salvador",
            "Igreja Batista de Niterói"
        ],
        correta: 0,
        explicacao: "A primeira Embaixada do Rei no Brasil foi organizada na Igreja Batista da Tijuca, no Rio de Janeiro."
    },

    {
        categoria: "HISTÓRIA ER",
        nivel: "formacao",
        pergunta: "Qual é o significado do escudo na insígnia dos Embaixadores do Rei?",
        alternativas: [
            "Força física",
            "Fé",
            "Riqueza",
            "Poder político"
        ],
        correta: 1,
        explicacao: "O escudo representa a fé e lembra ao Embaixador que ele é embaixador por Cristo."
    },

    // ==================================================
    // HISTÓRIA ER — GRANDES DESAFIOS
    // ==================================================

    {
        categoria: "HISTÓRIA ER",
        nivel: "grandes",
        pergunta: "Em que data foi organizada a primeira Embaixada do Rei no Brasil?",
        alternativas: [
            "25 de agosto de 1948",
            "7 de setembro de 1945",
            "15 de novembro de 1950",
            "1º de janeiro de 1949"
        ],
        correta: 0,
        explicacao: "A primeira Embaixada do Rei no Brasil foi organizada em 25 de agosto de 1948."
    },

    {
        categoria: "HISTÓRIA ER",
        nivel: "grandes",
        pergunta: "Qual era o nome da primeira Embaixada do Rei organizada no Brasil?",
        alternativas: [
            "William Carey",
            "William Buck Bagby",
            "Lottie Moon",
            "John Bunyan"
        ],
        correta: 1,
        explicacao: "A primeira Embaixada recebeu o nome de William Buck Bagby."
    },

    {
        categoria: "HISTÓRIA ER",
        nivel: "grandes",
        pergunta: "Qual organização passou a dirigir o trabalho dos Embaixadores do Rei no Brasil em janeiro de 1978?",
        alternativas: [
            "União Masculina Missionária Batista do Brasil",
            "União Feminina Missionária Batista do Brasil",
            "Junta de Missões Mundiais",
            "Convenção Batista do Sul"
        ],
        correta: 0,
        explicacao: "Em janeiro de 1978, o trabalho foi transferido para a União Masculina Missionária Batista do Brasil."
    },


    // ==================================================
    // GEOGRAFIA — PEQUENOS EMBAIXADORES
    // ==================================================

    {
        categoria: "GEOGRAFIA",
        nivel: "pequenos",
        pergunta: "Em qual continente fica o Japão?",
        alternativas: ["África", "Ásia", "Europa", "América"],
        correta: 1,
        explicacao: "O Japão é um país localizado no continente asiático."
    },

    {
        categoria: "GEOGRAFIA",
        nivel: "pequenos",
        pergunta: "Qual é o maior oceano do planeta?",
        alternativas: ["Atlântico", "Índico", "Pacífico", "Ártico"],
        correta: 2,
        explicacao: "O oceano Pacífico é o maior oceano da Terra."
    },

    {
        categoria: "GEOGRAFIA",
        nivel: "pequenos",
        pergunta: "Em qual continente fica o Quênia?",
        alternativas: ["África", "Europa", "Ásia", "Oceania"],
        correta: 0,
        explicacao: "O Quênia é um país localizado no continente africano."
    },

    // ==================================================
    // GEOGRAFIA — FORMAÇÃO
    // ==================================================

    {
        categoria: "GEOGRAFIA",
        nivel: "formacao",
        pergunta: "Qual é o maior país da América do Sul em extensão territorial?",
        alternativas: ["Argentina", "Brasil", "Peru", "Chile"],
        correta: 1,
        explicacao: "O Brasil é o maior país da América do Sul em extensão territorial."
    },

    {
        categoria: "GEOGRAFIA",
        nivel: "formacao",
        pergunta: "Qual rio atravessa a floresta amazônica?",
        alternativas: ["Nilo", "Amazonas", "Danúbio", "Mississippi"],
        correta: 1,
        explicacao: "O rio Amazonas atravessa a região amazônica e possui uma das maiores bacias hidrográficas do mundo."
    },

    {
        categoria: "GEOGRAFIA",
        nivel: "formacao",
        pergunta: "Qual destes países está localizado na África?",
        alternativas: ["Nepal", "Angola", "Canadá", "Portugal"],
        correta: 1,
        explicacao: "Angola é um país localizado na região sudoeste da África."
    },

    {
        categoria: "GEOGRAFIA",
        nivel: "formacao",
        pergunta: "Qual é o continente onde fica a França?",
        alternativas: ["Ásia", "Europa", "África", "Oceania"],
        correta: 1,
        explicacao: "A França metropolitana está localizada na Europa."
    },

    // ==================================================
    // GEOGRAFIA — GRANDES DESAFIOS
    // ==================================================

    {
        categoria: "GEOGRAFIA",
        nivel: "grandes",
        pergunta: "Qual estreito separa a Europa da África entre a Espanha e o Marrocos?",
        alternativas: [
            "Estreito de Bering",
            "Estreito de Gibraltar",
            "Estreito de Malaca",
            "Estreito de Magalhães"
        ],
        correta: 1,
        explicacao: "O estreito de Gibraltar separa o sul da Espanha do norte do Marrocos."
    },

    {
        categoria: "GEOGRAFIA",
        nivel: "grandes",
        pergunta: "Qual é o deserto quente mais extenso do mundo?",
        alternativas: [
            "Deserto de Gobi",
            "Deserto do Saara",
            "Deserto da Arábia",
            "Deserto de Kalahari"
        ],
        correta: 1,
        explicacao: "O Saara é o maior deserto quente do planeta."
    },

    {
        categoria: "GEOGRAFIA",
        nivel: "grandes",
        pergunta: "Qual cordilheira percorre a parte ocidental da América do Sul?",
        alternativas: [
            "Alpes",
            "Himalaia",
            "Andes",
            "Montanhas Rochosas"
        ],
        correta: 2,
        explicacao: "A cordilheira dos Andes percorre a região ocidental da América do Sul."
    },


    // ==================================================
    // SERVIÇO REAL — PEQUENOS EMBAIXADORES
    // ==================================================

    {
        categoria: "SERVIÇO REAL",
        nivel: "pequenos",
        pergunta: "Se um colega está triste, qual atitude demonstra amor cristão?",
        alternativas: [
            "Zombar dele",
            "Conversar e oferecer ajuda",
            "Ignorá-lo",
            "Espalhar a notícia"
        ],
        correta: 1,
        explicacao: "Demonstramos amor quando acolhemos, escutamos e ajudamos quem precisa."
    },

    {
        categoria: "SERVIÇO REAL",
        nivel: "pequenos",
        pergunta: "O que devemos fazer ao encontrar lixo no ambiente da igreja?",
        alternativas: [
            "Deixar no chão",
            "Chutar para longe",
            "Recolher e descartar corretamente",
            "Esconder embaixo de um móvel"
        ],
        correta: 2,
        explicacao: "Cuidar do ambiente também é uma forma de servir."
    },

    {
        categoria: "SERVIÇO REAL",
        nivel: "pequenos",
        pergunta: "Qual atitude demonstra respeito às pessoas?",
        alternativas: [
            "Interromper sempre",
            "Ouvir com atenção",
            "Gritar com os outros",
            "Fazer brincadeiras ofensivas"
        ],
        correta: 1,
        explicacao: "Ouvir com atenção demonstra respeito e consideração pelo próximo."
    },

    // ==================================================
    // SERVIÇO REAL — FORMAÇÃO
    // ==================================================

    {
        categoria: "SERVIÇO REAL",
        nivel: "formacao",
        pergunta: "Qual passagem bíblica ensina que devemos amar o próximo como a nós mesmos?",
        alternativas: [
            "Mateus 22:39",
            "Gênesis 1:1",
            "Êxodo 20:1",
            "Apocalipse 1:1"
        ],
        correta: 0,
        explicacao: "Mateus 22:39 apresenta o mandamento de amar o próximo como a nós mesmos."
    },

    {
        categoria: "SERVIÇO REAL",
        nivel: "formacao",
        pergunta: "O que significa agir com humildade no serviço cristão?",
        alternativas: [
            "Buscar elogios",
            "Servir sem querer ser superior aos outros",
            "Exigir recompensas",
            "Evitar responsabilidades"
        ],
        correta: 1,
        explicacao: "A humildade nos ensina a servir sem buscar superioridade ou reconhecimento."
    },

    {
        categoria: "SERVIÇO REAL",
        nivel: "formacao",
        pergunta: "Qual atitude representa cuidado com a comunidade?",
        alternativas: [
            "Desperdiçar água",
            "Danificar espaços públicos",
            "Participar de ações de ajuda e conservação",
            "Ignorar problemas coletivos"
        ],
        correta: 2,
        explicacao: "Cuidar da comunidade é uma maneira prática de demonstrar responsabilidade e amor ao próximo."
    },

    {
        categoria: "SERVIÇO REAL",
        nivel: "formacao",
        pergunta: "Segundo Gálatas 6:2, o que devemos fazer uns pelos outros?",
        alternativas: [
            "Carregar os fardos uns dos outros",
            "Competir em tudo",
            "Evitar relacionamentos",
            "Buscar vantagens pessoais"
        ],
        correta: 0,
        explicacao: "Gálatas 6:2 ensina que devemos levar as cargas uns dos outros."
    },

    // ==================================================
    // SERVIÇO REAL — GRANDES DESAFIOS
    // ==================================================

    {
        categoria: "SERVIÇO REAL",
        nivel: "grandes",
        pergunta: "Qual parábola de Jesus apresenta um homem que socorreu alguém ferido na estrada?",
        alternativas: [
            "O filho pródigo",
            "O bom samaritano",
            "O semeador",
            "As dez virgens"
        ],
        correta: 1,
        explicacao: "A parábola do bom samaritano ensina sobre compaixão e cuidado com o próximo."
    },

    {
        categoria: "SERVIÇO REAL",
        nivel: "grandes",
        pergunta: "Em Tiago 2, a fé sem obras é descrita como:",
        alternativas: [
            "Completa",
            "Morta",
            "Perfeita",
            "Inabalável"
        ],
        correta: 1,
        explicacao: "Tiago 2:17 ensina que a fé, se não tiver obras, é morta em si mesma."
    },

    {
        categoria: "SERVIÇO REAL",
        nivel: "grandes",
        pergunta: "Qual princípio deve orientar o uso dos talentos e capacidades no serviço cristão?",
        alternativas: [
            "Usá-los somente para benefício próprio",
            "Escondê-los por medo",
            "Empregá-los para servir a Deus e ao próximo",
            "Usá-los para obter superioridade"
        ],
        correta: 2,
        explicacao: "Nossos dons e capacidades podem ser empregados no serviço a Deus e às pessoas."
    }

];

// ======================================================
// CONFIGURAÇÃO DAS CASAS
// ======================================================

const tiposCasas = [

    {
        tipo: "biblia",
        nome: "BÍBLIA",
        icone: "📖"
    },

    {
        tipo: "missoes",
        nome: "MISSÕES",
        icone: "🌍"
    },

    {
        tipo: "historia",
        nome: "HISTÓRIA ER",
        icone: "🏛️"
    },

    {
        tipo: "geografia",
        nome: "GEOGRAFIA",
        icone: "🧭"
    },

    {
        tipo: "servico",
        nome: "SERVIÇO",
        icone: "🤝"
    },

    {
        tipo: "normal",
        nome: "CAMINHO",
        icone: "🌿"
    }

];


// ======================================================
// INICIAR JOGO
// ======================================================

btnComecar.addEventListener("click", iniciarJogo);

function iniciarJogo() {

    const nome = nomeJogador.value.trim();

    if (nome === "") {
        alert("Digite o nome do Embaixador para começar!");
        nomeJogador.focus();
        return;
    }

    jogador.nome = nome;
    jogador.idade = faixaEtaria.value;
    jogador.posicao = 1;
    jogador.pontos = 0;

    jogoAtivo = true;
    perguntasUtilizadas.clear();

    telaInicial.classList.add("escondido");
    telaVitoria.classList.add("escondido");
    telaJogo.classList.remove("escondido");

    nomeExibido.textContent = jogador.nome;

    atualizarInformacoes();

    criarTabuleiro();

    tituloJornada.textContent = "Sua jornada missionária começou!";

    mensagemJornada.textContent =
        "Você está na primeira casa. Lance o dado e prepare-se para a aventura!";

    mensagemDado.textContent =
        "Lance o dado para descobrir quantas casas avançar!";

    dado.textContent = "?";

    painelDesafio.classList.add("escondido");

    btnLancarDado.disabled = false;

    btnLancarDado.textContent = "🎲 LANÇAR DADO";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ======================================================
// CRIAR TABULEIRO
// ======================================================

function criarTabuleiro() {

    tabuleiro.innerHTML = "";

    casas = [];

    for (let i = 1; i <= TOTAL_CASAS; i++) {

        let casa;

        if (i === 1) {

            casa = {
                numero: i,
                tipo: "inicio",
                nome: "INÍCIO",
                icone: "🚩"
            };

        } else if (i === TOTAL_CASAS) {

            casa = {
                numero: i,
                tipo: "final",
                nome: "DESTINO",
                icone: "🏆"
            };

        } else {

            const indice = (i - 2) % tiposCasas.length;

            const tipoEscolhido = tiposCasas[indice];

            casa = {
                numero: i,
                tipo: tipoEscolhido.tipo,
                nome: tipoEscolhido.nome,
                icone: tipoEscolhido.icone
            };

        }

        casas.push(casa);

        const elemento = document.createElement("div");

        elemento.classList.add("casa");

        elemento.dataset.numero = i;

        elemento.innerHTML = `
            <span class="numero-casa">${i}</span>
            <span class="icone-casa">${casa.icone}</span>
            <span class="nome-casa">${casa.nome}</span>
        `;

        if (i === 1) {
            elemento.classList.add("inicio");
        }

        if (i === TOTAL_CASAS) {
            elemento.classList.add("final");
        }

        tabuleiro.appendChild(elemento);

    }

    atualizarTabuleiro();

}


// ======================================================
// ATUALIZAR TABULEIRO
// ======================================================

function atualizarTabuleiro() {

    const elementos = document.querySelectorAll(".casa");

    elementos.forEach(elemento => {

        const numero = Number(elemento.dataset.numero);

        elemento.classList.remove("atual", "concluida");

        if (numero < jogador.posicao) {
            elemento.classList.add("concluida");
        }

        if (numero === jogador.posicao) {
            elemento.classList.add("atual");
        }

    });

}


// ======================================================
// ATUALIZAR INFORMAÇÕES
// ======================================================

function atualizarInformacoes() {

    posicaoAtual.textContent = `Casa ${jogador.posicao}`;

    pontuacao.textContent = jogador.pontos;

    atualizarTabuleiro();

}


// ======================================================
// LANÇAR DADO
// ======================================================

btnLancarDado.addEventListener("click", lancarDado);

function lancarDado() {

    if (!jogoAtivo) return;

    btnLancarDado.disabled = true;

    dado.classList.remove("animando");

    void dado.offsetWidth;

    dado.classList.add("animando");

    mensagemDado.textContent = "O dado está rolando...";

    let contador = 0;

    const animacao = setInterval(() => {

        const numeroTemporario = Math.floor(Math.random() * 6) + 1;

        dado.textContent = numeroTemporario;

        contador++;

        if (contador >= 8) {

            clearInterval(animacao);

            const resultado = Math.floor(Math.random() * 6) + 1;

            dado.textContent = resultado;

            moverJogador(resultado);

        }

    }, 100);

}


// ======================================================
// MOVIMENTAR JOGADOR
// ======================================================

function moverJogador(valor) {

    jogador.posicao += valor;

    if (jogador.posicao > TOTAL_CASAS) {
        jogador.posicao = TOTAL_CASAS;
    }

    atualizarInformacoes();

    mensagemDado.textContent =
        `Você avançou ${valor} casa(s)!`;

    tituloJornada.textContent = "Muito bem, Embaixador!";

    mensagemJornada.textContent =
        `Você chegou à casa ${jogador.posicao}. Vamos descobrir o que espera por você!`;

    setTimeout(() => {

        verificarCasa();

    }, 600);

}


// ======================================================
// VERIFICAR CASA
// ======================================================

function verificarCasa() {

    if (jogador.posicao === TOTAL_CASAS) {

        finalizarJogo();

        return;

    }

    const casa = casas[jogador.posicao - 1];

    if (casa.tipo === "inicio" || casa.tipo === "normal") {

        mensagemJornada.textContent =
            "Continue avançando! Sua jornada missionária está apenas começando.";

        btnLancarDado.disabled = false;

        return;

    }

    iniciarDesafio(casa.tipo);

}

// ======================================================
// SELECIONAR PERGUNTA SEM REPETIÇÃO
// ======================================================

function selecionarPergunta(categoria) {

    const nivel = jogador.idade;

    // Filtra perguntas da categoria e faixa etária
    let disponiveis = perguntas.filter(pergunta => {

        return pergunta.categoria === categoria &&
            pergunta.nivel === nivel &&
            !perguntasUtilizadas.has(pergunta);

    });

    // Se não houver perguntas disponíveis nesse nível,
    // procura em todos os níveis da mesma categoria.
    if (disponiveis.length === 0) {

        disponiveis = perguntas.filter(pergunta => {

            return pergunta.categoria === categoria &&
                !perguntasUtilizadas.has(pergunta);

        });

    }

    // Se todas as perguntas da categoria já foram utilizadas,
    // libera novamente as perguntas dessa categoria.
    if (disponiveis.length === 0) {

        perguntas.forEach(pergunta => {

            if (pergunta.categoria === categoria) {
                perguntasUtilizadas.delete(pergunta);
            }

        });

        disponiveis = perguntas.filter(pergunta => {

            return pergunta.categoria === categoria;

        });

    }

    if (disponiveis.length === 0) {
        return null;
    }

    const indice = Math.floor(
        Math.random() * disponiveis.length
    );

    const perguntaEscolhida = disponiveis[indice];

    perguntasUtilizadas.add(perguntaEscolhida);

    return perguntaEscolhida;

}


// ======================================================
// INICIAR DESAFIO
// ======================================================

function iniciarDesafio(tipo) {

    const categorias = {

        biblia: "BÍBLIA",

        missoes: "MISSÕES",

        historia: "HISTÓRIA ER",

        geografia: "GEOGRAFIA",

        servico: "SERVIÇO REAL"

    };

    const categoria = categorias[tipo];

    desafioAtual = selecionarPergunta(categoria);

    if (!desafioAtual) {

        btnLancarDado.disabled = false;

        return;

    }

    desafioRespondido = false;

    painelDesafio.classList.remove("escondido");

    categoriaDesafio.textContent = categoria;

    tituloDesafio.textContent = "DESAFIO MISSIONÁRIO";

    perguntaDesafio.textContent = desafioAtual.pergunta;

    resultadoDesafio.textContent = "";

    alternativas.innerHTML = "";

    btnContinuar.classList.add("escondido");

    desafioAtual.alternativas.forEach((texto, indice) => {

        const botao = document.createElement("button");

        botao.classList.add("alternativa");

        botao.textContent =
            `${String.fromCharCode(65 + indice)}) ${texto}`;

        botao.addEventListener("click", () => {

            responderDesafio(indice);

        });

        alternativas.appendChild(botao);

    });

    mensagemJornada.textContent =
        "Você encontrou um desafio! Responda corretamente para ganhar pontos.";

    painelDesafio.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


// ======================================================
// RESPONDER DESAFIO
// ======================================================

function responderDesafio(indiceEscolhido) {

    if (desafioRespondido) return;

    desafioRespondido = true;

    const botoes = alternativas.querySelectorAll("button");

    botoes.forEach((botao, indice) => {

        botao.disabled = true;

        if (indice === desafioAtual.correta) {
            botao.classList.add("correta");
        }

        if (indice === indiceEscolhido &&
            indice !== desafioAtual.correta) {

            botao.classList.add("errada");

        }

    });

    if (indiceEscolhido === desafioAtual.correta) {

        jogador.pontos += 10;

        resultadoDesafio.textContent =
            `🎉 RESPOSTA CORRETA! +10 pontos. ${desafioAtual.explicacao}`;

        resultadoDesafio.style.color = "#39734D";

        tituloDesafio.textContent = "EXCELENTE, EMBAIXADOR!";

    } else {

        resultadoDesafio.textContent =
            `Não foi dessa vez! ${desafioAtual.explicacao}`;

        resultadoDesafio.style.color = "#B83A3A";

        tituloDesafio.textContent = "CONTINUE APRENDENDO!";

    }

    atualizarInformacoes();

    btnContinuar.classList.remove("escondido");

    btnContinuar.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


// ======================================================
// CONTINUAR JORNADA
// ======================================================

btnContinuar.addEventListener("click", continuarJornada);

function continuarJornada() {

    painelDesafio.classList.add("escondido");

    if (jogador.posicao >= TOTAL_CASAS) {

        finalizarJogo();

        return;

    }

    mensagemJornada.textContent =
        "Muito bem! Continue sua jornada missionária.";

    mensagemDado.textContent =
        "Está pronto para avançar? Lance o dado!";

    btnLancarDado.disabled = false;

    btnLancarDado.textContent = "🎲 LANÇAR DADO";

}


// ======================================================
// FINALIZAR JOGO
// ======================================================

function finalizarJogo() {

    jogoAtivo = false;

    telaJogo.classList.add("escondido");

    telaVitoria.classList.remove("escondido");

    vencedorNome.textContent = jogador.nome;

    pontuacaoFinal.textContent = jogador.pontos;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ======================================================
// JOGAR NOVAMENTE
// ======================================================

btnJogarNovamente.addEventListener("click", () => {

    telaVitoria.classList.add("escondido");

    telaInicial.classList.remove("escondido");

    nomeJogador.value = jogador.nome;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ======================================================
// FIM DO MOTOR PRINCIPAL
// ======================================================

console.log("Trilha Missionária carregada com sucesso!");