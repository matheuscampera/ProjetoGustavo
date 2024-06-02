const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');
const { validateCliente } = require('../middlewares/validateRequest');

// Rota para buscar todos os clientes
router.get('/', clientesController.getTodosClientes);

// Rota para buscar um cliente por ID
router.get('/:id', clientesController.getCliente);

// Rota para criar um novo cliente
router.post('/', validateCliente, clientesController.criarCliente);

// Rota para atualizar um cliente por ID
router.put('/:id', validateCliente, clientesController.atualizarCliente);

// Rota para deletar um cliente por ID
router.delete('/:id', clientesController.deletarCliente);

module.exports = router;
