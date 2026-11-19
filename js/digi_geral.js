"use strict";

// ==========================================================
// DIGITALIZA GERAL
// SCRIPTORIUM DIGITAL
// SISTEMA PRINCIPAL E BANCADA DE DIGITALIZAÇÃO
// VERSÃO 2.1 - ESTABILIZAÇÃO E EXPORTAÇÃO PDF
// ==========================================================


// ==========================================================
// 1. CADASTRO DE USUÁRIOS AUTORIZADOS
// ==========================================================

const usuariosAutorizados = [

    {
        usuario: "admin",
        senha: "1234",
        nome: "Administrador",
        nivel: "administrador"
    },

    {
        usuario: "conselheiro",
        senha: "1234",
        nome: "Conselheiro",
        nivel: "operador"
    }

];


// ==========================================================
// 2. ELEMENTOS DA INTERFACE
// ==========================================================

const telaLogin = document.getElementById("tela-login");

const plataformaPrincipal = document.getElementById(
    "plataforma-principal"
);

const formularioLogin = document.getElementById("form-login");

const campoUsuario = document.getElementById("usuario");

const campoSenha = document.getElementById("senha");

const mensagemLogin = document.getElementById("mensagem-login");

const nomeUsuario = document.getElementById("nome-usuario");


// ==========================================================
// 3. CONTROLE DE SESSÃO
// ==========================================================

const CHAVE_SESSAO = "digitaliza_geral_sessao";


// ==========================================================
// 4. ELEMENTOS DA BANCADA
// ==========================================================

const bancada = document.getElementById("bancada-digitalizacao");

const tituloBancada = document.getElementById("titulo-bancada");

const descricaoBancada = document.getElementById(
    "descricao-bancada"
);

const videoCamera = document.getElementById("video-camera");

const canvasCaptura = document.getElementById("canvas-captura");

const previewImagem = document.getElementById("preview-imagem");

const mensagemVisor = document.getElementById("mensagem-visor");

const inputImagem = document.getElementById("input-imagem");

const statusDigitalizacao = document.getElementById(
    "status-digitalizacao"
);

const listaPaginas = document.getElementById("lista-paginas");

const contadorPaginas = document.getElementById("contador-paginas");

const btnAtivarCamera = document.getElementById(
    "btn-ativar-camera"
);

const btnCapturar = document.getElementById("btn-capturar");

const btnDesligarCamera = document.getElementById(
    "btn-desligar-camera"
);

const btnAdicionarPagina = document.getElementById(
    "btn-adicionar-pagina"
);

const btnLimparPreview = document.getElementById(
    "btn-limpar-preview"
);


// ==========================================================
// 5. ELEMENTOS DE TRATAMENTO
// ==========================================================

const btnGirarEsquerda = document.getElementById(
    "btn-girar-esquerda"
);

const btnGirarDireita = document.getElementById(
    "btn-girar-direita"
);

const ajusteBrilho = document.getElementById("ajuste-brilho");

const ajusteContraste = document.getElementById(
    "ajuste-contraste"
);

const filtroPretoBranco = document.getElementById(
    "filtro-preto-branco"
);

const btnRestaurarAjustes = document.getElementById(
    "btn-restaurar-ajustes"
);


// ==========================================================
// 6. ELEMENTOS DE EXPORTAÇÃO PDF
// ==========================================================

const campoNomeArquivoPdf = document.getElementById(
    "nome-arquivo-pdf"
);

const btnGerarPdf = document.getElementById(
    "btn-gerar-pdf"
);

const btnGerarPdfsIndividuais = document.getElementById(
    "btn-gerar-pdfs-individuais"
);


// ==========================================================
// 7. VARIÁVEIS DE CONTROLE
// ==========================================================

let fluxoCamera = null;

let tipoMaterialAtual = "";

let imagemOriginal = null;

let imagemAtual = null;

let paginasCapturadas = [];

let anguloRotacao = 0;

let valorBrilho = 100;

let valorContraste = 100;

let pretoBrancoAtivado = false;

let exportacaoEmAndamento = false;

let sequenciaRenderizacao = 0;


// ==========================================================
// 8. ABERTURA DA PLATAFORMA
// ==========================================================

