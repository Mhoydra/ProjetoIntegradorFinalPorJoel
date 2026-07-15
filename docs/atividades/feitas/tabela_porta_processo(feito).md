# Atividade 5 - Porta e processo

| Projeto | Endereço acessado | Porta | Comando usado para investigar | PID/processo encontrado | O que isso mostra? |
|---|---|---|---|---|---|
| cenario-a/backend-api | 127.0.0.1:52565 |  3001  |  "netstat -ano | findstr :3001" |  4180  | que o processo que é a nossa api esta rodando na porta  |
| cenario-a/frontend-vite | 127.0.0.1:5173 | 5173 | "netstat -ano | findstr :5173" | 17348 | mostra que o nosso front esta rodando na porta 5173, sendo um processo de id 17348 | 

Observação importante encontrada:
o comando usada para verdadeiramente entander isso foi o netstat -ano, dado pelo prof;