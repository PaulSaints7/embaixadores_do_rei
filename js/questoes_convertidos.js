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
    },

    modulo04: {
        titulo: "Deus Espírito Santo",
        descricao: "Conheça a pessoa e a obra do Espírito Santo na vida cristã e na Igreja.",
        totalQuestoes: 10,

        questoes: [

            {
                id: 1,
                nivel: "Fácil",
                pergunta: "Quem é o Espírito Santo segundo o ensino bíblico?",
                alternativas: [
                    "Uma força espiritual criada por Deus",
                    "Uma pessoa divina, que faz parte da Trindade",
                    "Um anjo enviado para proteger os cristãos",
                    "Uma manifestação temporária do poder humano"
                ],
                correta: 1,
                explicacao: "O Espírito Santo é Deus e possui personalidade divina. Ele não é uma força impessoal, mas a terceira pessoa da Trindade.",
                referencia: "Atos 5:3-4; Mateus 28:19"
            },

            {
                id: 2,
                nivel: "Fácil",
                pergunta: "Qual é uma das obras do Espírito Santo em relação às Escrituras Sagradas?",
                alternativas: [
                    "Substituir os ensinamentos de Jesus",
                    "Impedir que os cristãos leiam a Bíblia",
                    "Inspirar os autores humanos da Bíblia",
                    "Acrescentar novos livros à Bíblia por meio de qualquer pessoa"
                ],
                correta: 2,
                explicacao: "O Espírito Santo atuou na inspiração das Escrituras, conduzindo os autores humanos para comunicarem a mensagem de Deus.",
                referencia: "2 Pedro 1:20-21; 2 Timóteo 3:16"
            },

            {
                id: 3,
                nivel: "Fácil",
                pergunta: "Segundo Jesus, o que o Espírito Santo faz em relação ao pecado?",
                alternativas: [
                    "Convence o mundo do pecado, da justiça e do juízo",
                    "Faz com que o pecado deixe de existir imediatamente",
                    "Permite que cada pessoa escolha o que é pecado",
                    "Condena somente aqueles que não frequentam uma igreja"
                ],
                correta: 0,
                explicacao: "Jesus ensinou que o Espírito Santo convenceria o mundo do pecado, da justiça e do juízo.",
                referencia: "João 16:7-11"
            },

            {
                id: 4,
                nivel: "Médio",
                pergunta: "O que significa dizer que o Espírito Santo realiza a regeneração?",
                alternativas: [
                    "Que ele transforma uma pessoa em um ser sem limitações",
                    "Que ele concede riquezas materiais ao cristão",
                    "Que ele torna desnecessário o arrependimento",
                    "Que ele realiza um novo nascimento espiritual"
                ],
                correta: 3,
                explicacao: "A regeneração é a obra de Deus que concede nova vida espiritual à pessoa, tornando-a uma nova criatura em Cristo.",
                referencia: "João 3:5-8; Tito 3:5"
            },

            {
                id: 5,
                nivel: "Médio",
                pergunta: "O que a Bíblia ensina sobre a presença do Espírito Santo na vida do cristão?",
                alternativas: [
                    "Ele habita somente nos líderes religiosos",
                    "Ele habita no cristão, que se torna seu templo",
                    "Ele visita o cristão apenas durante os cultos",
                    "Ele habita somente nas pessoas que possuem dons de liderança"
                ],
                correta: 1,
                explicacao: "A Bíblia ensina que o corpo do cristão é templo do Espírito Santo, que nele habita.",
                referencia: "1 Coríntios 6:19-20"
            },

            {
                id: 6,
                nivel: "Médio",
                pergunta: "De acordo com Jesus, qual é uma das funções do Espírito Santo na vida dos discípulos?",
                alternativas: [
                    "Ensinar que Jesus não precisa ser anunciado",
                    "Conceder conhecimento para que ninguém precise estudar",
                    "Guiar os discípulos em toda a verdade e glorificar Cristo",
                    "Substituir completamente os ensinamentos das Escrituras"
                ],
                correta: 2,
                explicacao: "O Espírito da verdade guia os discípulos em toda a verdade e glorifica Jesus Cristo.",
                referencia: "João 16:13-14"
            },

            {
                id: 7,
                nivel: "Desafio",
                pergunta: "Como o Espírito Santo distribui os dons espirituais aos membros da Igreja?",
                alternativas: [
                    "Segundo sua vontade, concedendo diferentes dons às pessoas",
                    "Concedendo obrigatoriamente o mesmo dom a todos",
                    "De acordo exclusivamente com a posição financeira de cada pessoa",
                    "Somente aos pastores e missionários"
                ],
                correta: 0,
                explicacao: "O Espírito Santo distribui os dons individualmente, conforme sua vontade, para a edificação da Igreja.",
                referencia: "1 Coríntios 12:4-11"
            },

            {
                id: 8,
                nivel: "Desafio",
                pergunta: "Em Gálatas 5, qual alternativa apresenta características do fruto do Espírito?",
                alternativas: [
                    "Riqueza, fama, poder e reconhecimento",
                    "Coragem, autoridade, prestígio e influência",
                    "Conhecimento, inteligência, força e sucesso",
                    "Amor, alegria, paz, paciência, benignidade e bondade"
                ],
                correta: 3,
                explicacao: "O fruto do Espírito manifesta o caráter cristão na vida daquele que vive sob a direção do Espírito Santo.",
                referencia: "Gálatas 5:22-23"
            },

            {
                id: 9,
                nivel: "Desafio",
                pergunta: "Qual foi a promessa de Jesus aos discípulos sobre o poder do Espírito Santo?",
                alternativas: [
                    "Que eles nunca enfrentariam dificuldades",
                    "Que receberiam poder para serem suas testemunhas",
                    "Que conquistariam todos os governos do mundo",
                    "Que não precisariam mais anunciar o Evangelho"
                ],
                correta: 1,
                explicacao: "Jesus prometeu que os discípulos receberiam poder ao descer sobre eles o Espírito Santo, tornando-se suas testemunhas.",
                referencia: "Atos 1:8"
            },

            {
                id: 10,
                nivel: "Desafio",
                pergunta: "Qual é a relação entre o Espírito Santo e a unidade da Igreja?",
                alternativas: [
                    "O Espírito Santo promove a divisão entre os cristãos",
                    "A unidade depende apenas de costumes e tradições humanas",
                    "O Espírito Santo une os cristãos, formando um só corpo em Cristo",
                    "A unidade da Igreja elimina as diferenças de dons e serviços"
                ],
                correta: 2,
                explicacao: "A Igreja é um só corpo, e o Espírito Santo atua na unidade dos cristãos, que devem preservá-la em amor e paz.",
                referencia: "Efésios 4:3-4; 1 Coríntios 12:12-13"
            }

        ]

    },

    // ======================================================
    // MÓDULO 05 - O HOMEM
    // ======================================================


    modulo05: {
        titulo: "O Homem",
        descricao: "Conheça o ensino bíblico sobre a criação, a natureza e a relação do ser humano com Deus.",
        totalQuestoes: 10,

        questoes: [

            {
                id: 1,
                nivel: "Fácil",
                pergunta: "Segundo a Bíblia, quem criou o ser humano?",
                alternativas: [
                    "Os próprios seres humanos",
                    "Os anjos",
                    "Deus",
                    "A natureza"
                ],
                correta: 2,
                explicacao: "A Bíblia ensina que Deus criou o ser humano, homem e mulher, como parte de sua obra criadora.",
                referencia: "Gênesis 1:26-27"
            },

            {
                id: 2,
                nivel: "Fácil",
                pergunta: "O que significa dizer que o ser humano foi criado à imagem e semelhança de Deus?",
                alternativas: [
                    "Que o ser humano é igual a Deus em poder e conhecimento",
                    "Que o ser humano recebeu características que refletem sua relação especial com o Criador",
                    "Que o ser humano não precisa obedecer a Deus",
                    "Que somente algumas pessoas possuem valor diante de Deus"
                ],
                correta: 1,
                explicacao: "Ser criado à imagem de Deus significa possuir uma dignidade especial e uma responsabilidade diante do Criador. Isso não significa ser igual a Deus.",
                referencia: "Gênesis 1:26-27; Tiago 3:9"
            },

            {
                id: 3,
                nivel: "Fácil",
                pergunta: "Segundo Gênesis, de que maneira Deus criou o primeiro homem?",
                alternativas: [
                    "Formou-o do pó da terra e soprou em suas narinas o fôlego de vida",
                    "Criou-o a partir de uma árvore",
                    "Formou-o da água do mar",
                    "Criou-o por meio dos anjos"
                ],
                correta: 0,
                explicacao: "O relato bíblico apresenta Deus formando o homem do pó da terra e concedendo-lhe o fôlego de vida.",
                referencia: "Gênesis 2:7"
            },

            {
                id: 4,
                nivel: "Médio",
                pergunta: "Como a Bíblia apresenta a criação da mulher?",
                alternativas: [
                    "Como uma criatura inferior ao homem",
                    "Como uma divindade independente",
                    "Como alguém sem relação com a criação do homem",
                    "Como uma companheira criada por Deus para o homem"
                ],
                correta: 3,
                explicacao: "Deus criou a mulher como companheira do homem. Ambos possuem dignidade como criaturas feitas à imagem de Deus.",
                referencia: "Gênesis 2:18-23; Gênesis 1:27"
            },

            {
                id: 5,
                nivel: "Médio",
                pergunta: "Qual é uma das responsabilidades que Deus confiou ao ser humano em relação à criação?",
                alternativas: [
                    "Destruir os recursos naturais para obter riquezas",
                    "Dominar e cuidar da criação sob a autoridade de Deus",
                    "Adorar os elementos da natureza",
                    "Considerar que a criação pertence exclusivamente ao ser humano"
                ],
                correta: 1,
                explicacao: "Deus confiou ao ser humano a responsabilidade de exercer domínio sobre a criação e cuidar dela.",
                referencia: "Gênesis 1:28; Gênesis 2:15"
            },

            {
                id: 6,
                nivel: "Médio",
                pergunta: "O que a criação do ser humano à imagem de Deus nos ensina sobre todas as pessoas?",
                alternativas: [
                    "Que somente os cristãos possuem dignidade",
                    "Que a dignidade depende da posição social",
                    "Que toda pessoa possui valor e dignidade diante de Deus",
                    "Que algumas pessoas foram criadas sem propósito"
                ],
                correta: 2,
                explicacao: "Toda pessoa possui dignidade porque foi criada à imagem de Deus. Essa verdade fundamenta o respeito à vida humana.",
                referencia: "Gênesis 1:27; Tiago 3:9"
            },

            {
                id: 7,
                nivel: "Desafio",
                pergunta: "Segundo o ensino bíblico, qual deve ser o propósito fundamental da vida humana?",
                alternativas: [
                    "Glorificar a Deus e viver em comunhão com Ele",
                    "Buscar exclusivamente riquezas e reconhecimento",
                    "Conquistar poder sobre todas as pessoas",
                    "Viver sem prestar contas ao Criador"
                ],
                correta: 0,
                explicacao: "O ser humano foi criado por Deus e deve viver para sua glória, reconhecendo sua dependência do Criador.",
                referencia: "Isaías 43:7; 1 Coríntios 10:31"
            },

            {
                id: 8,
                nivel: "Desafio",
                pergunta: "O que a Bíblia ensina sobre a natureza do ser humano em relação à sua responsabilidade moral?",
                alternativas: [
                    "Que o ser humano não possui responsabilidade por suas escolhas",
                    "Que suas decisões não possuem consequências espirituais",
                    "Que somente os líderes religiosos respondem por seus atos",
                    "Que o ser humano é responsável diante de Deus por suas escolhas e atitudes"
                ],
                correta: 3,
                explicacao: "A Bíblia ensina que cada pessoa é responsável diante de Deus por sua vida e por suas atitudes.",
                referencia: "Romanos 14:12; 2 Coríntios 5:10"
            },

            {
                id: 9,
                nivel: "Desafio",
                pergunta: "Qual é a consequência da criação do homem e da mulher à imagem de Deus para o relacionamento entre as pessoas?",
                alternativas: [
                    "As pessoas devem ser valorizadas apenas quando são úteis à sociedade",
                    "Todas as pessoas devem ser tratadas com respeito e dignidade",
                    "A dignidade humana depende da riqueza e da inteligência",
                    "Somente pessoas da mesma cultura merecem respeito"
                ],
                correta: 1,
                explicacao: "Como todos os seres humanos foram criados à imagem de Deus, devem ser tratados com respeito e dignidade.",
                referencia: "Gênesis 1:27; Tiago 3:9-10"
            },

            {
                id: 10,
                nivel: "Desafio",
                pergunta: "Qual afirmação expressa corretamente o ensino bíblico sobre a relação entre o ser humano e Deus?",
                alternativas: [
                    "O ser humano é independente e não precisa de Deus",
                    "Deus criou o ser humano para viver sem propósito",
                    "O ser humano depende de Deus, seu Criador, e deve viver segundo sua vontade",
                    "O ser humano pode alcançar a perfeição espiritual apenas por seus próprios esforços"
                ],
                correta: 2,
                explicacao: "Deus é o Criador e o ser humano depende dele para a vida. Por isso, deve reconhecer sua autoridade e buscar viver segundo sua vontade.",
                referencia: "Atos 17:24-28; Colossenses 1:16-17"
            }

        ]

      },

    // ======================================================
    // MÓDULO 06 - O PECADO
    // ======================================================


    modulo06: {
        titulo: "O Pecado",
        descricao: "Compreenda a origem, a natureza e as consequências do pecado, reconhecendo a necessidade da salvação em Cristo.",
        totalQuestoes: 10,

        questoes: [

            {
                id: 1,
                nivel: "Fácil",
                pergunta: "Segundo a Bíblia, o que é o pecado?",
                alternativas: [
                    "Apenas um erro cometido sem intenção",
                    "Uma fraqueza que não possui consequências",
                    "A transgressão da lei de Deus e a oposição à sua vontade",
                    "Uma característica exclusiva das pessoas que não frequentam igrejas"
                ],
                correta: 2,
                explicacao: "O pecado representa a desobediência à vontade de Deus. A Bíblia afirma que o pecado é a transgressão da lei.",
                referencia: "1 João 3:4; Romanos 3:23"
            },

            {
                id: 2,
                nivel: "Fácil",
                pergunta: "Segundo o relato de Gênesis, quem foram os primeiros seres humanos a pecar?",
                alternativas: [
                    "Adão e Eva",
                    "Abraão e Sara",
                    "Moisés e Arão",
                    "Caim e Abel"
                ],
                correta: 0,
                explicacao: "Adão e Eva desobedeceram à ordem de Deus no jardim do Éden, introduzindo o pecado na experiência humana.",
                referencia: "Gênesis 3:1-6"
            },

            {
                id: 3,
                nivel: "Fácil",
                pergunta: "Qual foi a atitude de Adão e Eva que caracterizou a queda narrada em Gênesis?",
                alternativas: [
                    "Construíram uma cidade sem autorização",
                    "Recusaram-se a cuidar do jardim",
                    "Deixaram de conversar entre si",
                    "Desobedeceram à ordem de Deus e comeram do fruto proibido"
                ],
                correta: 3,
                explicacao: "A queda aconteceu quando Adão e Eva desobedeceram à ordem de Deus, comendo do fruto da árvore do conhecimento do bem e do mal.",
                referencia: "Gênesis 2:16-17; Gênesis 3:6"
            },

            {
                id: 4,
                nivel: "Médio",
                pergunta: "Qual foi uma das consequências espirituais do pecado na relação entre o ser humano e Deus?",
                alternativas: [
                    "O ser humano tornou-se igual a Deus",
                    "O pecado rompeu a comunhão entre o ser humano e Deus",
                    "O ser humano deixou de precisar do Criador",
                    "Deus perdeu sua autoridade sobre a criação"
                ],
                correta: 1,
                explicacao: "O pecado trouxe separação espiritual e prejudicou a comunhão entre o ser humano e Deus.",
                referencia: "Isaías 59:2; Gênesis 3:8-10"
            },

            {
                id: 5,
                nivel: "Médio",
                pergunta: "O que Romanos 3:23 ensina sobre a condição humana diante do pecado?",
                alternativas: [
                    "Somente algumas pessoas pecaram",
                    "O pecado é exclusivo dos povos antigos",
                    "Todos pecaram e carecem da glória de Deus",
                    "O ser humano pode viver sem cometer nenhum pecado"
                ],
                correta: 2,
                explicacao: "A Bíblia ensina que todos pecaram e, por isso, todos necessitam da graça e da salvação de Deus.",
                referencia: "Romanos 3:23"
            },

            {
                id: 6,
                nivel: "Médio",
                pergunta: "Segundo Romanos 6:23, qual é o salário do pecado?",
                alternativas: [
                    "A morte",
                    "A riqueza material",
                    "A fama e o reconhecimento",
                    "A prosperidade financeira"
                ],
                correta: 0,
                explicacao: "O pecado tem como consequência a morte. Entretanto, o mesmo versículo apresenta a vida eterna como dom gratuito de Deus em Cristo Jesus.",
                referencia: "Romanos 6:23"
            },

            {
                id: 7,
                nivel: "Desafio",
                pergunta: "O que significa dizer que o pecado afetou toda a humanidade?",
                alternativas: [
                    "Que somente os primeiros seres humanos foram responsáveis pelo pecado",
                    "Que todas as pessoas cometem exatamente os mesmos pecados",
                    "Que algumas pessoas nasceram sem necessidade da graça de Deus",
                    "Que a natureza humana foi afetada pelo pecado e todos necessitam da salvação"
                ],
                correta: 3,
                explicacao: "A queda afetou a condição humana. Por isso, todos necessitam da graça de Deus e da salvação oferecida por Jesus Cristo.",
                referencia: "Romanos 5:12; Romanos 3:23"
            },

            {
                id: 8,
                nivel: "Desafio",
                pergunta: "De acordo com Tiago 1:14-15, como o pecado pode se desenvolver na vida de uma pessoa?",
                alternativas: [
                    "Por meio da oração e da obediência a Deus",
                    "Quando a pessoa é atraída e seduzida por sua própria cobiça, que dá origem ao pecado",
                    "Somente quando outra pessoa a obriga a pecar",
                    "Exclusivamente por causa das circunstâncias externas"
                ],
                correta: 1,
                explicacao: "Tiago ensina que a cobiça, quando acolhida, dá à luz o pecado, e o pecado, uma vez consumado, produz a morte.",
                referencia: "Tiago 1:14-15"
            },

            {
                id: 9,
                nivel: "Desafio",
                pergunta: "Por que o ser humano não consegue resolver sozinho o problema do pecado?",
                alternativas: [
                    "Porque o pecado é apenas uma questão cultural",
                    "Porque Deus não oferece perdão a ninguém",
                    "Porque a salvação depende da graça de Deus, e não da capacidade humana de se justificar",
                    "Porque as boas obras são proibidas aos cristãos"
                ],
                correta: 2,
                explicacao: "A salvação não pode ser conquistada pelos esforços humanos. Ela é oferecida gratuitamente pela graça de Deus, mediante a fé em Jesus Cristo.",
                referencia: "Efésios 2:8-9; Romanos 3:24"
            },

            {
                id: 10,
                nivel: "Desafio",
                pergunta: "Qual é a resposta de Deus ao problema do pecado e à necessidade de salvação da humanidade?",
                alternativas: [
                    "Enviar Jesus Cristo para oferecer salvação por meio de sua morte e ressurreição",
                    "Ensinar que o pecado não possui importância",
                    "Permitir que cada pessoa conquiste a salvação por seus próprios méritos",
                    "Eliminar a necessidade de arrependimento e fé"
                ],
                correta: 0,
                explicacao: "Deus demonstrou seu amor ao enviar Jesus Cristo para morrer pelos pecadores e ressuscitar, oferecendo salvação a todo aquele que nele crê.",
                referencia: "Romanos 5:8; João 3:16; 1 Coríntios 15:3-4"
            }

        ]
    },

    // ======================================================
    // MÓDULO 07 - A SALVAÇÃO
    // ======================================================

    modulo07: {
        titulo: "A Salvação",
        descricao: "Conhecendo o plano de Deus para salvar o ser humano por meio de Jesus Cristo.",
        totalQuestoes: 10,

        questoes: [

            {
                id: 1,
                nivel: "Fácil",
                pergunta: "O que significa salvação na fé cristã?",
                alternativas: [
                    "Conquistar uma vida sem dificuldades.",
                    "Ser salvo do pecado e reconciliado com Deus por meio de Jesus Cristo.",
                    "Alcançar riquezas e sucesso neste mundo.",
                    "Tornar-se uma pessoa importante na sociedade."
                ],
                correta: 1,
                explicacao: "A salvação é a obra de Deus que liberta o ser humano da condenação do pecado e o reconcilia consigo por meio de Jesus Cristo.",
                referencia: "Romanos 5:8-10"
            },

            {
                id: 2,
                nivel: "Fácil",
                pergunta: "Quem é o único Salvador da humanidade?",
                alternativas: [
                    "Moisés.",
                    "Os profetas.",
                    "Jesus Cristo.",
                    "Os apóstolos."
                ],
                correta: 2,
                explicacao: "A Bíblia ensina que a salvação não está em nenhum outro, pois somente Jesus Cristo é o Salvador e mediador entre Deus e os homens.",
                referencia: "Atos 4:12; 1 Timóteo 2:5"
            },

            {
                id: 3,
                nivel: "Fácil",
                pergunta: "Por que o ser humano necessita da salvação?",
                alternativas: [
                    "Porque todos pecaram e estão afastados da glória de Deus.",
                    "Porque todos precisam conquistar uma posição religiosa.",
                    "Porque Deus criou o ser humano sem capacidade de escolher.",
                    "Porque somente algumas pessoas cometem pecados."
                ],
                correta: 0,
                explicacao: "Todos os seres humanos são pecadores e necessitam da graça de Deus. Ninguém está livre dessa necessidade por seus próprios méritos.",
                referencia: "Romanos 3:23"
            },

            {
                id: 4,
                nivel: "Médio",
                pergunta: "Como uma pessoa recebe a salvação?",
                alternativas: [
                    "Pela prática de boas obras.",
                    "Pelo cumprimento de tradições religiosas.",
                    "Pela participação em cerimônias religiosas.",
                    "Pela graça de Deus, mediante a fé em Jesus Cristo."
                ],
                correta: 3,
                explicacao: "A salvação é um presente da graça de Deus, recebido mediante a fé. Não é resultado de obras humanas ou merecimento pessoal.",
                referencia: "Efésios 2:8-9"
            },

            {
                id: 5,
                nivel: "Médio",
                pergunta: "Qual é o significado da morte de Jesus Cristo na cruz?",
                alternativas: [
                    "Foi apenas um exemplo de coragem diante da injustiça.",
                    "Foi o sacrifício de Cristo para nos libertar do pecado e nos reconciliar com Deus.",
                    "Representou o fim da esperança dos discípulos.",
                    "Foi uma demonstração de que o pecado não tem consequências."
                ],
                correta: 1,
                explicacao: "Jesus entregou sua vida por nós. Sua morte foi o sacrifício necessário para nossa redenção e reconciliação com Deus.",
                referencia: "1 Pedro 2:24; Romanos 5:8"
            },

            {
                id: 6,
                nivel: "Médio",
                pergunta: "O que significa arrependimento no processo de salvação?",
                alternativas: [
                    "Sentir tristeza apenas por ter sido descoberto fazendo algo errado.",
                    "Ter medo das consequências dos próprios erros, sem mudar de atitude.",
                    "Reconhecer o pecado, voltar-se para Deus e abandonar o caminho errado.",
                    "Prometer nunca mais cometer qualquer erro."
                ],
                correta: 2,
                explicacao: "O arrependimento envolve uma mudança de mente e de direção. A pessoa reconhece seu pecado e volta-se para Deus.",
                referencia: "Atos 3:19; 2 Coríntios 7:10"
            },

            {
                id: 7,
                nivel: "Médio",
                pergunta: "O que acontece quando uma pessoa é justificada por Deus?",
                alternativas: [
                    "É declarada justa diante de Deus mediante a fé em Jesus Cristo.",
                    "Torna-se incapaz de cometer qualquer pecado.",
                    "Deixa de precisar da graça de Deus.",
                    "Recebe salvação por causa de sua própria perfeição."
                ],
                correta: 0,
                explicacao: "A justificação é um ato da graça de Deus pelo qual o pecador que crê em Cristo é declarado justo diante dele.",
                referencia: "Romanos 5:1; Romanos 3:24"
            },

            {
                id: 8,
                nivel: "Difícil",
                pergunta: "O que significa regeneração na doutrina da salvação?",
                alternativas: [
                    "A mudança de aparência física de uma pessoa.",
                    "A participação em uma cerimônia religiosa.",
                    "O aperfeiçoamento da inteligência humana.",
                    "O novo nascimento produzido pela ação do Espírito Santo."
                ],
                correta: 3,
                explicacao: "A regeneração é a obra de Deus que concede nova vida espiritual ao pecador. Jesus ensinou que é necessário nascer de novo.",
                referencia: "João 3:3-6; Tito 3:5"
            },

            {
                id: 9,
                nivel: "Difícil",
                pergunta: "Qual é a relação entre salvação e santificação?",
                alternativas: [
                    "São conceitos sem qualquer relação entre si.",
                    "A santificação é o processo de crescimento na vida cristã, pelo qual o salvo é transformado para viver segundo a vontade de Deus.",
                    "A santificação é uma forma de comprar a salvação.",
                    "A santificação acontece somente depois da morte."
                ],
                correta: 1,
                explicacao: "A santificação acompanha a vida cristã. O Espírito Santo transforma o salvo, conduzindo-o a uma vida de obediência e crescimento espiritual.",
                referencia: "1 Tessalonicenses 4:3; 2 Coríntios 3:18"
            },

            {
                id: 10,
                nivel: "Difícil",
                pergunta: "Qual deve ser a resposta de uma pessoa que recebeu a salvação em Jesus Cristo?",
                alternativas: [
                    "Continuar vivendo sem considerar os ensinamentos de Cristo.",
                    "Acreditar que não precisa mais de Deus.",
                    "Viver em fé, obediência, amor e serviço a Deus.",
                    "Considerar-se superior às pessoas que ainda não conhecem o Evangelho."
                ],
                correta: 2,
                explicacao: "A salvação transforma a vida. Quem está em Cristo é chamado a viver em novidade de vida, praticando boas obras e demonstrando amor a Deus e ao próximo.",
                referencia: "Romanos 6:4; Efésios 2:10"
            }

        ]

    },

    // ======================================================
    // MÓDULO 08 - A ELEIÇÃO
    // ======================================================

    modulo08: {
        titulo: "A Eleição",
        descricao: "Compreendendo a eleição como expressão da graça e do propósito de Deus.",
        totalQuestoes: 10,

        questoes: [

            {
                id: 1,
                nivel: "Fácil",
                pergunta: "O que significa eleição na doutrina cristã?",
                alternativas: [
                    "A escolha humana de pessoas para ocupar cargos religiosos.",
                    "A escolha de Deus, segundo sua graça e seu propósito.",
                    "A capacidade humana de conquistar a salvação.",
                    "Uma recompensa concedida às pessoas mais religiosas."
                ],
                correta: 1,
                explicacao: "A eleição está relacionada ao propósito de Deus e à sua iniciativa graciosa no plano da salvação. Ela não representa um mérito conquistado pelo ser humano.",
                referencia: "Efésios 1:4-5"
            },

            {
                id: 2,
                nivel: "Fácil",
                pergunta: "Segundo Efésios 1:4, quando Deus estabeleceu seu propósito de eleição em Cristo?",
                alternativas: [
                    "Depois da criação do ser humano.",
                    "Depois que o pecado entrou no mundo.",
                    "Antes da fundação do mundo.",
                    "Somente depois da ressurreição de Jesus."
                ],
                correta: 2,
                explicacao: "Paulo ensina que Deus nos escolheu em Cristo antes da fundação do mundo, revelando que seu propósito de salvação faz parte de seu plano eterno.",
                referencia: "Efésios 1:4"
            },

            {
                id: 3,
                nivel: "Fácil",
                pergunta: "A eleição está fundamentada em qual atributo de Deus?",
                alternativas: [
                    "Na graça e no amor de Deus.",
                    "Na riqueza dos seres humanos.",
                    "Na posição social das pessoas.",
                    "Nas boas obras realizadas antes da conversão."
                ],
                correta: 0,
                explicacao: "A eleição revela a graça e o amor de Deus. A salvação não é uma conquista humana, mas uma manifestação da bondade divina.",
                referencia: "Efésios 1:5-6"
            },

            {
                id: 4,
                nivel: "Médio",
                pergunta: "Em quem Deus nos escolheu, conforme Efésios 1:4?",
                alternativas: [
                    "Em Moisés.",
                    "Nos profetas.",
                    "Nos apóstolos.",
                    "Em Jesus Cristo."
                ],
                correta: 3,
                explicacao: "A eleição apresentada nas Escrituras está centralizada em Jesus Cristo. Ele é o centro do plano de salvação estabelecido por Deus.",
                referencia: "Efésios 1:3-4"
            },

            {
                id: 5,
                nivel: "Médio",
                pergunta: "Qual é um dos propósitos apresentados em Efésios 1:4 para aqueles que foram escolhidos em Cristo?",
                alternativas: [
                    "Conquistar autoridade sobre todas as pessoas.",
                    "Serem santos e irrepreensíveis diante de Deus.",
                    "Alcançar riqueza e prosperidade material.",
                    "Viver sem precisar obedecer à Palavra de Deus."
                ],
                correta: 1,
                explicacao: "A eleição está relacionada ao propósito de Deus de formar um povo que viva em santidade e comunhão com ele.",
                referencia: "Efésios 1:4"
            },

            {
                id: 6,
                nivel: "Médio",
                pergunta: "O que Romanos 8:29 ensina sobre o propósito de Deus para aqueles que o amam?",
                alternativas: [
                    "Que nunca enfrentarão dificuldades.",
                    "Que serão superiores às demais pessoas.",
                    "Que serão conformados à imagem de seu Filho.",
                    "Que não precisarão mais aprender sobre a fé."
                ],
                correta: 2,
                explicacao: "O propósito de Deus é que os seus filhos sejam transformados à semelhança de Jesus Cristo, refletindo seu caráter e vivendo segundo sua vontade.",
                referencia: "Romanos 8:29"
            },

            {
                id: 7,
                nivel: "Médio",
                pergunta: "A doutrina da eleição deve produzir qual atitude no cristão?",
                alternativas: [
                    "Orgulho por considerar-se melhor que os outros.",
                    "Desprezo pelas pessoas que ainda não conhecem Jesus.",
                    "Indiferença diante das necessidades do próximo.",
                    "Humildade, gratidão e reconhecimento da graça de Deus."
                ],
                correta: 3,
                explicacao: "A compreensão da graça de Deus deve conduzir o cristão à humildade e à gratidão, pois a salvação não é motivo de orgulho humano.",
                referencia: "Efésios 2:8-9"
            },

            {
                id: 8,
                nivel: "Difícil",
                pergunta: "Qual é a relação entre a eleição e a salvação pela graça?",
                alternativas: [
                    "Ambas apontam para a iniciativa graciosa de Deus no plano da salvação.",
                    "A eleição significa que as boas obras são suficientes para salvar.",
                    "A graça de Deus somente alcança quem possui méritos pessoais.",
                    "A eleição torna desnecessária a fé em Jesus Cristo."
                ],
                correta: 0,
                explicacao: "A eleição e a salvação pela graça revelam que o plano de salvação tem sua origem em Deus, e não na capacidade ou no merecimento humano.",
                referencia: "Efésios 2:8-9; 2 Timóteo 1:9"
            },

            {
                id: 9,
                nivel: "Difícil",
                pergunta: "O estudo da eleição elimina a responsabilidade da Igreja de anunciar o Evangelho?",
                alternativas: [
                    "Sim, porque a evangelização deixou de ser necessária.",
                    "Não, pois Jesus ordenou que seus discípulos anunciassem o Evangelho a todas as nações.",
                    "Sim, porque somente os líderes religiosos devem evangelizar.",
                    "Não, mas a evangelização deve ser feita apenas dentro dos templos."
                ],
                correta: 1,
                explicacao: "A Igreja continua responsável por cumprir a missão de anunciar Jesus Cristo. A ordem de evangelizar foi dada pelo próprio Senhor Jesus.",
                referencia: "Mateus 28:19-20"
            },

            {
                id: 10,
                nivel: "Difícil",
                pergunta: "Qual afirmação resume adequadamente o ensino bíblico sobre a eleição?",
                alternativas: [
                    "A eleição é uma recompensa pelas boas obras humanas.",
                    "A eleição depende da posição social e religiosa de cada pessoa.",
                    "A eleição está relacionada ao propósito gracioso de Deus em Cristo e deve conduzir à santidade e à gratidão.",
                    "A eleição significa que o cristão não precisa mais viver em obediência."
                ],
                correta: 2,
                explicacao: "A eleição revela o propósito gracioso de Deus em Cristo. Esse ensino deve estimular uma vida de santidade, gratidão, fé e compromisso com a missão cristã.",
                referencia: "Efésios 1:3-6; 1 Pedro 1:15-16"
            }

        ]
    },

    // ======================================================
    // MÓDULO 09 - O REINO DE DEUS
    // ======================================================

    modulo09: {
        titulo: "O Reino de Deus",
        descricao: "Conhecendo o governo de Deus, os ensinamentos de Jesus e a realidade do seu Reino.",
        totalQuestoes: 10,

        questoes: [

            {
                id: 1,
                nivel: "Fácil",
                pergunta: "O que significa o Reino de Deus?",
                alternativas: [
                    "Um território governado por autoridades humanas.",
                    "O domínio e o governo de Deus sobre todas as coisas.",
                    "Uma organização política criada pelos discípulos.",
                    "Um lugar reservado apenas aos líderes religiosos."
                ],
                correta: 1,
                explicacao: "O Reino de Deus representa o governo soberano de Deus. Ele manifesta seu poder, sua autoridade e sua vontade sobre toda a criação.",
                referencia: "Salmos 103:19"
            },

            {
                id: 2,
                nivel: "Fácil",
                pergunta: "Quem anunciou a chegada do Reino de Deus durante seu ministério terreno?",
                alternativas: [
                    "Herodes.",
                    "Pilatos.",
                    "Jesus Cristo.",
                    "O imperador romano."
                ],
                correta: 2,
                explicacao: "Jesus anunciou que o Reino de Deus havia chegado e chamou as pessoas ao arrependimento e à fé no Evangelho.",
                referencia: "Marcos 1:14-15"
            },

            {
                id: 3,
                nivel: "Fácil",
                pergunta: "Qual oração ensinada por Jesus expressa o desejo de que o Reino de Deus venha?",
                alternativas: [
                    "Venha o teu Reino.",
                    "Dá-nos hoje o pão de amanhã.",
                    "Livra-nos de todas as responsabilidades.",
                    "Seja feita a vontade dos homens."
                ],
                correta: 0,
                explicacao: "Na oração do Pai Nosso, Jesus ensinou seus discípulos a pedir a vinda do Reino de Deus e a realização de sua vontade.",
                referencia: "Mateus 6:9-10"
            },

            {
                id: 4,
                nivel: "Médio",
                pergunta: "Segundo Jesus, o que uma pessoa deve buscar em primeiro lugar?",
                alternativas: [
                    "Riquezas e reconhecimento público.",
                    "Poder e autoridade sobre outras pessoas.",
                    "Conquistas materiais acima de tudo.",
                    "O Reino de Deus e a sua justiça."
                ],
                correta: 3,
                explicacao: "Jesus ensinou que o Reino de Deus e sua justiça devem ocupar o primeiro lugar na vida dos seus discípulos.",
                referencia: "Mateus 6:33"
            },

            {
                id: 5,
                nivel: "Médio",
                pergunta: "Segundo Jesus, quem são chamados de bem-aventurados no ensino das bem-aventuranças?",
                alternativas: [
                    "Somente os ricos e poderosos.",
                    "Os humildes de espírito, porque deles é o Reino dos Céus.",
                    "Aqueles que nunca enfrentam dificuldades.",
                    "As pessoas que procuram reconhecimento humano."
                ],
                correta: 1,
                explicacao: "Jesus ensinou que os humildes de espírito são bem-aventurados, pois deles é o Reino dos Céus. O Reino não é conquistado pelo orgulho ou pela posição social.",
                referencia: "Mateus 5:3"
            },

            {
                id: 6,
                nivel: "Médio",
                pergunta: "Qual é a relação entre o Reino de Deus e a justiça, a paz e a alegria no Espírito Santo?",
                alternativas: [
                    "São características sem relação com a vida cristã.",
                    "Representam apenas conquistas materiais.",
                    "São manifestações da vida sob o governo de Deus.",
                    "São privilégios exclusivos dos governantes."
                ],
                correta: 2,
                explicacao: "Paulo ensina que o Reino de Deus não consiste em comida ou bebida, mas em justiça, paz e alegria no Espírito Santo.",
                referencia: "Romanos 14:17"
            },

            {
                id: 7,
                nivel: "Médio",
                pergunta: "Qual é a relação entre a Igreja e o Reino de Deus?",
                alternativas: [
                    "A Igreja é a comunidade dos que seguem Cristo e testemunham os valores do Reino.",
                    "A Igreja é uma organização política que governa todas as nações.",
                    "A Igreja substitui completamente o governo de Deus.",
                    "A Igreja não possui nenhuma responsabilidade em relação ao Reino."
                ],
                correta: 0,
                explicacao: "A Igreja é formada por aqueles que pertencem a Cristo e têm a responsabilidade de testemunhar o Evangelho e viver de acordo com os valores do Reino de Deus.",
                referencia: "1 Pedro 2:9-10"
            },

            {
                id: 8,
                nivel: "Difícil",
                pergunta: "O que Jesus ensinou por meio das parábolas do grão de mostarda e do fermento?",
                alternativas: [
                    "Que o Reino de Deus depende da força militar.",
                    "Que o Reino de Deus pertence somente aos poderosos.",
                    "Que o Reino de Deus não produz mudanças na vida humana.",
                    "Que o Reino de Deus começa de maneira aparentemente pequena e manifesta seu crescimento e influência."
                ],
                correta: 3,
                explicacao: "Jesus utilizou essas parábolas para ensinar sobre o crescimento do Reino de Deus, que começa de maneira pequena, mas manifesta sua ação de forma significativa.",
                referencia: "Mateus 13:31-33"
            },

            {
                id: 9,
                nivel: "Difícil",
                pergunta: "O que significa dizer que o Reino de Deus já está presente, mas ainda aguarda sua plena consumação?",
                alternativas: [
                    "Que o Reino de Deus já terminou completamente.",
                    "Que o Reino já se manifesta por meio de Cristo, mas sua plenitude será revelada no futuro.",
                    "Que o Reino de Deus somente existirá depois que a Igreja desaparecer.",
                    "Que o Reino de Deus depende exclusivamente dos governos humanos."
                ],
                correta: 1,
                explicacao: "Com a vinda de Jesus, o Reino de Deus foi anunciado e manifestado. Entretanto, sua plena realização ainda está relacionada à consumação dos propósitos de Deus.",
                referencia: "Lucas 17:20-21; Apocalipse 11:15"
            },

            {
                id: 10,
                nivel: "Difícil",
                pergunta: "Qual deve ser a atitude dos cristãos diante do Reino de Deus?",
                alternativas: [
                    "Buscar apenas benefícios pessoais.",
                    "Ignorar os ensinamentos de Jesus.",
                    "Viver em obediência a Cristo, praticar a justiça, amar o próximo e anunciar o Evangelho.",
                    "Esperar a volta de Cristo sem assumir responsabilidades no presente."
                ],
                correta: 2,
                explicacao: "Os discípulos de Jesus são chamados a viver segundo os valores do Reino, demonstrando amor, justiça, obediência a Deus e compromisso com a missão de anunciar o Evangelho.",
                referencia: "Mateus 5:14-16; Mateus 28:19-20"
            }

        ]
    },

    // ======================================================
    // MÓDULO 10 - A IGREJA
    // ======================================================

    modulo10: {
        titulo: "A Igreja",
        descricao: "Conhecendo a origem, a natureza, a organização e a missão da Igreja de Jesus Cristo.",
        totalQuestoes: 10,

        questoes: [

            {
                id: 1,
                nivel: "Fácil",
                pergunta: "O que é a Igreja segundo o ensino bíblico?",
                alternativas: [
                    "Um edifício destinado exclusivamente a reuniões religiosas.",
                    "Uma organização criada apenas para realizar eventos sociais.",
                    "A comunidade dos salvos por Jesus Cristo, reunidos para adorar a Deus e cumprir sua missão.",
                    "Uma instituição formada somente por líderes religiosos."
                ],
                correta: 2,
                explicacao: "A Igreja é a comunidade dos que foram chamados por Deus e pertencem a Jesus Cristo. O edifício é apenas o local onde os cristãos podem se reunir.",
                referencia: "1 Coríntios 1:2; Efésios 2:19-22"
            },

            {
                id: 2,
                nivel: "Fácil",
                pergunta: "Quem é o fundamento e a principal autoridade da Igreja?",
                alternativas: [
                    "Jesus Cristo.",
                    "Os governantes humanos.",
                    "Os líderes políticos.",
                    "Os costumes da sociedade."
                ],
                correta: 0,
                explicacao: "Jesus Cristo é o fundamento da Igreja e sua autoridade suprema. A Igreja pertence a ele e deve permanecer fiel aos seus ensinamentos.",
                referencia: "Efésios 2:20; Colossenses 1:18"
            },

            {
                id: 3,
                nivel: "Fácil",
                pergunta: "Qual imagem bíblica é utilizada para representar a união dos cristãos na Igreja?",
                alternativas: [
                    "Um exército de governantes.",
                    "Uma associação comercial.",
                    "Uma construção sem fundamento.",
                    "Um corpo formado por muitos membros."
                ],
                correta: 3,
                explicacao: "A Bíblia compara a Igreja ao corpo de Cristo. Assim como o corpo possui muitos membros com funções diferentes, os cristãos formam uma comunidade que deve viver em unidade.",
                referencia: "1 Coríntios 12:12-27"
            },

            {
                id: 4,
                nivel: "Médio",
                pergunta: "Qual é uma das principais responsabilidades da Igreja?",
                alternativas: [
                    "Buscar poder político sobre todas as pessoas.",
                    "Adorar a Deus, ensinar sua Palavra, promover comunhão e anunciar o Evangelho.",
                    "Substituir a responsabilidade espiritual de cada família.",
                    "Concentrar suas atividades exclusivamente em construções."
                ],
                correta: 1,
                explicacao: "A Igreja existe para glorificar a Deus, ensinar as Escrituras, desenvolver a comunhão entre os cristãos e testemunhar de Jesus Cristo ao mundo.",
                referencia: "Atos 2:42-47; Mateus 28:19-20"
            },

            {
                id: 5,
                nivel: "Médio",
                pergunta: "O que significa a expressão bíblica 'corpo de Cristo' em relação à Igreja?",
                alternativas: [
                    "Que todos os cristãos devem possuir as mesmas habilidades.",
                    "Que somente os pastores pertencem à Igreja.",
                    "Que os cristãos estão unidos a Cristo e possuem diferentes funções na comunidade.",
                    "Que a Igreja é formada apenas por pessoas de uma mesma região."
                ],
                correta: 2,
                explicacao: "A imagem do corpo ensina que os cristãos pertencem a Cristo e estão unidos uns aos outros, embora possuam diferentes dons e responsabilidades.",
                referencia: "1 Coríntios 12:12-20"
            },

            {
                id: 6,
                nivel: "Médio",
                pergunta: "O que a Bíblia ensina sobre a comunhão entre os membros da Igreja?",
                alternativas: [
                    "Os cristãos devem viver em amor, cuidado mútuo e unidade.",
                    "Cada cristão deve cuidar apenas de seus próprios interesses.",
                    "A comunhão é desnecessária para a vida espiritual.",
                    "Somente os líderes precisam manter relacionamento com os demais membros."
                ],
                correta: 0,
                explicacao: "A comunhão é uma característica essencial da vida da Igreja. Os cristãos são chamados a amar, servir, ajudar e fortalecer uns aos outros.",
                referencia: "João 13:34-35; Gálatas 6:2"
            },

            {
                id: 7,
                nivel: "Médio",
                pergunta: "Qual é o significado do sacerdócio de todos os crentes?",
                alternativas: [
                    "Que todos os cristãos devem exercer o cargo de pastor.",
                    "Que somente os líderes podem orar e estudar a Bíblia.",
                    "Que os membros não precisam de orientação espiritual.",
                    "Que todos os salvos têm acesso a Deus por meio de Jesus Cristo e são chamados a servi-lo."
                ],
                correta: 3,
                explicacao: "O sacerdócio de todos os crentes ensina que cada cristão tem acesso a Deus por meio de Cristo e participa da responsabilidade de servir e testemunhar sua fé.",
                referencia: "1 Pedro 2:5,9; Hebreus 10:19-22"
            },

            {
                id: 8,
                nivel: "Difícil",
                pergunta: "Segundo o modelo apresentado no Novo Testamento, como as igrejas locais devem exercer sua vida comunitária?",
                alternativas: [
                    "Sem liderança, organização ou responsabilidade entre seus membros.",
                    "Com comunhão, ensino apostólico, oração, serviço e liderança responsável.",
                    "Exclusivamente por meio de atividades comerciais.",
                    "Submetendo todas as decisões religiosas às autoridades políticas."
                ],
                correta: 1,
                explicacao: "A Igreja do Novo Testamento vivia em comunhão, perseverava no ensino dos apóstolos, na oração e no serviço. Também possuía organização e liderança.",
                referencia: "Atos 2:42; Atos 14:23"
            },

            {
                id: 9,
                nivel: "Difícil",
                pergunta: "Qual é a importância dos dons espirituais na vida da Igreja?",
                alternativas: [
                    "Servem para demonstrar superioridade de alguns cristãos.",
                    "São concedidos somente para benefício individual.",
                    "São concedidos pelo Espírito Santo para edificação e serviço da comunidade cristã.",
                    "Substituem a necessidade de amor e unidade."
                ],
                correta: 2,
                explicacao: "Os dons espirituais são concedidos pelo Espírito Santo para o serviço cristão e a edificação da Igreja. Devem ser exercidos com amor e responsabilidade.",
                referencia: "1 Coríntios 12:4-7; 1 Coríntios 13:1-3"
            },

            {
                id: 10,
                nivel: "Difícil",
                pergunta: "Qual deve ser o compromisso de uma pessoa que faz parte da Igreja de Jesus Cristo?",
                alternativas: [
                    "Participar da comunhão, crescer na fé, servir aos irmãos e testemunhar o Evangelho.",
                    "Frequentar as reuniões sem se envolver com a comunidade.",
                    "Buscar reconhecimento pessoal e posição de destaque.",
                    "Deixar toda responsabilidade cristã exclusivamente para os pastores."
                ],
                correta: 0,
                explicacao: "Todo cristão é chamado a participar ativamente da vida da Igreja, crescendo espiritualmente, servindo aos irmãos e anunciando as boas-novas de Jesus Cristo.",
                referencia: "Hebreus 10:24-25; Efésios 4:11-16"
            }

        ]
    },

    // ======================================================
    // MÓDULO 11 - O BATISMO E A CEIA DO SENHOR
    // ======================================================

    modulo11: {
        titulo: "O Batismo e a Ceia do Senhor",
        descricao: "Compreendendo o significado e a importância das duas ordenanças deixadas por Jesus à sua Igreja.",
        totalQuestoes: 10,

        questoes: [

            {
                id: 1,
                nivel: "Fácil",
                pergunta: "Quais são as duas ordenanças que Jesus deixou à sua Igreja?",
                alternativas: [
                    "O casamento e a oração.",
                    "O batismo e a Ceia do Senhor.",
                    "O jejum e a contribuição financeira.",
                    "A pregação e o louvor."
                ],
                correta: 1,
                explicacao: "Jesus deixou à sua Igreja duas ordenanças: o batismo e a Ceia do Senhor. Ambas possuem significado espiritual e devem ser observadas pelos cristãos.",
                referencia: "Mateus 28:19-20; Lucas 22:19-20"
            },

            {
                id: 2,
                nivel: "Fácil",
                pergunta: "Qual é o significado principal do batismo cristão?",
                alternativas: [
                    "Garantir riquezas e prosperidade.",
                    "Tornar uma pessoa automaticamente perfeita.",
                    "Declarar publicamente a fé em Jesus Cristo e simbolizar a união com ele em sua morte e ressurreição.",
                    "Substituir a necessidade de arrependimento e fé."
                ],
                correta: 2,
                explicacao: "O batismo é uma declaração pública de fé em Jesus Cristo e simboliza a identificação do cristão com a morte, o sepultamento e a ressurreição de Cristo.",
                referencia: "Romanos 6:3-4"
            },

            {
                id: 3,
                nivel: "Fácil",
                pergunta: "Qual é a forma de batismo praticada pelas igrejas batistas?",
                alternativas: [
                    "A imersão completa do corpo na água.",
                    "A aspersão de algumas gotas de água.",
                    "A aplicação de água somente sobre a cabeça.",
                    "A lavagem das mãos."
                ],
                correta: 0,
                explicacao: "As igrejas batistas praticam o batismo por imersão, entendendo que essa forma representa simbolicamente a morte, o sepultamento e a ressurreição de Jesus Cristo.",
                referencia: "Mateus 3:16; Romanos 6:4"
            },

            {
                id: 4,
                nivel: "Médio",
                pergunta: "Quem deve receber o batismo segundo a compreensão batista?",
                alternativas: [
                    "Qualquer pessoa, independentemente de sua fé.",
                    "Somente pessoas que nasceram em famílias cristãs.",
                    "Todas as crianças logo após o nascimento.",
                    "A pessoa que se arrependeu de seus pecados e professou fé em Jesus Cristo."
                ],
                correta: 3,
                explicacao: "Na compreensão batista, o batismo é destinado àqueles que creram em Jesus Cristo e professaram sua fé pessoalmente.",
                referencia: "Atos 2:41; Atos 8:36-38"
            },

            {
                id: 5,
                nivel: "Médio",
                pergunta: "O batismo é responsável por produzir a salvação de uma pessoa?",
                alternativas: [
                    "Sim, porque a água possui poder para perdoar pecados.",
                    "Não. A salvação é recebida pela graça de Deus, mediante a fé em Jesus Cristo.",
                    "Sim, porque ninguém pode ser salvo sem participar de uma cerimônia.",
                    "Não, porque o batismo não possui significado espiritual."
                ],
                correta: 1,
                explicacao: "O batismo não é o meio pelo qual alguém conquista a salvação. Ele é uma ordenança de Jesus e uma expressão pública da fé daquele que já recebeu o Evangelho.",
                referencia: "Efésios 2:8-9; Atos 10:43-48"
            },

            {
                id: 6,
                nivel: "Médio",
                pergunta: "Quais elementos são utilizados na Ceia do Senhor?",
                alternativas: [
                    "Água e azeite.",
                    "Leite e mel.",
                    "Pão e fruto da videira.",
                    "Trigo e sal."
                ],
                correta: 2,
                explicacao: "Na Ceia do Senhor, o pão representa o corpo de Cristo entregue por nós, e o fruto da videira representa seu sangue derramado para o perdão dos pecados.",
                referencia: "Mateus 26:26-29"
            },

            {
                id: 7,
                nivel: "Médio",
                pergunta: "O que a Ceia do Senhor representa para os cristãos?",
                alternativas: [
                    "Uma lembrança da morte de Jesus e uma proclamação de sua obra até que ele volte.",
                    "Uma refeição comum sem significado espiritual.",
                    "Uma cerimônia destinada a substituir a leitura da Bíblia.",
                    "Uma oportunidade para demonstrar superioridade religiosa."
                ],
                correta: 0,
                explicacao: "A Ceia é uma ordenança comemorativa. Ao participar dela, os cristãos recordam o sacrifício de Jesus e anunciam sua morte até que ele venha.",
                referencia: "1 Coríntios 11:23-26"
            },

            {
                id: 8,
                nivel: "Difícil",
                pergunta: "O que significa examinar a si mesmo antes de participar da Ceia do Senhor?",
                alternativas: [
                    "Comparar sua vida com a de outros membros da Igreja.",
                    "Acreditar que somente pessoas sem qualquer falha podem participar.",
                    "Participar sem considerar o significado do pão e do cálice.",
                    "Refletir sobre sua vida diante de Deus, reconhecendo a importância e a seriedade da Ceia."
                ],
                correta: 3,
                explicacao: "Paulo orienta os cristãos a examinarem a si mesmos antes de participar da Ceia, tratando essa ordenança com reverência e discernimento.",
                referencia: "1 Coríntios 11:27-29"
            },

            {
                id: 9,
                nivel: "Difícil",
                pergunta: "Qual é a relação entre o batismo e a entrada na vida da Igreja?",
                alternativas: [
                    "O batismo substitui a necessidade de participar da comunidade cristã.",
                    "O batismo é a profissão pública de fé do discípulo e está relacionado à sua identificação com a comunidade dos seguidores de Cristo.",
                    "O batismo serve apenas para identificar a denominação religiosa de alguém.",
                    "O batismo elimina a necessidade de continuar aprendendo sobre Jesus."
                ],
                correta: 1,
                explicacao: "O batismo é uma declaração pública de fé e está associado ao discipulado e à integração na comunidade cristã. Jesus ordenou que seus discípulos fossem batizados e ensinados a obedecer aos seus mandamentos.",
                referencia: "Mateus 28:19-20; Atos 2:41-42"
            },

            {
                id: 10,
                nivel: "Difícil",
                pergunta: "Qual afirmação apresenta corretamente o significado das duas ordenanças?",
                alternativas: [
                    "O batismo e a Ceia são meios de conquistar o perdão por méritos humanos.",
                    "O batismo e a Ceia são cerimônias sem relação com a fé cristã.",
                    "O batismo testemunha publicamente a fé em Cristo, enquanto a Ceia recorda seu sacrifício e anuncia sua volta.",
                    "O batismo e a Ceia substituem a necessidade de viver em obediência a Jesus."
                ],
                correta: 2,
                explicacao: "As duas ordenanças apontam para a obra de Jesus Cristo. O batismo testemunha a identificação do cristão com Cristo, e a Ceia anuncia sua morte até que ele volte.",
                referencia: "Romanos 6:3-4; 1 Coríntios 11:26"
            }

        ]
    },

    // ======================================================
    // MÓDULO 12 - O DIA DO SENHOR
    // ======================================================

    modulo12: {
        titulo: "O Dia do Senhor",
        descricao: "Compreendendo o significado do domingo na vida cristã e na adoração a Deus.",
        totalQuestoes: 10,

        questoes: [

            {
                id: 1,
                nivel: "Fácil",
                pergunta: "Qual dia da semana é tradicionalmente observado pelos cristãos como o Dia do Senhor?",
                alternativas: [
                    "Segunda-feira.",
                    "Quarta-feira.",
                    "Sábado.",
                    "Domingo."
                ],
                correta: 3,
                explicacao: "Os cristãos tradicionalmente observam o domingo como o Dia do Senhor, pois foi nesse dia que Jesus Cristo ressuscitou.",
                referencia: "Mateus 28:1-6"
            },

            {
                id: 2,
                nivel: "Fácil",
                pergunta: "Qual acontecimento está diretamente relacionado à celebração cristã do domingo?",
                alternativas: [
                    "A construção do templo de Jerusalém.",
                    "A ressurreição de Jesus Cristo.",
                    "A saída de Israel do Egito.",
                    "A entrega das tábuas da Lei a Moisés."
                ],
                correta: 1,
                explicacao: "O domingo possui significado especial para os cristãos porque Jesus ressuscitou nesse dia, vencendo a morte.",
                referencia: "Marcos 16:1-6"
            },

            {
                id: 3,
                nivel: "Fácil",
                pergunta: "Qual deve ser uma das principais atividades dos cristãos no Dia do Senhor?",
                alternativas: [
                    "Buscar apenas diversão e entretenimento.",
                    "Dedicar-se exclusivamente às atividades comerciais.",
                    "Reunir-se para adorar a Deus, estudar sua Palavra e fortalecer a comunhão cristã.",
                    "Evitar qualquer contato com outros cristãos."
                ],
                correta: 2,
                explicacao: "O Dia do Senhor é uma oportunidade especial para a adoração, a comunhão, o ensino bíblico e o fortalecimento da fé.",
                referencia: "Atos 20:7; Hebreus 10:24-25"
            },

            {
                id: 4,
                nivel: "Médio",
                pergunta: "O que significa separar o Dia do Senhor para Deus?",
                alternativas: [
                    "Dedicar esse dia à adoração, à comunhão e ao fortalecimento da vida espiritual.",
                    "Acreditar que Deus somente deve ser adorado aos domingos.",
                    "Deixar de praticar o amor ao próximo durante os outros dias.",
                    "Considerar todas as atividades realizadas nesse dia como pecaminosas."
                ],
                correta: 0,
                explicacao: "Separar o Dia do Senhor significa reconhecer sua importância espiritual e dedicar atenção especial à adoração e à comunhão com Deus e com os irmãos.",
                referencia: "Salmos 122:1; Hebreus 10:25"
            },

            {
                id: 5,
                nivel: "Médio",
                pergunta: "Por que a reunião dos cristãos é importante para a vida da Igreja?",
                alternativas: [
                    "Porque substitui a necessidade de oração individual.",
                    "Porque permite que apenas os líderes pratiquem a fé.",
                    "Porque torna desnecessário o estudo pessoal da Bíblia.",
                    "Porque fortalece a comunhão, a fé e o encorajamento entre os irmãos."
                ],
                correta: 3,
                explicacao: "A reunião dos cristãos fortalece a comunhão e permite que os irmãos se encorajem mutuamente no amor e na prática das boas obras.",
                referencia: "Hebreus 10:24-25"
            },

            {
                id: 6,
                nivel: "Médio",
                pergunta: "O que Atos 20:7 registra sobre a reunião dos primeiros cristãos?",
                alternativas: [
                    "Que se reuniam somente uma vez por ano.",
                    "Que se reuniram no primeiro dia da semana para partir o pão e ouvir a mensagem de Paulo.",
                    "Que foram proibidos de realizar reuniões religiosas.",
                    "Que abandonaram a comunhão e a adoração."
                ],
                correta: 1,
                explicacao: "O texto registra uma reunião dos discípulos no primeiro dia da semana, quando estavam reunidos para partir o pão e ouvir o ensino de Paulo.",
                referencia: "Atos 20:7"
            },

            {
                id: 7,
                nivel: "Médio",
                pergunta: "O Dia do Senhor deve ser uma oportunidade para demonstrar amor ao próximo?",
                alternativas: [
                    "Não, pois o domingo deve ser dedicado somente a atividades particulares.",
                    "Não, porque ajudar outras pessoas é responsabilidade exclusiva dos líderes.",
                    "Sim, pois a prática do amor e da misericórdia também faz parte da vida cristã.",
                    "Sim, mas somente quando existe alguma recompensa financeira."
                ],
                correta: 2,
                explicacao: "A vida cristã não se resume a cerimônias religiosas. Jesus ensinou a importância da misericórdia, do amor e do cuidado com o próximo.",
                referencia: "Mateus 12:11-12; Gálatas 6:10"
            },

            {
                id: 8,
                nivel: "Difícil",
                pergunta: "Qual é a relação entre o primeiro dia da semana e a ressurreição de Jesus?",
                alternativas: [
                    "A ressurreição aconteceu no primeiro dia da semana, tornando o domingo especialmente significativo para a celebração cristã.",
                    "Jesus ressuscitou no último dia do ano.",
                    "A ressurreição não possui relação com a reunião dos primeiros cristãos.",
                    "O primeiro dia da semana foi escolhido por causa de uma determinação do Império Romano."
                ],
                correta: 0,
                explicacao: "Os Evangelhos registram que Jesus ressuscitou no primeiro dia da semana. Esse acontecimento tornou o domingo especialmente significativo para a Igreja cristã.",
                referencia: "Lucas 24:1-7; João 20:1"
            },

            {
                id: 9,
                nivel: "Difícil",
                pergunta: "O que o ensino de Romanos 14:5-6 nos ajuda a compreender sobre a consideração dos dias?",
                alternativas: [
                    "Que todos os cristãos devem julgar uns aos outros pela observância dos dias.",
                    "Que a fé cristã depende exclusivamente da observância de um calendário.",
                    "Que os dias da semana não possuem qualquer significado para a vida cristã.",
                    "Que os cristãos devem agir com convicção diante de Deus, sem desprezar ou julgar seus irmãos por questões de consciência."
                ],
                correta: 3,
                explicacao: "Paulo ensina que cada pessoa deve estar plenamente convicta em sua própria consciência diante de Deus, evitando julgamentos entre irmãos em questões relacionadas à consideração dos dias.",
                referencia: "Romanos 14:5-6"
            },

            {
                id: 10,
                nivel: "Difícil",
                pergunta: "Qual atitude representa melhor o significado do Dia do Senhor na vida cristã?",
                alternativas: [
                    "Tratar o domingo como um dia sem qualquer compromisso espiritual.",
                    "Celebrar a ressurreição de Cristo, adorar a Deus, cultivar a comunhão e viver de acordo com os ensinamentos de Jesus.",
                    "Acreditar que a participação em um culto substitui a obediência a Deus durante a semana.",
                    "Utilizar o domingo para julgar a espiritualidade de outras pessoas."
                ],
                correta: 1,
                explicacao: "O Dia do Senhor deve lembrar aos cristãos a ressurreição de Jesus e incentivar uma vida de adoração, comunhão, serviço e fidelidade a Deus durante todos os dias.",
                referencia: "Colossenses 3:16-17; Hebreus 10:24-25"
            }

        ]
    },

    // ======================================================
    // MÓDULO 13 - O MINISTÉRIO DA IGREJA
    // ======================================================

    modulo13: {
        titulo: "O Ministério da Igreja",
        descricao: "Conhecendo os serviços, os dons e as responsabilidades dos membros na edificação da Igreja de Cristo.",
        totalQuestoes: 10,

        questoes: [

            {
                id: 1,
                nivel: "Fácil",
                pergunta: "O que significa ministério na vida da Igreja?",
                alternativas: [
                    "Uma posição de autoridade para receber privilégios.",
                    "Uma atividade realizada exclusivamente pelos pastores.",
                    "O serviço prestado a Deus e ao próximo para cumprir a missão da Igreja.",
                    "Uma função destinada somente aos membros mais antigos."
                ],
                correta: 2,
                explicacao: "Ministério significa serviço. Na Igreja, os cristãos são chamados a servir a Deus e ao próximo, contribuindo para a edificação da comunidade cristã.",
                referencia: "Marcos 10:45; 1 Pedro 4:10"
            },

            {
                id: 2,
                nivel: "Fácil",
                pergunta: "Quem deve participar do serviço cristão na Igreja?",
                alternativas: [
                    "Todos os membros, conforme seus dons e possibilidades.",
                    "Somente o pastor titular.",
                    "Apenas os diáconos e os líderes.",
                    "Somente as pessoas que possuem formação teológica."
                ],
                correta: 0,
                explicacao: "Todos os cristãos são chamados a servir. Cada membro possui responsabilidades e pode contribuir para a edificação da Igreja.",
                referencia: "1 Coríntios 12:7; Efésios 4:16"
            },

            {
                id: 3,
                nivel: "Fácil",
                pergunta: "Quem concede os dons espirituais aos cristãos?",
                alternativas: [
                    "Os líderes políticos.",
                    "As instituições educacionais.",
                    "A capacidade humana adquirida exclusivamente pelo esforço.",
                    "O Espírito Santo."
                ],
                correta: 3,
                explicacao: "Os dons espirituais são concedidos pelo Espírito Santo, que distribui diferentes capacidades aos cristãos para o serviço e a edificação da Igreja.",
                referencia: "1 Coríntios 12:4-11"
            },

            {
                id: 4,
                nivel: "Médio",
                pergunta: "Qual é a finalidade principal dos dons espirituais?",
                alternativas: [
                    "Conquistar reconhecimento pessoal.",
                    "Promover a edificação da Igreja e o serviço ao próximo.",
                    "Demonstrar que alguns cristãos são superiores aos outros.",
                    "Substituir a necessidade de amor entre os irmãos."
                ],
                correta: 1,
                explicacao: "Os dons espirituais são concedidos para o bem comum. Devem ser utilizados com amor e responsabilidade, contribuindo para o crescimento da comunidade cristã.",
                referencia: "1 Coríntios 12:7; 1 Coríntios 14:12"
            },

            {
                id: 5,
                nivel: "Médio",
                pergunta: "Qual deve ser a principal característica de quem exerce liderança cristã?",
                alternativas: [
                    "Buscar poder e reconhecimento.",
                    "Exigir privilégios especiais.",
                    "Servir com humildade, amor e responsabilidade.",
                    "Controlar os demais membros por meio do medo."
                ],
                correta: 2,
                explicacao: "Jesus ensinou que a verdadeira liderança cristã deve ser marcada pelo serviço. Quem lidera deve cuidar das pessoas e seguir o exemplo de Cristo.",
                referencia: "Marcos 10:42-45; 1 Pedro 5:2-3"
            },

            {
                id: 6,
                nivel: "Médio",
                pergunta: "Qual é uma das responsabilidades dos diáconos na Igreja, conforme o exemplo do Novo Testamento?",
                alternativas: [
                    "Auxiliar no serviço da Igreja e no cuidado das necessidades da comunidade.",
                    "Substituir a autoridade de Jesus Cristo.",
                    "Exercer controle político sobre os membros.",
                    "Impedir a participação dos demais cristãos no serviço."
                ],
                correta: 0,
                explicacao: "O ministério diaconal está relacionado ao serviço e ao cuidado da comunidade cristã. Em Atos 6, encontramos um exemplo de organização para atender necessidades da Igreja.",
                referencia: "Atos 6:1-6; 1 Timóteo 3:8-13"
            },

            {
                id: 7,
                nivel: "Médio",
                pergunta: "Por que o amor é indispensável no exercício dos ministérios cristãos?",
                alternativas: [
                    "Porque substitui todos os dons espirituais.",
                    "Porque permite que os cristãos recebam recompensas materiais.",
                    "Porque torna desnecessário o ensino bíblico.",
                    "Porque sem amor até mesmo os dons e as realizações perdem seu verdadeiro valor diante de Deus."
                ],
                correta: 3,
                explicacao: "Paulo ensina que os dons e as realizações não possuem valor espiritual adequado quando não são acompanhados pelo amor.",
                referencia: "1 Coríntios 13:1-3"
            },

            {
                id: 8,
                nivel: "Difícil",
                pergunta: "Segundo Efésios 4:11-13, qual é uma das finalidades dos ministérios concedidos por Cristo à Igreja?",
                alternativas: [
                    "Concentrar todas as atividades em uma única pessoa.",
                    "Preparar os santos para o serviço e promover a edificação do corpo de Cristo.",
                    "Impedir que os membros desenvolvam seus dons.",
                    "Transformar a Igreja em uma organização voltada exclusivamente para interesses materiais."
                ],
                correta: 1,
                explicacao: "Cristo concede diferentes ministérios para preparar os cristãos para o serviço, fortalecer a Igreja e promover seu crescimento espiritual.",
                referencia: "Efésios 4:11-13"
            },

            {
                id: 9,
                nivel: "Difícil",
                pergunta: "Qual deve ser a atitude de um cristão ao identificar um dom ou uma capacidade que pode ser utilizada no serviço da Igreja?",
                alternativas: [
                    "Esconder sua capacidade para evitar responsabilidades.",
                    "Utilizá-la apenas para obter vantagens pessoais.",
                    "Colocá-la a serviço de Deus e do próximo, com dedicação e responsabilidade.",
                    "Considerar-se superior aos cristãos que possuem outros dons."
                ],
                correta: 2,
                explicacao: "Pedro ensina que cada cristão deve utilizar o dom recebido para servir aos outros, como bom administrador da graça de Deus.",
                referencia: "1 Pedro 4:10-11"
            },

            {
                id: 10,
                nivel: "Difícil",
                pergunta: "Qual afirmação resume corretamente o propósito do ministério da Igreja?",
                alternativas: [
                    "Equipar os cristãos para servir, edificar o corpo de Cristo e glorificar a Deus.",
                    "Concentrar o trabalho cristão exclusivamente nos pastores.",
                    "Promover a competição entre os membros pelos melhores cargos.",
                    "Buscar reconhecimento humano acima da vontade de Deus."
                ],
                correta: 0,
                explicacao: "O ministério da Igreja existe para que todos os cristãos participem do serviço, contribuam para a edificação do corpo de Cristo e glorifiquem a Deus.",
                referencia: "Efésios 4:12-16; 1 Coríntios 10:31"
            }

        ]
    },

    // ======================================================
    // MÓDULO 14 - EVANGELIZAÇÃO E MISSÕES
    // ======================================================

    modulo14: {
        titulo: "Evangelização e Missões",
        descricao: "Conhecendo a missão da Igreja de anunciar o Evangelho de Jesus Cristo a todas as pessoas e nações.",
        totalQuestoes: 10,

        questoes: [

            {
                id: 1,
                nivel: "Fácil",
                pergunta: "O que significa evangelizar?",
                alternativas: [
                    "Convencer as pessoas a participarem de uma organização social.",
                    "Anunciar as boas-novas da salvação por meio de Jesus Cristo.",
                    "Ensinar apenas costumes religiosos.",
                    "Promover exclusivamente atividades dentro dos templos."
                ],
                correta: 1,
                explicacao: "Evangelizar significa anunciar o Evangelho, apresentando às pessoas a mensagem de salvação oferecida por Deus por meio de Jesus Cristo.",
                referencia: "Marcos 16:15; Romanos 1:16"
            },

            {
                id: 2,
                nivel: "Fácil",
                pergunta: "Quem deu à Igreja a ordem de anunciar o Evangelho a todas as nações?",
                alternativas: [
                    "Moisés.",
                    "O apóstolo Paulo.",
                    "João Batista.",
                    "Jesus Cristo."
                ],
                correta: 3,
                explicacao: "Antes de sua ascensão, Jesus ordenou aos discípulos que fossem e fizessem discípulos de todas as nações, ensinando-os a obedecer aos seus mandamentos.",
                referencia: "Mateus 28:18-20"
            },

            {
                id: 3,
                nivel: "Fácil",
                pergunta: "Qual é a principal mensagem que deve ser anunciada na evangelização?",
                alternativas: [
                    "A salvação pela graça de Deus mediante a fé em Jesus Cristo.",
                    "A conquista de riquezas materiais.",
                    "A superioridade de uma determinada cultura.",
                    "A capacidade humana de alcançar a perfeição por seus próprios esforços."
                ],
                correta: 0,
                explicacao: "O centro da mensagem evangelística é Jesus Cristo, sua morte e ressurreição, e a salvação oferecida por Deus mediante a fé nele.",
                referencia: "1 Coríntios 15:1-4; Efésios 2:8-9"
            },

            {
                id: 4,
                nivel: "Médio",
                pergunta: "O que Jesus ensinou aos seus discípulos ao dizer que seriam suas testemunhas até os confins da terra?",
                alternativas: [
                    "Que deveriam permanecer apenas em sua cidade.",
                    "Que deveriam abandonar o anúncio do Evangelho.",
                    "Que deveriam testemunhar sobre Cristo em todas as regiões do mundo.",
                    "Que a missão seria responsabilidade exclusiva dos apóstolos."
                ],
                correta: 2,
                explicacao: "Jesus confiou aos seus discípulos a missão de testemunhar sobre ele, começando em Jerusalém e alcançando todas as partes do mundo.",
                referencia: "Atos 1:8"
            },

            {
                id: 5,
                nivel: "Médio",
                pergunta: "Qual é a diferença entre evangelização e missões?",
                alternativas: [
                    "Evangelização e missões são atividades sem relação entre si.",
                    "A evangelização anuncia o Evangelho, enquanto missões envolvem o envio e o trabalho de testemunhar Cristo em diferentes contextos e povos.",
                    "Evangelização é responsabilidade dos membros, mas missões não pertencem à Igreja.",
                    "Missões são realizadas exclusivamente por pessoas que vivem em outros países."
                ],
                correta: 1,
                explicacao: "Evangelização e missões estão profundamente relacionadas. A evangelização proclama as boas-novas, e a obra missionária envolve levar essa mensagem a diferentes povos e lugares.",
                referencia: "Mateus 28:19-20; Romanos 10:13-15"
            },

            {
                id: 6,
                nivel: "Médio",
                pergunta: "Como um cristão pode participar da obra missionária?",
                alternativas: [
                    "Somente viajando para outro país.",
                    "Apenas ocupando um cargo de liderança.",
                    "Evitando conversar sobre sua fé.",
                    "Orando, contribuindo, testemunhando e participando do anúncio do Evangelho."
                ],
                correta: 3,
                explicacao: "A obra missionária envolve diferentes formas de participação. Os cristãos podem orar, contribuir, apoiar missionários e anunciar pessoalmente o Evangelho.",
                referencia: "Filipenses 4:15-18; Atos 13:2-3"
            },

            {
                id: 7,
                nivel: "Médio",
                pergunta: "Qual deve ser a atitude de um cristão ao compartilhar sua fé com outras pessoas?",
                alternativas: [
                    "Agir com amor, respeito, humildade e fidelidade à mensagem bíblica.",
                    "Obrigar as pessoas a aceitarem sua opinião.",
                    "Utilizar ofensas para defender suas crenças.",
                    "Prometer benefícios materiais em troca da conversão."
                ],
                correta: 0,
                explicacao: "O testemunho cristão deve ser realizado com amor, respeito e mansidão, apresentando a esperança que existe em Cristo.",
                referencia: "1 Pedro 3:15-16"
            },

            {
                id: 8,
                nivel: "Difícil",
                pergunta: "O que Romanos 10:14-15 ensina sobre a importância da pregação do Evangelho?",
                alternativas: [
                    "Que a fé não depende do anúncio da Palavra.",
                    "Que somente os líderes religiosos precisam conhecer o Evangelho.",
                    "Que as pessoas precisam ouvir a mensagem de Cristo para crer nele, destacando a importância daqueles que anunciam.",
                    "Que a evangelização deve acontecer somente dentro das igrejas."
                ],
                correta: 2,
                explicacao: "Paulo apresenta uma sequência importante: para invocar o Senhor é necessário crer; para crer, é necessário ouvir; e para ouvir, alguém precisa anunciar a mensagem.",
                referencia: "Romanos 10:14-15"
            },

            {
                id: 9,
                nivel: "Difícil",
                pergunta: "Qual foi a orientação de Jesus sobre a necessidade de trabalhadores para a missão?",
                alternativas: [
                    "Que a obra de Deus não necessita de trabalhadores.",
                    "Que os discípulos deveriam pedir ao Senhor da seara que enviasse trabalhadores para sua colheita.",
                    "Que somente os sacerdotes poderiam anunciar o Reino.",
                    "Que a missão deveria ser interrompida diante das dificuldades."
                ],
                correta: 1,
                explicacao: "Jesus comparou a multidão a uma grande seara e ensinou seus discípulos a orarem para que Deus enviasse trabalhadores para a missão.",
                referencia: "Mateus 9:37-38"
            },

            {
                id: 10,
                nivel: "Difícil",
                pergunta: "Qual afirmação expressa corretamente a responsabilidade missionária da Igreja?",
                alternativas: [
                    "A missão terminou com a morte dos primeiros apóstolos.",
                    "Somente missionários enviados para outros países possuem responsabilidade evangelística.",
                    "A Igreja deve priorizar apenas suas atividades internas.",
                    "A Igreja é chamada a anunciar Cristo, fazer discípulos e testemunhar o Evangelho a todos os povos."
                ],
                correta: 3,
                explicacao: "A missão de anunciar o Evangelho continua sendo responsabilidade da Igreja. Todos os cristãos são chamados a participar, conforme suas possibilidades e os dons recebidos de Deus.",
                referencia: "Mateus 28:19-20; Atos 1:8"
            }

        ]
    },

    // ======================================================
    // MÓDULO 15 — LIBERDADE RELIGIOSA
    // ======================================================

    modulo15: {
        titulo: "Liberdade Religiosa",
        descricao: "Compreendendo a liberdade de consciência, de crença e de culto.",
        totalQuestoes: 10,

        questoes: [

            {
                id: 1,
                nivel: "Fácil",
                pergunta: "O que significa liberdade religiosa?",
                alternativas: [
                    "O direito de obrigar todas as pessoas a seguirem uma religião.",
                    "O direito de escolher, professar ou não professar uma crença religiosa.",
                    "A obrigação de pertencer a uma determinada igreja.",
                    "A proibição de expressar publicamente a fé."
                ],
                correta: 1,
                explicacao: "Liberdade religiosa é o direito de cada pessoa escolher sua crença, praticar sua fé ou não seguir uma religião, sem sofrer imposição ou perseguição.",
                referencia: "João 4:23-24"
            },

            {
                id: 2,
                nivel: "Fácil",
                pergunta: "De acordo com os ensinamentos de Jesus, como deve ser a adoração a Deus?",
                alternativas: [
                    "Por obrigação e imposição.",
                    "Somente por meio de cerimônias públicas.",
                    "Em espírito e em verdade.",
                    "Por determinação das autoridades políticas."
                ],
                correta: 2,
                explicacao: "Jesus ensinou que os verdadeiros adoradores adoram o Pai em espírito e em verdade. A adoração deve nascer de uma relação sincera com Deus.",
                referencia: "João 4:23-24"
            },

            {
                id: 3,
                nivel: "Fácil",
                pergunta: "A fé cristã deve ser imposta pela força?",
                alternativas: [
                    "Sim, quando alguém discorda da Bíblia.",
                    "Sim, para garantir que todos sejam cristãos.",
                    "Não, pois a fé não deve ser imposta pela força.",
                    "Sim, quando uma igreja considera necessário."
                ],
                correta: 2,
                explicacao: "O Evangelho deve ser anunciado com amor e respeito. A decisão de crer não deve ser imposta por violência, ameaça ou coerção.",
                referencia: "2 Coríntios 5:11"
            },

            {
                id: 4,
                nivel: "Médio",
                pergunta: "O que Jesus ensinou sobre o relacionamento entre seus discípulos e as autoridades civis?",
                alternativas: [
                    "Que os cristãos devem desrespeitar todas as autoridades.",
                    "Que os cristãos devem reconhecer suas responsabilidades diante das autoridades.",
                    "Que as autoridades devem controlar a fé de todas as pessoas.",
                    "Que os cristãos não precisam cumprir nenhuma lei."
                ],
                correta: 1,
                explicacao: "Jesus ensinou sobre a distinção entre as responsabilidades diante das autoridades civis e os deveres diante de Deus. O cristão deve agir com responsabilidade e fidelidade ao Senhor.",
                referencia: "Mateus 22:21"
            },

            {
                id: 5,
                nivel: "Médio",
                pergunta: "Segundo Romanos 14:12, cada pessoa deverá prestar contas de sua vida a quem?",
                alternativas: [
                    "Ao governo.",
                    "Ao pastor de sua igreja.",
                    "Aos seus familiares.",
                    "A Deus."
                ],
                correta: 3,
                explicacao: "A Bíblia ensina que cada pessoa prestará contas de si mesma a Deus. Isso reforça a responsabilidade individual diante do Senhor.",
                referencia: "Romanos 14:12"
            },

            {
                id: 6,
                nivel: "Médio",
                pergunta: "Qual deve ser a atitude de um cristão diante de pessoas que possuem crenças diferentes das suas?",
                alternativas: [
                    "Desprezá-las e evitar qualquer contato.",
                    "Obrigá-las a aceitar sua fé.",
                    "TratÁ-las com respeito, amor e dignidade.",
                    "Impedir que expressem suas opiniões."
                ],
                correta: 2,
                explicacao: "O cristão deve testemunhar sua fé com amor, mansidão e respeito, mesmo quando encontra pessoas que pensam de maneira diferente.",
                referencia: "1 Pedro 3:15"
            },

            {
                id: 7,
                nivel: "Médio",
                pergunta: "O que significa dizer que a igreja é independente do Estado em assuntos religiosos?",
                alternativas: [
                    "Que a igreja pode desobedecer a todas as leis.",
                    "Que o Estado deve determinar as doutrinas da igreja.",
                    "Que a igreja possui liberdade para organizar sua vida religiosa sem interferência estatal em sua fé e doutrina.",
                    "Que a igreja deve governar todas as instituições públicas."
                ],
                correta: 2,
                explicacao: "A liberdade religiosa protege a autonomia das igrejas para organizar sua vida, administrar seus assuntos religiosos e ensinar sua fé, respeitando as leis e os direitos fundamentais.",
                referencia: "Mateus 22:21"
            },

            {
                id: 8,
                nivel: "Médio",
                pergunta: "De acordo com a Declaração Universal dos Direitos Humanos, qual direito está relacionado à liberdade religiosa?",
                alternativas: [
                    "O direito de impor uma religião aos outros.",
                    "O direito à liberdade de pensamento, consciência e religião.",
                    "O direito de proibir qualquer manifestação religiosa.",
                    "O direito de estabelecer uma religião obrigatória para todos."
                ],
                correta: 1,
                explicacao: "O artigo 18 da Declaração Universal dos Direitos Humanos reconhece o direito à liberdade de pensamento, consciência e religião, incluindo a liberdade de mudar de crença e manifestá-la individual ou coletivamente.",
                referencia: "Declaração Universal dos Direitos Humanos, artigo 18"
            },

            {
                id: 9,
                nivel: "Difícil",
                pergunta: "Segundo Atos 5:29, qual deve ser a atitude dos apóstolos quando uma autoridade humana exige algo contrário à obediência a Deus?",
                alternativas: [
                    "Abandonar a fé imediatamente.",
                    "Obedecer sempre às autoridades, mesmo contra Deus.",
                    "Obedecer a Deus antes que aos homens.",
                    "Deixar de anunciar o Evangelho definitivamente."
                ],
                correta: 2,
                explicacao: "Os apóstolos afirmaram que deveriam obedecer a Deus antes que aos homens. A fidelidade ao Senhor está acima de qualquer exigência humana contrária à sua vontade.",
                referencia: "Atos 5:29"
            },

            {
                id: 10,
                nivel: "Difícil",
                pergunta: "Qual é uma das principais responsabilidades do cristão na defesa da liberdade religiosa?",
                alternativas: [
                    "Defender somente a liberdade de sua própria denominação.",
                    "Impedir que pessoas de outras religiões pratiquem sua fé.",
                    "Promover o respeito à liberdade de consciência e de crença de todas as pessoas.",
                    "Exigir que o Estado determine qual religião deve ser seguida."
                ],
                correta: 2,
                explicacao: "A liberdade religiosa deve ser defendida para todas as pessoas. O cristão pode anunciar sua fé com convicção, mas também deve respeitar a consciência e os direitos dos demais.",
                referencia: "1 Pedro 3:15-16"

            }

        ]
    },


    // ======================================================
    // MÓDULO 16 — MORTE E DESTINO ETERNO
    // ======================================================

    modulo16: {
        titulo: "Morte e Destino Eterno",
        descricao: "Conhecendo o ensino bíblico sobre a morte, a ressurreição, o juízo e a vida eterna.",
        totalQuestoes: 10,

        questoes: [

            {
                id: 1,
                nivel: "Fácil",
                pergunta: "Segundo a Bíblia, qual é a consequência do pecado para a humanidade?",
                alternativas: [
                    "A conquista da imortalidade.",
                    "A morte.",
                    "A ausência de responsabilidades.",
                    "A vida eterna automática."
                ],
                correta: 1,
                explicacao: "A Bíblia ensina que o pecado entrou no mundo e trouxe a morte. Essa realidade alcança toda a humanidade.",
                referencia: "Romanos 5:12"
            },

            {
                id: 2,
                nivel: "Fácil",
                pergunta: "Qual é a esperança do cristão diante da morte?",
                alternativas: [
                    "A certeza de que nunca enfrentará dificuldades.",
                    "A esperança da ressurreição e da vida eterna em Cristo.",
                    "A ideia de que a morte é o fim de tudo.",
                    "A possibilidade de conquistar a salvação por boas obras."
                ],
                correta: 1,
                explicacao: "A esperança cristã está em Jesus Cristo, que venceu a morte e promete vida eterna aos que nele creem.",
                referencia: "João 11:25-26"
            },

            {
                id: 3,
                nivel: "Fácil",
                pergunta: "Quem venceu a morte por meio de sua ressurreição?",
                alternativas: [
                    "Moisés.",
                    "Abraão.",
                    "Jesus Cristo.",
                    "O apóstolo Paulo."
                ],
                correta: 2,
                explicacao: "Jesus Cristo ressuscitou ao terceiro dia, demonstrando sua vitória sobre a morte e garantindo a esperança da ressurreição.",
                referencia: "1 Coríntios 15:3-4"
            },

            {
                id: 4,
                nivel: "Médio",
                pergunta: "O que a Bíblia ensina sobre a volta de Jesus Cristo?",
                alternativas: [
                    "Que Jesus não voltará.",
                    "Que sua volta será apenas uma lembrança simbólica.",
                    "Que Jesus voltará, conforme prometeu.",
                    "Que somente os apóstolos verão sua volta."
                ],
                correta: 2,
                explicacao: "A Bíblia apresenta a volta de Jesus como uma promessa e uma esperança para os cristãos. Os discípulos devem viver preparados e fiéis ao Senhor.",
                referencia: "João 14:3; Atos 1:11"
            },

            {
                id: 5,
                nivel: "Médio",
                pergunta: "Segundo Hebreus 9:27, o que está determinado aos seres humanos?",
                alternativas: [
                    "Viverem eternamente nesta terra.",
                    "Morrerem uma só vez e, depois disso, enfrentarem o juízo.",
                    "Retornarem várias vezes ao mundo em outras vidas.",
                    "Conquistarem a eternidade por meio de riquezas."
                ],
                correta: 1,
                explicacao: "A Palavra de Deus ensina que a vida humana é limitada e que cada pessoa deverá comparecer diante de Deus para o juízo.",
                referencia: "Hebreus 9:27"
            },

            {
                id: 6,
                nivel: "Médio",
                pergunta: "O que a Bíblia ensina sobre a ressurreição dos mortos?",
                alternativas: [
                    "Que somente pessoas importantes ressuscitarão.",
                    "Que não haverá ressurreição.",
                    "Que Deus ressuscitará os mortos, conforme seu propósito.",
                    "Que a ressurreição depende das riquezas acumuladas durante a vida."
                ],
                correta: 2,
                explicacao: "A Bíblia ensina que haverá ressurreição dos mortos. Em Cristo, os salvos têm a esperança da ressurreição para a vida eterna.",
                referencia: "João 5:28-29; 1 Coríntios 15:20-23"
            },

            {
                id: 7,
                nivel: "Médio",
                pergunta: "Como a Bíblia descreve a vida eterna oferecida por Deus?",
                alternativas: [
                    "Como uma recompensa que pode ser comprada.",
                    "Como um presente de Deus recebido pela fé em Jesus Cristo.",
                    "Como um prêmio conquistado somente por boas obras.",
                    "Como uma experiência reservada apenas aos líderes religiosos."
                ],
                correta: 1,
                explicacao: "A vida eterna é dádiva de Deus, concedida por sua graça mediante a fé em Jesus Cristo. Não pode ser comprada nem conquistada por mérito humano.",
                referencia: "Romanos 6:23; Efésios 2:8-9"
            },

            {
                id: 8,
                nivel: "Difícil",
                pergunta: "Qual é a esperança apresentada em Apocalipse 21:4 para aqueles que estarão com Deus?",
                alternativas: [
                    "A continuidade do sofrimento e da morte.",
                    "A existência de uma vida sem comunhão com Deus.",
                    "O fim da morte, do pranto, da dor e do sofrimento.",
                    "O retorno de todas as pessoas à vida terrena."
                ],
                correta: 2,
                explicacao: "A promessa de Deus é que haverá novos céus e nova terra. Ele enxugará dos olhos toda lágrima, e não haverá mais morte, pranto, clamor ou dor.",
                referencia: "Apocalipse 21:1-4"
            },

            {
                id: 9,
                nivel: "Difícil",
                pergunta: "Segundo 2 Coríntios 5:10, diante de quem todos deverão comparecer para receber segundo suas obras?",
                alternativas: [
                    "Diante dos governantes terrenos.",
                    "Diante do tribunal de Cristo.",
                    "Diante dos líderes das igrejas.",
                    "Diante dos anjos."
                ],
                correta: 1,
                explicacao: "A Bíblia ensina que todos comparecerão diante do tribunal de Cristo. Essa verdade nos lembra da responsabilidade de viver de maneira fiel ao Senhor.",
                referencia: "2 Coríntios 5:10"
            },

            {
                id: 10,
                nivel: "Difícil",
                pergunta: "Qual deve ser a atitude do cristão diante da promessa da volta de Jesus e da vida eterna?",
                alternativas: [
                    "Viver com indiferença, sem se preocupar com sua fé.",
                    "Tentar descobrir datas exatas para a volta de Cristo.",
                    "Viver em santidade, vigilância, fidelidade e esperança.",
                    "Abandonar suas responsabilidades neste mundo."
                ],
                correta: 2,
                explicacao: "A esperança da volta de Cristo deve motivar o cristão a viver com fidelidade, santidade, amor e compromisso com Deus, sem tentar estabelecer datas para esse acontecimento.",
                referencia: "Tito 2:11-13; Mateus 24:36"

            }

        ]
    },
};