function abrirPlataforma(usuario) {

    telaLogin.hidden = true;

    plataformaPrincipal.hidden = false;

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    nomeUsuario.textContent = usuario.nome;

    sessionStorage.setItem(
        CHAVE_SESSAO,
        JSON.stringify({
            usuario: usuario.usuario,
            nome: usuario.nome,
            nivel: usuario.nivel
        })
    );

    console.log("Usuário conectado:", usuario.nome);

}


// ==========================================================
// 9. REALIZAÇÃO DO LOGIN
// ==========================================================

function realizarLogin(evento) {

    evento.preventDefault();

    const usuarioDigitado = campoUsuario.value
        .trim()
        .toLowerCase();

    const senhaDigitada = campoSenha.value;

    const usuarioEncontrado = usuariosAutorizados.find(
        usuario =>
            usuario.usuario.toLowerCase() === usuarioDigitado &&
            usuario.senha === senhaDigitada
    );

    if (!usuarioEncontrado) {

        mensagemLogin.textContent =
            "Usuário ou senha incorretos.";

        campoSenha.value = "";

        campoSenha.focus();

        return;

    }

    mensagemLogin.textContent = "";

    abrirPlataforma(usuarioEncontrado);

}


// ==========================================================
// 10. ENCERRAMENTO DA SESSÃO
// ==========================================================

function encerrarSessao() {

    desligarCamera();

    limparImagemAtual();

    paginasCapturadas = [];

    atualizarListaPaginas();

    sessionStorage.removeItem(CHAVE_SESSAO);

    plataformaPrincipal.hidden = true;

    bancada.hidden = true;

    telaLogin.hidden = false;

    campoUsuario.value = "";

    campoSenha.value = "";

    mensagemLogin.textContent = "";

    campoUsuario.focus();

    console.log("Sessão encerrada.");

}


// ==========================================================
// 11. RESTAURAÇÃO DA SESSÃO
// ==========================================================

function verificarSessao() {

    const sessaoSalva = sessionStorage.getItem(CHAVE_SESSAO);

    if (!sessaoSalva) {

        telaLogin.hidden = false;

        plataformaPrincipal.hidden = true;

        return;

    }

    try {

        const dadosSessao = JSON.parse(sessaoSalva);

        const usuarioEncontrado = usuariosAutorizados.find(
            usuario => usuario.usuario === dadosSessao.usuario
        );

        if (!usuarioEncontrado) {

            sessionStorage.removeItem(CHAVE_SESSAO);

            telaLogin.hidden = false;

            plataformaPrincipal.hidden = true;

            return;

        }

        abrirPlataforma(usuarioEncontrado);

    } catch (erro) {

        sessionStorage.removeItem(CHAVE_SESSAO);

        telaLogin.hidden = false;

        plataformaPrincipal.hidden = true;

        console.error(
            "Erro ao restaurar sessão:",
            erro
        );

    }

}


// ==========================================================
// 12. ABERTURA DA BANCADA
// ==========================================================

function iniciarDigitalizacao(tipo) {

    const ferramentas = {

        documentos: {
            titulo: "Digitalização de Documentos",
            descricao: "Capture e organize documentos para preservação digital."
        },

        livros: {
            titulo: "Digitalização de Livros",
            descricao: "Fotografe e organize as páginas de seus livros."
        },

        revistas: {
            titulo: "Digitalização de Revistas",
            descricao: "Preserve revistas e publicações em formato digital."
        },

        fotografias: {
            titulo: "Digitalização de Fotografias",
            descricao: "Importe e organize fotografias para preservação."
        },

        pdf: {
            titulo: "Organização de Arquivos PDF",
            descricao: "Prepare páginas para montagem de documentos PDF."
        },

        camera: {
            titulo: "Captura pela Câmera",
            descricao: "Utilize a câmera do dispositivo para fotografar páginas."
        }

    };

    const ferramentaSelecionada = ferramentas[tipo];

    if (!ferramentaSelecionada) {

        alert("Ferramenta não identificada.");

        return;

    }

    tipoMaterialAtual = tipo;

    tituloBancada.textContent = ferramentaSelecionada.titulo;

    descricaoBancada.textContent = ferramentaSelecionada.descricao;

    document.querySelectorAll(
        "#plataforma-principal main > section"
    ).forEach(secao => {

        if (secao !== bancada) {

            secao.hidden = true;

        }

    });

    bancada.hidden = false;

    desligarCamera();

    limparImagemAtual();

    restaurarAjustes();

    atualizarListaPaginas();

    statusDigitalizacao.textContent =
        "Bancada pronta para iniciar.";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    console.log(
        "Bancada aberta:",
        ferramentaSelecionada.titulo
    );

}


