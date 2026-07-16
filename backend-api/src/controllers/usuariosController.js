const conexao = require('../database/conection');
const bcrypt = require('bcrypt');

async function listarUsuarios(req, res) {
    try {
        const [usuarios] = await conexao.query(
            'SELECT idUsuario, nomeUsuario, emailUsuario FROM usuarios'
        );
        res.json(usuarios);
    }catch (erro) {
        console.error(erro);

        res.status(500).json({
            mensagem: 'Erro ao buscar usuários'
        });
    }

}

async function buscarUsuarioPorId(req, res) {
    try {
        const { idUsuario } = req.params;

        const [usuarios] = await conexao.query(
            'SELECT * FROM usuarios WHERE idUsuario = ?',
            [idUsuario]
        );

        if (usuarios.length === 0) {
            return res.status(404).json({
                mensagem: 'Usuário não encontrado'
            });
        }

        res.status(200).json(usuarios[0]);

    } catch (erro) {
        console.error(erro);
        res.status(500).json({
            mensagem: 'Erro ao buscar usuário'
        });
    }

}

async function cadastrarUsuario(req, res) {
    try {
        const { nomeUsuario, emailUsuario, senhaUsuario } = req.body;

        if (!nomeUsuario || !emailUsuario || !senhaUsuario) {
            return res.status(400).json({
                mensagem: 'Nome, email e senha são obrigatórios'
            });
        }

        const [usuarios] = await conexao.query(
            'SELECT idUsuario FROM usuarios WHERE emailUsuario = ?',
            [emailUsuario]
        );

        if (usuarios.length > 0) {
            return res.status(400).json({
                mensagem: 'Email já cadastrado'
            });
        }

        const senhaCriptografada = await bcrypt.hash(senhaUsuario, 10);
        const [resultado] = await conexao.query(
            'INSERT INTO usuarios (nomeUsuario, emailUsuario, senhaUsuario) VALUES (?, ?, ?)',
            [nomeUsuario, emailUsuario, senhaCriptografada]
        );

        res.status(201).json({
            idUsuario: resultado.insertId,
            mensagem: 'Usuário cadastrado com sucesso'
        });

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            mensagem: 'Erro ao cadastrar usuário'
        });
    }
}

async function atualizarUsuario(req, res) {
      try {
        const { idUsuario } = req.params;
        const { nomeUsuario, emailUsuario } = req.body;

        const [resultado] = await conexao.query(
            'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?',
            [nomeUsuario, emailUsuario, idUsuario]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensagem: 'Usuário não encontrado'
            });
        }

        res.status(200).json({
            mensagem: 'Usuário atualizado com sucesso'
        });

    } catch (erro) {
        console.error(erro);
        res.status(500).json({
            mensagem: 'Erro ao atualizar usuário'
        });
    }

}

async function removerUsuario(req, res) {
    try {
        const { idUsuario } = req.params;

        const [resultado] = await conexao.query(
            'DELETE FROM usuarios WHERE id = ?',
            [idUsuario]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensagem: 'Usuário não encontrado'
            });
        }

        res.status(200).json({
            mensagem: 'Usuário removido com sucesso'
        });

    } catch (erro) {
        console.error(erro);
        res.status(500).json({
            mensagem: 'Erro ao remover usuário'
        });
    }

}

module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    cadastrarUsuario,
    atualizarUsuario,
    removerUsuario
};