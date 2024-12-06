let contos = [
    {
        titulo: "Branca de Neve",
        descricao: "Uma rainha má, invejosa da beleza da enteada Branca de Neve, tenta matá-la. Branca de Neve foge para a floresta, onde encontra sete anões. A rainha, disfarçada, envenena a jovem com uma maçã, mas um príncipe a salva com um beijo.",
        autoria: "Os Irmãos Grimm são os autores mais conhecidos da versão escrita do conto de fadas 'Branca de Neve'. Eles coletaram e adaptaram diversas histórias populares, incluindo essa, que se tornou um clássico da literatura infantil.",
        link: "https://pt.wikipedia.org/wiki/Branca_de_Neve",
        tags: "branca espelho bruxa anões"
    },
    {
        titulo: "A Bela Adormecida",
        descricao: "Uma princesa é amaldiçoada por uma fada maligna a dormir para sempre, mas um príncipe a desperta com um beijo.",
        autoria: "Charles Perrault (versão original), diversas adaptações",
        link: "https://pt.wikipedia.org/wiki/A_Bela_Adormecida",
        tags: "bela dormir roca fadas"
    },
    {
        titulo: "Chapeuzinho Vermelho",
        descricao: "Uma menina com um capuz vermelho leva uma cesta para a avó doente, mas encontra um lobo mau no caminho. O lobo engana a menina e a avó, mas um caçador salva a todos.",
        autoria: "O conto de Chapeuzinho Vermelho é um clássico da literatura infantil, com diversas versões e adaptações ao longo dos anos.",
        link: "https://pt.wikipedia.org/wiki/Chapeuzinho_Vermelho",
        tags: "chapeuzinho lobo vovó cesta"
    },
    {
        titulo: "Cinderela",
        descricao: "Uma jovem órfã, maltratada por sua madrasta e suas irmãs, vai a um baile real e encontra o príncipe encantado. Mas, à meia-noite, ela precisa fugir, deixando para trás um sapatinho de cristal.",
        autoria: "Cinderela é um dos contos de fadas mais populares do mundo, com diversas adaptações para o cinema e a televisão.",
        link: "https://pt.wikipedia.org/wiki/Cinderela",
        tags: "sapatinho abóbora meia-noite baile"
    },
    {
        titulo: "A Bela e a Fera",
        descricao: "Uma bela jovem é aprisionada em um castelo por uma fera, mas com o tempo, ela descobre a verdadeira identidade da fera.",
        autoria: "Gabrielle-Suzanne Barbot de Villeneuve (versão original), adaptada por Jeanne-Marie Leprince de Beaumont",
        link: "https://pt.wikipedia.org/wiki/La_Belle_et_la_B%C3%AAte",
        tags: "bela fera rosa"
      },
      {
        titulo: "Rapunzel",
        descricao: "Uma jovem com cabelos longos e mágicos é aprisionada em uma torre por uma bruxa. Um príncipe a salva.",
        autoria: "Irmãos Grimm",
        link: "https://pt.wikipedia.org/wiki/Rapunzel",
        tags: "cabelo torre bruxa"
      },
      {
        titulo: "O Patinho Feio",
        descricao: "Um patinho diferente dos outros é rejeitado por seus irmãos, mas descobre que é um belo cisne.",
        autoria: "Hans Christian Andersen",
        link: "https://pt.wikipedia.org/wiki/O_Patinho_Feio",
        tags: "patinho pata cisne"
      },
      {
        titulo: "João e o Pé de Feijão",
        descricao: "Um menino troca a vaca da família por sementes mágicas que crescem e formam um pé de feijão gigante.",
        autoria: "Origem folclórica, popularizada pelos Irmãos Grimm",
        link: "https://pt.wikipedia.org/wiki/Jo%C3%A3o_e_o_P%C3%A9_de_Feij%C3%A3o",
        tags: "joão feijão gigante mágico galinha 'ovos de ouro' "
      },
      {
        titulo: "A Pequena Sereia",
        descricao: "Uma sereia se apaixona por um príncipe humano e faz um acordo com uma bruxa para ter pernas, mas sofre as consequências.",
        autoria: "Hans Christian Andersen",
        link: "https://pt.wikipedia.org/wiki/A_Pequena_Sereia",
        tags: "sereia peixe 'bruxa do mar' humana"
      },
      {
        titulo: "Peter Pan",
        descricao: "Um jovem que nunca cresceu leva três crianças para grandes aventuras na Terra do Nunca, enfrentando entre grandes perigos o temível Capitão Gancho",
        autoria: "Sir James Matthew Barrie",
        link: "https://pt.wikipedia.org/wiki/Peter_Pan",
        tags: "peter pan garotos perdidos wendy 'capitão gancho' gancho pirata 'terra do nunca'"
      },
      {
        titulo: "Alice no País das Maravilhas",
        descricao: "Uma jovem segue um coelho atrasado e cai num mundo cheio de aventuras e loucuras",
        autoria: "Lewis Carroll (pseudônimo de Charles Lutwidge Dodgson). O livro tem uma continuação: Alice do Outro Lado do Espelho",
        link: "https://pt.wikipedia.org/wiki/Alice_no_Pa%C3%ADs_das_Maravilhas",
        tags: "alice coelho hora 'cortem as cabeças' 'rainha de copas' 'chapeleiro louco' gato"
      },
      {
        titulo: "Pinóquio",
        descricao: "Um boneco de madeira que ganha vida e precisa provar que é um menino de verdade.",
        autoria: "Carlo Collodi",
        link: "https://pt.wikipedia.org/wiki/Pin%C3%B3quio",
        tags: "menino verdade madeira gepeto grilo" 
      },
      {
        titulo: "João e Maria",
        descricao: "Um irmão e uma irmã se perdem na floresta e encontram uma casa feita de doces. Uma bruxa malvada tenta comê-los.",
        autoria: "Irmãos Grimm. Título original é Hänsel und Gretel.",
        link: "https://pt.wikipedia.org/wiki/H%C3%A4nsel_und_Gretel",
        tags: "joão maria hänsel gretel doces perdidos floresta"
      },
      {
        titulo: "Rip Van Winkle",
        descricao: "Rip Van Winkle, um homem holandês, adormece por 20 anos após beber de uma bebida mágica nas montanhas Catskill. Ao acordar, descobre que o mundo mudou drasticamente e que ele perdeu sua família.",
        autoria: "Washington Irving",
        link: "https://pt.wikipedia.org/wiki/Rip_Van_Winkle",
        tags: "sonho, tempo, mudança, dormir"
      },
      {
        titulo: "Robin Hood",
        descricao: "Lenda inglesa sobre um arqueiro habilidoso que roubava dos ricos para dar aos pobres, vivendo na Floresta de Sherwood com seus homens. É conhecido por sua justiça e por desafiar a autoridade do Xerife de Nottingham.",
        autoria: "Folclore inglês",
        link: "https://pt.wikipedia.org/wiki/Robin_Hood",
        tags: "justiça, roubo, floresta, nobreza, sherwood, 'frei tuk', xerife, nothinghan"
      },
      {
        titulo: "Os 3 Porquinhos",
        descricao: "A história conta a aventura de três irmãos porquinhos que decidem construir suas próprias casas. O primeiro porquinho constrói sua casa de palha, de forma rápida e fácil, mas pouco resistente. O segundo porquinho constrói sua casa de madeira, um pouco mais resistente que a de palha, mas ainda frágil. O terceiro porquinho decide construir sua casa de tijolos, uma construção mais sólida e duradoura, apesar de exigir mais esforço. Um lobo mau, com fome, tenta derrubar as casas dos porquinhos para comê-los. Ele sopra as casas de palha e de madeira com facilidade, mas não consegue derrubar a casa de tijolos. O porquinho mais esperto, então, consegue enganar o lobo e salvar a si mesmo e seus irmãos. A moral da história é clara: vale a pena investir tempo e esforço em construir algo sólido e duradouro, pois isso nos protegerá dos problemas e desafios da vida.",
        autoria: "Folclore Europeu. Não se sabe a autoria, mas acredita-se que o escritor Joseph Jacobs tenha sido o primeiro a divulgá-la",
        link: "https://pt.wikipedia.org/wiki/Os_Tr%C3%AAs_Porquinhos",
        tags: "porco, lobo, palha, madeira, tijolos, prático, cícero, heitor, porquinho"
      },
      {
        titulo: "Rumpelstiltskin",
        descricao: "Um duende oferece a uma moça a habilidade de transformar palha em ouro em troca de seu primeiro filho. Quando ela dá à luz, o duende exige a criança, mas ela consegue enganá-lo revelando seu nome.",
        autoria: "Irmãos Grimm",
        link: "https://pt.wikipedia.org/wiki/Rumpelstiltskin",
        tags: "magia, duende, ouro, astúcia, palha"
      }
];