// ==========================================================
// 13. RETORNO À PÁGINA INICIAL
// ==========================================================

function voltarInicio() {

    desligarCamera();

    limparImagemAtual();

    bancada.hidden = true;

    document.querySelectorAll(
        "#plataforma-principal main > section"
    ).forEach(secao => {

        if (secao !== bancada) {

            secao.hidden = false;

        }

    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    console.log("Retorno à página inicial.");

}


// ==========================================================
// 14. ATIVAÇÃO DA CÂMERA
// ==========================================================

async function ativarCamera() {

    try {

        if (
            !navigator.mediaDevices ||
            !navigator.mediaDevices.getUserMedia
        ) {

            throw new Error(
                "O navegador não oferece acesso à câmera neste ambiente."
            );

        }

        desligarCamera();

        fluxoCamera = await navigator.mediaDevices.getUserMedia({

            video: {
                facingMode: {
                    ideal: "environment"
                }
            },

            audio: false

        });

        videoCamera.srcObject = fluxoCamera;

        videoCamera.hidden = false;

        previewImagem.hidden = true;

        mensagemVisor.hidden = true;

        await videoCamera.play();

        btnAtivarCamera.disabled = true;

        btnCapturar.disabled = false;

        btnDesligarCamera.disabled = false;

        statusDigitalizacao.textContent =
            "Câmera ativada. Posicione o documento para fotografar.";

    } catch (erro) {

        console.error(
            "Erro ao ativar câmera:",
            erro
        );

        desligarCamera();

        statusDigitalizacao.textContent =
            "Não foi possível ativar a câmera. Verifique as permissões do navegador e tente novamente.";

    }

}


// ==========================================================
// 15. DESLIGAMENTO DA CÂMERA
// ==========================================================

function desligarCamera() {

    if (fluxoCamera) {

        fluxoCamera.getTracks().forEach(track => {

            track.stop();

        });

        fluxoCamera = null;

    }

    videoCamera.srcObject = null;

    videoCamera.hidden = true;

    btnAtivarCamera.disabled = false;

    btnCapturar.disabled = true;

    btnDesligarCamera.disabled = true;

}


// ==========================================================
// 16. CAPTURA DE PÁGINA
// ==========================================================

function capturarPagina() {

    if (
        !fluxoCamera ||
        videoCamera.videoWidth === 0
    ) {

        statusDigitalizacao.textContent =
            "Aguarde a câmera estar pronta para capturar.";

        return;

    }

    canvasCaptura.width = videoCamera.videoWidth;

    canvasCaptura.height = videoCamera.videoHeight;

    const contexto = canvasCaptura.getContext("2d");

    if (!contexto) {

        statusDigitalizacao.textContent =
            "Não foi possível preparar a área de captura.";

        return;

    }

    contexto.drawImage(
        videoCamera,
        0,
        0,
        canvasCaptura.width,
        canvasCaptura.height
    );

    prepararImagemAtual(
        canvasCaptura.toDataURL("image/jpeg", 0.92)
    );

    statusDigitalizacao.textContent =
        "Fotografia capturada. Você já pode tratar a imagem.";

}


// ==========================================================
// 17. IMPORTAÇÃO DE IMAGENS
// ==========================================================

function importarImagem(evento) {

    const arquivo = evento.target.files[0];

    if (!arquivo) {

        return;

    }

    if (!arquivo.type.startsWith("image/")) {

        statusDigitalizacao.textContent =
            "Selecione um arquivo de imagem válido.";

        inputImagem.value = "";

        return;

    }

    const leitor = new FileReader();

    leitor.onload = function(resultado) {

        if (typeof resultado.target.result !== "string") {

            statusDigitalizacao.textContent =
                "Não foi possível interpretar o arquivo selecionado.";

            return;

        }

        prepararImagemAtual(resultado.target.result);

        statusDigitalizacao.textContent =
            "Imagem importada. Utilize as ferramentas para aperfeiçoá-la.";

    };

    leitor.onerror = function() {

        statusDigitalizacao.textContent =
            "Não foi possível importar esta imagem.";

    };

    leitor.readAsDataURL(arquivo);

    inputImagem.value = "";

}


// ==========================================================
// 18. PREPARAÇÃO DA IMAGEM ORIGINAL
// ==========================================================

function prepararImagemAtual(dadosImagem) {

    imagemOriginal = dadosImagem;

    imagemAtual = null;

    anguloRotacao = 0;

    valorBrilho = 100;

    valorContraste = 100;

    pretoBrancoAtivado = false;

    atualizarControlesTratamento();

    renderizarTratamento();

}


// ==========================================================
// 19. ATUALIZAÇÃO DOS CONTROLES
// ==========================================================

function atualizarControlesTratamento() {

    ajusteBrilho.value = valorBrilho;

    ajusteContraste.value = valorContraste;

    filtroPretoBranco.checked = pretoBrancoAtivado;

}


// ==========================================================
// 20. RENDERIZAÇÃO DOS AJUSTES
// ==========================================================

function renderizarTratamento() {

    if (!imagemOriginal) {

        return;

    }

    const numeroRenderizacao = ++sequenciaRenderizacao;

    const imagem = new Image();

    imagem.onload = function() {

        // DESCARTA RESULTADOS ANTIGOS DE PROCESSAMENTO.

        if (numeroRenderizacao !== sequenciaRenderizacao) {

            return;

        }

        const canvas = canvasCaptura;

        const contexto = canvas.getContext("2d");

        if (!contexto) {

            statusDigitalizacao.textContent =
                "Não foi possível processar a imagem.";

            return;

        }

        const rotacaoNormalizada =
            ((anguloRotacao % 360) + 360) % 360;

        const trocaDimensoes =
            rotacaoNormalizada === 90 ||
            rotacaoNormalizada === 270;

        if (trocaDimensoes) {

            canvas.width = imagem.naturalHeight;

            canvas.height = imagem.naturalWidth;

        } else {

            canvas.width = imagem.naturalWidth;

            canvas.height = imagem.naturalHeight;

        }

        contexto.save();

        contexto.translate(
            canvas.width / 2,
            canvas.height / 2
        );

        contexto.rotate(
            rotacaoNormalizada * Math.PI / 180
        );

        let filtro = "";

        filtro += `brightness(${valorBrilho}%) `;

        filtro += `contrast(${valorContraste}%) `;

        if (pretoBrancoAtivado) {

            filtro += "grayscale(100%)";

        }

        contexto.filter = filtro.trim();

        contexto.drawImage(
            imagem,
            -imagem.naturalWidth / 2,
            -imagem.naturalHeight / 2
        );

        contexto.restore();

        imagemAtual = canvas.toDataURL(
            "image/jpeg",
            0.94
        );

        previewImagem.hidden = false;

        previewImagem.src = imagemAtual;

        videoCamera.hidden = true;

        mensagemVisor.hidden = true;

        btnAdicionarPagina.disabled = false;

        btnLimparPreview.disabled = false;

        btnRestaurarAjustes.disabled = false;

    };

    imagem.onerror = function() {

        if (numeroRenderizacao !== sequenciaRenderizacao) {

            return;

        }

        statusDigitalizacao.textContent =
            "Erro ao processar a imagem.";

    };

    imagem.src = imagemOriginal;

}


// ==========================================================
// 21. ROTAÇÃO PARA A ESQUERDA
// ==========================================================

function girarEsquerda() {

    if (!imagemOriginal) {

        return;

    }

    anguloRotacao -= 90;

    renderizarTratamento();

    statusDigitalizacao.textContent =
        "Imagem girada para a esquerda.";

}


// ==========================================================
// 22. ROTAÇÃO PARA A DIREITA
// ==========================================================

function girarDireita() {

    if (!imagemOriginal) {

        return;

    }

    anguloRotacao += 90;

    renderizarTratamento();

    statusDigitalizacao.textContent =
        "Imagem girada para a direita.";

}


// ==========================================================
// 23. AJUSTE DE BRILHO
// ==========================================================

function alterarBrilho() {

    if (!imagemOriginal) {

        return;

    }

    valorBrilho = Number(ajusteBrilho.value);

    renderizarTratamento();

    statusDigitalizacao.textContent =
        "Brilho da imagem atualizado.";

}


// ==========================================================
// 24. AJUSTE DE CONTRASTE
// ==========================================================

function alterarContraste() {

    if (!imagemOriginal) {

        return;

    }

    valorContraste = Number(ajusteContraste.value);

    renderizarTratamento();

    statusDigitalizacao.textContent =
        "Contraste da imagem atualizado.";

}


// ==========================================================
// 25. FILTRO PRETO E BRANCO
// ==========================================================

function alterarFiltro() {

    if (!imagemOriginal) {

        return;

    }

    pretoBrancoAtivado = filtroPretoBranco.checked;

    renderizarTratamento();

    statusDigitalizacao.textContent =
        pretoBrancoAtivado
            ? "Filtro preto e branco aplicado."
            : "Filtro preto e branco removido.";

}


// ==========================================================
// 26. RESTAURAR IMAGEM ORIGINAL
// ==========================================================

function restaurarAjustes() {

    anguloRotacao = 0;

    valorBrilho = 100;

    valorContraste = 100;

    pretoBrancoAtivado = false;

    atualizarControlesTratamento();

    if (imagemOriginal) {

        renderizarTratamento();

        statusDigitalizacao.textContent =
            "Imagem original restaurada.";

    }

}


// ==========================================================
// 27. LIMPEZA DA IMAGEM ATUAL
// ==========================================================

function limparImagemAtual() {

    // INVALIDA EVENTUAIS PROCESSAMENTOS PENDENTES.

    sequenciaRenderizacao++;

    imagemOriginal = null;

    imagemAtual = null;

    anguloRotacao = 0;

    valorBrilho = 100;

    valorContraste = 100;

    pretoBrancoAtivado = false;

    previewImagem.onload = null;

    previewImagem.src = "";

    previewImagem.hidden = true;

    mensagemVisor.hidden = false;

    btnAdicionarPagina.disabled = true;

    btnLimparPreview.disabled = true;

    btnRestaurarAjustes.disabled = true;

    atualizarControlesTratamento();

    if (fluxoCamera) {

        videoCamera.hidden = false;

    } else {

        videoCamera.hidden = true;

    }

}


// ==========================================================
// 28. ADICIONAR IMAGEM À COLEÇÃO
// ==========================================================

function adicionarPagina() {

    if (!imagemAtual) {

        statusDigitalizacao.textContent =
            "Nenhuma imagem preparada para adicionar.";

        return;

    }

    const novaPagina = {

        id: Date.now() + Math.random(),

        imagem: imagemAtual,

        tipo: tipoMaterialAtual

    };

    paginasCapturadas.push(novaPagina);

    atualizarListaPaginas();

    limparImagemAtual();

    statusDigitalizacao.textContent =
        "Página adicionada à coleção. Total: " +
        paginasCapturadas.length +
        " página(s).";

}


// ==========================================================
// 29. ATUALIZAÇÃO DOS BOTÕES DE EXPORTAÇÃO
// ==========================================================

function atualizarBotoesExportacao() {

    const existemPaginas = paginasCapturadas.length > 0;

    const exportando = exportacaoEmAndamento;

    btnGerarPdf.disabled =
        !existemPaginas || exportando;

    btnGerarPdfsIndividuais.disabled =
        !existemPaginas || exportando;

}


// ==========================================================
// 30. ATUALIZAÇÃO DA LISTA DE PÁGINAS
// ==========================================================

function atualizarListaPaginas() {

    listaPaginas.innerHTML = "";

    if (paginasCapturadas.length === 0) {

        const vazio = document.createElement("div");

        vazio.className = "colecao-vazia";

        vazio.innerHTML = `
            <span>▤</span>
            <p>Nenhuma página adicionada.</p>
        `;

        listaPaginas.appendChild(vazio);

    }

    paginasCapturadas.forEach((pagina, indice) => {

        const miniatura = document.createElement("div");

        miniatura.className = "miniatura-pagina";

        const imagem = document.createElement("img");

        imagem.src = pagina.imagem;

        imagem.alt = "Página " + (indice + 1);

        const identificacao = document.createElement("p");

        identificacao.textContent =
            "Página " + (indice + 1);

        const botaoExcluir = document.createElement("button");

        botaoExcluir.type = "button";

        botaoExcluir.textContent = "Excluir página";

        botaoExcluir.addEventListener("click", function() {

            excluirPagina(pagina.id);

        });

        miniatura.appendChild(imagem);

        miniatura.appendChild(identificacao);

        miniatura.appendChild(botaoExcluir);

        listaPaginas.appendChild(miniatura);

    });

    contadorPaginas.textContent = paginasCapturadas.length;

    atualizarBotoesExportacao();

}


// ==========================================================
// 31. EXCLUIR PÁGINA
// ==========================================================

function excluirPagina(id) {

    if (exportacaoEmAndamento) {

        statusDigitalizacao.textContent =
            "Aguarde o término da exportação para alterar a coleção.";

        return;

    }

    paginasCapturadas = paginasCapturadas.filter(
        pagina => pagina.id !== id
    );

    atualizarListaPaginas();

    statusDigitalizacao.textContent =
        "Página removida da coleção.";

}


// ==========================================================
// 32. PREPARAÇÃO DO NOME DO ARQUIVO
// ==========================================================

function obterNomeArquivoPdf() {

    let nome = campoNomeArquivoPdf.value.trim();

    if (!nome) {

        nome = "digitalizacao";

    }

    nome = nome
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9_-]+/g, "_")
        .replace(/^_+|_+$/g, "");

    return nome || "digitalizacao";

}


