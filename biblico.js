/* ============================================================
   EMBAIXADORES DO REI
   MÓDULO: ESTUDOS BÍBLICOS E FORMAÇÃO
   Arquivo: biblico.js
   ============================================================ */

"use strict";

(function () {

    // ========================================================
    // ESTRUTURA PEDAGÓGICA DOS ESTUDOS
    // ========================================================

    const estruturaEstudo = [

        {
            id: "introducao",
            titulo: "Conhecendo o tema",
            orientacao:
                "Apresentação inicial para situar o assunto e despertar a curiosidade."
        },

        {
            id: "objetivos",
            titulo: "O que vamos aprender",
            orientacao:
                "Conhecimentos e atitudes que o embaixador deverá desenvolver."
        },

        {
            id: "estudo",
            titulo: "Estudo orientado",
            orientacao:
                "Conteúdo principal organizado em partes curtas e progressivas."
        },

        {
            id: "reflexao",
            titulo: "Reflexão bíblica",
            orientacao:
                "Conexão com as Escrituras e com a formação cristã."
        },

        {
            id: "pratica",
            titulo: "Vamos praticar",
            orientacao:
                "Atividade para aplicar ou fixar o que foi estudado."
        },

        {
            id: "desafio",
            titulo: "Desafio do embaixador",
            orientacao:
                "Situação-problema que exige interpretação, raciocínio ou aplicação."
        },

        {
            id: "demonstracao",
            titulo: "Preparando a demonstração",
            orientacao:
                "Pontos que ajudam o embaixador a explicar o que aprendeu ao conselheiro."
        }

    ];


    // ========================================================
    // PROTEÇÃO DE TEXTO HTML
    // ========================================================

    function textoSeguro(valor) {

        return String(valor ?? "").replace(/[&<>"']/g, function (caractere) {

            const entidades = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };

            return entidades[caractere];

        });

    }


    // ========================================================
    // CONSULTAR A ESTRUTURA DOS ESTUDOS
    // ========================================================

    function obterEstrutura() {

        return estruturaEstudo.map(function (etapa) {

            return { ...etapa };

        });

    }


    // ========================================================
    // MONTAR A ESTRUTURA VISUAL DE UM ESTUDO
    // ========================================================

    function renderizarEstrutura(elemento, dados) {

        if (!(elemento instanceof HTMLElement)) {

            console.error(
                "BiblicoER: o elemento de destino não foi encontrado."
            );

            return;

        }

        const informacoes = dados || {};

        const nomePosto = textoSeguro(
            informacoes.posto || "Posto"
        );

        const nomeTema = textoSeguro(
            informacoes.tema || "Tema de estudo"
        );


        elemento.innerHTML = `

            <div class="estudo-cabecalho">

                <p class="estudo-posto">
                    ${nomePosto}
                </p>

                <h2>
                    ${nomeTema}
                </h2>

                <p class="estudo-nota">
                    Roteiro de aprendizagem. O conteúdo específico
                    será desenvolvido com base nas fontes de estudo
                    verificadas.
                </p>

            </div>


            <div class="estudo-etapas">

                ${estruturaEstudo.map(function (etapa, indice) {

                    return `

                        <section
                            class="estudo-etapa"
                            data-etapa="${etapa.id}"
                        >

                            <span class="estudo-numero">
                                ${indice + 1}
                            </span>

                            <div>

                                <h3>
                                    ${textoSeguro(etapa.titulo)}
                                </h3>

                                <p>
                                    ${textoSeguro(etapa.orientacao)}
                                </p>

                                <div class="estudo-conteudo">

                                    <p>
                                        Esta parte será preenchida
                                        com o material correspondente
                                        ao tema, após conferência
                                        das fontes.
                                    </p>

                                </div>

                            </div>

                        </section>

                    `;

                }).join("")}

            </div>

        `;

    }


    // ========================================================
    // DISPONIBILIZAR FUNÇÕES PARA OS OUTROS MÓDULOS
    // ========================================================

    window.BiblicoER = {

        obterEstrutura: obterEstrutura,

        renderizarEstrutura: renderizarEstrutura

    };


    console.log(
        "Módulo de estudos bíblicos carregado."
    );

})();