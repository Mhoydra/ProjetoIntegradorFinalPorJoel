const express = require('express');
const router = express.Router();

const autenticarToken = require('../middleware/middleware');

const {
listarUsuarios, buscarUsuarioPorId, cadastrarUsuario, 
atualizarUsuario, removerUsuario } = require('../controllers/usuariosController');

router.get('/', autenticarToken, listarUsuarios);
router.get('/:id', autenticarToken, buscarUsuarioPorId);
router.post('/', cadastrarUsuario);
router.put('/:id', autenticarToken, atualizarUsuario);
router.delete('/:id', autenticarToken, removerUsuario);

module.exports = router;