const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Configurações de ambiente
dotenv.config();

// Rotas
const clienteRoutes = require('./routes/clientes');
const produtoRoutes = require('./routes/produtos');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para log de requisições HTTP
app.use(morgan('dev'));

// Middleware para análise de corpo de requisições POST (formulários)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração do motor de visualização para Pug (anteriormente Jade)
app.set('view engine', 'pug');
app.set('views', './views');

// Rota raiz que serve a página inicial
app.get('/', (req, res) => {
    res.render('index');
});

// Usando rotas de clientes e produtos
app.use('/clientes', clienteRoutes);
app.use('/produtos', produtoRoutes);

// Middleware para tratamento de erros 404 (página não encontrada)
app.use((req, res, next) => {
    res.status(404).send('Página não encontrada');
});

// Middleware para tratamento de erros genéricos
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
