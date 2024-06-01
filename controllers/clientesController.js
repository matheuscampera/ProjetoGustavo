const ClienteService = require('../services/clienteService');
const httpError = require('http-errors');

exports.getTodosClientes = async (req, res, next) => {
    try {
        const todosClientes = await ClienteService.buscarTodos();
        res.send(todosClientes);
    } catch (error) {
        console.error('Erro ao buscar todos os clientes:', error);
        next(httpError(500, error.message));
    }
};

exports.getCliente = async (req, res, next) => {
    try {
        const cliente = await ClienteService.buscarPorId(req.params.id);
        if (!cliente) {
            return next(httpError(404, 'Cliente não encontrado'));
        }
        res.send(cliente);
    } catch (error) {
        console.error('Erro ao buscar cliente por ID:', error);
        next(httpError(500, error.message));
    }
};

exports.criarCliente = async (req, res) => {
    try {
        const novoCliente = await ClienteService.criar(req.body);
        res.render('success');  // Renderiza a página de sucesso após cadastro
    } catch (error) {
        console.error('Erro ao criar cliente:', error);
        res.status(500).send(error.message);
    }
};

exports.atualizarCliente = async (req, res, next) => {
    try {
        const clienteAtualizado = await ClienteService.atualizar(req.params.id, req.body);
        res.send(clienteAtualizado);
    } catch (error) {
        console.error('Erro ao atualizar cliente:', error);
        next(httpError(500, error.message));
    }
};

exports.deletarCliente = async (req, res, next) => {
    try {
        await ClienteService.deletar(req.params.id);
        res.status(204).send();
    } catch (error) {
        console.error('Erro ao deletar cliente:', error);
        next(httpError(500, error.message));
    }
};
