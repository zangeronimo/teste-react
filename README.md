# teste-react
Bem vindo ao repositório do teste realizado para um vaga Fullstack.

Back - .NET Core
Front - ReactJS

## Considerações
Primeiro gostaria de agradecer a oportunidade de realizar este trabalho, foi muito divertido
apesar de nunca ter visto o .NET Core antes, meu desenvolvimento sempre foi focado em Linux, 
tanto que nem sabia que existia o .NET Core que é multi plataforma.

Este trabalho foi desenvolvido no Debian 10 com VSCode.

## Banco de dados MariaDB
Para o desenvolvimento foi utilizado o banco de dados relacional MariaDB, abaixo o código para criação 
da tabela.

CREATE TABLE IF NOT EXISTS `contacts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(80) NOT NULL,
  `email` VARCHAR(80) NOT NULL,
  `birthday` VARCHAR(10) NOT NULL,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB

