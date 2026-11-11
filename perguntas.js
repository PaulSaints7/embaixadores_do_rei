"use strict";

// ======================================================
// SHOW DOS ER
// BANCO DE PERGUNTAS
// ======================================================


// ======================================================
// ETAPAS DE CONHECIMENTO
// ======================================================

const ETAPAS_CONHECIMENTO = [

    {
        numero: 1,
        nome: "DESAFIO INICIAL",
        dificuldade: "Fácil",
        descricao: "Vamos começar o grande desafio!"
    },

    {
        numero: 2,
        nome: "JORNADA DO CONHECIMENTO",
        dificuldade: "Intermediária",
        descricao: "Avançando no conhecimento."
    },

    {
        numero: 3,
        nome: "DESAFIO DOS SABERES",
        dificuldade: "Intermediária avançada",
        descricao: "Conhecimento exige dedicação."
    },

    {
        numero: 4,
        nome: "MESTRES DO CONHECIMENTO",
        dificuldade: "Avançada",
        descricao: "Um verdadeiro teste de conhecimento."
    },

    {
        numero: 5,
        nome: "O GRANDE DESAFIO",
        dificuldade: "Especial",
        descricao: "Chegou a hora de provar seus conhecimentos!"
    }

];


// ======================================================
// BANCO DE PERGUNTAS
// ======================================================

