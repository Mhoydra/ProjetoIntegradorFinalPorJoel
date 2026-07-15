1. Abra o projeto local como de fantasia.(
    feito
);
2. Anote quais terminais/processos estão rodando.(
    front, back e mysql(eu acho);
);
3. Pare apenas o front-end e teste a tela.(
    o back funciona sem um visual apropriado, é até meio confuso.
);
4. Pare apenas o back-end e teste uma rota/API.(
    acesando a pag na porta 3000 ele acusa "não ser possivel acessar o site, enquanto o front parece parado"
);
5. Se possível, pare o MySQL e tente uma consulta.(
    não parece ter mudado nada
);
6. Registre qual parte parou e por quê.
7. Escreva tudo em arquivo markdown chamado “aula2_atividade_1.md” no projeto

# Ficha — Inventário do projeto

## Nome do projeto

## Arquitetura local
- [sim] React separado do Express
- [não, ainda] Express entregando pasta public
- [não] Outra: 

## Componentes encontrados
| Componente | Pasta/arquivo | Precisa executar? | Porta local | Observação |
|---|---|---:|---:|---|
| Front-end | projeto-integrador\frontend-vite | sim(npm run dev no caminho) | 3001 | 
| API/back-end | projeto-integrador/backend-api | sim(npm run dev no caminho) | 5173 | 
| Banco de dados | projeto-integrador\backend-api\src\database\BiblioversoDB.sql | não | não tem | 
| Arquivos estáticos | no momento não tem | não | não tem | 
| Variáveis de ambiente | projeto-integrador\backend-api\.env | não | não tem |

## Scripts do package.json
| Pasta | Script | Comando | Serve para hospedagem? Por quê? |
|---|---|---|---|
| projeto-integrador\frontend-vite\package.json | build |npm run dev |não porque não é um servidor mas sim um processo que executa local, eu acho que é isso |

## Entrega
Anexe esta ficha preenchida e uma captura de tela dos scripts encontrados.
 --- > C:\Users\JOELRODRIGUESMATIAS\UC´S do Joel\Projetos UC14\ProjetoIntegradorFinal\projeto-integrador\frontend-vite\assets\{08CE348A-BB22-4979-8823-7AFA9D95046B}.png < ---