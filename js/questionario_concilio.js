"use strict";

// ======================================================
// CENTRAL BATISTA DE TREINAMENTO - PSH
// MOTOR DO QUESTIONÁRIO - PREPARAÇÃO PARA O CONCÍLIO
// Arquivo: questionario_concilio.js
// ======================================================


// ======================================================
// 1. ELEMENTOS DA PÁGINA
// ======================================================

const descricaoModulo = document.getElementById("descricao-modulo");

const contadorPergunta = document.getElementById("contador-pergunta");
const contadorPontos = document.getElementById("contador-pontos");

const barraProgresso = document.getElementById("barra-progresso");

const cartaoPergunta = document.getElementById("cartao-pergunta");

const numeroPergunta = document.getElementById("numero-pergunta");
const textoPergunta = document.getElementById("texto-pergunta");

const alternativas = document.getElementById("alternativas");

const feedback = document.getElementById("feedback");
const feedbackTitulo = document.getElementById("feedback-titulo");
const feedbackExplicacao = document.getElementById("feedback-explicacao");
const feedbackReferencia = document.getElementById("feedback-referencia");

const botaoAvancar = document.getElementById("botao-avancar");
const botaoSair = document.getElementById("botao-sair");

const resultadoFinal = document.getElementById("resultado-final");
const pontuacaoFinal = document.getElementById("pontuacao-final");
const mensagemResultado = document.getElementById("mensagem-resultado");

const botaoRetornar = document.getElementById("botao-retornar");

const erroCarregamento = document.getElementById("erro-carregamento");


// ======================================================
// 2. IDENTIFICAÇÃO DA AVALIAÇÃO
// ======================================================

const parametros = new URLSearchParams(window.location.search);

const AREA_ATUAL = parametros.get("area");
const MODULO_ATUAL = parametros.get("modulo");


// ======================================================
// 3. VARIÁVEIS DO QUESTIONÁRIO
// ======================================================

let questoes = [];

let indiceAtual = 0;

let pontuacao = 0;

let respondeu = false;


// ======================================================
// 4. CONFIGURAÇÃO DOS BOTÕES DE RETORNO
// ======================================================

function configurarRetorno() {

    const destino = AREA_ATUAL
        ? `modulo_concilio.html?area=${encodeURIComponent(AREA_ATUAL)}`
        : "preparacao_concilio.html";

    botaoSair.href = destino;
    botaoRetornar.href = destino;

}


// ======================================================
// 5. CARREGAMENTO DAS QUESTÕES
// ======================================================

function carregarQuestoes() {

    if (!AREA_ATUAL || !MODULO_ATUAL) {

        apresentarErro(
            "Não foi possível identificar a área e o módulo desta avaliação."
        );

        return;

    }

    if (typeof obterQuestoesConcilio !== "function") {

        apresentarErro(
            "O banco de questões não foi carregado corretamente."
        );

        return;

    }

    questoes = obterQuestoesConcilio(
        AREA_ATUAL,
        MODULO_ATUAL
    );

    if (!questoes || questoes.length === 0) {

        apresentarErro(
            "Ainda não existem questões cadastradas para este módulo."
        );

        return;

    }

    if (descricaoModulo) {

        descricaoModulo.textContent =
            `Avaliação de ${AREA_ATUAL.replace(/_/g, " ")} - ${MODULO_ATUAL.replace(/_/g, " ")}`;

    }

    apresentarPergunta();

}


// ======================================================
// 6. APRESENTAÇÃO DA PERGUNTA
// ======================================================

function apresentarPergunta() {

    respondeu = false;

    const questao = questoes[indiceAtual];

    numeroPergunta.textContent =
        `QUESTÃO ${indiceAtual + 1}`;

    textoPergunta.textContent = questao.pergunta;

    contadorPergunta.textContent =
        `Pergunta ${indiceAtual + 1} de ${questoes.length}`;

    contadorPontos.textContent =
        `Pontuação: ${pontuacao}`;

    const progresso =
        (indiceAtual / questoes.length) * 100;

    barraProgresso.style.width = `${progresso}%`;

    alternativas.innerHTML = "";

    feedback.className = "feedback";

    feedbackTitulo.textContent = "";
    feedbackExplicacao.textContent = "";
    feedbackReferencia.textContent = "";

    botaoAvancar.disabled = true;

    botaoAvancar.textContent =
        indiceAtual === questoes.length - 1
            ? "VER RESULTADO"
            : "PRÓXIMA QUESTÃO";


    // Criar alternativas

    questao.alternativas.forEach((alternativa, indice) => {

        const botao = document.createElement("button");

        botao.type = "button";

        botao.className = "alternativa";

        botao.textContent =
            `${String.fromCharCode(65 + indice)}) ${alternativa}`;

        botao.addEventListener("click", function () {

            verificarResposta(indice);

        });

        alternativas.appendChild(botao);

    });

}