const BANCO_PERGUNTAS = [

    // ==================================================
    // ETAPA 1 — DESAFIO INICIAL
    // ==================================================

    // PERGUNTA 01 — BÍBLIA

    {
        id: 1,
        etapa: 1,
        categoria: "Conhecimentos Bíblicos",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "Quem construiu a arca por ordem de Deus?",

        alternativas: [
            "Abraão",
            "Moisés",
            "Noé",
            "Davi"
        ],

        respostaCorreta: 2,

        explicacao:
            "Deus orientou Noé a construir uma arca para preservar sua família e os animais durante o dilúvio.",

        referencia: "Gênesis 6:13-22",
        fonte: "Bíblia Sagrada"
    },


    // PERGUNTA 02 — BÍBLIA

    {
        id: 2,
        etapa: 1,
        categoria: "Conhecimentos Bíblicos",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "Quem foi a mãe de Jesus?",

        alternativas: [
            "Marta",
            "Maria",
            "Isabel",
            "Rute"
        ],

        respostaCorreta: 1,

        explicacao:
            "Maria foi escolhida por Deus para ser a mãe de Jesus, nosso Salvador.",

        referencia: "Lucas 1:26-31",
        fonte: "Bíblia Sagrada"
    },


    // PERGUNTA 03 — BÍBLIA

    {
        id: 3,
        etapa: 1,
        categoria: "Conhecimentos Bíblicos",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "Qual era a profissão de Pedro antes de seguir Jesus?",

        alternativas: [
            "Carpinteiro",
            "Pastor de ovelhas",
            "Pescador",
            "Soldado"
        ],

        respostaCorreta: 2,

        explicacao:
            "Pedro e seu irmão André trabalhavam como pescadores quando Jesus os chamou para serem seus discípulos.",

        referencia: "Mateus 4:18-20",
        fonte: "Bíblia Sagrada"
    },


    // PERGUNTA 04 — BÍBLIA

    {
        id: 4,
        etapa: 1,
        categoria: "Conhecimentos Bíblicos",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "Quem derrotou o gigante Golias?",

        alternativas: [
            "Saul",
            "Davi",
            "Salomão",
            "Samuel"
        ],

        respostaCorreta: 1,

        explicacao:
            "Davi enfrentou Golias confiando no poder de Deus, utilizando uma funda e uma pedra.",

        referencia: "1 Samuel 17:45-50",
        fonte: "Bíblia Sagrada"
    },


    // PERGUNTA 05 — BÍBLIA

    {
        id: 5,
        etapa: 1,
        categoria: "Conhecimentos Bíblicos",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "Qual é o primeiro livro da Bíblia?",

        alternativas: [
            "Êxodo",
            "Salmos",
            "Mateus",
            "Gênesis"
        ],

        respostaCorreta: 3,

        explicacao:
            "Gênesis é o primeiro livro da Bíblia e apresenta a criação do mundo e o início da história do povo de Deus.",

        referencia: "Gênesis 1:1",
        fonte: "Bíblia Sagrada"
    },


    // ==================================================
    // CONHECIMENTOS DOS EMBAIXADORES DO REI
    // ==================================================


    // PERGUNTA 06 — POSTOS

    {
        id: 6,
        etapa: 1,
        categoria: "Embaixadores do Rei",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "Qual é o nome do primeiro posto dos Embaixadores do Rei?",

        alternativas: [
            "Arauto",
            "Sênior",
            "Escudeiro",
            "Emérito"
        ],

        respostaCorreta: 2,

        explicacao:
            "O Escudeiro é o primeiro posto da sequência atual de progressão dos Embaixadores do Rei.",

        referencia: "Estrutura atual dos postos dos Embaixadores do Rei",
        fonte: "Material de formação dos ER"
    },


    // PERGUNTA 07 — INSÍGNIA

    {
        id: 7,
        etapa: 1,
        categoria: "Embaixadores do Rei",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "O que representa o escudo na insígnia dos Embaixadores do Rei?",

        alternativas: [
            "A coragem física",
            "A fé",
            "A vitória nos esportes",
            "A força militar"
        ],

        respostaCorreta: 1,

        explicacao:
            "O escudo representa a fé e lembra ao seu possuidor que ele é embaixador por Cristo.",

        referencia: "Significado da insígnia dos ER",
        fonte: "Material de formação do Posto de Escudeiro"
    },


    // PERGUNTA 08 — INSÍGNIA

    {
        id: 8,
        etapa: 1,
        categoria: "Embaixadores do Rei",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "Quantas pontas tem a coroa da insígnia dos Embaixadores do Rei?",

        alternativas: [
            "Três",
            "Quatro",
            "Cinco",
            "Sete"
        ],

        respostaCorreta: 2,

        explicacao:
            "A coroa possui cinco pontas, que representam os cinco ideais: Estudo da Bíblia, Oração, Missões, Mordomia e Serviço Real.",

        referencia: "Significado da insígnia dos ER",
        fonte: "Material de formação do Posto de Escudeiro"
    },


    // PERGUNTA 09 — POSTOS

    {
        id: 9,
        etapa: 1,
        categoria: "Embaixadores do Rei",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "Qual destas alternativas apresenta corretamente a sequência dos quatro postos atuais dos Embaixadores do Rei?",

        alternativas: [
            "Escudeiro, Arauto, Sênior e Emérito",
            "Arauto, Escudeiro, Emérito e Sênior",
            "Escudeiro, Sênior, Arauto e Emérito",
            "Sênior, Arauto, Escudeiro e Emérito"
        ],

        respostaCorreta: 0,

        explicacao:
            "A sequência atual dos quatro postos dos Embaixadores do Rei é: Escudeiro, Arauto, Sênior e Emérito.",

        referencia: "Estrutura atual dos postos dos Embaixadores do Rei",
        fonte: "Material de formação dos ER"
    },


    // PERGUNTA 10 — INSÍGNIA

    {
        id: 10,
        etapa: 1,
        categoria: "Embaixadores do Rei",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "O que representa o ramo de louro na insígnia dos Embaixadores do Rei?",

        alternativas: [
            "A amizade entre os embaixadores",
            "A vitória que deve ser ganha por Cristo e para Cristo",
            "A riqueza material",
            "A autoridade do conselheiro"
        ],

        respostaCorreta: 1,

        explicacao:
            "O ramo de louro representa a vitória que deve ser ganha por Cristo e para Cristo.",

        referencia: "Significado da insígnia dos ER",
        fonte: "Material de formação do Posto de Escudeiro"
    },


    // ==================================================
    // ETAPA 2 — JORNADA DO CONHECIMENTO
    // ==================================================


    // PERGUNTA 11 — BÍBLIA

    {
        id: 11,
        etapa: 2,
        categoria: "Conhecimentos Bíblicos",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "Quem liderou o povo de Israel na saída do Egito?",

        alternativas: [
            "Josué",
            "Moisés",
            "Arão",
            "Gideão"
        ],

        respostaCorreta: 1,

        explicacao:
            "Deus chamou Moisés para libertar os israelitas da escravidão no Egito e conduzi-los em direção à Terra Prometida.",

        referencia: "Êxodo 3:7-10",
        fonte: "Bíblia Sagrada"
    },


    // PERGUNTA 12 — BÍBLIA

    {
        id: 12,
        etapa: 2,
        categoria: "Conhecimentos Bíblicos",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "Quem foi lançado na cova dos leões por continuar orando a Deus?",

        alternativas: [
            "Daniel",
            "Elias",
            "Jeremias",
            "Ezequiel"
        ],

        respostaCorreta: 0,

        explicacao:
            "Mesmo diante de uma ordem que proibia a oração, Daniel permaneceu fiel a Deus. O Senhor o protegeu na cova dos leões.",

        referencia: "Daniel 6:10-23",
        fonte: "Bíblia Sagrada"
    },


    // PERGUNTA 13 — BÍBLIA

    {
        id: 13,
        etapa: 2,
        categoria: "Conhecimentos Bíblicos",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "Qual mulher se tornou rainha e ajudou a salvar seu povo da destruição?",

        alternativas: [
            "Rute",
            "Débora",
            "Ester",
            "Miriã"
        ],

        respostaCorreta: 2,

        explicacao:
            "Ester teve coragem de apresentar-se ao rei para interceder pelo povo judeu, arriscando a própria vida.",

        referencia: "Ester 4:13-16; 7:3-6",
        fonte: "Bíblia Sagrada"
    },


    // PERGUNTA 14 — BÍBLIA

    {
        id: 14,
        etapa: 2,
        categoria: "Conhecimentos Bíblicos",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "Durante quantos dias Jesus jejuou no deserto antes de iniciar seu ministério público?",

        alternativas: [
            "7 dias",
            "12 dias",
            "30 dias",
            "40 dias"
        ],

        respostaCorreta: 3,

        explicacao:
            "Jesus jejuou durante quarenta dias e, nesse período, foi tentado pelo diabo.",

        referencia: "Mateus 4:1-2",
        fonte: "Bíblia Sagrada"
    },


    // PERGUNTA 15 — BÍBLIA

    {
        id: 15,
        etapa: 2,
        categoria: "Conhecimentos Bíblicos",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "Para qual cidade Saulo estava viajando quando teve um encontro com Jesus?",

        alternativas: [
            "Jerusalém",
            "Damasco",
            "Belém",
            "Jericó"
        ],

        respostaCorreta: 1,

        explicacao:
            "Saulo perseguia os cristãos quando Jesus se revelou a ele no caminho de Damasco. Depois desse encontro, tornou-se um grande pregador do Evangelho.",

        referencia: "Atos 9:1-6",
        fonte: "Bíblia Sagrada"
    },


    // PERGUNTA 16 — ER

    {
        id: 16,
        etapa: 2,
        categoria: "Embaixadores do Rei",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "O que representa a cor azul na insígnia dos Embaixadores do Rei?",

        alternativas: [
            "Riqueza e prosperidade",
            "Lealdade a Cristo, à Igreja de Cristo, à organização ER e aos seus ideais",
            "Vitória nas competições esportivas",
            "Autoridade e poder militar"
        ],

        respostaCorreta: 1,

        explicacao:
            "O azul representa a lealdade a Cristo, à Igreja de Cristo, à organização dos Embaixadores do Rei e aos seus ideais.",

        referencia: "Significado das cores da insígnia dos ER",
        fonte: "Material de formação do Posto de Escudeiro"
    },


    // PERGUNTA 17 — ER

    {
        id: 17,
        etapa: 2,
        categoria: "Embaixadores do Rei",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "O que representa a cor amarela na insígnia dos Embaixadores do Rei?",

        alternativas: [
            "Preciosidade",
            "Tristeza",
            "Autoridade",
            "Força física"
        ],

        respostaCorreta: 0,

        explicacao:
            "Cristo é precioso quando aceito como Senhor, Salvador e Guia. O Embaixador também é precioso para Cristo quando emprega o melhor de sua capacidade no trabalho de Deus.",

        referencia: "Significado das cores da insígnia dos ER",
        fonte: "Material de formação do Posto de Escudeiro"
    },


    // PERGUNTA 18 — ER

    {
        id: 18,
        etapa: 2,
        categoria: "Embaixadores do Rei",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "O que representa a cor branca na insígnia dos Embaixadores do Rei?",

        alternativas: [
            "Liberdade política",
            "Pureza do corpo, da mente e da alma, e adoração somente a Deus",
            "Conhecimento científico",
            "Vitória sobre os adversários"
        ],

        respostaCorreta: 1,

        explicacao:
            "O branco representa a pureza do corpo, da mente e da alma, além da adoração exclusiva a Deus.",

        referencia: "Significado das cores da insígnia dos ER",
        fonte: "Material de formação do Posto de Escudeiro"
    },


    // PERGUNTA 19 — ER

    {
        id: 19,
        etapa: 2,
        categoria: "Embaixadores do Rei",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "O que a faixa com as letras E.R. representa na insígnia?",

        alternativas: [
            "A identificação da idade do Embaixador",
            "A autoridade do conselheiro",
            "A prova de que o Embaixador é trabalhador, falando de Cristo aos perdidos",
            "A participação em competições"
        ],

        respostaCorreta: 2,

        explicacao:
            "A faixa E.R. prova que o Embaixador é trabalhador, falando de Cristo aos perdidos.",

        referencia: "Significado da insígnia dos ER",
        fonte: "Material de formação do Posto de Escudeiro"
    },


    // PERGUNTA 20 — ER

    {
        id: 20,
        etapa: 2,
        categoria: "Embaixadores do Rei",
        idadeMinima: 6,
        idadeMaxima: 17,

        pergunta: "Qual é o tema oficial dos Embaixadores do Rei?",

        alternativas: [
            "Cristo, nossa esperança",
            "Somos embaixadores por Cristo",
            "Servindo com coragem e honra",
            "Jovens unidos pela fé"
        ],

        respostaCorreta: 1,

        explicacao:
            "O tema expressa a identidade e a missão dos Embaixadores do Rei como representantes de Cristo.",

        referencia: "2 Coríntios 5:20",
        fonte: "Material de formação dos ER"
    },
    // PERGUNTA 20 — ER

{
    id: 21,
    etapa: 1,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Em que cidade Jesus nasceu?",
    alternativas: [
        "Jerusalém",
        "Belém",
        "Nazaré",
        "Cafarnaum"
    ],
    respostaCorreta: 1,
    explicacao: "Jesus nasceu em Belém, na Judeia, conforme havia sido anunciado nas Escrituras.",
    referencia: "Mateus 2:1; Lucas 2:4-7",
    fonte: "Bíblia Sagrada"
},
{
    id: 22,
    etapa: 1,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual homem subiu em uma árvore para conseguir ver Jesus?",
    alternativas: [
        "Bartimeu",
        "Nicodemos",
        "Zaqueu",
        "Lázaro"
    ],
    respostaCorreta: 2,
    explicacao: "Zaqueu era de pequena estatura e subiu em um sicômoro para ver Jesus passar.",
    referencia: "Lucas 19:1-4",
    fonte: "Bíblia Sagrada"
},
{
    id: 23,
    etapa: 1,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Como ficou conhecida a oração que Jesus ensinou aos seus discípulos?",
    alternativas: [
        "Oração de Davi",
        "Oração de Salomão",
        "Oração de Elias",
        "Pai Nosso"
    ],
    respostaCorreta: 3,
    explicacao: "Jesus ensinou seus discípulos a orar, apresentando a oração conhecida como Pai Nosso.",
    referencia: "Mateus 6:9-13",
    fonte: "Bíblia Sagrada"
},
{
    id: 24,
    etapa: 1,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Com quais alimentos Jesus alimentou uma grande multidão?",
    alternativas: [
        "Cinco pães e dois peixes",
        "Sete pães e três peixes",
        "Dois pães e cinco peixes",
        "Dez pães e dez peixes"
    ],
    respostaCorreta: 0,
    explicacao: "Jesus multiplicou cinco pães e dois peixes, alimentando uma multidão de aproximadamente cinco mil homens.",
    referencia: "João 6:1-14",
    fonte: "Bíblia Sagrada"
},
{
    id: 25,
    etapa: 1,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual foi o primeiro milagre de Jesus registrado no Evangelho de João?",
    alternativas: [
        "Curar um cego",
        "Transformar água em vinho",
        "Ressuscitar Lázaro",
        "Acalmar uma tempestade"
    ],
    respostaCorreta: 1,
    explicacao: "Jesus realizou seu primeiro sinal em um casamento em Caná da Galileia, transformando água em vinho.",
    referencia: "João 2:1-11",
    fonte: "Bíblia Sagrada"
},
{
    id: 26,
    etapa: 1,
    categoria: "Embaixadores do Rei",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual passagem bíblica é utilizada como divisa dos Embaixadores do Rei?",
    alternativas: [
        "João 3:16",
        "Salmos 23:1",
        "2 Coríntios 5:20",
        "Filipenses 4:13"
    ],
    respostaCorreta: 2,
    explicacao: "A divisa dos Embaixadores do Rei está em 2 Coríntios 5:20, que apresenta os cristãos como embaixadores de Cristo.",
    referencia: "2 Coríntios 5:20",
    fonte: "Material de formação dos Embaixadores do Rei"
},
{
    id: 27,
    etapa: 1,
    categoria: "Embaixadores do Rei",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Na adaptação da Ordem Unida para os Embaixadores do Rei, qual instrumento é utilizado?",
    alternativas: [
        "Espada",
        "Fuzil",
        "Lança",
        "Bastão"
    ],
    respostaCorreta: 3,
    explicacao: "Na adaptação da Ordem Unida para os Embaixadores do Rei, utiliza-se o bastão, sem emprego de armas.",
    referencia: "Orientações de Ordem Unida dos Embaixadores do Rei",
    fonte: "Material de formação dos Embaixadores do Rei"
},
{
    id: 28,
    etapa: 1,
    categoria: "Embaixadores do Rei",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Como é chamado o grupo de Embaixadores do Rei organizado em uma igreja?",
    alternativas: [
        "Embaixada",
        "Companhia",
        "Guarnição",
        "Equipe"
    ],
    respostaCorreta: 0,
    explicacao: "O grupo de Embaixadores do Rei organizado em uma igreja recebe o nome de Embaixada.",
    referencia: "Organização dos Embaixadores do Rei",
    fonte: "Material de formação dos Embaixadores do Rei"
},
{
    id: 29,
    etapa: 1,
    categoria: "Embaixadores do Rei",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual é uma das principais responsabilidades do conselheiro de uma Embaixada?",
    alternativas: [
        "Organizar somente competições esportivas",
        "Orientar e ensinar os Embaixadores em sua formação",
        "Substituir os pais dos participantes",
        "Cuidar apenas dos uniformes"
    ],
    respostaCorreta: 1,
    explicacao: "O conselheiro orienta, ensina e acompanha os Embaixadores, ajudando-os em seu crescimento cristão e no aprendizado dos ideais da organização.",
    referencia: "Princípios de orientação dos Embaixadores do Rei",
    fonte: "Material de formação dos Embaixadores do Rei"
},
{
    id: 30,
    etapa: 1,
    categoria: "Missões",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Em qual país William Carey desenvolveu seu trabalho missionário?",
    alternativas: [
        "China",
        "Brasil",
        "Índia",
        "Japão"
    ],
    respostaCorreta: 2,
    explicacao: "William Carey foi um missionário batista inglês que dedicou grande parte de sua vida ao trabalho missionário na Índia.",
    referencia: "História do Movimento Moderno de Missões",
    fonte: "Biografia de William Carey"
},

{
    id: 31,
    etapa: 2,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual menino ouviu Deus chamá-lo enquanto estava no templo, sob os cuidados do sacerdote Eli?",
    alternativas: [
        "Davi",
        "Samuel",
        "Josias",
        "Salomão"
    ],
    respostaCorreta: 1,
    explicacao: "Samuel ainda era menino quando ouviu Deus chamá-lo. Seguindo a orientação de Eli, respondeu: 'Fala, Senhor, porque o teu servo ouve'.",
    referencia: "1 Samuel 3:1-10",
    fonte: "Bíblia Sagrada"
},
{
    id: 32,
    etapa: 2,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Na parábola do Bom Samaritano, quem demonstrou ser o verdadeiro próximo do homem ferido?",
    alternativas: [
        "O sacerdote",
        "O levita",
        "O samaritano que cuidou dele",
        "O viajante que passou primeiro"
    ],
    respostaCorreta: 2,
    explicacao: "O samaritano demonstrou amor ao próximo quando ajudou o homem ferido, cuidou de suas feridas e providenciou abrigo para ele.",
    referencia: "Lucas 10:25-37",
    fonte: "Bíblia Sagrada"
},
{
    id: 33,
    etapa: 2,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual destas virtudes faz parte do fruto do Espírito apresentado pelo apóstolo Paulo?",
    alternativas: [
        "Orgulho",
        "Inveja",
        "Violência",
        "Domínio próprio"
    ],
    respostaCorreta: 3,
    explicacao: "O domínio próprio faz parte do fruto do Espírito, juntamente com amor, alegria, paz, longanimidade, benignidade, bondade, fidelidade e mansidão.",
    referencia: "Gálatas 5:22-23",
    fonte: "Bíblia Sagrada"
},
{
    id: 34,
    etapa: 2,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "O que Paulo e Silas faziam na prisão quando ocorreu um grande terremoto?",
    alternativas: [
        "Oravam e cantavam louvores a Deus",
        "Discutiam com os guardas",
        "Dormiam profundamente",
        "Preparavam uma fuga"
    ],
    respostaCorreta: 0,
    explicacao: "Mesmo presos e feridos, Paulo e Silas oravam e cantavam louvores a Deus. Os outros presos os escutavam.",
    referencia: "Atos 16:22-26",
    fonte: "Bíblia Sagrada"
},
{
    id: 35,
    etapa: 2,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "A quem Jesus ensinou que era necessário nascer de novo?",
    alternativas: [
        "A Zaqueu",
        "A Nicodemos",
        "A Bartimeu",
        "A Tomé"
    ],
    respostaCorreta: 1,
    explicacao: "Nicodemos era um fariseu e uma autoridade entre os judeus. Jesus explicou a ele a necessidade do novo nascimento espiritual.",
    referencia: "João 3:1-7",
    fonte: "Bíblia Sagrada"
},
{
    id: 36,
    etapa: 2,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Quem interpretou os sonhos do faraó sobre sete anos de fartura e sete anos de fome no Egito?",
    alternativas: [
        "Moisés",
        "Arão",
        "José",
        "Daniel"
    ],
    respostaCorreta: 2,
    explicacao: "José, com a ajuda de Deus, interpretou os sonhos do faraó e orientou o Egito a armazenar alimentos durante os anos de fartura.",
    referencia: "Gênesis 41:14-36",
    fonte: "Bíblia Sagrada"
},
{
    id: 37,
    etapa: 2,
    categoria: "Embaixadores do Rei",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual alternativa apresenta corretamente os cinco ideais dos Embaixadores do Rei?",
    alternativas: [
        "Disciplina, coragem, força, obediência e liderança",
        "Estudo da Bíblia, oração, missões, mordomia e Serviço Real",
        "Esporte, música, recreação, competição e liderança",
        "Estudo, trabalho, esporte, disciplina e patriotismo"
    ],
    respostaCorreta: 1,
    explicacao: "Os cinco ideais dos Embaixadores do Rei são: Estudo da Bíblia, Oração, Missões, Mordomia e Serviço Real.",
    referencia: "Ideais dos Embaixadores do Rei",
    fonte: "Material de formação dos Embaixadores do Rei"
},
{
    id: 38,
    etapa: 2,
    categoria: "Embaixadores do Rei",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Em que data e local foi organizada a primeira Embaixada dos Embaixadores do Rei no Brasil?",
    alternativas: [
        "Em 1945, na Igreja Batista do Méier, no Rio de Janeiro",
        "Em 1950, na Primeira Igreja Batista de São Paulo",
        "Em 1948, na Igreja Batista da Tijuca, no Rio de Janeiro",
        "Em 1960, na Igreja Batista de Salvador"
    ],
    respostaCorreta: 2,
    explicacao: "A primeira Embaixada brasileira foi organizada em 25 de agosto de 1948, na Igreja Batista da Tijuca, no Rio de Janeiro. Recebeu o nome de Embaixada William Buck Bagby.",
    referencia: "História dos Embaixadores do Rei no Brasil",
    fonte: "Registros históricos dos Embaixadores do Rei"
},
{
    id: 39,
    etapa: 2,
    categoria: "Embaixadores do Rei",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Em que ano a organização dos Embaixadores do Rei foi estabelecida nos Estados Unidos?",
    alternativas: [
        "1883",
        "1895",
        "1908",
        "1925"
    ],
    respostaCorreta: 2,
    explicacao: "A organização dos Embaixadores do Rei foi estabelecida em 1908. A iniciativa teve antecedentes em 1883, quando meninos de Owensboro, Kentucky, começaram a estudar missões e a orar por elas.",
    referencia: "História dos Embaixadores do Rei nos Estados Unidos",
    fonte: "Registros históricos dos Embaixadores do Rei"
},
{
    id: 40,
    etapa: 2,
    categoria: "Missões",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual foi o principal campo missionário de Lottie Moon?",
    alternativas: [
        "Índia",
        "China",
        "Brasil",
        "Japão"
    ],
    respostaCorreta: 1,
    explicacao: "Lottie Moon foi uma missionária batista que dedicou sua vida ao trabalho evangelístico e educacional na China.",
    referencia: "História das missões batistas",
    fonte: "Biografia de Lottie Moon"
},

{
    id: 41,
    etapa: 3,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Quem foi escolhido por Deus para suceder Moisés na liderança do povo de Israel?",
    alternativas: [
        "Calebe",
        "Josué",
        "Arão",
        "Gideão"
    ],
    respostaCorreta: 1,
    explicacao: "Josué foi escolhido para suceder Moisés e conduzir o povo de Israel na entrada e conquista da Terra Prometida.",
    referencia: "Deuteronômio 31:7-8; Josué 1:1-9",
    fonte: "Bíblia Sagrada"
},
{
    id: 42,
    etapa: 3,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual era a principal característica dos cristãos de Bereia elogiada no livro de Atos?",
    alternativas: [
        "Eram conhecidos por sua riqueza",
        "Eram grandes comerciantes",
        "Examinavam diariamente as Escrituras para conferir o que ouviam",
        "Construíam templos em várias cidades"
    ],
    respostaCorreta: 2,
    explicacao: "Os bereanos receberam a mensagem com interesse e examinavam diariamente as Escrituras para verificar se os ensinamentos eram verdadeiros.",
    referencia: "Atos 17:10-12",
    fonte: "Bíblia Sagrada"
},
{
    id: 43,
    etapa: 3,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Quem é tradicionalmente reconhecido como o primeiro mártir cristão?",
    alternativas: [
        "Estêvão",
        "Tiago",
        "Barnabé",
        "Filipe"
    ],
    respostaCorreta: 0,
    explicacao: "Estêvão foi um dos primeiros diáconos da igreja e morreu apedrejado por causa de seu testemunho sobre Jesus Cristo.",
    referencia: "Atos 6:5-6; 7:54-60",
    fonte: "Bíblia Sagrada"
},
{
    id: 44,
    etapa: 3,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual mulher exerceu a função de juíza e profetisa em Israel?",
    alternativas: [
        "Rute",
        "Miriã",
        "Abigail",
        "Débora"
    ],
    respostaCorreta: 3,
    explicacao: "Débora era profetisa e julgava Israel. Ela também orientou Baraque na batalha contra os cananeus.",
    referencia: "Juízes 4:1-10",
    fonte: "Bíblia Sagrada"
},
{
    id: 45,
    etapa: 3,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Na parábola das dez virgens, quantas eram prudentes?",
    alternativas: [
        "Duas",
        "Cinco",
        "Sete",
        "Dez"
    ],
    respostaCorreta: 1,
    explicacao: "Na parábola ensinada por Jesus, cinco virgens eram prudentes e levaram azeite suficiente para suas lâmpadas.",
    referencia: "Mateus 25:1-13",
    fonte: "Bíblia Sagrada"
},
{
    id: 46,
    etapa: 3,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual foi a decisão central do Concílio de Jerusalém registrada em Atos 15?",
    alternativas: [
        "Todos os cristãos deveriam abandonar suas cidades",
        "Os gentios convertidos não precisavam ser circuncidados nem obrigados a guardar toda a Lei de Moisés para serem recebidos na comunidade cristã",
        "Somente os judeus poderiam anunciar o Evangelho",
        "Os apóstolos deveriam deixar de pregar aos gentios"
    ],
    respostaCorreta: 1,
    explicacao: "O Concílio de Jerusalém reconheceu que os gentios também eram alcançados pela graça de Jesus Cristo, sem precisar se tornar judeus por meio da circuncisão.",
    referencia: "Atos 15:1-29",
    fonte: "Bíblia Sagrada"
},
{
    id: 47,
    etapa: 3,
    categoria: "Embaixadores do Rei",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Quem foi o primeiro Secretário-Geral dos Embaixadores do Rei no Brasil, eleito em 1979?",
    alternativas: [
        "William Alvin Hatton",
        "William Buck Bagby",
        "Dirceu Amaro",
        "Lottie Moon"
    ],
    respostaCorreta: 2,
    explicacao: "Dirceu Amaro foi eleito o primeiro Secretário-Geral dos Embaixadores do Rei no Brasil em 1979.",
    referencia: "História dos Embaixadores do Rei no Brasil",
    fonte: "Registros históricos dos Embaixadores do Rei"
},
{
    id: 48,
    etapa: 3,
    categoria: "Embaixadores do Rei",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual organização passou a ser responsável pelo trabalho dos Embaixadores do Rei no Brasil em janeiro de 1978?",
    alternativas: [
        "União Masculina Missionária Batista do Brasil",
        "União Feminina Missionária Batista do Brasil",
        "Junta de Missões Mundiais",
        "Junta de Missões Nacionais"
    ],
    respostaCorreta: 0,
    explicacao: "Em janeiro de 1978, o trabalho dos Embaixadores do Rei foi transferido para a União Masculina Missionária Batista do Brasil.",
    referencia: "História dos Embaixadores do Rei no Brasil",
    fonte: "Registros históricos dos Embaixadores do Rei"
},
{
    id: 49,
    etapa: 3,
    categoria: "Embaixadores do Rei",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "A quem é creditado o trabalho de implantação dos Embaixadores do Rei no Brasil?",
    alternativas: [
        "Dirceu Amaro",
        "William Alvin Hatton",
        "William Carey",
        "Adoniram Judson"
    ],
    respostaCorreta: 1,
    explicacao: "O trabalho de implantação dos Embaixadores do Rei no Brasil é creditado a William Alvin Hatton.",
    referencia: "História dos Embaixadores do Rei no Brasil",
    fonte: "Registros históricos dos Embaixadores do Rei"
},
{
    id: 50,
    etapa: 3,
    categoria: "Missões",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Em qual região do mundo Adoniram Judson desenvolveu seu trabalho missionário?",
    alternativas: [
        "África do Sul",
        "Índia",
        "Birmânia, atual Mianmar",
        "China"
    ],
    respostaCorreta: 2,
    explicacao: "Adoniram Judson foi um missionário batista norte-americano que dedicou grande parte de sua vida à evangelização e à tradução da Bíblia na Birmânia, atual Mianmar.",
    referencia: "História do movimento missionário batista",
    fonte: "Biografia de Adoniram Judson"
},

{
    id: 51,
    etapa: 4,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual profeta orientou Naamã a mergulhar sete vezes no rio Jordão para ser curado de sua lepra?",
    alternativas: [
        "Elias",
        "Eliseu",
        "Isaías",
        "Jeremias"
    ],
    respostaCorreta: 1,
    explicacao: "O profeta Eliseu orientou Naamã a mergulhar sete vezes no Jordão. Depois de obedecer, Naamã foi curado.",
    referencia: "2 Reis 5:1-14",
    fonte: "Bíblia Sagrada"
},
{
    id: 52,
    etapa: 4,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual foi o motivo principal da separação entre Paulo e Barnabé durante uma viagem missionária?",
    alternativas: [
        "Discordaram sobre a inclusão de João Marcos na viagem",
        "Discordaram sobre a cidade onde Jesus nasceu",
        "Barnabé decidiu abandonar a missão",
        "Paulo deixou de acreditar no Evangelho"
    ],
    respostaCorreta: 0,
    explicacao: "Barnabé queria levar João Marcos novamente, mas Paulo não considerava adequado levá-lo, pois ele havia se afastado da equipe anteriormente. A discordância levou à separação dos dois missionários.",
    referencia: "Atos 15:36-40",
    fonte: "Bíblia Sagrada"
},
{
    id: 53,
    etapa: 4,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual mulher hospedou Paulo e seus companheiros em sua casa depois de ser batizada em Filipos?",
    alternativas: [
        "Priscila",
        "Febe",
        "Lídia",
        "Marta"
    ],
    respostaCorreta: 2,
    explicacao: "Lídia, comerciante de púrpura da cidade de Tiatira, recebeu a mensagem de Paulo, foi batizada com sua família e ofereceu hospedagem aos missionários.",
    referencia: "Atos 16:13-15",
    fonte: "Bíblia Sagrada"
},
{
    id: 54,
    etapa: 4,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Em qual ilha Paulo e os demais sobreviventes chegaram depois do naufrágio durante sua viagem a Roma?",
    alternativas: [
        "Creta",
        "Chipre",
        "Patmos",
        "Malta"
    ],
    respostaCorreta: 3,
    explicacao: "Depois do naufrágio, Paulo e os demais passageiros chegaram à ilha de Malta, onde foram recebidos pelos habitantes.",
    referencia: "Atos 27:39-44; 28:1",
    fonte: "Bíblia Sagrada"
},
{
    id: 55,
    etapa: 4,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual era a profissão de Mateus antes de se tornar discípulo de Jesus?",
    alternativas: [
        "Pescador",
        "Cobrador de impostos",
        "Carpinteiro",
        "Pastor de ovelhas"
    ],
    respostaCorreta: 1,
    explicacao: "Mateus trabalhava como cobrador de impostos quando Jesus o chamou para segui-lo.",
    referencia: "Mateus 9:9",
    fonte: "Bíblia Sagrada"
},
{
    id: 56,
    etapa: 4,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual apóstolo afirmou que não acreditaria na ressurreição de Jesus sem ver as marcas dos cravos e tocar em suas feridas?",
    alternativas: [
        "Pedro",
        "André",
        "Tomé",
        "Filipe"
    ],
    respostaCorreta: 2,
    explicacao: "Tomé não estava presente quando Jesus apareceu aos discípulos pela primeira vez. Posteriormente, Jesus apareceu novamente e lhe mostrou as marcas de suas feridas.",
    referencia: "João 20:24-29",
    fonte: "Bíblia Sagrada"
},
{
    id: 57,
    etapa: 4,
    categoria: "Embaixadores do Rei",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual organização batista promoveu inicialmente o trabalho dos Embaixadores do Rei no Brasil?",
    alternativas: [
        "União Masculina Missionária Batista do Brasil",
        "União Feminina Missionária Batista do Brasil",
        "Junta de Missões Mundiais",
        "Junta de Educação Religiosa e Publicações"
    ],
    respostaCorreta: 1,
    explicacao: "O trabalho dos Embaixadores do Rei no Brasil foi inicialmente promovido pela União Feminina Missionária Batista do Brasil.",
    referencia: "História dos Embaixadores do Rei no Brasil",
    fonte: "Registros históricos dos Embaixadores do Rei"
},
{
    id: 58,
    etapa: 4,
    categoria: "Embaixadores do Rei",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Em que mês e ano a JUERP passou a assumir o trabalho dos Embaixadores do Rei no Brasil?",
    alternativas: [
        "Janeiro de 1948",
        "Fevereiro de 1950",
        "Agosto de 1955",
        "Janeiro de 1978"
    ],
    respostaCorreta: 1,
    explicacao: "Em fevereiro de 1950, a Junta de Educação Religiosa e Publicações (JUERP) passou a assumir o trabalho dos Embaixadores do Rei.",
    referencia: "História dos Embaixadores do Rei no Brasil",
    fonte: "Registros históricos dos Embaixadores do Rei"
},
{
    id: 59,
    etapa: 4,
    categoria: "Embaixadores do Rei",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual foi uma das iniciativas dos meninos de Owensboro, em 1883, que antecederam a organização dos Embaixadores do Rei?",
    alternativas: [
        "Construíram uma igreja na Inglaterra",
        "Organizaram uma escola de formação militar",
        "Ajudaram a sustentar um estudante na escola de Lottie Moon, em Tengchow, na China",
        "Fundaram uma organização missionária no Brasil"
    ],
    respostaCorreta: 2,
    explicacao: "Em 1883, meninos de Owensboro, Kentucky, estudavam missões e oravam por elas. Entre suas iniciativas, ajudaram a sustentar um estudante na escola de Lottie Moon, em Tengchow, na China.",
    referencia: "História dos Embaixadores do Rei nos Estados Unidos",
    fonte: "Registros históricos dos Embaixadores do Rei"
},
{
    id: 60,
    etapa: 4,
    categoria: "Missões",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual missionário ficou conhecido por seu trabalho de evangelização no interior da China e pela fundação da Missão para o Interior da China?",
    alternativas: [
        "William Carey",
        "Adoniram Judson",
        "Hudson Taylor",
        "David Livingstone"
    ],
    respostaCorreta: 2,
    explicacao: "Hudson Taylor foi um missionário britânico que dedicou sua vida à evangelização da China e fundou a Missão para o Interior da China, em 1865.",
    referencia: "História do movimento missionário moderno",
    fonte: "Biografia de Hudson Taylor"
},

{
    id: 61,
    etapa: 5,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Durante o reinado de qual rei de Judá foi encontrado o Livro da Lei no templo, durante uma reforma?",
    alternativas: [
        "Ezequias",
        "Josias",
        "Manassés",
        "Roboão"
    ],
    respostaCorreta: 1,
    explicacao: "Durante as obras de reparação do templo, o sacerdote Hilquias encontrou o Livro da Lei. Quando o rei Josias ouviu sua leitura, promoveu uma grande reforma religiosa em Judá.",
    referencia: "2 Reis 22:1-13; 23:1-3",
    fonte: "Bíblia Sagrada"
},
{
    id: 62,
    etapa: 5,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual profeta comprou um campo em Anatote enquanto Jerusalém estava ameaçada pelo exército babilônico?",
    alternativas: [
        "Isaías",
        "Ezequiel",
        "Jeremias",
        "Daniel"
    ],
    respostaCorreta: 2,
    explicacao: "Jeremias comprou um campo em Anatote por orientação de Deus. A compra simbolizava a esperança de que, no futuro, casas, campos e vinhas voltariam a ser adquiridos naquela terra.",
    referencia: "Jeremias 32:6-15",
    fonte: "Bíblia Sagrada"
},
{
    id: 63,
    etapa: 5,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "De qual igreja Paulo e Barnabé foram enviados para iniciar a primeira viagem missionária registrada em Atos?",
    alternativas: [
        "Igreja de Jerusalém",
        "Igreja de Antioquia",
        "Igreja de Corinto",
        "Igreja de Éfeso"
    ],
    respostaCorreta: 1,
    explicacao: "A igreja de Antioquia, orientada pelo Espírito Santo, separou Barnabé e Saulo para a obra missionária.",
    referencia: "Atos 13:1-4",
    fonte: "Bíblia Sagrada"
},
{
    id: 64,
    etapa: 5,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Quem explicou com maior precisão o caminho de Deus ao pregador Apolo, que conhecia apenas o batismo de João?",
    alternativas: [
        "Pedro e João",
        "Paulo e Timóteo",
        "Priscila e Áquila",
        "Barnabé e Silas"
    ],
    respostaCorreta: 2,
    explicacao: "Priscila e Áquila ouviram Apolo ensinar na sinagoga e o convidaram para explicar com maior precisão o caminho de Deus.",
    referencia: "Atos 18:24-26",
    fonte: "Bíblia Sagrada"
},
{
    id: 65,
    etapa: 5,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual era a profissão exercida pelo apóstolo Paulo para obter seu sustento?",
    alternativas: [
        "Pescador",
        "Fabricante de tendas",
        "Cobrador de impostos",
        "Agricultor"
    ],
    respostaCorreta: 1,
    explicacao: "Paulo exercia o ofício de fabricante de tendas. Em Corinto, trabalhou com Áquila e Priscila, que também tinham essa profissão.",
    referencia: "Atos 18:1-3",
    fonte: "Bíblia Sagrada"
},
{
    id: 66,
    etapa: 5,
    categoria: "Conhecimentos Bíblicos",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Segundo a carta aos Efésios, qual é a finalidade da armadura de Deus?",
    alternativas: [
        "Conquistar poder político",
        "Demonstrar superioridade sobre outras pessoas",
        "Resistir às ciladas do diabo e permanecer firme na fé",
        "Garantir riqueza e prosperidade material"
    ],
    respostaCorreta: 2,
    explicacao: "Paulo ensina que o cristão deve revestir-se de toda a armadura de Deus para permanecer firme diante das ciladas do diabo.",
    referencia: "Efésios 6:10-18",
    fonte: "Bíblia Sagrada"
},
{
    id: 67,
    etapa: 5,
    categoria: "Embaixadores do Rei",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual nome recebeu a primeira Embaixada dos Embaixadores do Rei organizada no Brasil, em 1948?",
    alternativas: [
        "Embaixada William Carey",
        "Embaixada William Buck Bagby",
        "Embaixada William Alvin Hatton",
        "Embaixada Adoniram Judson"
    ],
    respostaCorreta: 1,
    explicacao: "A primeira Embaixada brasileira foi organizada em 25 de agosto de 1948, na Igreja Batista da Tijuca, no Rio de Janeiro, recebendo o nome de Embaixada William Buck Bagby.",
    referencia: "História dos Embaixadores do Rei no Brasil",
    fonte: "Registros históricos dos Embaixadores do Rei"
},
{
    id: 68,
    etapa: 5,
    categoria: "Embaixadores do Rei",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual das alternativas representa melhor o ideal de Mordomia dos Embaixadores do Rei?",
    alternativas: [
        "Utilizar os recursos pessoais somente para benefício próprio",
        "Reconhecer que tudo pertence a Deus e administrar com responsabilidade o que Ele nos confia",
        "Acumular bens materiais como principal objetivo da vida",
        "Evitar compartilhar seus talentos com outras pessoas"
    ],
    respostaCorreta: 1,
    explicacao: "Mordomia significa reconhecer Deus como Senhor de tudo e administrar com responsabilidade os recursos, o tempo, os talentos e as oportunidades que recebemos.",
    referencia: "Princípios bíblicos da Mordomia cristã",
    fonte: "Ideais dos Embaixadores do Rei"
},
{
    id: 69,
    etapa: 5,
    categoria: "Embaixadores do Rei",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Por que o Embaixador do Rei deve compreender que representa Cristo em sua vida diária?",
    alternativas: [
        "Porque deve ser reconhecido como superior aos demais",
        "Porque sua responsabilidade termina nas reuniões da Embaixada",
        "Porque deve testemunhar de Cristo por meio de suas palavras e atitudes",
        "Porque precisa conhecer apenas as regras da organização"
    ],
    respostaCorreta: 2,
    explicacao: "Ser embaixador de Cristo envolve representar o Senhor em todos os lugares, demonstrando sua fé por meio das palavras, atitudes e testemunho cristão.",
    referencia: "2 Coríntios 5:20; Mateus 5:16",
    fonte: "Princípios de formação dos Embaixadores do Rei"
},
{
    id: 70,
    etapa: 5,
    categoria: "Missões",
    idadeMinima: 6,
    idadeMaxima: 17,
    pergunta: "Qual foi uma das importantes contribuições de Adoniram Judson para o trabalho missionário na Birmânia?",
    alternativas: [
        "Fundou a primeira igreja batista no Brasil",
        "Traduziu a Bíblia para a língua birmanesa",
        "Organizou a primeira embaixada dos Estados Unidos",
        "Fundou a Missão para o Interior da China"
    ],
    respostaCorreta: 1,
    explicacao: "Adoniram Judson dedicou grande parte de sua vida à tradução da Bíblia para a língua birmanesa, contribuindo profundamente para a expansão do cristianismo na região.",
    referencia: "História do movimento missionário batista",
    fonte: "Biografia de Adoniram Judson"
}
];

