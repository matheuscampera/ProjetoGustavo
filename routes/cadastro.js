const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');
const { body, validationResult } = require('express-validator');

// Validações
const validateCadastro = [
    body('nomeCliente').notEmpty().withMessage('Nome do cliente é obrigatório'),
    body('sobrenomeCliente').notEmpty().withMessage('Sobrenome do cliente é obrigatório'),
    body('emailCliente').isEmail().withMessage('Email do cliente é inválido'),
    body('idadeCliente').isInt({ min: 0 }).withMessage('Idade do cliente deve ser um número inteiro positivo'),
    body('nomeProduto').notEmpty().withMessage('Nome do produto é obrigatório'),
    body('descricaoProduto').notEmpty().withMessage('Descrição do produto é obrigatória'),
    body('precoProduto').isDecimal().withMessage('Preço do produto deve ser um número decimal')
];

// Rota para cadastrar cliente e produto
router.post('/cadastro', validateCadastro, cadastroController.cadastrarClienteEProduto);

module.exports = router;
