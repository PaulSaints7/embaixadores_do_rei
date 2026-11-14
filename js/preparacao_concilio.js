"use strict";

// ======================================================
// CENTRAL BATISTA DE TREINAMENTO - PSH
// PREPARAÇÃO PARA O CONCÍLIO
// Arquivo: preparacao_concilio.js
// ======================================================


// ======================================================
// 1. CADASTRO DAS ÁREAS DE FORMAÇÃO
// ======================================================

const AREAS_CONCILIO = [

    {
        id: "bibliologia",
        numero: "01",
        nome: "Bibliologia",
        descricao: "Estudo das Escrituras Sagradas.",
        arquivo: "modulo_concilio.html?area=bibliologia",
        disponivel: true
    },

    {
        id: "teologia",
        numero: "02",
        nome: "Teologia",
        descricao: "Estudo de Deus, seus atributos e sua natureza.",
        arquivo: "modulo_concilio.html?area=teologia",
        disponivel: true
    },

    {
        id: "cristologia",
        numero: "03",
        nome: "Cristologia",
        descricao: "Estudo da pessoa e da obra de Jesus Cristo.",
        arquivo: "modulo_concilio.html?area=cristologia",
        disponivel: true
    },

    {
        id: "pneumatologia",
        numero: "04",
        nome: "Pneumatologia",
        descricao: "Estudo da pessoa e da obra do Espírito Santo.",
        arquivo: "modulo_concilio.html?area=pneumatologia",
        disponivel: true
    },

    {
        id: "antropologia",
        numero: "05",
        nome: "Antropologia e Hamartiologia",
        descricao: "Estudo do ser humano e da realidade do pecado.",
        arquivo: "modulo_concilio.html?area=antropologia",
        disponivel: true
    },

    {
        id: "soteriologia",
        numero: "06",
        nome: "Soteriologia e Escatologia",
        descricao: "Estudo da salvação e das últimas coisas.",
        arquivo: "modulo_concilio.html?area=soteriologia",
        disponivel: true
    },

    {
        id: "eclesiologia",
        numero: "07",
        nome: "Eclesiologia",
        descricao: "Estudo da natureza, missão e organização da Igreja.",
        arquivo: "modulo_concilio.html?area=eclesiologia",
        disponivel: true
    },

    {
        id: "historia_batista",
        numero: "08",
        nome: "História e Princípios Batistas",
        descricao: "Estudo da história, identidade e princípios batistas.",
        arquivo: "modulo_concilio.html?area=historia_batista",
        disponivel: true
    }

];


// ======================================================
// 2. ATUALIZAÇÃO DOS CARTÕES DAS ÁREAS
// ======================================================

function atualizarDisponibilidadeAreas() {

    const cartoes = document.querySelectorAll(".area-card");

    AREAS_CONCILIO.forEach((area, indice) => {

        const cartao = cartoes[indice];

        if (!cartao) {
            return;
        }

        const status = cartao.querySelector(".area-status");

        if (!status) {
            return;
        }

        // Remove botão anterior, caso exista
        const botaoAnterior = cartao.querySelector(".botao-area");

        if (botaoAnterior) {
            botaoAnterior.remove();
        }

        if (area.disponivel) {

            status.textContent = "CONTEÚDO DISPONÍVEL";

            const botao = document.createElement("a");

            botao.href = area.arquivo;
            botao.className = "botao-area";
            botao.textContent = "ACESSAR ÁREA";

            cartao.appendChild(botao);

        } else {

            status.textContent = "CONTEÚDO EM PREPARAÇÃO";

        }

    });

}


// ======================================================
// 3. INICIALIZAÇÃO DO AMBIENTE
// ======================================================

function iniciarPreparacaoConcilio() {

    atualizarDisponibilidadeAreas();

    console.log(
        "Preparação para o Concílio inicializada."
    );

    console.log(
        "Áreas cadastradas:",
        AREAS_CONCILIO.length
    );

}


// ======================================================
// 4. EXECUÇÃO
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    iniciarPreparacaoConcilio
);