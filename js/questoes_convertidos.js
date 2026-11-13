"use strict";

const QUESTOES_CONVERTIDOS = {
    modulo01: {
        titulo: "As Escrituras Sagradas",
        descricao: "Conhecendo a Palavra de Deus.",
        totalQuestoes: 10,
        questoes: [
            {
                id: 1,
                nivel: "Facil",
                pergunta: "O que são as Escrituras Sagradas?",
                alternativas: [
                    "Um conjunto de histórias inventadas pelos homens.",
                    "A revelação de Deus aos seres humanos.",
                    "Um livro que contém apenas regras religiosas.",
                    "Uma coleção de pensamentos filosóficos."
                ],
                correta: 1,
                explicacao:
                    "As Escrituras Sagradas são a revelação de Deus aos homens. Por meio delas, conhecemos sua vontade, seu caráter e seu propósito para a humanidade.",
                referencia: "2 Timóteo 3:16-17"
            },
            {
                id: 2,
                nivel: "Facil",
                pergunta: "Quem é o verdadeiro autor das Escrituras Sagradas, segundo o ensino bíblico?",
                alternativas: [
                    "Os reis de Israel.",
                    "Os líderes das primeiras igrejas.",
                    "Deus, que inspirou os escritores humanos.",
                    "Os filósofos da antiguidade."
                ],
                correta: 2,
                explicacao:
                    "A Bíblia ensina que toda a Escritura é inspirada por Deus. Ele utilizou pessoas para registrar sua mensagem, conduzindo os escritores pelo Espírito Santo.",
                referencia: "2 Timóteo 3:16; 2 Pedro 1:20-21"
            },
            {
                id: 3,
                nivel: "Facil",
                pergunta: "Quantas partes principais formam a Bíblia?",
                alternativas: [
                    "Duas: Antigo Testamento e Novo Testamento.",
                    "Três: Lei, Profetas e Evangelhos.",
                    "Quatro: História, Poesia, Cartas e Profecias.",
                    "Cinco: Evangelhos, Atos, Cartas, Salmos e Apocalipse."
                ],
                correta: 0,
                explicacao:
                    "A Bíblia está organizada em duas grandes partes: o Antigo Testamento e o Novo Testamento. Juntas, apresentam a revelação de Deus e seu plano de salvação.",
                referencia: "Lucas 24:44-45"
            },
            {
                id: 4,
                nivel: "Facil",
                pergunta: "Qual deve ser a autoridade final do cristão em matéria de fé e prática?",
                alternativas: [
                    "A opinião da maioria das pessoas.",
                    "A tradição cultural de cada povo.",
                    "A opinião pessoal de cada cristão.",
                    "As Escrituras Sagradas."
                ],
                correta: 3,
                explicacao:
                    "As Escrituras Sagradas são a autoridade única e final em matéria de fé e prática. O cristão deve orientar sua vida pelos ensinamentos da Palavra de Deus.",
                referencia: "Isaías 8:20; 2 Timóteo 3:16-17"
            },
            {
                id: 5,
                nivel: "Medio",
                pergunta: "Segundo 2 Timóteo 3:16, para que a Escritura é útil?",
                alternativas: [
                    "Somente para contar acontecimentos antigos.",
                    "Para ensinar, repreender, corrigir e instruir na justiça.",
                    "Apenas para ser lida durante os cultos.",
                    "Somente para orientar os líderes religiosos."
                ],
                correta: 1,
                explicacao:
                    "A Palavra de Deus ensina a verdade, mostra o erro, corrige o caminho e educa o cristão para viver de maneira justa diante de Deus.",
                referencia: "2 Timóteo 3:16"
            },
            {
                id: 6,
                nivel: "Medio",
                pergunta: "De acordo com 2 Pedro 1:21, como os homens falaram da parte de Deus?",
                alternativas: [
                    "Por iniciativa exclusiva de sua própria vontade.",
                    "Por meio de sonhos inventados.",
                    "Movidos pelo Espírito Santo.",
                    "Por determinação dos governantes."
                ],
                correta: 2,
                explicacao:
                    "A profecia nunca teve origem na vontade humana. Os homens falaram da parte de Deus sendo conduzidos pelo Espírito Santo.",
                referencia: "2 Pedro 1:20-21"
            },
            {
                id: 7,
                nivel: "Medio",
                pergunta: "Segundo o Salmo 119:105, o que a Palavra de Deus representa para nossa vida?",
                alternativas: [
                    "Uma lâmpada para os pés e luz para o caminho.",
                    "Uma tradição que deve ser preservada sem compreensão.",
                    "Um livro destinado somente aos estudiosos.",
                    "Uma coleção de conselhos humanos."
                ],
                correta: 0,
                explicacao:
                    "A Palavra de Deus ilumina nosso caminho, orienta nossas decisões e nos ajuda a viver de acordo com a vontade do Senhor.",
                referencia: "Salmo 119:105"
            },
            {
                id: 8,
                nivel: "Medio",
                pergunta: "Qual deve ser a atitude do cristão diante da Palavra de Deus?",
                alternativas: [
                    "Ler somente os textos que concordam com suas opiniões.",
                    "Conhecê-la, estudá-la e praticar seus ensinamentos.",
                    "Deixá-la exclusivamente para os pastores estudarem.",
                    "Utilizá-la apenas quando enfrentar dificuldades."
                ],
                correta: 1,
                explicacao:
                    "O cristão deve conhecer e praticar a Palavra de Deus. Não basta apenas ouvir seus ensinamentos; é necessário colocá-los em prática.",
                referencia: "Tiago 1:22-25"
            },
            {
                id: 9,
                nivel: "Desafio",
                pergunta: "Segundo João 17:17, o que Jesus declarou sobre a Palavra de Deus?",
                alternativas: [
                    "Que ela é apenas uma tradição dos antigos.",
                    "Que ela pode ser modificada conforme a cultura.",
                    "Que ela é a verdade.",
                    "Que ela serve somente para os discípulos daquela época."
                ],
                correta: 2,
                explicacao:
                    "Jesus declarou ao Pai: 'A tua palavra é a verdade'. Essa declaração destaca a verdade da Palavra de Deus e sua importância para a vida dos discípulos.",
                referencia: "João 17:17"
            },
            {
                id: 10,
                nivel: "Desafio",
                pergunta: "De acordo com a Declaração Doutrinária da CBB, qual é a importância das Escrituras Sagradas para a fé cristã?",
                alternativas: [
                    "São uma referência religiosa entre várias autoridades equivalentes.",
                    "São a revelação de Deus aos homens e a autoridade única e final em matéria de fé e prática.",
                    "São importantes apenas para compreender a história do povo de Israel.",
                    "São utilizadas somente para orientar as cerimônias da igreja."
                ],
                correta: 1,
                explicacao:
                    "A Declaração Doutrinária da Convenção Batista Brasileira ensina que as Escrituras Sagradas são a revelação de Deus aos homens, inspiradas por Deus e autoridade única e final em matéria de fé e prática.",
                referencia: "Declaração Doutrinária da CBB — Artigo I; 2 Timóteo 3:16-17"
            }
        ]
    },

    modulo02: {
        titulo: "Deus",
        descricao: "Conhecendo o Deus único, verdadeiro e eterno.",
        totalQuestoes: 10,
        questoes: [
            {
                id: 1,
                nivel: "Facil",
                pergunta: "Segundo o ensino bíblico, quantos deuses verdadeiros existem?",
                alternativas: [
                    "Um único Deus verdadeiro.",
                    "Três deuses independentes.",
                    "Muitos deuses com poderes diferentes.",
                    "Um deus para cada povo."
                ],
                correta: 0,
                explicacao:
                    "A Bíblia ensina que existe um só Deus verdadeiro. Ele é único, eterno e soberano sobre toda a criação.",
                referencia: "Deuteronômio 6:4; Isaías 45:5"
            },
            {
                id: 2,
                nivel: "Facil",
                pergunta: "Como a Bíblia apresenta a natureza de Deus em João 4:24?",
                alternativas: [
                    "Deus é uma força da natureza.",
                    "Deus é um ser humano glorificado.",
                    "Deus é Espírito.",
                    "Deus é uma energia impessoal."
                ],
                correta: 2,
                explicacao:
                    "Jesus ensinou que Deus é Espírito. Isso significa que Deus não possui natureza física como os seres humanos e não está limitado a um corpo material.",
                referencia: "João 4:24"
            },
            {
                id: 3,
                nivel: "Facil",
                pergunta: "Quem criou todas as coisas?",
                alternativas: [
                    "Os anjos.",
                    "Deus.",
                    "Os seres humanos.",
                    "A própria natureza."
                ],
                correta: 1,
                explicacao:
                    "Deus é o Criador de todas as coisas. O universo e tudo o que nele existe devem sua existência ao poder e à vontade de Deus.",
                referencia: "Gênesis 1:1; Apocalipse 4:11"
            },
            {
                id: 4,
                nivel: "Facil",
                pergunta: "Qual das alternativas apresenta corretamente um atributo de Deus?",
                alternativas: [
                    "Deus é limitado pelo tempo e pelo espaço.",
                    "Deus depende dos seres humanos para existir.",
                    "Deus pode cometer erros.",
                    "Deus é eterno e não tem princípio nem fim."
                ],
                correta: 3,
                explicacao:
                    "Deus é eterno. Diferentemente de todas as criaturas, Ele não teve começo e não terá fim. Sua existência não depende de ninguém.",
                referencia: "Salmo 90:2; Apocalipse 1:8"
            },
            {
                id: 5,
                nivel: "Medio",
                pergunta: "O que significa dizer que Deus é onisciente?",
                alternativas: [
                    "Que Deus conhece todas as coisas.",
                    "Que Deus está presente somente no céu.",
                    "Que Deus possui força limitada.",
                    "Que Deus aprende com os acontecimentos."
                ],
                correta: 0,
                explicacao:
                    "A onisciência significa que Deus possui conhecimento perfeito e completo. Nada está escondido diante dele.",
                referencia: "Salmo 139:1-4; 1 João 3:20"
            },
            {
                id: 6,
                nivel: "Medio",
                pergunta: "O que significa afirmar que Deus é onipresente?",
                alternativas: [
                    "Que Deus pode estar em apenas um lugar por vez.",
                    "Que Deus está presente em todos os lugares.",
                    "Que Deus depende de templos para estar presente.",
                    "Que Deus está limitado ao céu."
                ],
                correta: 1,
                explicacao:
                    "Deus não está limitado pelas dimensões físicas do universo. Sua presença alcança toda a criação.",
                referencia: "Salmo 139:7-10; Jeremias 23:23-24"
            },
            {
                id: 7,
                nivel: "Medio",
                pergunta: "O que significa afirmar que Deus é onipotente?",
                alternativas: [
                    "Que Deus conhece somente o passado.",
                    "Que Deus precisa da ajuda dos anjos para agir.",
                    "Que Deus possui todo o poder e é capaz de realizar tudo o que está de acordo com sua natureza e vontade.",
                    "Que Deus está sujeito às leis criadas pelos seres humanos."
                ],
                correta: 2,
                explicacao:
                    "A onipotência significa que Deus possui poder absoluto. Nada é impossível para Ele dentro de sua natureza perfeita e de sua vontade soberana.",
                referencia: "Gênesis 18:14; Lucas 1:37"
            },
            {
                id: 8,
                nivel: "Medio",
                pergunta: "O que a doutrina da Trindade ensina sobre Deus?",
                alternativas: [
                    "Que existem três deuses diferentes.",
                    "Que Deus muda de personalidade em diferentes épocas.",
                    "Que o Pai, o Filho e o Espírito Santo são apenas três nomes de uma mesma pessoa.",
                    "Que existe um só Deus em três pessoas distintas: Pai, Filho e Espírito Santo."
                ],
                correta: 3,
                explicacao:
                    "A doutrina da Trindade ensina que Deus é único em sua essência e subsiste eternamente em três pessoas distintas: Pai, Filho e Espírito Santo. Não são três deuses, mas um só Deus.",
                referencia: "Mateus 28:19; 2 Coríntios 13:13"
            },
            {
                id: 9,
                nivel: "Desafio",
                pergunta: "Segundo Mateus 3:16-17, o que aconteceu no batismo de Jesus que demonstra a distinção entre as pessoas da Trindade?",
                alternativas: [
                    "Jesus declarou que não existia o Espírito Santo.",
                    "Jesus estava sendo batizado, o Espírito de Deus desceu como pomba e a voz do Pai foi ouvida do céu.",
                    "O Pai se transformou em Jesus.",
                    "Somente Jesus estava presente naquela ocasião."
                ],
                correta: 1,
                explicacao:
                    "No batismo de Jesus, o Filho foi batizado, o Espírito Santo desceu sobre Ele e o Pai falou do céu. Esse acontecimento apresenta as três pessoas da Trindade em ação.",
                referencia: "Mateus 3:16-17"
            },
            {
                id: 10,
                nivel: "Desafio",
                pergunta: "De acordo com o ensino bíblico, qual deve ser a resposta do ser humano diante de Deus, seu Criador?",
                alternativas: [
                    "Adorar somente a Deus, amá-lo e obedecer à sua vontade.",
                    "Adorar qualquer criatura que considere poderosa.",
                    "Reconhecer Deus apenas quando precisar de ajuda.",
                    "Colocar a vontade humana acima da vontade de Deus."
                ],
                correta: 0,
                explicacao:
                    "Deus é o Criador e Senhor de todas as coisas. Por isso, devemos dedicar a Ele nossa adoração, amor, reverência e obediência.",
                referencia: "Mateus 4:10; Apocalipse 4:11"
            }
        ]
    },

    modulo03: {
        titulo: "Deus Filho",
        descricao: "Conhecendo a pessoa, a natureza e a obra salvadora de Jesus Cristo.",
        totalQuestoes: 10,
        questoes: [
            {
                id: 1,
                nivel: "Facil",
                pergunta: "Quem é Jesus Cristo segundo o ensino das Escrituras?",
                alternativas: [
                    "Um profeta que viveu no passado",
                    "O Filho de Deus, plenamente divino",
                    "Um anjo enviado por Deus",
                    "Um grande mestre religioso"
                ],
                correta: 1,
                explicacao: "Jesus Cristo é o Filho de Deus e possui natureza divina. Ele não é apenas um mestre ou profeta, mas o próprio Deus Filho.",
                referencia: "João 1:1-3; João 20:28"
            },
            {
                id: 2,
                nivel: "Facil",
                pergunta: "O que significa dizer que Jesus se encarnou?",
                alternativas: [
                    "Que deixou de existir antes de nascer",
                    "Que se tornou um anjo",
                    "Que assumiu a natureza humana e habitou entre nós",
                    "Que apareceu apenas em sonhos"
                ],
                correta: 2,
                explicacao: "A encarnação significa que o Filho de Deus assumiu a natureza humana, tornando-se verdadeiramente homem sem deixar de ser Deus.",
                referencia: "João 1:14; Filipenses 2:6-8"
            },
            {
                id: 3,
                nivel: "Facil",
                pergunta: "De quem Jesus nasceu, segundo o relato bíblico?",
                alternativas: [
                    "De Isabel",
                    "De Maria, sendo concebido pelo Espírito Santo",
                    "De Marta",
                    "De Ana"
                ],
                correta: 1,
                explicacao: "Jesus nasceu da virgem Maria. Sua concepção ocorreu pelo poder do Espírito Santo, conforme anunciado pelo anjo Gabriel.",
                referencia: "Mateus 1:18-23; Lucas 1:26-35"
            },
            {
                id: 4,
                nivel: "Medio",
                pergunta: "Como foi a vida de Jesus em relação ao pecado?",
                alternativas: [
                    "Cometeu pecados como qualquer pessoa",
                    "Nunca foi tentado",
                    "Viveu sem pecado, embora tenha sido tentado",
                    "Precisou oferecer sacrifícios pelos próprios pecados"
                ],
                correta: 2,
                explicacao: "Jesus foi tentado em todas as coisas, à nossa semelhança, mas permaneceu sem pecado. Sua vida perfeita o qualificou para ser nosso Salvador.",
                referencia: "Hebreus 4:15; 1 Pedro 2:22"
            },
            {
                id: 5,
                nivel: "Medio",
                pergunta: "Qual foi o propósito principal da morte de Jesus na cruz?",
                alternativas: [
                    "Demonstrar apenas sua coragem",
                    "Ensinar uma lição política",
                    "Pagar o preço dos nossos pecados e oferecer salvação",
                    "Mostrar que a morte sempre vence"
                ],
                correta: 2,
                explicacao: "Jesus morreu por nossos pecados, oferecendo-se como sacrifício em nosso favor. Sua morte faz parte do plano de Deus para a salvação.",
                referencia: "Isaías 53:5-6; 1 Coríntios 15:3"
            },
            {
                id: 6,
                nivel: "Medio",
                pergunta: "O que aconteceu com Jesus no terceiro dia depois de sua morte?",
                alternativas: [
                    "Seu corpo permaneceu no túmulo",
                    "Ele ressuscitou dentre os mortos",
                    "Seus discípulos esconderam seu corpo",
                    "Ele foi levado para outra cidade"
                ],
                correta: 1,
                explicacao: "Jesus ressuscitou corporalmente ao terceiro dia, vencendo a morte. A ressurreição é fundamento essencial da fé cristã.",
                referencia: "Lucas 24:5-7; 1 Coríntios 15:3-4"
            },
            {
                id: 7,
                nivel: "Medio",
                pergunta: "O que aconteceu com Jesus depois de sua ressurreição e de aparecer aos discípulos?",
                alternativas: [
                    "Retornou para viver em Nazaré",
                    "Foi levado aos céus",
                    "Permaneceu escondido em Jerusalém",
                    "Foi novamente crucificado"
                ],
                correta: 1,
                explicacao: "Depois de aparecer aos discípulos e ensinar-lhes, Jesus foi elevado aos céus. Esse acontecimento é conhecido como ascensão.",
                referencia: "Atos 1:9-11"
            },
            {
                id: 8,
                nivel: "Medio",
                pergunta: "Segundo a Bíblia, qual é a função de Jesus Cristo como nosso mediador?",
                alternativas: [
                    "Substituir a necessidade de fé",
                    "Ser o único mediador entre Deus e os seres humanos",
                    "Ser apenas um exemplo moral",
                    "Conduzir as pessoas a outros mediadores"
                ],
                correta: 1,
                explicacao: "Jesus Cristo é o único mediador entre Deus e os homens. Por meio dele temos acesso ao Pai.",
                referencia: "1 Timóteo 2:5; João 14:6"
            },
            {
                id: 9,
                nivel: "Dificil",
                pergunta: "O que Jesus está fazendo por aqueles que pertencem a ele?",
                alternativas: [
                    "Intercedendo por eles diante do Pai",
                    "Preparando uma nova religião",
                    "Esperando que encontrem outro salvador",
                    "Abandonando sua missão"
                ],
                correta: 0,
                explicacao: "A Bíblia ensina que Jesus vive para interceder por aqueles que se aproximam de Deus por meio dele.",
                referencia: "Hebreus 7:25; Romanos 8:34"
            },
            {
                id: 10,
                nivel: "Dificil",
                pergunta: "Qual promessa Jesus deixou a respeito do futuro?",
                alternativas: [
                    "Que o mundo nunca enfrentaria dificuldades",
                    "Que seus discípulos nunca morreriam",
                    "Que voltará novamente",
                    "Que sua obra seria esquecida"
                ],
                correta: 2,
                explicacao: "Jesus prometeu voltar. A esperança da segunda vinda de Cristo é uma verdade importante da fé cristã.",
                referencia: "João 14:2-3; Atos 1:11"
            }
        ]
    }
};