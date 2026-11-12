"use strict";

// ======================================================
// PUZZLE DOS ER
// DESAFIO DOS EMBAIXADORES DO REI
// MOTOR PRINCIPAL DO JOGO
// ======================================================


// ======================================================
// ELEMENTOS HTML
// ======================================================

const imagemEscolhida = document.getElementById("imagemEscolhida");

const dificuldade = document.getElementById("dificuldade");

const btnIniciar = document.getElementById("btnIniciar");

const btnVerImagem = document.getElementById("btnVerImagem");

const btnReiniciar = document.getElementById("btnReiniciar");

const btnNovoDesafio = document.getElementById("btnNovoDesafio");

const tabuleiro = document.getElementById("tabuleiro");

const previsualizacao = document.getElementById("previsualizacao");

const imagemReferencia = document.getElementById("imagemReferencia");

const instrucao = document.getElementById("instrucao");

const contagemRegressiva = document.getElementById("contagemRegressiva");

const painelJogo = document.querySelector(".painel-jogo");

const controles = document.querySelector(".controles");

const mensagemVitoria = document.getElementById("mensagemVitoria");

const movimentosHTML = document.getElementById("movimentos");

const pecasCorretasHTML = document.getElementById("pecasCorretas");

const tempoHTML = document.getElementById("tempo");

const resultadoFinal = document.getElementById("resultadoFinal");


// ======================================================
// VARIÁVEIS DO JOGO
// ======================================================

let pecas = [];

let primeiraSelecao = null;

let tamanhoGrade = 3;

let totalPecas = 9;

let movimentos = 0;

let pecasCorretas = 0;

let segundos = 0;

let cronometro = null;

let temporizador = null;

let jogoAtivo = false;

let imagemAtual = "";

let partidaIniciada = false;


// ======================================================
// CARREGAMENTO DA IMAGEM
// ======================================================

function obterImagem() {

    imagemAtual = `imagens/${imagemEscolhida.value}`;

    return new Promise((resolve, reject) => {

        const imagem = new Image();

        imagem.onload = () => resolve(imagem);

        imagem.onerror = () => reject(
            new Error("Não foi possível carregar a imagem.")
        );

        imagem.src = imagemAtual;

    });

}


// ======================================================
// EMBARALHAR PEÇAS
// ======================================================

function embaralhar(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

    return array;

}


// ======================================================
// INICIAR DESAFIO
// ======================================================

async function iniciarJogo() {

    clearInterval(cronometro);

    clearInterval(temporizador);

    jogoAtivo = false;

    partidaIniciada = false;

    primeiraSelecao = null;

    movimentos = 0;

    pecasCorretas = 0;

    segundos = 0;

    tamanhoGrade = Number(dificuldade.value);

    totalPecas = tamanhoGrade * tamanhoGrade;

    atualizarPainel();

    mensagemVitoria.style.display = "none";

    painelJogo.style.display = "none";

    controles.style.display = "none";

    tabuleiro.innerHTML = "";

    tabuleiro.style.gridTemplateColumns =
        `repeat(${tamanhoGrade}, 1fr)`;

    try {

        await obterImagem();

        imagemReferencia.src = imagemAtual;

        previsualizacao.style.display = "block";

        instrucao.textContent =
            "Observe atentamente a imagem antes de começar!";

        let contagem = 5;

        contagemRegressiva.textContent = contagem;

        temporizador = setInterval(() => {

            contagem--;

            contagemRegressiva.textContent = contagem;

            if (contagem <= 0) {

                clearInterval(temporizador);

                previsualizacao.style.display = "none";

                montarTabuleiro();

            }

        }, 1000);

    } catch (erro) {

        alert(
            "Erro ao carregar a imagem. Verifique a pasta imagens."
        );

        console.error(erro);

    }

}


// ======================================================
// MONTAR TABULEIRO
// ======================================================

function montarTabuleiro() {

    tabuleiro.innerHTML = "";

    pecas = [];

    for (let i = 0; i < totalPecas; i++) {

        pecas.push({

            posicaoCorreta: i

        });

    }

    embaralhar(pecas);

    // Evitar que o jogo comece completamente resolvido.

    if (pecas.every((peca, indice) =>
        peca.posicaoCorreta === indice
    )) {

        [pecas[0], pecas[1]] = [pecas[1], pecas[0]];

    }

    jogoAtivo = true;

    primeiraSelecao = null;

    desenharTabuleiro();

    painelJogo.style.display = "flex";

    controles.style.display = "flex";

}


// ======================================================
// DESENHAR PEÇAS
// ======================================================

