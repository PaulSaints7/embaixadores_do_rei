"use strict";

// ======================================================
// SHOW DOS ER
// O GRANDE DESAFIO DOS EMBAIXADORES DO REI
// MOTOR PRINCIPAL DO JOGO
// ======================================================

// ======================================================
// 1. CONFIGURAÇÕES GERAIS
// ======================================================

const CONFIG_JOGO = {
    nomePrograma: "SHOW DOS ER",
    pontuacaoInicial: 0,
    pontosPorAcerto: 100,
    tempoPorPergunta: 30,
    ajuda5050Usada: false,
    ajudaAmigosUsada: false,
    participante: "",
    perguntaAtual: 0,
    perguntas: [],
    pontuacao: 0,
    respostaSelecionada: false,
    jogoFinalizado: false,
    tempoRestante: 30,
    intervaloCronometro: null
};

// ======================================================
// SISTEMA CENTRAL DE ÁUDIO
// ======================================================

const SONS_JOGO = {
    ambiente:"sons/ambiente.mp3",
    abertura: "sons/abertura.mp3",
    pergunta: "sons/pergunta.mp3",
    acerto: "sons/acerto.mp3",
    erro: "sons/erro.mp3",
    suspense: "sons/suspense.mp3",
    vitoria: "sons/vitoria.mp3",
    transicao: "sons/transicao.mp3",
    relogio: "sons/relogio.mp3",
    aplausos: "sons/aplauso.mp3",
    clique: "sons/clique.mp3"
};

const AUDIOS_JOGO = {};
// ======================================================
// MÚSICA AMBIENTE DA TELA DE ENTRADA
// ======================================================

function iniciarMusicaAmbiente() {
    if (!AUDIOS_JOGO.ambiente) {
        AUDIOS_JOGO.ambiente = new Audio(SONS_JOGO.ambiente);
        AUDIOS_JOGO.ambiente.loop = true;
        AUDIOS_JOGO.ambiente.volume = 0.25;
    }

    const musica = AUDIOS_JOGO.ambiente;

    if (musica.paused) {
        musica.play().catch(erro => {
            console.warn("Não foi possível iniciar a música ambiente:", erro);
        });
    }
}

function pararMusicaAmbiente() {
    const musica = AUDIOS_JOGO.ambiente;

    if (musica && !musica.paused) {
        musica.pause();
        musica.currentTime = 0;
    }
}

let alertaSuspenseExecutado = false;
let alertaRelogioExecutado = false;

function tocarSom(nome) {
    const caminho = SONS_JOGO[nome];

    if (!caminho) return;

    if (!AUDIOS_JOGO[nome]) {
        AUDIOS_JOGO[nome] = new Audio(caminho);
        AUDIOS_JOGO[nome].preload = "auto";
    }

    const audio = AUDIOS_JOGO[nome];

    audio.pause();
    audio.currentTime = 0;

    const reproducao = audio.play();

    if (reproducao && typeof reproducao.catch === "function") {
        reproducao.catch(erro => {
            console.warn(`Não foi possível reproduzir ${nome}.mp3:`, erro);
        });
    }
}

function tocarEncerramentoVitorioso() {
    const audioVitoria = AUDIOS_JOGO.vitoria;

    if (audioVitoria) {
        audioVitoria.onended = () => tocarSom("aplausos");
    }

    tocarSom("vitoria");
}

// ======================================================
// 2. ELEMENTOS DA PÁGINA
// ======================================================

const telaAbertura = document.getElementById("telaAbertura");
const telaJogo = document.getElementById("telaJogo");

const formulario = document.getElementById("formularioParticipante");
const campoNome = document.getElementById("nomeParticipante");
const botaoIniciar = document.getElementById("botaoIniciar");

const nomeJogador = document.getElementById("nomeJogador");
const areaPerguntas = document.getElementById("areaPerguntas");

// ======================================================
// 3. VERIFICAÇÃO DOS ELEMENTOS
// ======================================================

function verificarElementos() {
    const elementos = [
        telaAbertura,
        telaJogo,
        formulario,
        campoNome,
        botaoIniciar,
        nomeJogador,
        areaPerguntas
    ];

    const elementosAusentes = elementos.some(elemento => !elemento);

    if (elementosAusentes) {
        console.error(
            "SHOW DOS ER: um ou mais elementos HTML não foram encontrados."
        );

        return false;
    }

    return true;
}

// ======================================================
// 4. IDENTIFICAÇÃO DO PARTICIPANTE
// ======================================================

