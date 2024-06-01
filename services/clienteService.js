const pool = require('../configs/dbConfig');

exports.buscarTodos = async () => {
    const [result] = await pool.promise().query('SELECT * FROM clientes');
    return result;
};

exports.buscarPorId = async (id) => {
    const [result] = await pool.promise().query('SELECT * FROM clientes WHERE id = ?', [id]);
    return result[0];
};

exports.criar = async (cliente) => {
    const { nome, sobrenome, email, idade } = cliente;
    const [result] = await pool.promise().query('INSERT INTO clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)', [nome, sobrenome, email, idade]);
    return { id: result.insertId, ...cliente };
};

exports.atualizar = async (id, cliente) => {
    const { nome, sobrenome, email, idade } = cliente;
    await pool.promise().query('UPDATE clientes SET nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ?', [nome, sobrenome, email, idade, id]);
    return { id, ...cliente };
};

exports.deletar = async (id) => {
    await pool.promise().query('DELETE FROM clientes WHERE id = ?', [id]);
};
