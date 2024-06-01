const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');
const { validateProduto } = require('../middlewares/validateRequest');

// Rota para buscar todos os produtos
router.get('/', produtosController.getTodosProdutos);

// Rota para buscar um produto por ID
router.get('/:id', produtosController.getProduto);

// Rota para criar um novo produto
router.post('/', validateProduto, produtosController.criarProduto);

// Rota para atualizar um produto por ID
router.put('/:id', validateProduto, produtosController.atualizarProduto);

// Rota para deletar um produto por ID
router.delete('/:id', produtosController.deletarProduto);

module.exports = router;
