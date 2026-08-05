const express = require('express');
const router = express.Router();

const autenticarToken = require('../middlewares/middleware');

const {
listarUsuarios, 
buscarUsuarioPorId, 
cadastrarUsuario, 
atualizarUsuario, 
removerUsuario 
} = require('../controllers/usuariosController');

router.get('/', autenticarToken, listarUsuarios);
router.get('/:idUsuario', autenticarToken, buscarUsuarioPorId);
router.post('/', cadastrarUsuario);
router.put('/:idUsuario', autenticarToken, atualizarUsuario);
router.delete('/:idUsuario', autenticarToken, removerUsuario);

module.exports = router;