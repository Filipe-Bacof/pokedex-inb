# Desafio Técnico Instituto Nicolas Bueno

## Projeto: Pokédex
[Ver Requisitos do Desafio](https://github.com/Filipe-Bacof/pokedex-inb/blob/master/DESAFIO.md)

Aplicação desenvolvida entre os dias `28 de Junho` e `02 de Julho` de 2023.

[<img alt="Vercel" height="30" width="30" align="center" src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" /> Ver Deploy](https://pokedex-bacof.vercel.app)

[<img alt="Pokebola" height="30" width="30" align="center" src="https://www.freeiconspng.com/thumbs/pokeball-icon/pokeball-icon-23.png" /> Documentação PokeAPI](https://pokeapi.co/docs/v2)

[<img alt="Icon Portifolio" height="30" width="30" align="center" src="https://raw.githubusercontent.com/Filipe-Bacof/next-portifolio/master/src/app/icon.png?token=GHSAT0AAAAAACEFKL4EF4RR337K4B3S6SFOZFBRRJQ" /> Ver Portifólio Filipe Bacof](https://portifolio-filipe-bacof.vercel.app/)

## Tecnologias Utilizadas:
[<img alt="NextJS" height="30" width="30" align="center" src="https://dinhanhthi.com/img/header/nextjs.png" /> Next.JS](https://nextjs.org)

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
É super recomendado o uso de TypeScript em qualquer projeto. O TypeScript adiciona recursos de tipagem estática ao JavaScript, trazendo vários benefícios como:
- `Verificação de tipagem em tempo de compilação`: O TypeScript permite detectar erros de tipagem antes mesmo da execução do código, o que ajuda a evitar bugs e torna o desenvolvimento mais robusto.
- `Melhor IntelliSense e autocomplete`: Com o uso de tipos explícitos, o TypeScript melhora a experiência de desenvolvimento, fornecendo sugestões de código e informações mais precisas sobre as APIs utilizadas.
- `Refatoração mais segura`: O TypeScript permite a reestruturação do código com mais segurança, pois pode identificar potenciais problemas e fornecer avisos durante a refatoração.
- `Maior legibilidade`: Com a adição de tipos, o código se torna mais legível e autoexplicativo, o que facilita a compreensão e a manutenção do código ao longo do tempo.
