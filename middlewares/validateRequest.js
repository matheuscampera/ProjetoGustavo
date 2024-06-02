const { body, validationResult } = require('express-validator');

// Middleware para validar os campos de um cliente
exports.validateCliente = [
    body('nome').notEmpty().withMessage('Nome é obrigatório').isString().withMessage('Nome deve ser uma string'),
    body('sobrenome').notEmpty().withMessage('Sobrenome é obrigatório').isString().withMessage('Sobrenome deve ser uma string'),
    body('email').isEmail().withMessage('Email deve ser válido'),
    body('idade').isInt({ min: 0 }).withMessage('Idade deve ser um número inteiro positivo'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Middleware para validar os campos de um produto
exports.validateProduto = [
    body('nome').notEmpty().withMessage('Nome do produto é obrigatório').isString().withMessage('Nome do produto deve ser uma string'),
    body('descricao').notEmpty().withMessage('Descrição do produto é obrigatória').isString().withMessage('Descrição do produto deve ser uma string'),
    body('preco').isDecimal().withMessage('Preço do produto deve ser um número decimal'),
    body('data_atualizado').optional().isISO8601().withMessage('Data deve ser válida e no formato ISO 8601'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
