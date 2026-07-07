require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

//rotas
//const loginRoutes = require('./routes/auth.routes');

//app.use('/api/login', loginRoutes);

app.get('/', (req,res) =>{
    res.send('API do projeto integrador funcionando');
});

module.exports = app;