// ======================================================
// FUNÇÃO: BUSCAR PERGUNTAS POR ETAPA
// ======================================================

function buscarPerguntasPorEtapa(numeroEtapa) {

    return BANCO_PERGUNTAS.filter(
        pergunta => pergunta.etapa === numeroEtapa
    );

}


// ======================================================
// FUNÇÃO: BUSCAR PERGUNTAS POR CATEGORIA
// ======================================================

function buscarPerguntasPorCategoria(categoria) {

    return BANCO_PERGUNTAS.filter(
        pergunta =>
            pergunta.categoria.toLowerCase() ===
            categoria.toLowerCase()
    );

}


// ======================================================
// FUNÇÃO: BUSCAR PERGUNTAS POR IDADE
// ======================================================

function buscarPerguntasPorIdade(idade) {

    return BANCO_PERGUNTAS.filter(
        pergunta =>
            idade >= pergunta.idadeMinima &&
            idade <= pergunta.idadeMaxima
    );

}


// ======================================================
// VERIFICAÇÃO DO BANCO DE PERGUNTAS
// ======================================================

function verificarBancoPerguntas() {

    console.log("==================================");
    console.log("SHOW DOS ER — BANCO DE PERGUNTAS");
    console.log("==================================");

    console.log(
        "Total de perguntas:",
        BANCO_PERGUNTAS.length
    );

    console.log(
        "Perguntas bíblicas:",
        buscarPerguntasPorCategoria("Conhecimentos Bíblicos").length
    );

    console.log(
        "Perguntas dos ER:",
        buscarPerguntasPorCategoria("Embaixadores do Rei").length
    );

    console.log("----------------------------------");

    ETAPAS_CONHECIMENTO.forEach(etapa => {

        console.log(
            `Etapa ${etapa.numero} — ${etapa.nome}:`,
            buscarPerguntasPorEtapa(etapa.numero).length,
            "perguntas"
        );

    });

    console.log("==================================");

}


// ======================================================
// DISPONIBILIZAR DADOS PARA O JOGO
// ======================================================

window.BANCO_PERGUNTAS = BANCO_PERGUNTAS;

window.ETAPAS_CONHECIMENTO = ETAPAS_CONHECIMENTO;

window.buscarPerguntasPorEtapa = buscarPerguntasPorEtapa;

window.buscarPerguntasPorCategoria = buscarPerguntasPorCategoria;

window.buscarPerguntasPorIdade = buscarPerguntasPorIdade;


// ======================================================
// INICIALIZAÇÃO DO BANCO
// ======================================================

verificarBancoPerguntas();