
# HSLook - Criador de Paleta de Cores

HSLook é um projeto desenvolvido em Vue.js cujo objetivo é simplificar a criação de paletas de cores para seu design system. Com apenas um código HEX de cor, é possível obter automaticamente 11 tons em hexadecimal para sua paleta. Com essa ferramenta, você pode facilmente criar uma paleta de cores harmoniosa para seu projeto.

## Acesso ao HSLook

O HSLook já está em funcionamento e pode ser acessado através do link abaixo:
[HSLook: Criador de Paleta de Cores](https://hs-look.vercel.app/)

## Como funciona o HSLook?

O HSLook utiliza o formato de cores HSL como base para a criação da paleta.
O processo é simples:

1.  O HSLook converte o código HEX da cor selecionada para o formato HSL.
2.  A propriedade Lightness (L) do formato HSL é utilizada para a criação da paleta.
3.  O tom primário da paleta é o 500, ajustado levemente sem alterar a cor  original.
4.  Com base nas propriedades de Hue (H), Saturation (S) e Lightness (L), o HSLook cria um tom claro para uso em backgrounds de sites e aplicativos (Token: 50).
5. O valor de Lightness é ajustado para 95, criando uma cor perfeita para fundos.
6.  Para o uso em textos e fundos escuros ou com contraste, o HSLook cria uma cor escura (Token: 950), ajustando o valor de Lightness para 15.
7.  Os valores intermediários de Lightness são criados entre o L 15 e a primária assim como entre a primária e o L 95, de forma harmônica, respeitando a paleta.
8.  A paleta final é composta por 11 tons de cores em hexadecimal, perfeitamente harmonizados para uso em design systems e design de interfaces.

## Tons gerados pelo HSLook

Os tons gerados pelo HSLook possuem os seguintes tokens:



|    50  | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950|
|------|-----|-----|-----|-----|----------------|-----|-----|-----|-----|---
|   Fundos   |     |     |     |     |  Primária   |||  |     |   Textos     |     |


Demais tons entre estes são gerados automaticamente pelo código da aplicação.
Com esses tons em mãos, é possível criar uma paleta de cores completa e harmônica para o seu projeto de design de interface ou design system.

## Dica

Para obter uma paleta com uma boa distinção visual entre os tons, é recomendável utilizar uma cor primária que possua lightness (L) entre 40 e 60. Cores com L acima desse intervalo podem resultar em tons muito próximos uns dos outros, dificultando a diferenciação visual. Então, escolha bem a sua cor primária para obter uma paleta equilibrada e de qualidade.

## Autor

Meu nome é Marcus Beladona e sou um designer de interfaces com habilidades em front-end. Estou sempre em busca de novas maneiras de tornar a criação de interfaces mais fácil e eficiente. Você também pode me encontrar nas minhas redes sociais em [marcusbeladona.com](https//:marcusbeladona.com). Agradeço por conferir meu projeto!