// ==========================================================
// 33. CARREGAMENTO DE IMAGEM PARA PDF
// ==========================================================

function carregarImagemParaPdf(dadosImagem) {

    return new Promise((resolve, reject) => {

        const imagem = new Image();

        imagem.onload = function() {

            resolve(imagem);

        };

        imagem.onerror = function() {

            reject(
                new Error("Não foi possível carregar uma página.")
            );

        };

        imagem.src = dadosImagem;

    });

}


// ==========================================================
// 34. VERIFICAÇÃO DA BIBLIOTECA PDF
// ==========================================================

function verificarBibliotecaPdf() {

    if (
        !window.jspdf ||
        !window.jspdf.jsPDF
    ) {

        statusDigitalizacao.textContent =
            "Biblioteca PDF não carregada. Verifique sua conexão com a internet.";

        return false;

    }

    return true;

}


// ==========================================================
// 35. INÍCIO E FIM DA EXPORTAÇÃO
// ==========================================================

function iniciarExportacao() {

    if (exportacaoEmAndamento) {

        return false;

    }

    exportacaoEmAndamento = true;

    atualizarBotoesExportacao();

    return true;

}


function finalizarExportacao() {

    exportacaoEmAndamento = false;

    atualizarBotoesExportacao();

}


// ==========================================================
// 36. GERAR PDF COMPLETO
// ==========================================================

