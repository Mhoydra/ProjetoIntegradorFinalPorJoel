# Entregável da Aula 1 - Ficha técnica de execução e parametrização local

Nome do grupo: Mugangos
Projeto: Biblioverso
Cenário: (x) A - separado  ( ) B - integrado

## 1. Como instalar

Comando usado para instalar dependências:

```bash

``` . npm init -y  +  npm install

## 2. Como executar

Comando para executar o back-end ou projeto integrado:

```bash

``` . se tiver script, é só escrever npm start

Comando para executar o front-end separado, se existir:

```bash

``` . npm run dev

## 3. Endereços locais

| Parte do projeto | Endereço local | Porta | Como verificar se está funcionando? |
|---|---|---|---|
| Front-end | cenario-a/backend-api | 5173 | sem erros ao usar do comando npm start |
| Back-end/API | cenario-a/frontend-api | 3001 | o mesmo que  o anterior com o npm run dev |
| Projeto integrado | uc-13/projeto-integrador | 3000 | eu uso npm run dev |

## 4. Parametrização local

| Variável | Onde fica? | Para que serve? | Valor usado na aula, sem segredo real |
|---|---|---|---|
| HOST | cenario-a/backend-api/.env | é teu endereço ou pc | 127.0.0.1 |
| PORT | cenario-a/backend-api/.env | é a porta do servidor | 3001 |
| NODE_ENV | cenario-a/backend-api/.env | ta dizendo que é o ambiente em que a api ta rodando, como desenvolvedor ou produção | development |
| VITE_API_URL | cenario-a/frontend-vite/.env | busca salvar endereço da api | http://127.0.0.1:3001 |

## 5. Teste realizado

| Teste | Resultado esperado | Resultado obtido | Evidência |
|---|---|---|---|
| Acessar página inicial | mostre o front end | mostro | quando consutei api mostro um json com host, port e similares |
| Acessar rota de API | deve mostrar front de outras rotas | deu ruim quando testei apenas /api e /api/status mostro só o status | {"ok":true,"app":"Aula 1 - API separada","scenario":"A - API separada do front-end","host":"127.0.0.1","port":3001,"frontendPermitido":"http://127.0.0.1:5173","time":"2026-07-02T18:18:57.572Z"} |
| Alterar porta e testar novamente | vai dar muito errado, talvez tenha mensagem de erro | kkkk, "não é possivel acessar esse site" | mudei a url de 3001 para 3000 |
| Gerar erro de porta em uso e corrigir | ta feito no anterior, não ta? | parece a mesma coisa então vou deixar queto |  |

## 6. Cuidados de segurança

Liste os cuidados com `.env`, senhas e Git:

1. criptografar com bcrypt a senha;
2. dados de acesso do banco e dos host/port e usuario ficam .gitignore;
3. referenciar com .env.example para continuar sabendo indiretamente oque deve ser colocado

## 7. Conclusão do grupo

Depois da aula, como vocês explicam o papel do servidor web no projeto? cada servidor tem uma função que deve ser executada separada das demais para evitar comflitos e confusão, ja que é mais prático.
