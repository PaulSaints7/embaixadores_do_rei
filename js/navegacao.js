/* =========================================
   NAVEGAÇÃO PRINCIPAL
   Escola Virtual ER — Arte de Acampar
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const botaoMenu = document.querySelector(".menu-toggle");
    const menuPrincipal = document.querySelector("#menu-principal");
    const linksMenu = document.querySelectorAll("#menu-principal a");
    const iconeMenu = document.querySelector(".icone-menu");

    // Verifica se os elementos existem
    if (!botaoMenu || !menuPrincipal) {
        return;
    }

    // Abre e fecha o menu
    botaoMenu.addEventListener("click", () => {

        const menuAberto =
            botaoMenu.getAttribute("aria-expanded") === "true";

        if (menuAberto) {
            fecharMenu();
        } else {
            abrirMenu();
        }

    });

    // Abre o menu
    function abrirMenu() {

        menuPrincipal.classList.add("menu-aberto");

        botaoMenu.setAttribute("aria-expanded", "true");
        botaoMenu.setAttribute("aria-label", "Fechar menu");

        if (iconeMenu) {
            iconeMenu.textContent = "✕";
        }

    }

    // Fecha o menu
    function fecharMenu() {

        menuPrincipal.classList.remove("menu-aberto");

        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");

        if (iconeMenu) {
            iconeMenu.textContent = "☰";
        }

    }

    // Fecha o menu após selecionar uma seção
    linksMenu.forEach(link => {

        link.addEventListener("click", fecharMenu);

    });

    // Fecha o menu ao pressionar ESC
    document.addEventListener("keydown", evento => {

        if (evento.key === "Escape") {
            fecharMenu();
        }

    });

});