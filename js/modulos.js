/* =========================================
   MÓDULOS DE APRENDIZAGEM
   Escola Virtual ER — Arte de Acampar
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Localiza todos os cartões
    const cartoes = document.querySelectorAll(".cartao-modulo");

    // Percorre os cartões encontrados
    cartoes.forEach((cartao, indice) => {

        // Identifica o título do módulo
        const titulo = cartao.querySelector("h3");

        // Identifica a imagem
        const imagem = cartao.querySelector("img");

        // Identifica o link de acesso
        const link = cartao.querySelector(".modulo-conteudo a");


        // Otimização das imagens
        if (imagem) {

            imagem.loading = "lazy";
            imagem.decoding = "async";

        }


        // Acessibilidade dos links
        if (link && titulo) {

            const numero = String(indice + 1).padStart(2, "0");

            link.setAttribute(
                "aria-label",
                `Acessar módulo ${numero}: ${titulo.textContent.trim()}`
            );

        }

    });

    console.log(
        `Escola Virtual ER: ${cartoes.length} módulos identificados.`
    );

});