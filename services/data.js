const data = {
  transformacoes: [
    {
      id: 1,
      nome: "Chama",
      raca: "Pyronita",
      poderes: "Manipulação de fogo e calor intenso",
      desenho: ["Clássico", "Supremacia alienígena", "Omniverse"],
      imagem:
        "https://pm1.aminoapps.com/6360/50537b33edf2843ebe84f31f7b54486fa597f0f2_00.jpg",
    },
    {
      id: 2,
      nome: "Besta",
      raca: "Vulpimancer",
      poderes: "Sentidos aguçados, agilidade e habilidades de combate",
      desenho: ["Clássico", "Supremacia alienígena", "Omniverse"],
      imagem:
        "https://pbs.twimg.com/card_img/1662049720464818177/ldvySgTT?format=jpg&name=medium",
      supremo:
        "Besta Suprema é significativamente maior e mais musculoso do que o Besta. Sua pele é de cor marrom avermelhado. Ele tem quatro enormes picos cinzas que começam como uma barbatana de tubarão na cabeça e seguem até o final das suas costas, afinando perto da garupa.",
      supremoImagem:
        "https://www.heroisdatv.com/wp-content/uploads/2011/08/24Besta_Supremo.png",
    },
    {
      id: 3,
      nome: "Quatro Braços",
      raca: "Tetramando",
      poderes: "Força física sobre-humana",
      desenho: ["Clássico", "Supremacia alienígena", "Omniverse"],
      imagem:
        "https://i.pinimg.com/originals/f3/66/d9/f366d91660b39a4427a77e5876c904da.png",
    },
    {
      id: 4,
      nome: "Ultra T",
      raca: "Transylian",
      poderes:
        "Liberação de raios elétricos poderosos, possuir tecnologias e aprimorá-las",
      desenho: ["Clássico", "Supremacia alienígena", "Omniverse"],
      imagem:
        "https://www.heroisdatv.com/wp-content/uploads/2011/05/Ben10upgradewallpaper.jpg",
    },
    {
      id: 5,
      nome: "Rath",
      raca: "Appoplexiano",
      poderes: "Habilidades de luta incríveis",
      desenho: ["Supremacia alienígena", "Omniverse"],
      imagem:
        "https://vignette.wikia.nocookie.net/ben10/images/7/78/Angry_Rath.png/revision/latest?cb=20130206073645",
      supremo:
        "Rath Supremo não teve nenhum grande poder especial muito diferenciado ao do Rath normal. Entretanto, ele está mais musculoso, o que significa um aprimoramento de sua força e resistência. Rath Supremo também mostrou uma velocidade e agilidade melhoradas quando perseguiu Luhley.",
      supremoImagem:
        "https://img.wattpad.com/2fc27b9a9c0edeb0ef2379242ce7ac3d1004dc06/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f506256595373334d62584c6634773d3d2d3930373934393534352e313631616237643963363166303232643538363135373235393136312e6a7067?s=fit&w=720&h=720",
    },
    {
      id: 6,
      nome: "Diamante",
      raca: "Petrosapien",
      poderes: "Criação e manipulação de cristais",
      desenho: ["Clássico", "Força alienígena"],
      imagem:
        "https://pm1.aminoapps.com/6578/057baecf2878e4855f4aa34fca0f1f6d56697115_hq.jpg",
    },
    {
      id: 7,
      nome: "Massa Cinzenta",
      raca: "Galvaniano",
      poderes: "Inteligência avançada e habilidades de análise",
      desenho: ["Clássico", "Supremacia alienígena", "Omniverse"],
      imagem:
        "https://i.pinimg.com/236x/b4/d1/50/b4d150fdc2467a030a4d4dede6685eec.jpg",
      supremo:
        "Massa Cinzenta Supremo tem uma inteligência altamente superior à de quase qualquer alien, tendo conhecimento de qualquer matéria em nível avançado. Se ele estiver perto de alguns equipamentos ele pode construir máquinas e por ora fala com grafia avançada como Artrópode Supremo. Ele pode controlar outros seres sendo orgânicos ou máquinas, encontrando um ponto essencial. Massa Cinzenta Supremo tem sido mostrado como capaz de detectar o ponto nervoso de alguém e entender línguas estrangeiras ou robóticas, como a de Pyxi. Assim como os Galvanianos em geral, ele também possui um pré cérebro com todas as funções corporais básicas.",
      supremoImagem:
        "https://pm1.narvii.com/7237/e03487af95f55fba89934279cfb5c7a6aa506809r1-440-511v2_00.jpg",
    },
    {
      id: 8,
      nome: "XLR8",
      raca: "Kinecelerano",
      poderes: "Super velocidade",
      desenho: ["Clássico", "Omniverse"],
      imagem:
        "https://i.pinimg.com/originals/89/26/0e/89260e3b1cb9d9655b7d250600114b03.jpg",
    },
    {
      id: 9,
      nome: "Fantasmático",
      raca: "Ectonurita",
      poderes: "Intangibilidade e capacidade de possuir objetos",
      desenho: [
        "Clássico",
        "Força alienígena",
        "Supremacia alienígena",
        "Omniverse",
      ],
      imagem:
        "https://i.pinimg.com/736x/1a/58/90/1a58909d655730c554fc58d809a89350.jpg",
    },
    {
      id: 10,
      nome: "Fogo Fátuo",
      raca: "Metanosiano",
      poderes:
        "Pirocinese, fitocinese, regeneração, projeção de metano, gás adormecido, elasticidade, alongamento, imunidade ao fogo e força e resistência aprimorada",
      desenho: ["Força alienígena", "Supremacia alienígena", "Omniverse"],
      imagem:
        "https://i.pinimg.com/originals/f2/f7/c3/f2f7c350eed859713d944797326fbf10.jpg",
      supremo:
        "Fogo Fátuo Supremo possui um esquema de cores azul e marrom escuro. Agora seu formato lembra uma árvore humanoide petrificada, e nas costas possui três grandes esferas contendo uma solução de querosene napalm de cor azul gelatinosa como confirmado por Dwayne McDuffie que Fogo Fátuo Supremo ascende uma chama três vezes mais quentes que Fogo Fátuo. Seu rosto lembra um pouco o de Chama, porém está coberto por uma dessas esferas, seus pés são semelhantes a sua versão original, seus braços são mais grossos e possuem três pequenas esferas em cada um. O Superomnitrix se localiza em seu peito.",
      supremoImagem:
        "https://4.bp.blogspot.com/-T9FOc_8cnxk/TePJaC7RX4I/AAAAAAAAA6s/gd-_w2XRCjs/s1600/03-Fogo_Selvagem_Supremo.png",
    },
    {
      id: 11,
      nome: "Gravattack",
      raca: "Galileano",
      poderes:
        "Gravitocinese, geração de buracos negros, quasares e campos de orça, forma de planeta, levitação, força e resistência aprimorada e sobrevivência no espaço.",
      desenho: ["Omniverse"],
      imagem: "https://i.ebayimg.com/images/g/unwAAOSwvOdh5Vnr/s-l500.jpg",
      supremo:
        "Após a evolução, Gravattack perdeu suas pernas, e sua cabeça ficou mais arredondada, se assemelhando mais a um planeta. Seus picos estão bem maiores, assemelhando-se a estalagmites, e agora também tem picos em suas bochechas. Seu núcleo planetário fica em sua boca, tendo um interior preto e com espirais vermelhas. O símbolo evoluído do Superomnitrix tem 7 pontas, e está em seu queixo. Com sua forma descentralizada, Gravattack Supremo pode controlar a gravidade para manipular o peso dos objetos e movimento dos objetos, ou bate-los contra o chão com facilidade. Ele também pode fazer matéria ou energia ficar em torno dele. Seu poder gravitacional é tão grande que é capaz de criar um quasar. Ele possui três pequenos satélites que orbitam ele. Esses satélites também têm capacidade de manipular a gravidade.",
      supremoImagem:
        "https://i.pinimg.com/originals/2f/9d/9d/2f9d9dbcdefb9249d5f7a594c4c64136.png",
    },
  ],
  predadores: [
    {
      id: 1,
      nome: "Tyranópode",
      raca: "Kaosseffexx Ultimasauria",
      poderes:
        "Super força e grande tamanho, formação de casulos, resustência.",
      imagem:
        "https://i.pinimg.com/736x/3b/18/d6/3b18d65529d90d463c8ef18c72a661d1.jpg",
      presaNome: "Enormossauro",
      presaRaca: "Vaxasaurianos",
      fraquezas:
        "Como é tão grande, é um alvo fácil para seus inimigos, e também como foi mostrado em Predadores e Presas, Parte 2 ele não consegue enxergar muito bem criaturas pequenas, já que não conseguiu ver Massa Cinzenta. Além disto foi o único predador do Nemetrix que mostrou uma certa dificuldade para lutar contra sua presa que no caso era Enormossauro. Se um ser pequeno como Massa Cinzenta ou Nanomech, beliscar um certo ponto de pressão do predador, o mesmo cai e desmaia.",
    },
    {
      id: 2,
      nome: "Siridozer",
      poderes:
        "Super força, resistência aprimorada, chifres e espinhos, saliva anti-inflamável, agilidade, sobrevivência ao vácuo.",
      imagem:
        "https://i.pinimg.com/736x/71/09/37/7109374e2e3f59b5a5a3705ba76277fc.jpg",
      presaNome: "Chama",
      presaRaca: "Pyronitas",
      fraquezas:
        "Não mostrou ter tanta força, pois não conseguiu esmagar Macaco-Aranha em Quanto Mais as Coisas Mudam, Parte 1 e também não conseguiu esmagar Ben, em Predadores e Presas, Parte 2. Seus sentidos não são muito aguçados, por isso tem que ser guiado pela sua visão. Assim, quando seus olhos estão tapados, fica desorientado.",
    },
    {
      id: 3,
      nome: "Hipnótico",
      raca: "Psycholeopterrano",
      poderes: "Resistência a temperatudas, hipnose, intangibilidade.",
      imagem:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/724f32c1-a5c4-4dd0-9170-40f6a4c4aa82/ddspg8o-1327a271-b7a0-4b47-848b-8dbad5b526f2.png/v1/fill/w_939,h_851/into_the_omniverse___hypnotick_by_rzgmon200_ddspg8o-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE2MCIsInBhdGgiOiJcL2ZcLzcyNGYzMmMxLWE1YzQtNGRkMC05MTcwLTQwZjZhNGM0YWE4MlwvZGRzcGc4by0xMzI3YTI3MS1iN2EwLTRiNDctODQ4Yi04ZGJhZDViNTI2ZjIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6DCxCIbjEMel4iP785qUYBMkLug95m7xGHQU5tHxMCs",
      presaNome: "Friagem",
      presaRaca: "Necrofriggianos",
      fraquezas:
        "Como visto em Malfeitor, óculos especiais podem evitar a hipnose dos Psycholeopterranos. Possivelmente Vulpimancers como Besta sejam imunes a hipnose por não possuírem olhos.",
    },
  ],
  viloes: [
    {
      id: 1,
      nome: "Vilgax",
      raca: "Chimera Sui Generis",
      poderes: "Super Força, resistência e habilidades de regeneração",
      desenho: [
        "Clássico",
        "Força alienígena",
        "Supremacia alienígena",
        "Omniverse",
      ],
      imagem:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6df83f41-ae35-4de3-aae1-4eb9d87a6782/dfdwn3r-bb3cba58-213e-441a-95cf-0de3774a0f9c.png/v1/fill/w_1280,h_971/vilgax__ben_10__render_by_ssundpool_dfdwn3r-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTcxIiwicGF0aCI6IlwvZlwvNmRmODNmNDEtYWUzNS00ZGUzLWFhZTEtNGViOWQ4N2E2NzgyXC9kZmR3bjNyLWJiM2NiYTU4LTIxM2UtNDQxYS05NWNmLTBkZTM3NzRhMGY5Yy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.kezpyn7MRBy2TA6UyOn9hrU7-IUB5sfpUJqNcQp9-2s",
      plano:
        "Ele é um vilão poderoso e astuto, cujo plano principal é adquirir o Omnitrix, um dispositivo que permite ao usuário se transformar em várias formas alienígenas. O plano de Vilgax é capturar Ben Tennyson, o possuidor do Omnitrix, e obter o dispositivo para si mesmo. Ele acredita que o poder do Omnitrix lhe dará uma vantagem esmagadora sobre seus inimigos e o tornará invencível. Vilgax é implacável em sua busca pelo Omnitrix e está disposto a fazer qualquer coisa para consegui-lo. Vilgax utiliza vários métodos para tentar capturar Ben e o Omnitrix. Ele envia seus drones e subordinados para derrotar o jovem herói e tomar o dispositivo. Além disso, Vilgax também busca aliados e recursos para fortalecer seu exército e aumentar suas chances de sucesso. Embora o plano principal de Vilgax seja adquirir o Omnitrix, ao longo da série, ele também tem outros objetivos menores. Ele busca vingança contra Tetrax Shard, um mercenário alienígena que o traiu no passado, e procura conquistar e dominar outros planetas para expandir seu império. No entanto, é importante ressaltar que a trama e os detalhes específicos do plano de Vilgax podem variar em diferentes temporadas e iterações da série 'Ben 10'. O enredo evolui ao longo do tempo, e Vilgax pode ter motivações e estratégias diferentes em diferentes momentos da história.",
    },
    {
      id: 2,
      nome: "Albedo",
      raca: "Galvaniano",
      poderes: "Intelecto avançado e capacidade de copiar DNA alienígena",
      desenho: ["Força alienígena", "Supremacia alienígena", "Omniverse"],
      imagem:
        "https://qph.cf2.quoracdn.net/main-qimg-61a2b208e758b844028411cb96b9eaae",
      plano:
        "Albedo é outro antagonista da série 'Ben 10' e é conhecido por ser um clone imperfeito de Ben Tennyson. Ao contrário de Vilgax, o plano de Albedo se concentra principalmente em derrotar Ben e provar que ele é superior. Inicialmente, Albedo deseja obter o Omnitrix para si mesmo, acreditando que ele pode aprimorá-lo e superar as limitações que enfrentou como um clone defeituoso. Seu objetivo é se tornar o único usuário do Omnitrix e ter acesso irrestrito às suas transformações alienígenas. No entanto, ao longo da série, o plano de Albedo evolui e se torna mais complexo. Ele desenvolve o seu próprio dispositivo, conhecido como 'Ultimatrix', que lhe permite se transformar em versões 'supremas' das formas alienígenas. Com o Ultimatrix, Albedo busca obter poder absoluto e superar tanto Ben quanto Vilgax. Além disso, Albedo também busca vingança contra Azmuth, o criador do Omnitrix, por ter criado um clone imperfeito. Ele culpa Azmuth por sua situação e procura confrontá-lo e derrotá-lo. No decorrer da série, as motivações de Albedo podem mudar e seus planos podem ser influenciados por circunstâncias específicas. Portanto, é importante lembrar que os detalhes exatos de seu plano podem variar ao longo da história.",
    },
    {
      id: 3,
      nome: "Psyphon",
      raca: "Desconhecida",
      poderes:
        "Habilidades tecnológicas avançadas, resistência a ataques físicos",
      desenho: ["clássico", "força alienígena", "omniverse"],
      imagem:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb959b0a-216d-4a40-a743-b39c8c95229a/demjbq2-e000a578-4a2d-47f7-85cb-9cdc993789ae.png/v1/fill/w_1280,h_1280,q_80,strp/psyphon__proto_tech_armor__by_jupago25_demjbq2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2JiOTU5YjBhLTIxNmQtNGE0MC1hNzQzLWIzOWM4Yzk1MjI5YVwvZGVtamJxMi1lMDAwYTU3OC00YTJkLTQ3ZjctODVjYi05Y2RjOTkzNzg5YWUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Shy-GUyebvfBHrVZiYSmG1lVMceoMcz77kY63sVwtT8",
      plano:
        "Psyphon é um dos vilões recorrentes na série 'Ben 10' e serve como capanga e aliado de Vilgax. Embora Psyphon não tenha um plano específico próprio, ele desempenha um papel importante na execução dos planos de Vilgax. Psyphon é conhecido por ser um criminoso espacial habilidoso e cruel. Ele é encarregado de realizar as tarefas sujas e executar as ordens de Vilgax. Seu principal objetivo é ajudar Vilgax a conquistar o Omnitrix e derrotar Ben Tennyson. Como parte do plano de Vilgax, Psyphon desempenha várias funções, que incluem: Coletar tecnologia avançada: Psyphon é encarregado de procurar e adquirir tecnologia alienígena que possa ser útil para Vilgax em seu objetivo de obter o Omnitrix. Ele busca armas poderosas, dispositivos de controle mental e outros recursos que possam aumentar as chances de sucesso de Vilgax; Liderar os capangas: Psyphon comanda um grupo de capangas e subordinados leais a Vilgax. Ele os coordena e os envia em missões específicas para capturar Ben ou obter informações sobre o Omnitrix; Psyphon utiliza sua astúcia e crueldade para garantir que seus subordinados cumpram as ordens de Vilgax; combate direto: Psyphon também é um lutador habilidoso e está disposto a enfrentar Ben e seus aliados diretamente quando necessário. Ele usa suas habilidades de combate e seu arsenal de tecnologia alienígena para tentar derrotar seus oponentes e alcançar os objetivos de Vilgax. No entanto, assim como outros personagens da série, os detalhes do plano de Psyphon podem variar dependendo da temporada e da trama específica em que ele está envolvido.",
    },
    {
      id: 4,
      nome: "Hex",
      raca: "Humano",
      poderes: "Magia negra e controle de mana",
      desenho: ["Força alienígena", "Omniverse"],
      imagem:
        "https://i.pinimg.com/originals/5b/f2/bf/5bf2bf4a6ba376c1e88bb8291f9da31d.png",
      plano:
        "Hex é um vilão da série 'Ben 10' conhecido por ser um feiticeiro habilidoso. Ele possui poderes mágicos e é obcecado por magia e artefatos ocultos. Embora Hex tenha aparecido em várias ocasiões ao longo da série, ele não possui um plano específico recorrente. No entanto, em suas aparições, o objetivo principal de Hex geralmente envolve o uso de magia para obter poder ou alcançar algum tipo de vantagem pessoal. Seus planos podem variar dependendo da história em que ele está inserido. Alguns exemplos de planos em que Hex esteve envolvido são: Obter artefatos mágicos: Hex está constantemente em busca de objetos mágicos poderosos e raros. Seu plano pode envolver a localização e aquisição desses artefatos para aumentar seu próprio poder mágico ou usá-los para fins específicos, como controlar ou destruir algo; rituais mágicos: Hex pode tentar realizar rituais mágicos para alcançar seus objetivos. Isso pode envolver a realização de um feitiço para ganhar poder ou abrir portais para outros reinos ou dimensões; dominar a magia: Hex pode buscar meios de aprimorar suas habilidades mágicas ou dominar um tipo específico de magia. Seu plano pode envolver encontrar mestres da magia ou aprender segredos antigos para se tornar ainda mais poderoso; vingança: Em algumas ocasiões, Hex pode buscar vingança contra aqueles que o desafiaram ou prejudicaram. Seu plano pode envolver a punição de seus inimigos usando seus poderes mágicos. É importante ressaltar que os detalhes específicos do plano de Hex podem variar dependendo da história em que ele está envolvido. Cada episódio ou arco da série pode apresentar diferentes objetivos e motivações para o personagem.",
    },
    {
      id: 5,
      nome: "Zs'Skayr",
      raca: "Ectonurita",
      poderes: "Intangibilidade, possessão e controle sobre a escuridão",
      desenho: ["Clássico", "Força alienígena"],
      imagem:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36acd9ba-d9e4-4ea1-9dba-f08e404c3999/d7q748m-1d54ed7f-a6bc-460f-b3ce-b90c7e44885b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM2YWNkOWJhLWQ5ZTQtNGVhMS05ZGJhLWYwOGU0MDRjMzk5OVwvZDdxNzQ4bS0xZDU0ZWQ3Zi1hNmJjLTQ2MGYtYjNjZS1iOTBjN2U0NDg4NWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PLWzsECEkTLXBb0q8wm0q1waPDdn8USdE6EQCE5Se54",
      plano:
        "Zs'Skayr, também conhecido como Fantasmático, é um vilão da série 'Ben 10' e é uma das formas alienígenas do Omnitrix. Ele é um Ectonurite, uma espécie de fantasmas alienígenas, e possui poderes relacionados à manipulação da matéria e à capacidade de se tornar intangível. O plano de Zs'Skayr varia ao longo da série, mas seu objetivo principal é espalhar o medo e dominar o mundo humano. Ele deseja transformar todos em criaturas de seu tipo e estabelecer um reinado de terror. Alguns dos planos em que Zs'Skayr esteve envolvido incluem: Possessão e controle: Zs'Skayr busca possuir pessoas e controlá-las para espalhar o medo e o caos. Ele usa sua habilidade de se tornar intangível para entrar nos corpos dos outros e assumir o controle sobre eles; exército de Fantasmas: Zs'Skayr tenta reunir outros Ectonurites para formar um exército de fantasmas. Seu objetivo é usar esse exército para subjugar a humanidade e estabelecer seu domínio sobre o mundo; rituais e artefatos mágicos: Em algumas ocasiões, Zs'Skayr pode buscar rituais mágicos ou artefatos que possam aumentar seu poder. Ele procura itens ou cerimônias que possam conceder-lhe habilidades adicionais ou ampliar seu controle sobre o reino dos fantasmas; vingança: Zs'Skayr pode procurar se vingar de Ben Tennyson e de outros que tenham cruzado seu caminho no passado. Seu plano pode envolver a busca por vingança e o desejo de eliminar seus inimigos. É importante ressaltar que os detalhes específicos do plano de Zs'Skayr podem variar dependendo da história em que ele está envolvido. Cada episódio ou arco da série pode apresentar diferentes objetivos e motivações para o personagem.",
    },
  ],
  desenhos: [
    {
      id: 1,
      nome: "Ben 10 (Clássico)",
      temporadas: 4,
      episodios: 52,
      aliens: [
        "Chama",
        "XLR8",
        "Quatro Braços",
        "Insectóide",
        "Diamante",
        "Besta",
        "Massa Cinzenta",
      ],
      imagem:
        "https://img.quizur.com/f/img632652f7dced58.62822370.jpg?lastEdited=1663455994",
    },
    {
      id: 2,
      nome: "Ben 10: Força Alienígena",
      temporadas: 3,
      episodios: 46,
      aliens: [
        "Fogo Fátuo",
        "Gigante",
        "Eco Eco",
        "Enormossauro",
        "Friagem",
        "Cromático",
        "Artrópode",
      ],
      imagem:
        "https://i.pinimg.com/originals/8d/8b/b0/8d8bb0502a28ab3e4b16a83805bcea77.jpg",
    },
    {
      id: 3,
      nome: "Ben 10: Supremacia Alienígena",
      temporadas: 3,
      episodios: 52,
      aliens: [
        "Anfíbio",
        "Ameaça Aquática",
        "Tartagira",
        "NRG",
        "Macaco-Aranha",
        "Jato de Água",
        "Eco Eco Supremo",
      ],
      imagem: "https://cdn.wallpapersafari.com/21/4/MPDXwo.jpg",
    },
    {
      id: 4,
      nome: "Ben 10: Omniverse",
      temporadas: 8,
      episodios: 80,
      aliens: [
        "Bloxx",
        "Gravattack",
        "Bala de Canhão",
        "Feedback",
        "Cromático",
        "Astrodáctilo",
        "Enormossauro",
        "Friagem",
      ],
      imagem: "https://images6.alphacoders.com/116/thumb-1920-1162645.png",
    },
  ],
};

export default data;