function identificarParticipante() {
    const nome = campoNome.value.trim();

    if (nome.length < 2) {
        alert("Por favor, informe seu nome para participar do desafio.");

        campoNome.focus();

        return false;
    }

    CONFIG_JOGO.participante = nome;

    return true;
}

// ======================================================
// 5. PREPARAÇÃO DA TELA DE BOAS-VINDAS
// ======================================================

function prepararTelaJogo() {
    areaPerguntas.innerHTML = "";

    nomeJogador.textContent = CONFIG_JOGO.participante;

    const mensagem = document.createElement("div");
    mensagem.className = "mensagem-boas-vindas";

    const titulo = document.createElement("h2");
    titulo.textContent = "SEJA BEM-VINDO AO SHOW DOS ER!";

    const saudacao = document.createElement("p");
    saudacao.textContent =
        `Olá, ${CONFIG_JOGO.participante}! Sua jornada pelo conhecimento vai começar.`;

    const explicacao = document.createElement("p");
    explicacao.textContent =
        "Prepare-se para testar seus conhecimentos bíblicos e aprender ainda mais sobre os Embaixadores do Rei.";

    const avisoTempo = document.createElement("p");
    avisoTempo.textContent =
        `Atenção: você terá ${CONFIG_JOGO.tempoPorPergunta} segundos para responder cada pergunta!`;

    const botaoJogar = document.createElement("button");
    botaoJogar.type = "button";
    botaoJogar.id = "botaoComecarJogo";
    botaoJogar.className = "botao-principal";
    botaoJogar.textContent = "COMEÇAR A JOGAR";

    botaoJogar.addEventListener("click", iniciarPartida);

    mensagem.appendChild(titulo);
    mensagem.appendChild(saudacao);
    mensagem.appendChild(explicacao);
    mensagem.appendChild(avisoTempo);
    mensagem.appendChild(botaoJogar);

    areaPerguntas.appendChild(mensagem);
}

// ======================================================
// 6. INÍCIO DO DESAFIO
// ======================================================

