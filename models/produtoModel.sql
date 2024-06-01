-- Criação da tabela 'produtos'
CREATE TABLE IF NOT EXISTS `produtos` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `descricao` VARCHAR(255) NOT NULL,
    `preco` DECIMAL(10,2) NOT NULL,
    `data_atualizado` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);
