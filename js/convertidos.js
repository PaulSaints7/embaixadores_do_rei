"use strict";

// ======================================================
// CENTRAL BATISTA DE TREINAMENTO - PSH
// AMBIENTE DE NOVOS CONVERTIDOS
// Arquivo: convertidos.js
// ======================================================


// ======================================================
// 1. CADASTRO DE ALUNOS AUTORIZADOS
// ======================================================

const ALUNOS_AUTORIZADOS = [
    // Cadastre aqui os nomes dos alunos.
    "visitante",
    "Annes Paulo",
    "Paulo Leão",
    "Paulo Roberto"
    "Paulinha"
];


// ======================================================
// 2. CONFIGURAÇÕES
// ======================================================

const CHAVE_ALUNO = "cbt_psh_aluno_convertido";

// Módulos que já estão disponíveis.
const MODULOS_DISPONIVEIS = ["01", "02", "03"];

let formularioAluno;
let campoNomeAluno;
let mensagemAluno;
let secaoModulos;
let secaoOrientacao;
let botaoSair;


// ======================================================
// 3. NORMALIZAÇÃO DOS NOMES
// ======================================================

function normalizarNome(nome) {

    return nome
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .toLowerCase();

}


// ======================================================
// 4. ATUALIZAÇÃO DO ANO
// ======================================================

function atualizarAno() {

    const elementoAno = document.getElementById("ano-atual");

    if (elementoAno) {
        elementoAno.textContent = new Date().getFullYear();
    }

}


// ======================================================
// 5. EXIBIÇÃO DE MENSAGENS
// ======================================================

function exibirMensagem(texto, tipo) {

    if (!mensagemAluno) return;

    mensagemAluno.textContent = texto;
    mensagemAluno.className = "mensagem-aluno";

    if (tipo) {
        mensagemAluno.classList.add(tipo);
    }

}


// ======================================================
// 6. VERIFICAÇÃO DO ALUNO
// ======================================================

function verificarAluno(nomeInformado) {

    const nomeNormalizado = normalizarNome(nomeInformado);

    return ALUNOS_AUTORIZADOS.some(
        nome => normalizarNome(nome) === nomeNormalizado
    );

}


// ======================================================
// 7. CONTROLE VISUAL DOS MÓDULOS
// ======================================================

function ocultarModulos() {

    if (secaoModulos) {
        secaoModulos.hidden = true;
    }

    if (secaoOrientacao) {
        secaoOrientacao.hidden = true;
    }

}


function mostrarModulos() {

    if (secaoModulos) {
        secaoModulos.hidden = false;
    }

    if (secaoOrientacao) {
        secaoOrientacao.hidden = false;
    }

}


// ======================================================
// 8. BOTÃO DE ENCERRAR SESSÃO
// ======================================================

function criarBotaoSair() {

    if (botaoSair) return;

    const cartaoIdentificacao = document.querySelector(
        ".identificacao-card"
    );

    if (!cartaoIdentificacao) return;

    botaoSair = document.createElement("button");

    botaoSair.type = "button";
    botaoSair.textContent = "Encerrar sessão";
    botaoSair.className = "botao-sair";

    botaoSair.addEventListener("click", encerrarSessao);

    cartaoIdentificacao.appendChild(botaoSair);

}


function removerBotaoSair() {

    if (botaoSair) {
        botaoSair.remove();
        botaoSair = null;
    }

}


// ======================================================
// 9. IDENTIFICAÇÃO DO ALUNO
// ======================================================

