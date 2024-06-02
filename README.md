# ProjetoGustavo
# Sistema de Gerenciamento

## Visão Geral

O Sistema de Gerenciamento é uma aplicação web desenvolvida para gerenciar clientes e produtos. Ele permite realizar operações CRUD (Create, Read, Update, Delete) em clientes e produtos, com caching implementado para melhorar a performance. A aplicação foi desenvolvida utilizando Node.js, Express, MySQL e outras bibliotecas úteis.

## Funcionalidades

- Adicionar, visualizar, atualizar e deletar clientes.
- Adicionar, visualizar, atualizar e deletar produtos.
- Implementação de caching para otimizar a performance de leitura.
- Log das operações que utilizam o cache e as que acessam diretamente o banco de dados.

## Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- Node-cache
- Pug (anteriormente Jade)
- Dotenv
- Morgan
- HTTP-errors
- Express-validator

## Estrutura do Projeto

myapp/
├── configs/
│ └── dbConfig.js
├── controllers/
│ ├── clientesController.js
│ └── produtosController.js
├── middlewares/
│ └── validateRequest.js
├── models/
│ ├── clienteModel.sql
│ └── produtoModel.sql
├── routes/
│ ├── clientes.js
│ └── produtos.js
├── services/
│ ├── clienteService.js
│ └── produtoService.js
├── views/
│ ├── index.pug
│ ├── successCliente.pug
│ └── successProduto.pug
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md


## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/sistema-gerenciamento.git
   cd sistema-gerenciamento
2. Instale as dependências:
     npm install
3.Configure o arquivo .env com as informações do seu banco de dados:
    PORT=3000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=sua_senha
    DB_NAME=sistema_gerenciamento
4. Configure o banco de dados executando os scripts SQL em models/clienteModel.sql e models/produtoModel.sql no seu banco de dados MySQL.
5. Inicie a aplicação:
     npm start

"Uso - Endpoints"

"Clientes"

--> GET /clientes

Descrição: Recupera todos os clientes.
Resposta: Lista de clientes.

--> GET /clientes/

Descrição: Recupera um cliente pelo ID.
Parâmetros: id - ID do cliente.
Resposta: Dados do cliente.

--> POST /clientes

Descrição: Cria um novo cliente.
Corpo da Requisição:
{
  "nome": "João",
  "sobrenome": "Silva",
  "email": "joao.silva@example.com",
  "idade": 30
}
Resposta: Cliente criado.

--> PUT /clientes/

Descrição: Atualiza um cliente pelo ID.
Parâmetros: id - ID do cliente.
Corpo da Requisição:
{
  "nome": "João",
  "sobrenome": "Silva",
  "email": "joao.silva@example.com",
  "idade": 31
}
Resposta: Cliente atualizado.

--> DELETE /clientes/

Descrição: Deleta um cliente pelo ID.
Parâmetros: id - ID do cliente.
Resposta: Confirmação de deleção.

"Produtos"

--> GET /produtos

Descrição: Recupera todos os produtos.
Resposta: Lista de produtos.
GET /produtos/

Descrição: Recupera um produto pelo ID.
Parâmetros: id - ID do produto.
Resposta: Dados do produto.

--> POST /produtos

Descrição: Cria um novo produto.
Corpo da Requisição:
{
  "nome": "Samsung S23",
  "descricao": "8GB RAM",
  "preco": "3000.00",
  "data_atualizado": "2024-06-02 16:31:00"
}
Resposta: Produto criado.

--> PUT /produtos/

Descrição: Atualiza um produto pelo ID.
Parâmetros: id - ID do produto.
Corpo da Requisição:
{
  "nome": "Samsung S23 Atualizado",
  "descricao": "8GB RAM - Atualizado",
  "preco": "3200.00",
  "data_atualizado": "2024-06-02 16:31:00"
}
Resposta: Produto atualizado.

--> DELETE /produtos/

Descrição: Deleta um produto pelo ID.
Parâmetros: id - ID do produto.
Resposta: Confirmação de deleção.

"Contribuição"

Faça um fork do projeto.
--> Crie uma branch para sua feature (git checkout -b feature/sua-feature).
--> Commit suas alterações (git commit -am 'Adicionei uma nova feature').
--> Faça um push para a branch (git push origin feature/sua-feature).
--> Crie um novo Pull Request.

"Licença"
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.


Sinta-se à vontade para ajustar conforme necessário para se adequar ao seu projeto e às suas preferências.
