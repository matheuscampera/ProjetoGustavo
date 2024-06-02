const pool = require('../configs/dbConfig');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 30 }); // TTL de 30 segundos

exports.buscarTodos = async () => {
    const cacheKey = 'todosProdutos';
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
        console.log('Usando cache para buscar todos os produtos');
        return cachedData;
    }

    const [result] = await pool.promise().query('SELECT * FROM produtos');
    cache.set(cacheKey, result);
    console.log('Buscando todos os produtos do banco de dados');
    return result;
};

exports.buscarPorId = async (id) => {
    const cacheKey = `produto_${id}`;
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
        console.log(`Usando cache para buscar o produto com ID: ${id}`);
        return cachedData;
    }

    const [result] = await pool.promise().query('SELECT * FROM produtos WHERE id = ?', [id]);
    cache.set(cacheKey, result[0]);
    console.log(`Buscando o produto com ID: ${id} do banco de dados`);
    return result[0];
};

exports.criar = async (produto) => {
    const { nome, descricao, preco, data_atualizado } = produto;
    const [result] = await pool.promise().query('INSERT INTO produtos (nome, descricao, preco, data_atualizado) VALUES (?, ?, ?, ?)', [nome, descricao, preco, data_atualizado]);
    
    // Limpa o cache ao adicionar um novo produto
    cache.flushAll();
    console.log('Criando novo produto e limpando cache');
    
    return { id: result.insertId, ...produto };
};

exports.atualizar = async (id, produto) => {
    const { nome, descricao, preco, data_atualizado } = produto;
    await pool.promise().query('UPDATE produtos SET nome = ?, descricao = ?, preco = ?, data_atualizado = ? WHERE id = ?', [nome, descricao, preco, data_atualizado, id]);

    // Limpa o cache ao atualizar um produto
    cache.flushAll();
    console.log(`Atualizando produto com ID: ${id} e limpando cache`);
    
    return { id, ...produto };
};

exports.deletar = async (id) => {
    await pool.promise().query('DELETE FROM produtos WHERE id = ?', [id]);

    // Limpa o cache ao deletar um produto
    cache.flushAll();
    console.log(`Deletando produto com ID: ${id} e limpando cache`);
};