async function gerarPdfCompleto() {

    if (paginasCapturadas.length === 0) {

        statusDigitalizacao.textContent =
            "Adicione páginas à coleção antes de gerar o PDF.";

        return;

    }

    if (!verificarBibliotecaPdf()) {

        return;

    }

    if (!iniciarExportacao()) {

        return;

    }

    statusDigitalizacao.textContent =
        "Preparando documento PDF...";

    try {

        const { jsPDF } = window.jspdf;

        const primeiraImagem = await carregarImagemParaPdf(
            paginasCapturadas[0].imagem
        );

        const larguraInicial =
            primeiraImagem.naturalWidth * 0.75;

        const alturaInicial =
            primeiraImagem.naturalHeight * 0.75;

        const orientacaoInicial =
            larguraInicial >= alturaInicial
                ? "landscape"
                : "portrait";

        const pdf = new jsPDF({

            orientation: orientacaoInicial,

            unit: "pt",

            format: [larguraInicial, alturaInicial],

            compress: true

        });

        for (
            let indice = 0;
            indice < paginasCapturadas.length;
            indice++
        ) {

            const pagina = paginasCapturadas[indice];

            const imagem = await carregarImagemParaPdf(
                pagina.imagem
            );

            const largura = imagem.naturalWidth * 0.75;

            const altura = imagem.naturalHeight * 0.75;

            const orientacao =
                largura >= altura ? "landscape" : "portrait";

            if (indice > 0) {

                pdf.addPage(
                    [largura, altura],
                    orientacao
                );

            }

            pdf.addImage(
                pagina.imagem,
                "JPEG",
                0,
                0,
                largura,
                altura,
                undefined,
                "FAST"
            );

            statusDigitalizacao.textContent =
                "Preparando página " +
                (indice + 1) +
                " de " +
                paginasCapturadas.length +
                "...";

        }

        const nomeArquivo =
            obterNomeArquivoPdf() + ".pdf";

        pdf.save(nomeArquivo);

        statusDigitalizacao.textContent =
            "PDF completo preparado para download! " +
            paginasCapturadas.length +
            " página(s).";

    } catch (erro) {

        console.error(
            "Erro ao gerar PDF completo:",
            erro
        );

        statusDigitalizacao.textContent =
            "Não foi possível gerar o PDF. Tente novamente.";

    } finally {

        finalizarExportacao();

    }

}


