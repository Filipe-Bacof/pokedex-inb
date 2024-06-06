# Desafio Técnico Instituto Nicolas Bueno

## Projeto: Pokédex
[<img alt="Github" height="30" width="30" align="center" src="https://camo.githubusercontent.com/9b5345808e52fc12295650c1fe0f012f34f40a991e3d0fe5c42cd279a9f8a307/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f392f39312f4f637469636f6e732d6d61726b2d6769746875622e7376672f3230343870782d4f637469636f6e732d6d61726b2d6769746875622e7376672e706e67" /> Ver Requisitos do Desafio](https://github.com/Filipe-Bacof/pokedex-inb/blob/master/DESAFIO.md)

Aplicação desenvolvida entre os dias `28 de Junho` e `02 de Julho` de 2023.

[<img alt="Vercel" height="30" width="30" align="center" src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" /> Ver Deploy](https://pokedex-bacof.vercel.app)

[<img alt="Pokebola" height="30" width="30" align="center" src="https://www.freeiconspng.com/thumbs/pokeball-icon/pokeball-icon-23.png" /> Documentação PokeAPI](https://pokeapi.co/docs/v2)

[<img alt="Icon Portifolio" height="30" width="30" align="center" src="https://raw.githubusercontent.com/Filipe-Bacof/portifolio-filipe/master/public/favicon.jpg" /> Ver Portifólio Filipe Bacof](https://portifolio-filipe-bacof.vercel.app/)

## Tecnologias Utilizadas:
[<img alt="NextJS" height="30" width="30" align="center" src="https://static-00.iconduck.com/assets.00/nextjs-icon-2048x2048-eugu5rfi.png" /> Next.JS](https://nextjs.org)

[<img alt="REACT.JS" height="30" width="30" align="center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /> React.JS](https://react.dev)

[<img alt="TS" height="30" width="30" align="center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" /> Typescript](https://www.typescriptlang.org)

[<img alt="TailwindCSS" height="30" width="30" align="center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" /> Tailwind CSS](https://tailwindcss.com)

# Prints do Projeto:
## A tela principal é a pokedéx inspirada no anime
- O botão vermelho narra uma curiosidade sobre o pokémon em tela (se clicar novamente é interrompido);
- O botão amarelo adiciona o pokémon atual para o seu time (ver próximos prints);
- O botão verde faz com que o pokémon atual seja o resultado ao abrir a pokédex no seu dispositivo (por padrão é o Bulbasaur);
- O auto-falante possui uma animação para quando está sendo feita uma narração;
- O plano de fundo se altera dependendo do tipo primário de cada pokémon;
- Há um Easter-Egg escondido, apenas os curiosos irão encontrar;

<img alt="Pokedéx" align="center" src="./prints/print1.png" />

## A segunda opção do menu contém a listagem de todos os pokémons
- A paginação foi feita de 30 em 30 resultados;

<img alt="Listagem" align="center" src="./prints/print2.png" />

- Ao clicar em um card, abre o modal para visualizar mais dados sobre aquele pokémon;

<img alt="Modal" align="center" src="./prints/print3.png" />

## A terceira opção do menu exibe o seu time
- Os pokémons escolhidos para o seu time são armazenados no Local Storage;
- Há o limite para 6 pokémons no seu time;
- Caso remova qualquer um dos pokémons do seu time, o próximo a ser adicionado preencherá aquela posição;

<img alt="Time Desktop" align="center" src="./prints/print5.png" />

- Essa tela foi adaptada para dispositivos móveis também (Tailwind é Mobile First);

<img alt="Time Mobile" align="center" src="./prints/print4.png" />

## Na última opção do menu encontra-se o Professor Carvalho
- Essa tela é uma espécie de tira dúvidas sobre como utilizar a pokédex;
- Inseri uma trivia do jogo Pokémon Fire Red para despertar a nostalgia de quem jovaga no Game Boy;

<img alt="Time Mobile" align="center" src="./prints/print6.png" />

# Sobre o TypeScript
- É super recomendado o uso de TypeScript em qualquer projeto.
- O TypeScript adiciona recursos de tipagem estática ao JavaScript, trazendo vários benefícios como:
- `Verificação de tipagem em tempo de compilação`: O TypeScript permite detectar erros de tipagem antes mesmo da execução do código, o que ajuda a evitar bugs e torna o desenvolvimento mais robusto.
- `Melhor IntelliSense e autocomplete`: Com o uso de tipos explícitos, o TypeScript melhora a experiência de desenvolvimento, fornecendo sugestões de código e informações mais precisas sobre as APIs utilizadas.
- `Refatoração mais segura`: O TypeScript permite a reestruturação do código com mais segurança, pois pode identificar potenciais problemas e fornecer avisos durante a refatoração.
- `Maior legibilidade`: Com a adição de tipos, o código se torna mais legível e autoexplicativo, o que facilita a compreensão e a manutenção do código ao longo do tempo.

# Automação do ambiente
- Durante o processo de desenvolvimento, optei por transformar os trechos que se repetiam em componentes, visando maior reutilização de código. Isso permitiu uma abordagem mais modular e facilitou a manutenção do sistema no futuro.
- Além disso, utilizei o ESLint para automatizar a identação e padronização do código, tornando-o mais consistente e legível. Com isso, pude garantir uma base de código mais limpa e livre de erros.
- Para melhor organizar o projeto, dividi as responsabilidades dos requisitos em diferentes telas, o que promoveu uma melhor separação de preocupações e facilitou o desenvolvimento de cada funcionalidade específica.

# Interface
- Na elaboração da interface, priorizei a simplicidade visual, mas ao mesmo tempo, fiz um esforço para criar a Pokedex utilizando o Tailwind CSS.
- Essa biblioteca de estilos permitiu uma estilização mais eficiente e consistente, resultando em um design mais atrativo e responsivo. O resultado final tornou o projeto muito mais interessante do que simplesmente listar todos os Pokémons.
- Com o Tailwind CSS o processo de desenvolvimento fica mais produtivo, pois ao invés de ficar alternando entre arquivos de estilização e os componentes, essa ferramenta aloca toda a parte do CSS em classes utilitárias.

# Arquitetura implementada
- Como estou usando React com o Next.js, que é a sugestão de framework indicada na própria documentação do React, ficou muito mais simples arquitetar minha aplicação.
- O Next.js possui diversas estratégias de renderização eficientes, CSR (Client Side Rendering) SSR (Server Side Rendering) e SSG (Static Site Generation), isso possibilita melhorar o desempenho geral da aplicação.
- Além disso, a estrutura do Next.js facilitou a implementação de rotas e a organização do código em componentes reutilizáveis.
- Com o React, pude utilizar a programação orientada a componentes, o que contribuiu para uma melhor organização e escalabilidade do projeto.
- Essa arquitetura bem estruturada permitiu uma manutenção mais fácil e rápida, além de oferecer uma base sólida para futuras melhorias e expansões do sistema.

# Projeto Anterior
- Este não foi o meu primeiro contato com a PokeAPI. Já havia desenvolvido uma aplicação semelhante anteriormente, utilizando HTML, CSS e JavaScript.
- No entanto, neste projeto, dediquei-me ao máximo e levei-o a um nível mais profissionalizado, com mais funcionalidades, com visual mais atrativo e proporcionando uma experiência mais sofisticada e agradável.
- Caso deseje conferir o projeto anterior, vou deixar o link abaixo para o deploy feito no github pages, mas garanto que tudo que foi feito no projeto antigo também está neste, com várias adições e melhorias:

[<img alt="Pokebola" height="30" width="30" align="center" src="https://www.freeiconspng.com/thumbs/pokeball-icon/pokeball-icon-23.png" /> Ver projeto com HTML, CSS e JavaScript](https://filipe-bacof.github.io/Pokedex/)
