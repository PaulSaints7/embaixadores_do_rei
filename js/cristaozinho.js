"use strict";

// ==========================================================
// CRISTÃOZINHOS DO CÉU
// SISTEMA PRINCIPAL DE INTERAÇÃO
// ==========================================================


// ==========================================================
// 1. INICIALIZAÇÃO
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

    atualizarAno();
    configurarNavegacao();
    configurarBotoesModulos();

});


// ==========================================================
// 2. ATUALIZAÇÃO AUTOMÁTICA DO ANO
// ==========================================================

function atualizarAno() {

    const elementoAno = document.querySelector(".copyright");

    if (!elementoAno) {
        return;
    }

    const anoAtual = new Date().getFullYear();

    elementoAno.innerHTML =
        `© ${anoAtual} - Cristãozinhos do Céu. Todos os direitos reservados.`;

}


// ==========================================================
// 3. NAVEGAÇÃO SUAVE
// ==========================================================

function configurarNavegacao() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (evento) {

            const destino = this.getAttribute("href");

            if (!destino || destino === "#") {
                return;
            }

            const secao = document.querySelector(destino);

            if (!secao) {
                return;
            }

            evento.preventDefault();

            secao.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

}


// ==========================================================
// 4. BOTÕES DOS MÓDULOS
// ==========================================================

function configurarBotoesModulos() {

    const botoes = document.querySelectorAll(".botao-card");

    botoes.forEach(botao => {

        botao.addEventListener("click", function (evento) {

            const destino = this.getAttribute("href");

            // Enquanto os módulos não possuem páginas próprias,
            // evitamos que o botão leve a um destino genérico.

            if (destino === "#materiais") {

                evento.preventDefault();

                const materiais = document.querySelector("#materiais");

                if (materiais) {

                    materiais.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });

}


// ==========================================================
// 5. MENSAGEM DE INICIALIZAÇÃO
// ==========================================================

console.log(
    "Cristãozinhos do Céu: biblioteca carregada com sucesso!"
);
