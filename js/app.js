/* =========================================
   APLICAÇÃO PRINCIPAL
   Escola Virtual ER — Arte de Acampar
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Identificação da aplicação
    const aplicacao = {
        nome: "Escola Virtual ER",
        projeto: "Arte de Acampar",
        versao: "1.0.0"
    };


    // Verifica a estrutura principal
    const estrutura = document.querySelector("main");
    const cabecalho = document.querySelector(".cabecalho");
    const rodape = document.querySelector(".rodape");


    // Verifica se os elementos essenciais existem
    if (!estrutura || !cabecalho || !rodape) {

        console.error(
            "Não foi possível carregar a estrutura principal da aplicação."
        );

        return;
    }


    // Registra informações da aplicação
    console.info(
        `${aplicacao.nome} — ${aplicacao.projeto}`
    );

    console.info(
        `Versão: ${aplicacao.versao}`
    );

    console.info(
        "Aplicação carregada com sucesso."
    );

});