# Atividade 1 e 2 - Mapa do projeto

Nome do grupo:

Projeto analisado: (X) projeto real  ( ) projeto demonstrativo

## 1. Cenário identificado

Marque uma opção:

- ( ) Cenário A - front-end e back-end separados
- (X) Cenário B - Express entrega a pasta public e também tem API
- ( ) Ainda não consegui identificar

## 2. Estrutura observada

| Item observado | Existe? | Onde fica? | Evidência |
|---|---|---|---|
| Front-end | sim | criar pasta frontend, mas se fosse seria projeto-integrador/src/frontend  | arquivos css, html e javascript |
| Back-end Express | não | Pelo que parece deve ser separado do front end entao ficaria projeto-integrador/src/backend |  |
| Pasta public | sim | projeto-integrador/src/public | no momento não tem nada porém é a pasta onde index .html e .js ficariam ja que são coisas publicas |
| Rotas de API | não, ainda | ficaria nos controllers + routes nas respectivas pastas | "https://localhost:3000/api/explorar" |
| package.json | sim | projeto-integrador/src/package.json | guarda as dependecias do projeto, assim como scripts (npm run dev) |
| .env.example | sim | projeto-integrador/src/.env.example | é um example dos dados a serem preenchidos no arquivo .env |
| .gitignore | sim | projeto-integrador/src/backend | ignora os itens que estão dentro na hora da exportação |

## 3. Explique com suas palavras

Qual é a diferença entre front-end, back-end, API e servidor web neste projeto?

front end é a parte visual, aqui seria a interface onde a maioria dos conceitos de UX e do REACT se aplicariam, também é aqui onde o css, tailwind, html e até o js brilham para trazer sua respectiva beleza mas principalmente proporcionar um experiencia;

Back end é o puro suco do programador, aqui o foco é 100% interatividade a API, aqui existe banco de dados (mysql), js e parte do react, é atravéz daqui e de suas tecnologias seram usadas para a criação de novos dados a serem armazenados ou como a API pegara tais dados e oque fara com ele;

API é o sistema em si que conversa usando rotas, creio que seja isso e não vejo como ele seria muito diferente dos demais projetos.

O servidor web é aonde a minha API ficara hospedada, pagando 2 pila por minuto para continuar com luz, basicamente ;