const pool = require('../configs/dbConfig');

exports.buscarTodos = async () => {
    const [result] = await pool.promise().query('SELECT * FROM produtos');
    return result;
};

exports.buscarPorId = async (id) => {
    const [result] = await pool.promise().query('SELECT * FROM produtos WHERE id = ?', [id]);
    return result[0];
};

exports.criar = async (produto) => {
    const { nome, descricao, preco, data_atualizado } = produto;
    const [result] = await pool.promise().query('INSERT INTO produtos (nome, descricao, preco, data_atualizado) VALUES (?, ?, ?, ?)', [nome, descricao, preco, data_atualizado]);
    return { id: result.insertId, ...produto };
};

exports.atualizar = async (id, produto) => {
    const { nome, descricao, preco, data_atualizado } = produto;
    await pool.promise().query('UPDATE produtos SET nome = ?, descricao = ?, preco = ?, data_atualizado = ? WHERE id = ?', [nome, descricao, preco, data_atualizado, id]);
    return { id, ...produto };
};

exports.deletar = async (id) => {
    await pool.promise().query('DELETE FROM produtos WHERE id = ?', [id]);
};