// ==========================================================
// 37. GERAR PDFs INDIVIDUAIS
// ==========================================================

async function gerarPdfsIndividuais() {

    if (paginasCapturadas.length === 0) {

        statusDigitalizacao.textContent =
            "Adicione páginas à coleção antes de exportar.";

        return;

    }

    if (!verificarBibliotecaPdf()) {

        return;

    }

    if (!iniciarExportacao()) {

        return;

    }

    const nomeBase = obterNomeArquivoPdf();

    try {

        const { jsPDF } = window.jspdf;

        for (
            let indice = 0;
            indice < paginasCapturadas.length;
            indice++
        ) {

            const numeroPagina = String(indice + 1).padStart(3, "0");

            const nomeArquivo =
                nomeBase + "_pagina_" + numeroPagina + ".pdf";

            statusDigitalizacao.textContent =
                "Gerando PDF da página " +
                (indice + 1) +
                " de " +
                paginasCapturadas.length +
                "...";

            const imagem = await carregarImagemParaPdf(
                paginasCapturadas[indice].imagem
            );

            const largura = imagem.naturalWidth * 0.75;

            const altura = imagem.naturalHeight * 0.75;

            const orientacao =
                largura >= altura ? "landscape" : "portrait";

            const pdf = new jsPDF({

                orientation: orientacao,

                unit: "pt",

                format: [largura, altura],

                compress: true

            });

            pdf.addImage(
                paginasCapturadas[indice].imagem,
                "JPEG",
                0,
                0,
                largura,
                altura,
                undefined,
                "FAST"
            );

            pdf.save(nomeArquivo);

            // PEQUENO INTERVALO ENTRE OS DOWNLOADS.

            if (indice < paginasCapturadas.length - 1) {

                await new Promise(resolve => {

                    setTimeout(resolve, 1200);

                });

            }

        }

        statusDigitalizacao.textContent =
            "Exportação individual concluída. " +
            paginasCapturadas.length +
            " arquivo(s) preparado(s).";

    } catch (erro) {

        console.error(
            "Erro ao gerar PDFs individuais:",
            erro
        );

        statusDigitalizacao.textContent =
            "Ocorreu um erro durante a geração dos PDFs individuais.";

    } finally {

        finalizarExportacao();

    }

}


