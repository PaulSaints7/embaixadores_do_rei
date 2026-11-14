"use strict";

// ======================================================
// CENTRAL BATISTA DE TREINAMENTO - PSH
// MOTOR DO QUESTIONÁRIO
// Arquivo: questionario.js
// ======================================================


// ======================================================
// 1. ELEMENTOS DA PÁGINA
// ======================================================

const tituloModulo = document.getElementById("titulo-modulo");
const descricaoModulo = document.getElementById("descricao-modulo");

const painelProgresso = document.getElementById("painel-progresso");
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
// 2. VARIÁVEIS DO QUESTIONÁRIO
// ======================================================

let moduloAtual = null;
let dadosModulo = null;

let indicePergunta = 0;
let pontuacao = 0;
let respostaSelecionada = false;


// ======================================================
// 3. IDENTIFICAÇÃO DO MÓDULO
// ======================================================

function identificarModulo() {

    const parametros = new URLSearchParams(window.location.search);

    moduloAtual = parametros.get("modulo");

    if (!moduloAtual) {
        return false;
    }

    // Garante dois dígitos: 01, 02, 03...
    const numeroModulo = moduloAtual.padStart(2, "0");

    const chaveModulo = "modulo" + numeroModulo;

    if (
        typeof QUESTOES_CONVERTIDOS === "undefined" ||
        !QUESTOES_CONVERTIDOS[chaveModulo]
    ) {
        return false;
    }

    dadosModulo = QUESTOES_CONVERTIDOS[chaveModulo];

    if (
        !dadosModulo.questoes ||
        !Array.isArray(dadosModulo.questoes) ||
        dadosModulo.questoes.length === 0
    ) {
        return false;
    }

    return true;
}


// ======================================================
// 4. CONFIGURAÇÃO INICIAL
// ======================================================

function iniciarQuestionario() {

    const ano = document.getElementById("ano-atual");

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }

    if (!identificarModulo()) {
        exibirErro();
        return;
    }

    tituloModulo.textContent = dadosModulo.titulo;
    descricaoModulo.textContent = dadosModulo.descricao;

    atualizarProgresso();
    carregarPergunta();
}


// ======================================================
// 5. EXIBIÇÃO DE ERROS
// ======================================================

function exibirErro() {

    if (painelProgresso) {
        painelProgresso.hidden = true;
    }

    if (cartaoPergunta) {
        cartaoPergunta.hidden = true;
    }

    if (resultadoFinal) {
        resultadoFinal.hidden = true;
        resultadoFinal.style.display = "none";
    }

    if (erroCarregamento) {
        erroCarregamento.hidden = false;
    }

    if (tituloModulo) {
        tituloModulo.textContent = "Questionário indisponível";
    }

    if (descricaoModulo) {
        descricaoModulo.textContent =
            "Não foi possível localizar o módulo solicitado.";
    }
}


// ======================================================
// 6. CARREGAMENTO DA PERGUNTA
// ======================================================

function carregarPergunta() {

    respostaSelecionada = false;

    const perguntaAtual = dadosModulo.questoes[indicePergunta];

    const totalQuestoes = dadosModulo.questoes.length;

    numeroPergunta.textContent =
        "QUESTÃO " + String(indicePergunta + 1).padStart(2, "0");

    textoPergunta.textContent = perguntaAtual.pergunta;

    contadorPergunta.textContent =
        "Pergunta " + (indicePergunta + 1) +
        " de " + totalQuestoes;

    contadorPontos.textContent =
        "Acertos: " + pontuacao;

    alternativas.innerHTML = "";

    feedback.className = "feedback";

    feedbackTitulo.textContent = "";
    feedbackExplicacao.textContent = "";
    feedbackReferencia.textContent = "";

    botaoAvancar.disabled = true;

    botaoAvancar.textContent =
        indicePergunta === totalQuestoes - 1
            ? "Ver resultado →"
            : "Próxima pergunta →";


    // Criação das alternativas.

    perguntaAtual.alternativas.forEach((alternativa, indice) => {

        const botao = document.createElement("button");

        botao.type = "button";
        botao.className = "alternativa";

        botao.textContent =
            String.fromCharCode(65 + indice) + ") " + alternativa;

        botao.addEventListener("click", function () {

            verificarResposta(indice);

        });

        alternativas.appendChild(botao);

    });

    atualizarProgresso();
}


// ======================================================
// 7. VERIFICAÇÃO DA RESPOSTA
// ======================================================

