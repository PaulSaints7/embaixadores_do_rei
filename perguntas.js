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