// ==========================================================
// 38. INICIALIZAÇÃO DO SISTEMA
// ==========================================================

function inicializarSistema() {

    console.log("DIGITALIZA GERAL iniciado.");

    verificarSessao();


    // LOGIN

    formularioLogin.addEventListener(
        "submit",
        realizarLogin
    );


    // CÂMERA

    btnAtivarCamera.addEventListener(
        "click",
        ativarCamera
    );

    btnCapturar.addEventListener(
        "click",
        capturarPagina
    );

    btnDesligarCamera.addEventListener(
        "click",
        desligarCamera
    );


    // IMAGENS

    btnAdicionarPagina.addEventListener(
        "click",
        adicionarPagina
    );

    btnLimparPreview.addEventListener(
        "click",
        limparImagemAtual
    );

    inputImagem.addEventListener(
        "change",
        importarImagem
    );


    // ROTAÇÃO

    btnGirarEsquerda.addEventListener(
        "click",
        girarEsquerda
    );

    btnGirarDireita.addEventListener(
        "click",
        girarDireita
    );


    // BRILHO E CONTRASTE

    ajusteBrilho.addEventListener(
        "input",
        alterarBrilho
    );

    ajusteContraste.addEventListener(
        "input",
        alterarContraste
    );


    // FILTRO

    filtroPretoBranco.addEventListener(
        "change",
        alterarFiltro
    );


    // RESTAURAÇÃO

    btnRestaurarAjustes.addEventListener(
        "click",
        restaurarAjustes
    );


    // EXPORTAÇÃO PDF

    btnGerarPdf.addEventListener(
        "click",
        gerarPdfCompleto
    );

    btnGerarPdfsIndividuais.addEventListener(
        "click",
        gerarPdfsIndividuais
    );


    // COLEÇÃO

    atualizarListaPaginas();

    atualizarBotoesExportacao();

}


// ==========================================================
// 39. EXECUÇÃO DO SISTEMA
// ==========================================================

document.addEventListener(
    "DOMContentLoaded",
    inicializarSistema
);