function iniciarDesafio() {
    if (!identificarParticipante()) {
        return;
    }

    prepararTelaJogo();

    telaAbertura.hidden = true;
    telaJogo.hidden = false;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ======================================================
// 7. PREPARAÇÃO DAS PERGUNTAS
// ======================================================

// EMBARALHAR PERGUNTAS

function embaralharPerguntas(lista) {
    const copia = [...lista];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}

// CARREGAR PERGUNTAS DO BANCO

function carregarPerguntas() {
    if (!Array.isArray(window.BANCO_PERGUNTAS)) {
        console.error("Banco de perguntas não encontrado!");
        return false;
    }

    if (!Array.isArray(window.ETAPAS_CONHECIMENTO)) {
        console.error("Etapas de conhecimento não encontradas!");
        return false;
    }

    const perguntasDisponiveis = window.BANCO_PERGUNTAS.filter(
        pergunta =>
            pergunta.idadeMinima <= 17 &&
            pergunta.idadeMaxima >= 6
    );

    CONFIG_JOGO.perguntas = [];

    // Mantém a progressão das cinco etapas.

    window.ETAPAS_CONHECIMENTO.forEach(etapa => {
        const perguntasDaEtapa = perguntasDisponiveis.filter(
            pergunta => pergunta.etapa === etapa.numero
        );

        // Sorteia novamente as perguntas da etapa.

        const perguntasSorteadas = embaralharPerguntas(
            perguntasDaEtapa
        );

        CONFIG_JOGO.perguntas.push(...perguntasSorteadas);
    });

    console.log(
        "SHOW DOS ER: perguntas embaralhadas!",
        CONFIG_JOGO.perguntas.map(pergunta => pergunta.id)
    );

    return CONFIG_JOGO.perguntas.length > 0;
}

// ======================================================
// 8. INICIAR A PARTIDA
// ======================================================

function iniciarPartida() {
    pararCronometro();

    alertaSuspenseExecutado = false;
    alertaRelogioExecutado = false;

    pararMusicaAmbiente();
    tocarSom("abertura");

    CONFIG_JOGO.pontuacao = CONFIG_JOGO.pontuacaoInicial;
    CONFIG_JOGO.perguntaAtual = 0;
    CONFIG_JOGO.respostaSelecionada = false;
    CONFIG_JOGO.jogoFinalizado = false;
    CONFIG_JOGO.ajuda5050Usada = false;
    CONFIG_JOGO.ajudaAmigosUsada = false;

    if (!carregarPerguntas()) {
        areaPerguntas.innerHTML =
            "<h2>Não foi possível carregar as perguntas.</h2>";

        return;
    }

    exibirPergunta();
}

// ======================================================
// 9. IDENTIFICAÇÃO DA ETAPA
// ======================================================

function obterEtapa(numeroEtapa) {
    if (!Array.isArray(window.ETAPAS_CONHECIMENTO)) {
        return null;
    }

    return window.ETAPAS_CONHECIMENTO.find(
        etapa => etapa.numero === numeroEtapa
    ) || null;
}

// ======================================================

// 10. EXIBIÇÃO DA PERGUNTA
// ======================================================

function exibirPergunta() {
    pararCronometro();

    if (CONFIG_JOGO.perguntaAtual >= CONFIG_JOGO.perguntas.length) {
        finalizarPartida();
        return;
    }

    CONFIG_JOGO.respostaSelecionada = false;

    alertaSuspenseExecutado = false;
    alertaRelogioExecutado = false;

    setTimeout(() => tocarSom("pergunta"), 1200);

    const pergunta = CONFIG_JOGO.perguntas[CONFIG_JOGO.perguntaAtual];

    const etapa = obterEtapa(pergunta.etapa);

    areaPerguntas.innerHTML = "";

    // PAINEL SUPERIOR

    const painel = document.createElement("div");
    painel.className = "painel-status";

    const jogador = document.createElement("p");
    jogador.textContent = `Participante: ${CONFIG_JOGO.participante}`;

    const pontuacao = document.createElement("p");
    pontuacao.textContent = `Pontuação: ${CONFIG_JOGO.pontuacao} pontos`;

    const progresso = document.createElement("p");
    progresso.textContent =
        `Pergunta ${CONFIG_JOGO.perguntaAtual + 1} de ${CONFIG_JOGO.perguntas.length}`;

    const cronometro = document.createElement("p");
    cronometro.id = "cronometro";
    cronometro.className = "cronometro";
    cronometro.textContent = `TEMPO: ${CONFIG_JOGO.tempoPorPergunta}s`;

    painel.appendChild(jogador);
    painel.appendChild(pontuacao);
    painel.appendChild(progresso);
    painel.appendChild(cronometro);

    // BARRA DE TEMPO

    const barraFundo = document.createElement("div");
    barraFundo.className = "barra-tempo-fundo";

    const barraProgresso = document.createElement("div");
    barraProgresso.id = "barraTempo";
    barraProgresso.className = "barra-tempo";

    barraFundo.appendChild(barraProgresso);

    // IDENTIFICAÇÃO DA ETAPA

    const tituloEtapa = document.createElement("h2");
    tituloEtapa.className = "titulo-etapa";

    tituloEtapa.textContent = etapa
        ? `${etapa.nome} — ${etapa.dificuldade}`
        : "DESAFIO DOS EMBAIXADORES";

    // CATEGORIA

    const categoria = document.createElement("p");
    categoria.className = "categoria-pergunta";
    categoria.textContent = `Categoria: ${pergunta.categoria}`;

    // ENUNCIADO

    const enunciado = document.createElement("div");
    enunciado.className = "enunciado-pergunta";

    const textoPergunta = document.createElement("h3");
    textoPergunta.textContent = pergunta.pergunta;

    enunciado.appendChild(textoPergunta);

    // ALTERNATIVAS

    const alternativas = document.createElement("div");
    alternativas.className = "alternativas";

    pergunta.alternativas.forEach((alternativa, indice) => {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.className = "alternativa";

        botao.textContent =
            `${String.fromCharCode(65 + indice)}) ${alternativa}`;

        botao.addEventListener("click", () => {
            verificarResposta(indice, botao);
        });

        alternativas.appendChild(botao);
    });

    // ÁREA DE FEEDBACK

    const feedback = document.createElement("div");
    feedback.id = "feedbackResposta";
    feedback.className = "feedback-resposta";

    // MONTAGEM DA TELA

    areaPerguntas.appendChild(painel);
    areaPerguntas.appendChild(barraFundo);
    areaPerguntas.appendChild(tituloEtapa);
    areaPerguntas.appendChild(categoria);
    areaPerguntas.appendChild(enunciado);
    areaPerguntas.appendChild(alternativas);
    areaPerguntas.appendChild(feedback);

    criarBotaoAjuda5050();
    criarBotaoAjudaAmigos();

    // INICIA A CONTAGEM

    iniciarCronometro();
}

// ======================================================
// 11. INICIAR CRONÔMETRO
// ======================================================

function iniciarCronometro() {
    pararCronometro();

    CONFIG_JOGO.tempoRestante = CONFIG_JOGO.tempoPorPergunta;

    atualizarCronometro();

    CONFIG_JOGO.intervaloCronometro = setInterval(() => {
        if (CONFIG_JOGO.respostaSelecionada) {
            pararCronometro();
            return;
        }

        CONFIG_JOGO.tempoRestante--;

        if (
            CONFIG_JOGO.tempoRestante <= 10 &&
            !alertaSuspenseExecutado
        ) {
            tocarSom("suspense");
            alertaSuspenseExecutado = true;
        }

        if (
            CONFIG_JOGO.tempoRestante <= 5 &&
            !alertaRelogioExecutado
        ) {
            tocarSom("relogio");
            alertaRelogioExecutado = true;
        }

        atualizarCronometro();

        if (CONFIG_JOGO.tempoRestante <= 0) {
            pararCronometro();
            verificarResposta(null, null);
        }
    }, 1000);
}

// ======================================================
// 12. ATUALIZAR VISUAL DO CRONÔMETRO
// ======================================================

function atualizarCronometro() {
    const visor = document.getElementById("cronometro");
    const barra = document.getElementById("barraTempo");

    if (visor) {
        visor.textContent =
            `TEMPO: ${CONFIG_JOGO.tempoRestante}s`;

        visor.classList.remove("tempo-atencao", "tempo-critico");

        if (CONFIG_JOGO.tempoRestante <= 10) {
            visor.classList.add("tempo-atencao");
        }

        if (CONFIG_JOGO.tempoRestante <= 5) {
            visor.classList.add("tempo-critico");
        }
    }

    if (barra) {
        const percentual =
            (CONFIG_JOGO.tempoRestante / CONFIG_JOGO.tempoPorPergunta) * 100;

        barra.style.width = `${percentual}%`;

        barra.classList.remove("barra-atencao", "barra-critica");

        if (CONFIG_JOGO.tempoRestante <= 10) {
            barra.classList.add("barra-atencao");
        }

        if (CONFIG_JOGO.tempoRestante <= 5) {
            barra.classList.add("barra-critica");
        }
    }
}

// ======================================================
// 13. PARAR CRONÔMETRO
// ======================================================

function pararCronometro() {
    if (CONFIG_JOGO.intervaloCronometro !== null) {
        clearInterval(CONFIG_JOGO.intervaloCronometro);

        CONFIG_JOGO.intervaloCronometro = null;
    }
}

// ======================================================
// 14. VERIFICAÇÃO DA RESPOSTA
// ======================================================

function verificarResposta(indiceEscolhido, botaoEscolhido) {
    if (CONFIG_JOGO.respostaSelecionada) {
        return;
    }

    CONFIG_JOGO.respostaSelecionada = true;

    pararCronometro();

    const pergunta = CONFIG_JOGO.perguntas[CONFIG_JOGO.perguntaAtual];

    const botoes = document.querySelectorAll(".alternativa");

    botoes.forEach(botao => {
        botao.disabled = true;
    });

    const feedback = document.getElementById("feedbackResposta");

    const acertou = indiceEscolhido === pergunta.respostaCorreta;

    if (acertou) {
        tocarSom("acerto");

        CONFIG_JOGO.pontuacao += CONFIG_JOGO.pontosPorAcerto;

        botaoEscolhido.classList.add("resposta-correta");

        feedback.innerHTML = `
            <h3>PARABÉNS! RESPOSTA CORRETA!</h3>
            <p>Você conquistou ${CONFIG_JOGO.pontosPorAcerto} pontos!</p>
        `;
    } else {
        tocarSom("erro");

        if (botaoEscolhido) {
            botaoEscolhido.classList.add("resposta-incorreta");
        }

        botoes[pergunta.respostaCorreta].classList.add("resposta-correta");

        if (indiceEscolhido === null) {
            feedback.innerHTML = `
                <h3>TEMPO ESGOTADO!</h3>
                <p>O relógio chegou a zero! Vamos à próxima pergunta.</p>
            `;
        } else {
            feedback.innerHTML = `
                <h3>QUE PENA! NÃO FOI DESSA VEZ.</h3>
                <p>A resposta correta está destacada acima.</p>
            `;
        }
    }

    // EXPLICAÇÃO DA RESPOSTA

    if (pergunta.explicacao) {
        const explicacao = document.createElement("p");

        explicacao.textContent = pergunta.explicacao;

        feedback.appendChild(explicacao);
    }

    // REFERÊNCIA BÍBLICA

    if (pergunta.referencia) {
        const referencia = document.createElement("p");

        referencia.textContent = `Referência: ${pergunta.referencia}`;

        feedback.appendChild(referencia);
    }

    // BOTÃO PARA AVANÇAR

    const botaoProxima = document.createElement("button");

    botaoProxima.type = "button";
    botaoProxima.className = "botao-principal";
    botaoProxima.textContent = "PRÓXIMA PERGUNTA";

    botaoProxima.addEventListener("click", avancarPergunta);

    feedback.appendChild(botaoProxima);

    atualizarPontuacao();
}

// ======================================================
// 15. ATUALIZAÇÃO DA PONTUAÇÃO
// ======================================================

function atualizarPontuacao() {
    const painel = document.querySelector(".painel-status");

    if (!painel) {
        return;
    }

    const itens = painel.querySelectorAll("p");

    if (itens.length >= 2) {
        itens[1].textContent =
            `Pontuação: ${CONFIG_JOGO.pontuacao} pontos`;
    }
}

// ======================================================
// 16. AVANÇAR PARA A PRÓXIMA PERGUNTA
// ======================================================

function avancarPergunta() {
    pararCronometro();

    tocarSom("transicao");

    CONFIG_JOGO.perguntaAtual++;

    exibirPergunta();
}

// ======================================================
// 17. FINALIZAÇÃO DA PARTIDA
// ======================================================

function finalizarPartida() {
    pararCronometro();

    CONFIG_JOGO.jogoFinalizado = true;

    tocarEncerramentoVitorioso();

    areaPerguntas.innerHTML = "";

    const resultado = document.createElement("div");
    resultado.className = "resultado-final";

    const titulo = document.createElement("h2");
    titulo.textContent = "DESAFIO CONCLUÍDO!";

    const saudacao = document.createElement("p");
    saudacao.textContent =
        `Parabéns, ${CONFIG_JOGO.participante}! Você concluiu esta jornada.`;

    const pontos = document.createElement("h3");
    pontos.textContent =
        `SUA PONTUAÇÃO: ${CONFIG_JOGO.pontuacao} PONTOS`;

    const mensagem = document.createElement("p");
    mensagem.textContent =
        "Continue estudando a Bíblia e aprendendo sobre os Embaixadores do Rei. O conhecimento é uma grande conquista!";

    const botaoReiniciar = document.createElement("button");

    botaoReiniciar.type = "button";
    botaoReiniciar.className = "botao-principal";
    botaoReiniciar.textContent = "JOGAR NOVAMENTE";

    botaoReiniciar.addEventListener("click", iniciarPartida);

    resultado.appendChild(titulo);
    resultado.appendChild(saudacao);
    resultado.appendChild(pontos);
    resultado.appendChild(mensagem);
    resultado.appendChild(botaoReiniciar);

    areaPerguntas.appendChild(resultado);
}

// ======================================================
// 18. CONFIGURAÇÃO DOS EVENTOS
// ======================================================

function configurarEventos() {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        iniciarDesafio();
    });

    campoNome.addEventListener("input", function() {
        campoNome.setCustomValidity("");
    });

    campoNome.addEventListener("focus", iniciarMusicaAmbiente);
}

