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
        "https://img.quizur.com/f/img5f91176f6208f9.09699165.png?lastEdited=1603344247",
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
      nome: "Insectóide",
      raca: "Lepidopterrano",
      poderes: "Habilidades de um inseto, incluindo asas e espinhos afiados",
      desenho: ["Clássico", "Supremacia alienígena", "Omniverse"],
      imagem:
        "https://15bac67be4.cbaul-cdnwnd.com/c1a100678181f7822d9e85f7ab30d732/200000044-0d6140e60b/download%20(4).jpg",
    },
    {
      id: 6,
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
      id: 7,
      nome: "Diamante",
      raca: "Petrosapien",
      poderes: "Criação e manipulação de cristais",
      desenho: ["Clássico", "Força alienígena"],
      imagem:
        "https://pm1.aminoapps.com/6578/057baecf2878e4855f4aa34fca0f1f6d56697115_hq.jpg",
    },
    {
      id: 8,
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
      id: 9,
      nome: "XLR8",
      raca: "Kinecelerano",
      poderes: "Super velocidade",
      desenho: ["Clássico", "Omniverse"],
      imagem:
        "https://i.pinimg.com/originals/89/26/0e/89260e3b1cb9d9655b7d250600114b03.jpg",
    },
    {
      id: 10,
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
      id: 11,
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
      id: 12,
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
      imagem: "link_imagem_vilgax.jpg",
    },
    {
      id: 2,
      nome: "Albedo",
      raca: "Galvaniano",
      poderes: "Intelecto avançado e capacidade de copiar DNA alienígena",
      desenho: ["Clássico", "Força alienígena", "Omniverse"],
      imagem: "link_imagem_albedo.jpg",
    },
    {
      id: 3,
      nome: "Eon",
      raca: "Chronian",
      poderes: "Manipulação do tempo e viagem temporal",
      desenho: ["Clássico", "Omniverse"],
      imagem: "link_imagem_eon.jpg",
    },
    {
      id: 4,
      nome: "Hex",
      raca: "Humano",
      poderes: "Magia negra e controle de mana",
      desenho: ["Força alienígena", "Omniverse"],
      imagem: "link_imagem_hex.jpg",
    },
    {
      id: 5,
      nome: "Zs'Skayr (Espectral)",
      raca: "Ectonurita",
      poderes: "Intangibilidade, possessão e controle sobre a escuridão",
      desenho: ["Clássico", "Força alienígena"],
      imagem: "link_imagem_zsskayr.jpg",
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
      imagem: "link_imagem_classico.jpg",
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
      imagem: "link_imagem_forca_alienigena.jpg",
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
      imagem: "link_imagem_Supremacia_alienigena.jpg",
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
      imagem: "link_imagem_Omniverse.jpg",
    },
  ],
};

export default data;
