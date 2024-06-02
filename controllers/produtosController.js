const ProdutoService = require('../services/produtoService');
const httpError = require('http-errors');

// Buscar todos os produtos
exports.getTodosProdutos = async (req, res, next) => {
    try {
        const todosProdutos = await ProdutoService.buscarTodos();
        res.send(todosProdutos);
    } catch (error) {
        console.error('Erro ao buscar todos os produtos:', error);
        next(httpError(500, error.message));
    }
};

// Buscar produto por ID
exports.getProduto = async (req, res, next) => {
    try {
        const produto = await ProdutoService.buscarPorId(req.params.id);
        if (!produto) {
            return next(httpError(404, 'Produto não encontrado'));
        }
        res.send(produto);
    } catch (error) {
        console.error('Erro ao buscar produto por ID:', error);
        next(httpError(500, error.message));
    }
};

// Criar um novo produto
exports.criarProduto = async (req, res) => {
    try {
        const novoProduto = await ProdutoService.criar(req.body);
        res.render('successProduto');  // Renderiza a página de sucesso após cadastro
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        res.status(500).send(error.message);
    }
};

// Atualizar produto por ID
exports.atualizarProduto = async (req, res, next) => {
    try {
        const produtoAtualizado = await ProdutoService.atualizar(req.params.id, req.body);
        res.send(produtoAtualizado);
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        next(httpError(500, error.message));
    }
};

// Deletar produto por ID
exports.deletarProduto = async (req, res, next) => {
    try {
        await ProdutoService.deletar(req.params.id);
        res.status(204).send();
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        next(httpError(500, error.message));
    }
};
