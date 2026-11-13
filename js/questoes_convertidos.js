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
    }
};