// ======================================================
// AJUDA 50/50
// ======================================================

function usarAjuda5050() {
    tocarSom("clique");

    if (CONFIG_JOGO.ajuda5050Usada) {
        return;
    }

    if (CONFIG_JOGO.respostaSelecionada) {
        return;
    }

    const pergunta = CONFIG_JOGO.perguntas[
        CONFIG_JOGO.perguntaAtual
    ];

    const alternativas = areaPerguntas.querySelectorAll(
        ".alternativa"
    );

    if (!pergunta || alternativas.length !== 4) {
        console.error("Não foi possível utilizar a ajuda 50/50.");
        return;
    }

    const indiceCorreto = pergunta.respostaCorreta;

    const alternativasIncorretas = [];

    alternativas.forEach((botao, indice) => {
        if (indice !== indiceCorreto) {
            alternativasIncorretas.push(botao);
        }
    });

    // Embaralha as alternativas incorretas.

    alternativasIncorretas.sort(() => Math.random() - 0.5);

    // Esconde duas alternativas incorretas.

    alternativasIncorretas.slice(0, 2).forEach(botao => {
        botao.style.display = "none";
    });

    CONFIG_JOGO.ajuda5050Usada = true;

    const botaoAjuda = document.getElementById("botao5050");

    if (botaoAjuda) {
        botaoAjuda.disabled = true;
        botaoAjuda.textContent = "50/50 UTILIZADA";
    }
}