function verificarResposta(indiceEscolhido) {

    if (respostaSelecionada) {
        return;
    }

    respostaSelecionada = true;

    const perguntaAtual = dadosModulo.questoes[indicePergunta];

    const indiceCorreto = perguntaAtual.correta;

    const botoes = alternativas.querySelectorAll(".alternativa");

    const acertou = indiceEscolhido === indiceCorreto;


    // Bloqueia todas as alternativas após a escolha.

    botoes.forEach((botao, indice) => {

        botao.disabled = true;

        if (indice === indiceCorreto) {
            botao.classList.add("correta");
        }

        if (
            indice === indiceEscolhido &&
            !acertou
        ) {
            botao.classList.add("incorreta");
        }

    });


    // Atualiza a pontuação.

    if (acertou) {

        pontuacao++;

        feedback.className = "feedback correto";

        feedbackTitulo.textContent =
            "Muito bem! Resposta correta!";

    } else {

        feedback.className = "feedback incorreto";

        feedbackTitulo.textContent =
            "Vamos aprender! Resposta incorreta.";

    }


    // Apresenta a explicação.

    feedbackExplicacao.textContent =
        perguntaAtual.explicacao ||
        "Continue estudando este conteúdo.";


    // Apresenta a referência bíblica.

    feedbackReferencia.textContent =
        perguntaAtual.referencia
            ? "Referência bíblica: " + perguntaAtual.referencia
            : "";


    // Atualiza a pontuação na tela.

    contadorPontos.textContent =
        "Acertos: " + pontuacao;


    // Libera o botão de avançar.

    botaoAvancar.disabled = false;

}


// ======================================================
// 8. ATUALIZAÇÃO DA BARRA DE PROGRESSO
// ======================================================

function atualizarProgresso() {

    const totalQuestoes = dadosModulo.questoes.length;

    const progresso =
        ((indicePergunta + 1) / totalQuestoes) * 100;

    barraProgresso.style.width = progresso + "%";

}


// ======================================================
// 9. AVANÇAR PERGUNTA
// ======================================================

function avancarPergunta() {

    if (!respostaSelecionada) {
        return;
    }

    const totalQuestoes = dadosModulo.questoes.length;

    indicePergunta++;

    if (indicePergunta < totalQuestoes) {

        carregarPergunta();

    } else {

        finalizarQuestionario();

    }

}


// ======================================================
// 10. FINALIZAÇÃO DO QUESTIONÁRIO
// ======================================================

function finalizarQuestionario() {

    cartaoPergunta.hidden = true;
    painelProgresso.hidden = true;

    resultadoFinal.hidden = false;

    // IMPORTANTE:
    // O CSS original utiliza display:none.
    // Esta instrução torna o resultado visível.

    resultadoFinal.style.display = "block";

    const totalQuestoes = dadosModulo.questoes.length;

    const percentual = Math.round(
        (pontuacao / totalQuestoes) * 100
    );

    pontuacaoFinal.textContent =
        pontuacao + "/" + totalQuestoes;


    if (percentual === 100) {

        mensagemResultado.textContent =
            "Excelente! Você acertou todas as questões. Continue firme no estudo da Palavra de Deus!";

    } else if (percentual >= 70) {

        mensagemResultado.textContent =
            "Muito bem! Você demonstrou um bom conhecimento deste módulo. Continue estudando para avançar ainda mais!";

    } else if (percentual >= 50) {

        mensagemResultado.textContent =
            "Você está no caminho certo! Revise o conteúdo e procure compreender melhor os ensinamentos apresentados.";

    } else {

        mensagemResultado.textContent =
            "Não desanime! Estude novamente este módulo, consulte as referências bíblicas e tente outra vez.";

    }

    console.log("Questionário finalizado.");
    console.log("Pontuação:", pontuacao, "/", totalQuestoes);
    console.log("Aproveitamento:", percentual + "%");

}


// ======================================================
// 11. RETORNO AOS MÓDULOS
// ======================================================

function retornarModulos() {

    window.location.href = "novos_convertidos.html";

}


// ======================================================
// 12. EVENTOS DOS BOTÕES
// ======================================================

botaoAvancar.addEventListener(
    "click",
    avancarPergunta
);

botaoSair.addEventListener(
    "click",
    retornarModulos
);

botaoRetornar.addEventListener(
    "click",
    retornarModulos
);


// ======================================================
// 13. INICIALIZAÇÃO
// ======================================================

iniciarQuestionario();


// ======================================================
// FIM DO ARQUIVO
// CENTRAL BATISTA DE TREINAMENTO - PSH
// ======================================================