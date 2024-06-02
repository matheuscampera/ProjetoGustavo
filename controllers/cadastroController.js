const ClienteService = require('../services/clienteService');
const ProdutoService = require('../services/produtoService');
const httpError = require('http-errors');

exports.cadastrarClienteEProduto = async (req, res) => {
    try {
        const { nomeCliente, sobrenomeCliente, emailCliente, idadeCliente, nomeProduto, descricaoProduto, precoProduto } = req.body;

        // Criar Cliente
        const novoCliente = await ClienteService.criar({
            nome: nomeCliente,
            sobrenome: sobrenomeCliente,
            email: emailCliente,
            idade: idadeCliente
        });

        // Criar Produto
        const novoProduto = await ProdutoService.criar({
            nome: nomeProduto,
            descricao: descricaoProduto,
            preco: precoProduto
        });

        res.render('success');  // Renderiza a página de sucesso após cadastro
    } catch (error) {
        console.error('Erro ao cadastrar cliente e produto:', error);
        res.status(500).send(error.message);
    }
};
