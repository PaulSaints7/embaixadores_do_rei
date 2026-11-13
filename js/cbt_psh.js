
"use strict";

// ======================================================
// CENTRAL BATISTA DE TREINAMENTO - PSH
// CONTROLE DA PÁGINA PRINCIPAL
// Arquivo: principal.js
// ======================================================


// ======================================================
// 1. ATUALIZAÇÃO DO ANO
// ======================================================

function atualizarAno() {

    const elementoAno = document.getElementById("ano-atual");

    if (elementoAno) {
        elementoAno.textContent = new Date().getFullYear();
    }

}


// ======================================================
// 2. NAVEGAÇÃO ENTRE OS AMBIENTES
// ======================================================

function abrirAmbiente(ambiente) {

    switch (ambiente) {

        // ----------------------------------------------
        // NOVOS CONVERTIDOS
        // ----------------------------------------------

        case "convertidos":

            window.location.href = "ambientes/novos_convertidos.html";

            break;


        // ----------------------------------------------
        // FORMAÇÃO DOUTRINÁRIA BATISTA
        // ----------------------------------------------

        case "doutrinario":

            alert(
                "O ambiente de Formação Doutrinária Batista está em preparação. Em breve estará disponível!"
            );

            break;


        // ----------------------------------------------
        // AMBIENTE NÃO ENCONTRADO
        // ----------------------------------------------

        default:

            alert("Ambiente não encontrado.");

            break;

    }

}


// ======================================================
// 3. INFORMAÇÕES DA CENTRAL
// ======================================================

const CBT_PSH = {

    nome: "CENTRAL BATISTA DE TREINAMENTO",

    sigla: "PSH",

    versao: "1.0",

    ambientes: {

        convertidos: "Novos Convertidos",

        doutrinario: "Formação Doutrinária Batista"

    }

};


// ======================================================
// 4. INICIALIZAÇÃO
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    atualizarAno();

    console.log(
        "CENTRAL BATISTA DE TREINAMENTO - PSH inicializada."
    );

});