// ======================================================
// 7. CORREÇÃO DA RESPOSTA
// ======================================================

function verificarResposta(indiceEscolhido) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    const questao = questoes[indiceAtual];

    const botoes = alternativas.querySelectorAll(".alternativa");

    const acertou =
        indiceEscolhido === questao.correta;


    // Bloquear todas as alternativas

    botoes.forEach((botao, indice) => {

        botao.disabled = true;

        if (indice === questao.correta) {

            botao.classList.add("correta");

        }

        if (
            indice === indiceEscolhido &&
            !acertou
        ) {

            botao.classList.add("incorreta");

        }

    });


    // Atualizar pontuação

    if (acertou) {

        pontuacao++;

        feedback.className = "feedback correto";

        feedbackTitulo.textContent =
            "Resposta correta!";

    } else {

        feedback.className = "feedback incorreto";

        feedbackTitulo.textContent =
            "Resposta incorreta.";

    }


    // Apresentar explicação

    feedbackExplicacao.textContent =
        questao.explicacao;

    feedbackReferencia.textContent =
        `Referência bíblica: ${questao.referencia}`;


    // Atualizar contador

    contadorPontos.textContent =
        `Pontuação: ${pontuacao}`;

    botaoAvancar.disabled = false;

}


// ======================================================
// 8. AVANÇAR PARA A PRÓXIMA QUESTÃO
// ======================================================

function avancarQuestao() {

    if (!respondeu) {
        return;
    }

    indiceAtual++;

    if (indiceAtual < questoes.length) {

        apresentarPergunta();

    } else {

        apresentarResultado();

    }

}


// ======================================================
// 9. RESULTADO FINAL
// ======================================================

function apresentarResultado() {

    cartaoPergunta.style.display = "none";

    resultadoFinal.style.display = "block";

    const total = questoes.length;

    const percentual =
        Math.round((pontuacao / total) * 100);

    pontuacaoFinal.textContent =
        `${percentual}%`;

    barraProgresso.style.width = "100%";

    contadorPergunta.textContent =
        "Avaliação concluída";

    contadorPontos.textContent =
        `Acertos: ${pontuacao} de ${total}`;


    // Mensagem de desempenho

    if (percentual >= 90) {

        mensagemResultado.textContent =
            "Excelente desempenho! Você demonstrou ótimo domínio dos conteúdos avaliados. Continue aprofundando seus estudos bíblicos e doutrinários.";

    } else if (percentual >= 70) {

        mensagemResultado.textContent =
            "Muito bom! Você demonstrou boa compreensão do conteúdo. Continue estudando para consolidar seu conhecimento.";

    } else if (percentual >= 50) {

        mensagemResultado.textContent =
            "Você está avançando! Recomendamos revisar os conteúdos estudados e realizar novamente a avaliação quando estiver preparado.";

    } else {

        mensagemResultado.textContent =
            "Esta avaliação mostrou que ainda existem conteúdos importantes a revisar. Retome seus estudos com atenção e prossiga com dedicação.";

    }

}


// ======================================================
// 10. APRESENTAR ERRO DE CARREGAMENTO
// ======================================================

function apresentarErro(mensagem) {

    erroCarregamento.style.display = "block";

    erroCarregamento.textContent = mensagem;

    cartaoPergunta.style.display = "none";

    document.getElementById("painel-progresso").style.display = "none";

}


// ======================================================
// 11. INICIALIZAÇÃO DO QUESTIONÁRIO
// ======================================================

function iniciarQuestionarioConcilio() {

    configurarRetorno();

    botaoAvancar.addEventListener(
        "click",
        avancarQuestao
    );

    carregarQuestoes();

    console.log(
        "Questionário da Preparação para o Concílio inicializado."
    );

}


// ======================================================
// 12. EXECUÇÃO
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    iniciarQuestionarioConcilio
);