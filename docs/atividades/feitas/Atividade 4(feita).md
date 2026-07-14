1. Escolha a arquitetura do seu grupo. (front e back separados)
2. Desenhe a arquitetura local atual em 4 caixas ou menos. (
    back, front, banco, docs
):
3. Indique qual parte pode virar arquivo estático. (
    docs e banco.sql, tem alguns indexes também.
)
4. Indique qual parte precisa do Node.js rodando.(
    pensei que todos usam o node.js? pesquisei e como eu uso npm run dev em tudo, entao tudo precisa.
);
5. Indique onde o MySQL está hospedado.(
    lugar nenhum, não hospedo ele, eu deveria?
)
6. Coloque o desenho da arquitetura junto com o markdown em anexo e preencha o markdown.(
    ok
);

# Ficha — Comparação de arquiteturas de hospedagem

| Questão | React separado + Express | Express com public |
|---|---|---|
| Quantos serviços podem ser necessários? | o backend e o front end, | UM SERVIÇO PRINCIPAL E UM BANCO |
| O front-end precisa de build? | sim | sim |
| O Express precisa ficar executando? | sim | sim |
| Onde ficam as variáveis de ambiente? | back/.env | back/.env |
| Onde fica o MySQL? | roda na minha maquina localmente e usa de express e as configurações do .env para se conectarem | um server mysql ligado ao express|
| Vantagem | separada é mais organizado e tu sabe melhor onde deu erro e porque, junto de sua independência do outro | mais simples de se implantar pois ta tudo no mesmo server |
| Dificuldade | mais trabalhoso, tem configurações e reajustes que precisam ser considerados e monitorados, eu acho? | o frontend e o backend ficam mais acoplados | 