1. Utilize o inventário da atividade 2.
2. Para cada item, marque uma categoria: estático, processo, banco, configuração ou armazenamento.
3. Explique por que escolheu cada categoria.
4. Marque quais itens podem ir para hospedagem estática.
5. Marque quais desativar ambiente de execução.
6. Marque quais não devem ir para o GitHub.
7. Escreva tudo no arquivo markdown em anexo

# Ficha — Classificação dos componentes

Classifique cada item como: arquivo estático, aplicação em execução, banco de dados, configuração, armazenamento persistente ou log.

| Item | Classificação | Justificativa curta |
|---|---|---|
| index.html | arquivo estático | por que é algo pronto a ser compilado |
| pasta dist/build do React | arquivo estático | por que é algo pronto a ser compilado |
| server.js | aplicação em execução | no momento em que rodar o site, este estara sendo usado constantemente |
| processo Node.js | aplicação em execução | no momento em que rodar o site, este estara sendo usado constantemente  |
| banco MySQL | configuração, armazenamento persistente | porque ele é algo configuravel? alem de ter scerto papel no aarmazenamento das mesmas informações |
| .env | configuração | porque ele é algo configuravel? |
| imagem enviada pelo usuário | armazenamento persistente | enviou um arquivo a ser "armazenado", por isso é persistente |
| saída de erro da plataforma | log | console.log(err) |