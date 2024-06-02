const pool = require('../configs/dbConfig');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 30 }); // TTL de 30 segundos

exports.buscarTodos = async () => {
    const cacheKey = 'todosClientes';
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
        console.log('Usando cache para buscar todos os clientes');
        return cachedData;
    }

    const [result] = await pool.promise().query('SELECT * FROM clientes');
    cache.set(cacheKey, result);
    console.log('Buscando todos os clientes do banco de dados');
    return result;
};

exports.buscarPorId = async (id) => {
    const cacheKey = `cliente_${id}`;
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
        console.log(`Usando cache para buscar o cliente com ID: ${id}`);
        return cachedData;
    }

    const [result] = await pool.promise().query('SELECT * FROM clientes WHERE id = ?', [id]);
    cache.set(cacheKey, result[0]);
    console.log(`Buscando o cliente com ID: ${id} do banco de dados`);
    return result[0];
};

exports.criar = async (cliente) => {
    const { nome, sobrenome, email, idade } = cliente;
    const [result] = await pool.promise().query('INSERT INTO clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)', [nome, sobrenome, email, idade]);
    
    // Limpa o cache ao adicionar um novo cliente
    cache.flushAll();
    console.log('Criando novo cliente e limpando cache');
    
    return { id: result.insertId, ...cliente };
};

exports.atualizar = async (id, cliente) => {
    const { nome, sobrenome, email, idade } = cliente;
    await pool.promise().query('UPDATE clientes SET nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ?', [nome, sobrenome, email, idade, id]);

    // Limpa o cache ao atualizar um cliente
    cache.flushAll();
    console.log(`Atualizando cliente com ID: ${id} e limpando cache`);
    
    return { id, ...cliente };
};

exports.deletar = async (id) => {
    await pool.promise().query('DELETE FROM clientes WHERE id = ?', [id]);

    // Limpa o cache ao deletar um cliente
    cache.flushAll();
    console.log(`Deletando cliente com ID: ${id} e limpando cache`);
};
