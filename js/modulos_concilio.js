"use strict";

/* ======================================================
   CENTRAL BATISTA DE TREINAMENTO - PSH
   PREPARAÇÃO PARA O CONCÍLIO
   MOTOR DE CARREGAMENTO DOS MÓDULOS
   Arquivo: modulos_concilio.js
====================================================== */


/* ======================================================
   1. CADASTRO DAS ÁREAS TEOLÓGICAS
====================================================== */

const AREAS_CONCILIO = {

    bibliologia: {
        nome: "Bibliologia",
        descricao: "Estudo das Escrituras Sagradas: sua origem, inspiração, autoridade, revelação, preservação e interpretação."
    },

    teologia: {
        nome: "Teologia",
        descricao: "Estudo da existência, natureza, atributos e obras de Deus."
    },

    cristologia: {
        nome: "Cristologia",
        descricao: "Estudo da pessoa, natureza, obra e missão de Jesus Cristo."
    },

    pneumatologia: {
        nome: "Pneumatologia",
        descricao: "Estudo da pessoa, divindade, obra e ministério do Espírito Santo."
    },

    antropologia: {
        nome: "Antropologia e Hamartiologia",
        descricao: "Estudo da natureza humana, da criação do homem, da queda e da realidade do pecado."
    },

    soteriologia: {
        nome: "Soteriologia e Escatologia",
        descricao: "Estudo da salvação em Cristo e das doutrinas relacionadas às últimas coisas."
    },

    eclesiologia: {
        nome: "Eclesiologia",
        descricao: "Estudo da natureza, organização, missão, ordenanças e ministério da Igreja."
    },

    historia_batista: {
        nome: "História e Princípios Batistas",
        descricao: "Estudo da história dos batistas, seus princípios, identidade e contribuição para a fé cristã."
    }

};


/* ======================================================
   2. BANCO DE MÓDULOS
====================================================== */

