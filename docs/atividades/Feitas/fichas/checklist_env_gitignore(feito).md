# Atividade 7 - Checklist de segurança do .env

| Verificação | Sim/Não | Evidência |
|---|---|---|
| Existe arquivo .env.example? | sim | cenario-a/backend-api/.env.example tem host, dados do banco e especificações de configuração listadas, sem estar escrito pois apaguei. |
| O .env.example não possui senha real? | não possui | considerando que senha real seja as informações de configuração (apenas seus nomes de exemplo), se for uma senha a ser criptografada então não tem também |
| Existe arquivo .env local? | sim | cenario-a/backend-api/.env existe |
| O .env está listado no .gitignore? | sim | cenario-a/backend-api/.gitignore > .env: significa que o mesmo será ignorado pelo .git (git hub) |
| O projeto consegue executar sem expor senha nos slides ou no Git? | sim | porque esvaziei o .env.example e o .env ta no .gitignore |

Explique: por que o arquivo `.env` não deve ser enviado para o Git? Porque eu estaria disponibilizando senhas, informações do meu próprio pc e similares que permitiriam que uma quebra na segurança existisse.
