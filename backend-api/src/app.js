require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

//rotas
const usuariosRoutes = require('./routes/usuarios.routes');
//const loginRoutes = require('./routes/auth.routes');

//app.use('/api/login', loginRoutes);
app.use('/api/usuarios',usuariosRoutes)

app.get('/', (req,res) =>{
    res.send('API do projeto integrador funcionando');
});

module.exports = app;