// Os módulos serão cadastrados aqui à medida que
// elaborarmos a matriz curricular de cada área.
const MODULOS_CONCILIO = {

    // ==================================================
    // 01. BIBLIOLOGIA
    // ==================================================

    bibliologia: [

        {
            numero: "01",
            titulo: "Introdução à Bibliologia",
            descricao: "Natureza, inspiração, autoridade, composição e finalidade das Escrituras Sagradas.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=bibliologia&modulo=modulo_01"
        }

    ],


    // ==================================================
    // 02. TEOLOGIA
    // ==================================================

    teologia: [

        {
            numero: "01",
            titulo: "A Existência e a Natureza de Deus",
            descricao: "O conhecimento de Deus, sua existência, natureza e atributos.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=teologia&modulo=modulo_01"
        },
        {
            numero: "02",
            titulo: "Os Atributos de Deus",
            descricao: "Os atributos naturais e morais do caráter divino.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=teologia&modulo=modulo_02"
        },
        {
            numero: "03",
            titulo: "A Trindade",
            descricao: "A doutrina bíblica do Pai, do Filho e do Espírito Santo.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=teologia&modulo=modulo_03"
        }

    ],


    // ==================================================
    // 03. CRISTOLOGIA
    // ==================================================

    cristologia: [

        {
            numero: "01",
            titulo: "A Pessoa de Jesus Cristo",
            descricao: "A divindade, humanidade e identidade de Jesus Cristo.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=cristologia&modulo=modulo_01"
        },
        {
            numero: "02",
            titulo: "A Obra de Jesus Cristo",
            descricao: "A encarnação, o ministério, a morte e a ressurreição de Cristo.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=cristologia&modulo=modulo_02"
        },
        {
            numero: "03",
            titulo: "A Exaltação de Cristo",
            descricao: "A ressurreição, ascensão, intercessão e senhorio de Cristo.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=cristologia&modulo=modulo_03"
        }

    ],


    // ==================================================
    // 04. PNEUMATOLOGIA
    // ==================================================

    pneumatologia: [

        {
            numero: "01",
            titulo: "A Pessoa do Espírito Santo",
            descricao: "A identidade, personalidade e divindade do Espírito Santo.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=pneumatologia&modulo=modulo_01"
        },
        {
            numero: "02",
            titulo: "A Obra do Espírito Santo",
            descricao: "A atuação do Espírito Santo na criação, revelação e salvação.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=pneumatologia&modulo=modulo_02"
        },
        {
            numero: "03",
            titulo: "O Espírito Santo na Vida Cristã",
            descricao: "Regeneração, habitação, santificação, dons e fruto do Espírito.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=pneumatologia&modulo=modulo_03"
        }

    ],


    // ==================================================
    // 05. ANTROPOLOGIA E HAMARTIOLOGIA
    // ==================================================

    antropologia: [

        {
            numero: "01",
            titulo: "A Origem e a Natureza do Homem",
            descricao: "A criação do ser humano, sua natureza e sua condição diante de Deus.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=antropologia&modulo=modulo_01"
        },
        {
            numero: "02",
            titulo: "A Imagem e Semelhança de Deus",
            descricao: "O significado da imagem divina na constituição e dignidade humana.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=antropologia&modulo=modulo_02"
        },
        {
            numero: "03",
            titulo: "A Doutrina do Pecado",
            descricao: "A origem, natureza, consequências e universalidade do pecado.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=antropologia&modulo=modulo_03"
        }

    ],


    // ==================================================
    // 06. SOTERIOLOGIA E ESCATOLOGIA
    // ==================================================

    soteriologia: [

        {
            numero: "01",
            titulo: "A Doutrina da Salvação",
            descricao: "A graça de Deus, a redenção e a necessidade da salvação.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=soteriologia&modulo=modulo_01"
        },
        {
            numero: "02",
            titulo: "Os Aspectos da Salvação",
            descricao: "Arrependimento, fé, justificação, regeneração, adoção e santificação.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=soteriologia&modulo=modulo_02"
        },
        {
            numero: "03",
            titulo: "A Doutrina das Últimas Coisas",
            descricao: "A morte, a ressurreição, a volta de Cristo e o destino eterno.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=soteriologia&modulo=modulo_03"
        }

    ],


    // ==================================================
    // 07. ECLESIOLOGIA
    // ==================================================

    eclesiologia: [

        {
            numero: "01",
            titulo: "A Natureza e a Origem da Igreja",
            descricao: "O significado bíblico da Igreja e sua instituição por Jesus Cristo.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=eclesiologia&modulo=modulo_01"
        },
        {
            numero: "02",
            titulo: "As Ordenanças da Igreja",
            descricao: "O batismo bíblico e a Ceia do Senhor.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=eclesiologia&modulo=modulo_02"
        },
        {
            numero: "03",
            titulo: "A Organização e o Governo da Igreja",
            descricao: "A autonomia da igreja local, seu governo e sua liderança.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=eclesiologia&modulo=modulo_03"
        },
        {
            numero: "04",
            titulo: "A Missão da Igreja",
            descricao: "Adoração, comunhão, discipulado, evangelização e missões.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=eclesiologia&modulo=modulo_04"
        }

    ],


    // ==================================================
    // 08. HISTÓRIA E PRINCÍPIOS BATISTAS
    // ==================================================

    historia_batista: [

        {
            numero: "01",
            titulo: "Origens Históricas dos Batistas",
            descricao: "O contexto histórico do surgimento dos batistas e seu desenvolvimento.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=historia_batista&modulo=modulo_01"
        },
        {
            numero: "02",
            titulo: "Princípios Distintivos dos Batistas",
            descricao: "As convicções bíblicas e os princípios fundamentais da identidade batista.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=historia_batista&modulo=modulo_02"
        },
        {
            numero: "03",
            titulo: "Os Batistas no Brasil",
            descricao: "A chegada, o desenvolvimento e a organização da obra batista brasileira.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=historia_batista&modulo=modulo_03"
        },
        {
            numero: "04",
            titulo: "A Convenção Batista Brasileira",
            descricao: "História, estrutura, cooperação e atuação missionária da CBB.",
            disponivel: true,
            arquivo: "questionario_concilio.html?area=historia_batista&modulo=modulo_04"
        }

    ]

};


/* ======================================================
   3. ELEMENTOS DA PÁGINA
====================================================== */

const tituloArea = document.getElementById("titulo-area");

const descricaoArea = document.getElementById("descricao-area");

const nomeArea = document.getElementById("nome-area");

