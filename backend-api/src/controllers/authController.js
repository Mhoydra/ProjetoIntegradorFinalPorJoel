const conexao = require('../database/conection');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

async function login(req, res) {
    try {
        const { emailUsuario, senhaUsuario } = req.body;

        const [usuarios] = await conexao.query(
            'SELECT * FROM usuarios WHERE emailUsuario = ?',
            [emailUsuario]
        );

        if (usuarios.length === 0) {
            return res.status(401).json({
                mensagem: 'Email ou senha inválidos'
            });
        }

        const usuario = usuarios[0];

        const senhaCorreta = await bcrypt.compare(
            senhaUsuario,
            usuario.senhaUsuario
        );

        if (!senhaCorreta) {
            return res.status(401).json({
                mensagem: 'Email ou senha inválidos'
            });
        }

        const token = jwt.sign(
            {
                idUsuario: usuario.idUsuario,
                emailUsuario: usuario.emailUsuario
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1d'
            }
        );

        res.status(200).json({
            mensagem: 'Login realizado com sucesso',
            token,
            usuario: {
                idUsuario: usuario.idUsuario,
                nomeUsuario: usuario.nomeUsuario,
                emailUsuario: usuario.emailUsuario
            }
        });

    } catch (erro) {
        console.log(erro);

        res.status(500).json({
            mensagem: 'Erro ao realizar login'
        });
    }
}

module.exports = login