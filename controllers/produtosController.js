const ProdutoService = require('../services/produtoService');
const httpError = require('http-errors');

exports.getTodosProdutos = async (req, res, next) => {
    try {
        const todosProdutos = await ProdutoService.buscarTodos();
        res.send(todosProdutos);
    } catch (error) {
        console.error('Erro ao buscar todos os produtos:', error);
        next(httpError(500, error.message));
    }
};

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

exports.criarProduto = async (req, res) => {
    try {
        const { nome, descricao, preco, data_atualizado } = req.body;
        const novoProduto = await ProdutoService.criar({ nome, descricao, preco, data_atualizado });
        res.render('successProduto');  // Renderiza a página de sucesso após cadastro
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        res.status(500).send(error.message);
    }
};

exports.atualizarProduto = async (req, res, next) => {
    try {
        const { nome, descricao, preco, data_atualizado } = req.body;
        const produtoAtualizado = await ProdutoService.atualizar(req.params.id, { nome, descricao, preco, data_atualizado });
        res.send(produtoAtualizado);
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        next(httpError(500, error.message));
    }
};

exports.deletarProduto = async (req, res, next) => {
    try {
        await ProdutoService.deletar(req.params.id);
        res.status(204).send();
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        next(httpError(500, error.message));
    }
};