const totalModulos = document.getElementById("total-modulos");

const listaModulos = document.getElementById("lista-modulos");

const mensagemArea = document.getElementById("mensagem-area");


/* ======================================================
   4. IDENTIFICAÇÃO DA ÁREA SELECIONADA
====================================================== */

function identificarArea() {

    const parametros = new URLSearchParams(
        window.location.search
    );

    return parametros.get("area");

}


/* ======================================================
   5. APRESENTAÇÃO DOS DADOS DA ÁREA
====================================================== */

function apresentarArea(area) {

    tituloArea.textContent = area.nome.toUpperCase();

    descricaoArea.textContent = area.descricao;

    nomeArea.textContent = area.nome;

}


/* ======================================================
   6. APRESENTAÇÃO DOS MÓDULOS
====================================================== */

// ======================================================
// APRESENTAÇÃO DOS MÓDULOS EM CARTÕES
// ======================================================

function apresentarModulos(modulos) {

    listaModulos.innerHTML = "";

    // Organiza os cartões em colunas.
    listaModulos.classList.add("formacao-grid");

    totalModulos.textContent =
        modulos.length + " módulo(s) cadastrado(s).";


    // Verifica se existem módulos cadastrados.

    if (modulos.length === 0) {

        mensagemArea.textContent =
            "Os módulos desta área estão em fase de elaboração.";

        return;

    }


    mensagemArea.textContent = "";


    // Percorre os módulos cadastrados.

    modulos.forEach(function (modulo) {

        const cartao = document.createElement("article");

        cartao.className = "area-card";


        // Número do módulo.

        const numero = document.createElement("span");

        numero.className = "area-numero";

        numero.textContent = "MÓDULO " + modulo.numero;


        // Título.

        const titulo = document.createElement("h3");

        titulo.textContent = modulo.titulo;


        // Descrição.

        const descricao = document.createElement("p");

        descricao.textContent = modulo.descricao;


        // Situação do módulo.

        const status = document.createElement("span");

        status.className = "area-status";


        if (modulo.disponivel) {

            status.textContent = "CONTEÚDO DISPONÍVEL";

        } else {

            status.textContent = "CONTEÚDO EM PREPARAÇÃO";

        }


        // Inserção dos elementos no cartão.

        cartao.appendChild(numero);

        cartao.appendChild(titulo);

        cartao.appendChild(descricao);

        cartao.appendChild(status);


        // Botão de acesso somente para módulos disponíveis.

        if (modulo.disponivel) {

            const botao = document.createElement("a");

            botao.className = "botao-area";

            botao.href = modulo.arquivo;

            botao.textContent = "ACESSAR MÓDULO";

            cartao.appendChild(botao);

        }


        // Adiciona o cartão à grade.

        listaModulos.appendChild(cartao);

    });

}


/* ======================================================
   7. MENSAGEM PARA ÁREA NÃO IDENTIFICADA
====================================================== */

function apresentarErro() {

    tituloArea.textContent = "ÁREA NÃO IDENTIFICADA";

    descricaoArea.textContent =
        "Não foi possível identificar a área de formação selecionada.";

    nomeArea.textContent = "Área não encontrada";

    totalModulos.textContent = "";

    listaModulos.innerHTML = "";

    mensagemArea.textContent =
        "Retorne à página de Preparação para o Concílio e selecione uma área válida.";

}


/* ======================================================
   8. INICIALIZAÇÃO DO AMBIENTE
====================================================== */

function iniciarModulosConcilio() {

    const identificador = identificarArea();

    const area = AREAS_CONCILIO[identificador];


    // Verifica se a área existe.

    if (!area) {

        apresentarErro();

        return;

    }


    // Apresenta as informações da área.

    apresentarArea(area);


    // Carrega os módulos correspondentes.

    const modulos = MODULOS_CONCILIO[identificador];

    apresentarModulos(modulos);


    console.log("Área carregada:", area.nome);

    console.log("Módulos cadastrados:", modulos.length);

}


/* ======================================================
   9. INICIALIZAÇÃO APÓS O CARREGAMENTO DA PÁGINA
====================================================== */

document.addEventListener(
    "DOMContentLoaded",
    iniciarModulosConcilio
);