function desenharTabuleiro() {

    tabuleiro.innerHTML = "";

    tabuleiro.style.gridTemplateColumns =
        `repeat(${tamanhoGrade}, 1fr)`;

    pecas.forEach((peca, indice) => {

        const elemento = document.createElement("div");

        elemento.className = "peca";

        elemento.dataset.indice = indice;

        const linha = Math.floor(
            peca.posicaoCorreta / tamanhoGrade
        );

        const coluna = peca.posicaoCorreta % tamanhoGrade;

        const posicaoX =
            tamanhoGrade === 1
                ? 0
                : (coluna / (tamanhoGrade - 1)) * 100;

        const posicaoY =
            tamanhoGrade === 1
                ? 0
                : (linha / (tamanhoGrade - 1)) * 100;

        elemento.style.backgroundImage =
            `url("${imagemAtual}")`;

        elemento.style.backgroundSize =
            `${tamanhoGrade * 100}% ${tamanhoGrade * 100}%`;

        elemento.style.backgroundPosition =
            `${posicaoX}% ${posicaoY}%`;

        if (peca.posicaoCorreta === indice) {

            elemento.classList.add("correta");

        }

        elemento.addEventListener("click", () => {

            selecionarPeca(indice);

        });

        tabuleiro.appendChild(elemento);

    });

    atualizarPainel();

}


// ======================================================
// SELECIONAR PEÇAS
// ======================================================

function selecionarPeca(indice) {

    if (!jogoAtivo) return;

    if (primeiraSelecao === null) {

        primeiraSelecao = indice;

        const elementos = tabuleiro.children;

        elementos[indice].classList.add("selecionada");

        return;

    }

    if (primeiraSelecao === indice) {

        tabuleiro.children[indice]
            .classList.remove("selecionada");

        primeiraSelecao = null;

        return;

    }

    trocarPecas(primeiraSelecao, indice);

    primeiraSelecao = null;

}


// ======================================================
// TROCAR DUAS PEÇAS
// ======================================================

function trocarPecas(indice1, indice2) {

    const elementos = tabuleiro.children;

    elementos[indice1].classList.remove("selecionada");

    const temp = pecas[indice1];

    pecas[indice1] = pecas[indice2];

    pecas[indice2] = temp;

    movimentos++;

    desenharTabuleiro();

    verificarPecasCorretas();

    verificarVitoria();

}


// ======================================================
// VERIFICAR PEÇAS CORRETAS
// ======================================================

function verificarPecasCorretas() {

    pecasCorretas = 0;

    pecas.forEach((peca, indice) => {

        if (peca.posicaoCorreta === indice) {

            pecasCorretas++;

        }

    });

    atualizarPainel();

}


// ======================================================
// ATUALIZAR PAINEL
// ======================================================

function atualizarPainel() {

    movimentosHTML.textContent = movimentos;

    pecasCorretasHTML.textContent =
        `${pecasCorretas} / ${totalPecas}`;

    const minutos = Math.floor(segundos / 60);

    const restante = segundos % 60;

    tempoHTML.textContent =

        String(minutos).padStart(2, "0") + ":" +

        String(restante).padStart(2, "0");

}


// ======================================================
// CRONÔMETRO
// ======================================================

function iniciarCronometro() {

    if (partidaIniciada) return;

    partidaIniciada = true;

    cronometro = setInterval(() => {

        segundos++;

        atualizarPainel();

    }, 1000);

}


// ======================================================
// VERIFICAR VITÓRIA
// ======================================================

function verificarVitoria() {

    if (pecasCorretas === totalPecas) {

        finalizarJogo();

    }

}


// ======================================================
// FINALIZAR PARTIDA
// ======================================================

function finalizarJogo() {

    jogoAtivo = false;

    clearInterval(cronometro);

    clearInterval(temporizador);

    mensagemVitoria.style.display = "block";

    resultadoFinal.innerHTML = `

        <p><strong>Movimentos:</strong> ${movimentos}</p>

        <p><strong>Tempo:</strong> ${tempoHTML.textContent}</p>

        <p><strong>Peças organizadas:</strong> ${totalPecas}</p>

    `;

    mensagemVitoria.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


// ======================================================
// VISUALIZAR IMAGEM ORIGINAL
// ======================================================

function visualizarImagem() {

    if (!imagemAtual) return;

    imagemReferencia.src = imagemAtual;

    previsualizacao.style.display = "block";

    instrucao.textContent =
        "Observe a imagem original!";

    contagemRegressiva.textContent = "";

    clearTimeout(visualizarImagem.timeout);

    visualizarImagem.timeout = setTimeout(() => {

        previsualizacao.style.display = "none";

    }, 3000);

}


// ======================================================
// REINICIAR PARTIDA
// ======================================================

function reiniciarJogo() {

    iniciarJogo();

}


// ======================================================
// EVENTOS DOS BOTÕES
// ======================================================

btnIniciar.addEventListener("click", () => {

    iniciarJogo();

});


btnReiniciar.addEventListener("click", () => {

    reiniciarJogo();

});


btnNovoDesafio.addEventListener("click", () => {

    iniciarJogo();

});


btnVerImagem.addEventListener("click", () => {

    visualizarImagem();

});


// ======================================================
// INICIALIZAÇÃO
// ======================================================

atualizarPainel();