function identificarAluno(evento) {

    evento.preventDefault();

    const nomeInformado = campoNomeAluno.value.trim();

    if (nomeInformado === "") {

        exibirMensagem(
            "Por favor, informe seu nome completo.",
            "erro"
        );

        campoNomeAluno.focus();

        return;
    }


    if (!verificarAluno(nomeInformado)) {

        exibirMensagem(
            "Nome não encontrado. Verifique o cadastro ou procure seu orientador.",
            "erro"
        );

        return;
    }


    const nomeCadastrado = ALUNOS_AUTORIZADOS.find(
        nome => normalizarNome(nome) === normalizarNome(nomeInformado)
    );


    // Salva a identificação na sessão atual.

    sessionStorage.setItem(CHAVE_ALUNO, nomeCadastrado);


    // Libera a visualização dos módulos.

    mostrarModulos();


    // Apresenta mensagem de boas-vindas.

    exibirMensagem(
        "Bem-vindo(a), " + nomeCadastrado +
        "! Sua identificação foi realizada com sucesso.",
        "sucesso"
    );


    // Cria o botão de encerramento.

    criarBotaoSair();


    console.log("Aluno identificado:", nomeCadastrado);

}


// ======================================================
// 10. RECUPERAÇÃO DA SESSÃO
// ======================================================

function recuperarAluno() {

    const alunoSalvo = sessionStorage.getItem(CHAVE_ALUNO);

    if (!alunoSalvo || !verificarAluno(alunoSalvo)) {

        sessionStorage.removeItem(CHAVE_ALUNO);

        ocultarModulos();

        removerBotaoSair();

        return;
    }


    campoNomeAluno.value = alunoSalvo;

    mostrarModulos();

    exibirMensagem(
        "Olá novamente, " + alunoSalvo +
        "! Sua identificação continua ativa nesta sessão.",
        "sucesso"
    );

    criarBotaoSair();

}


// ======================================================
// 11. ENCERRAMENTO DA SESSÃO
// ======================================================

function encerrarSessao() {

    // Apaga a identificação.

    sessionStorage.removeItem(CHAVE_ALUNO);


    // Limpa o campo de nome.

    campoNomeAluno.value = "";


    // Oculta novamente os módulos.

    ocultarModulos();


    // Remove o botão de saída.

    removerBotaoSair();


    // Exibe mensagem.

    exibirMensagem(
        "Sua sessão foi encerrada. Para continuar, identifique-se novamente.",
        "sucesso"
    );


    // Retorna o foco ao campo.

    campoNomeAluno.focus();


    // Volta a página para a área de identificação.

    formularioAluno.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });


    console.log("Sessão encerrada.");

}

// ======================================================
// 12. CONTROLE DOS BOTÕES DOS MÓDULOS
// ======================================================

function prepararModulos() {

    const botoesModulos = document.querySelectorAll(
        ".botao-modulo"
    );

    botoesModulos.forEach(botao => {

        const numeroModulo = botao.dataset.modulo;

        // Verifica se o módulo está disponível.

        if (MODULOS_DISPONIVEIS.includes(numeroModulo)) {

            botao.disabled = false;

            botao.type = "button";

            // Direciona para o questionário correspondente.

            botao.addEventListener("click", function () {

                window.location.href =
                    "questionario.html?modulo=" + numeroModulo;

            });

        } else {

            botao.disabled = true;

        }

    });

}

// ======================================================
// 13. INICIALIZAÇÃO DO SISTEMA
// ======================================================

function iniciarAmbienteConvertidos() {

    formularioAluno = document.getElementById("form-aluno");

    campoNomeAluno = document.getElementById("nome-aluno");

    mensagemAluno = document.getElementById("mensagem-aluno");

    secaoModulos = document.querySelector(".modulos-convertidos");

    secaoOrientacao = document.querySelector(".orientacao");


    atualizarAno();

    prepararModulos();

    ocultarModulos();


    if (formularioAluno && campoNomeAluno && mensagemAluno) {

        formularioAluno.addEventListener(
            "submit",
            identificarAluno
        );

        recuperarAluno();

    }


    console.log(
        "Central Batista de Treinamento PSH inicializada."
    );

}


// ======================================================
// 14. EXECUÇÃO
// ======================================================

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        iniciarAmbienteConvertidos
    );

} else {

    iniciarAmbienteConvertidos();

}


// ======================================================
// FIM DO ARQUIVO
// CENTRAL BATISTA DE TREINAMENTO - PSH
// ======================================================
