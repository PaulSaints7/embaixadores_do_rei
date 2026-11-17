"use strict";

// ======================================================
// HOMENS SEGUNDO O CORAÇÃO DE DEUS
// SISTEMA PRINCIPAL DE INTERAÇÃO
// ======================================================


// ======================================================
// 1. INICIALIZAÇÃO DO SISTEMA
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Plataforma Homens Segundo o Coração de Deus iniciada.");

    iniciarMenu();
    iniciarRolagemSuave();
    iniciarAnoAtual();
    iniciarAnimacoes();
    iniciarAcessibilidade();

});


// ======================================================
// 2. MENU RESPONSIVO
// ======================================================

function iniciarMenu() {

    const botaoMenu = document.getElementById("menu-toggle");
    const menuPrincipal = document.getElementById("menu-principal");

    if (!botaoMenu || !menuPrincipal) {
        return;
    }

    botaoMenu.addEventListener("click", function () {

        const menuAberto = menuPrincipal.classList.toggle("ativo");

        botaoMenu.setAttribute("aria-expanded", menuAberto);

        botaoMenu.setAttribute(
            "aria-label",
            menuAberto ? "Fechar menu" : "Abrir menu"
        );

    });


    // Fecha o menu ao selecionar uma opção

    const linksMenu = menuPrincipal.querySelectorAll("a");

    linksMenu.forEach(function (link) {

        link.addEventListener("click", function () {

            menuPrincipal.classList.remove("ativo");

            botaoMenu.classList.remove("ativo");

            botaoMenu.setAttribute("aria-expanded", "false");

            botaoMenu.setAttribute("aria-label", "Abrir menu");

        });

    });


    // Fecha o menu ao clicar fora dele

    document.addEventListener("click", function (evento) {

        const clicouDentro =
            menuPrincipal.contains(evento.target) ||
            botaoMenu.contains(evento.target);

        if (!clicouDentro) {

            menuPrincipal.classList.remove("ativo");

            botaoMenu.classList.remove("ativo");

            botaoMenu.setAttribute("aria-expanded", "false");

        }

    });

}


// ======================================================
// 3. ROLAGEM SUAVE DA PÁGINA
// ======================================================

function iniciarRolagemSuave() {

    const linksInternos = document.querySelectorAll('a[href^="#"]');

    linksInternos.forEach(function (link) {

        link.addEventListener("click", function (evento) {

            const destino = link.getAttribute("href");

            if (!destino || destino === "#") {
                return;
            }

            const elemento = document.querySelector(destino);

            if (elemento) {

                evento.preventDefault();

                elemento.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

}


// ======================================================
// 4. ATUALIZAÇÃO AUTOMÁTICA DO ANO
// ======================================================

function iniciarAnoAtual() {

    const elementoAno = document.getElementById("ano-atual");

    if (elementoAno) {

        elementoAno.textContent = new Date().getFullYear();

    }

}


// ======================================================
// 5. ANIMAÇÕES DE ENTRADA DOS ELEMENTOS
// ======================================================

function iniciarAnimacoes() {

    const elementos = document.querySelectorAll(
        ".card-formacao, .card-biblioteca, .secao-introducao"
    );

    if (!("IntersectionObserver" in window)) {
        return;
    }

    const observador = new IntersectionObserver(

        function (entradas, observador) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visivel");

                    observador.unobserve(entrada.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    elementos.forEach(function (elemento) {

        observador.observe(elemento);

    });

}


// ======================================================
// 6. ACESSIBILIDADE
// ======================================================

function iniciarAcessibilidade() {

    const links = document.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("focus", function () {

            link.classList.add("elemento-focado");

        });

        link.addEventListener("blur", function () {

            link.classList.remove("elemento-focado");

        });

    });

}


// ======================================================
// 7. MENSAGEM DE INICIALIZAÇÃO
// ======================================================

console.log(
    "%cHOMENS SEGUNDO O CORAÇÃO DE DEUS",
    "color: #B08A48; font-size: 18px; font-weight: bold;"
);

console.log(
    "Formando homens, fortalecendo famílias e servindo à Igreja de Cristo."
);