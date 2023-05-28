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
      desenho: ["Supremacia alienígena"],
      imagem:
        "https://i.pinimg.com/236x/b4/d1/50/b4d150fdc2467a030a4d4dede6685eec.jpg",
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
        "Pirocinese, fitocinese, regeneração, projeção de metano, gás adormecido, elasticidade, alongamento, imunidade ao fogo, força aprimorada",
      desenho: ["Força alienígena", "Supremacia alienígena", "Omniverse"],
      imagem:
        "https://i.pinimg.com/originals/f2/f7/c3/f2f7c350eed859713d944797326fbf10.jpg",
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
