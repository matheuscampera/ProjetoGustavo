-- Criação da tabela 'clientes'
CREATE TABLE IF NOT EXISTS `clientes` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `sobrenome` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `idade` INT NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `email_unique` (`email`)
);