// ======================================================
// BOTÃO DA AJUDA 50/50
// ======================================================

function criarBotaoAjuda5050() {
    const botao = document.createElement("button");

    botao.id = "botao5050";
    botao.className = "botao-ajuda";
    botao.type = "button";
    botao.textContent = "50/50";

    botao.addEventListener("click", usarAjuda5050);

    if (CONFIG_JOGO.ajuda5050Usada) {
        botao.disabled = true;
        botao.textContent = "50/50 UTILIZADA";
    }

    areaPerguntas.appendChild(botao);
}

// ======================================================
// 19. INICIALIZAÇÃO DO SISTEMA
// ======================================================

function iniciarSistema() {
    if (!verificarElementos()) {
        return;
    }

    configurarEventos();

    console.log("SHOW DOS ER iniciado com sucesso!");
}

// ======================================================
// AJUDA DOS AMIGOS
// ======================================================

function usarAjudaAmigos() {
    tocarSom("clique");

    if (CONFIG_JOGO.ajudaAmigosUsada) {
        return;
    }

    if (CONFIG_JOGO.respostaSelecionada) {
        return;
    }

    const pergunta = CONFIG_JOGO.perguntas[
        CONFIG_JOGO.perguntaAtual
    ];

    if (!pergunta) {
        return;
    }

    const indiceCorreto = pergunta.respostaCorreta;

    // Sorteia se os amigos acertarão ou não.

    const amigosAcertam = Math.random() < 0.75;

    let indiceSugerido;

    if (amigosAcertam) {
        indiceSugerido = indiceCorreto;
    } else {
        const incorretas = [0, 1, 2, 3].filter(
            indice => indice !== indiceCorreto
        );

        indiceSugerido = incorretas[
            Math.floor(Math.random() * incorretas.length)
        ];
    }

    // Distribui as porcentagens.

    const porcentagens = [10, 10, 10, 10];

    porcentagens[indiceSugerido] = 70;

    let restante = 30;

    for (let i = 0; i < 4; i++) {
        if (i !== indiceSugerido) {
            const valor = Math.min(
                restante,
                Math.floor(Math.random() * 16)
            );

            porcentagens[i] += valor;
            restante -= valor;
        }
    }

    // Distribui qualquer percentual restante.

    for (let i = 0; restante > 0; i = (i + 1) % 4) {
        if (i !== indiceSugerido) {
            porcentagens[i]++;
            restante--;
        }
    }

    const letras = ["A", "B", "C", "D"];

    let resultado = `
        <div class="resultado-amigos">
            <h3>👥 OPINIÃO DA PLATEIA</h3>
            <p>Seus amigos acham que a resposta é:</p>
    `;

    for (let i = 0; i < 4; i++) {
        resultado += `
            <div class="linha-amigos">
                <span>Alternativa ${letras[i]}</span>
                <strong>${porcentagens[i]}%</strong>
            </div>
        `;
    }

    resultado += `
            <p class="aviso-amigos">
                Lembre-se: seus amigos também podem errar!
            </p>
        </div>
    `;

    const painel = document.createElement("div");

    painel.innerHTML = resultado;

    areaPerguntas.appendChild(painel);

    CONFIG_JOGO.ajudaAmigosUsada = true;

    const botaoAjuda = document.getElementById("botaoAmigos");

    if (botaoAjuda) {
        botaoAjuda.disabled = true;
        botaoAjuda.textContent = "AJUDA UTILIZADA";
    }
}

// ======================================================
// BOTÃO DA AJUDA DOS AMIGOS
// ======================================================

function criarBotaoAjudaAmigos() {
    const botao = document.createElement("button");

    botao.id = "botaoAmigos";
    botao.className = "botao-ajuda";
    botao.type = "button";
    botao.textContent = "👥 AJUDA DOS AMIGOS";

    botao.addEventListener("click", usarAjudaAmigos);

    if (CONFIG_JOGO.ajudaAmigosUsada) {
        botao.disabled = true;
        botao.textContent = "AJUDA UTILIZADA";
    }

    areaPerguntas.appendChild(botao);
}

// ======================================================
// 20. EXECUÇÃO
// ======================================================

iniciarSistema();
