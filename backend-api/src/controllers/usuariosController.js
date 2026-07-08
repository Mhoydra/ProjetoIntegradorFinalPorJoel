const conexao = require('../database/conexao');
const bcrypt = require('bcrypt');



async function listarUsuarios(req, res) {
    try {
        const [usuarios] = await conexao.query(
            'SELECT id, nome, email FROM usuarios'
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
        const { id } = req.params;

        const [usuarios] = await conexao.query(
            'SELECT * FROM usuarios WHERE id = ?',
            [id]
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
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({
                mensagem: 'Nome, email e senha são obrigatórios'
            });
        }

        const [usuarios] = await conexao.query(
            'SELECT id FROM usuarios WHERE email = ?',
            [email]
        );

        if (usuarios.length > 0) {
            return res.status(400).json({
                mensagem: 'Email já cadastrado'
            });
        }

       const senhaCriptografada = await bcrypt.hash(senha, 10);

        
        const [resultado] = await conexao.query(
            'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
            [nome, email, senhaCriptografada]
        );

        res.status(201).json({
            id: resultado.insertId,
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
        const { id } = req.params;
        const { nome, email } = req.body;

        const [resultado] = await conexao.query(
            'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?',
            [nome, email, id]
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
        const { id } = req.params;

        const [resultado] = await conexao.query(
            'DELETE FROM usuarios WHERE id = ?',
            [id]
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