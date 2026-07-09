# Atividade 8 e 9 - Requisição e resposta

| Endereço acessado | Método | Status | Tipo de resposta | O que apareceu no corpo da resposta? | Evidência |
|---|---|---|---|---|---|
| /api/status | GET | 200 ok | JSON | "ok":true, "app": "Aula 1 - API separada" e etc | http://127.0.0.1:5173/api/status > JSON com diveresos atributos e f12 para complementar com as info |
| /rota-que-nao-existe | se não existe rota, não tem metodo | seria um 500 | json | "erro, rota não encontrado ou não criada" | não tenho |

Conclusão: qual foi a diferença entre a página, a API e o erro? acho que o fato de mostra o erro, a pagina deixa de funcionar, a api comunica um erro via console ou "pagina não encontrada" e o erro aparece em alguma destas formas.