const app = require("./src/app.js");
const port = Number(process.env.PORT || 3000);

if (!Number.isInteger(port) || port < 1 || port > 65535){
    console.error('PORT deve ser número entre 1 e 65535');
    process.exit(1);
};

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta http://localhost:${port}`)
});