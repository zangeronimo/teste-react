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

  CREATE TABLE `contacts` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(80) NOT NULL,
    `email` varchar(80) NOT NULL,
    `birth` date DEFAULT NULL,
    `created_at` datetime DEFAULT NULL,
    `updated_at` datetime DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `id_UNIQUE` (`id`),
    UNIQUE KEY `email_UNIQUE` (`email`)
  ) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4


## Cronograma de desenvolvimento

  ### Backend

    Title                                  | Time    
    -------------------------------------- | ---------- 
    Estudo da tecnologia NET Core 3.1+     | 6 horas
    Criação básica da estrutura            | 3 horas
    Aplicar ao banco de dados              | 2 horas
    Alterado campo Birthday para Birth     | ...
    Adicionado created_at e updated_at     | 1 hora


  ### Frontend

    Title                                   | Time    
    --------------------------------------- | ---------
    Criação básica da estrutura HTML        | 4 horas
    Aplicação de estilização CSS            | 3 horas
    Conexão com o backend                   | 2 horas
    Adição de campo tipo Data em Nascimento | 3 horas


## Previsto para desenvolvimento

  ### Backend
    + Estudar padrões no NET Core 3.1+
    + Refatoração aplicando princípios SOLID
    + Aplicar ordenação à lista de contatos
    + Aplicar paginação à lista de contatos

  ### Frontend
    + Aplicar styled-component em todos os componentes
    + Aplicar animação ao exibir / ocultar formulário
    + Aplicar ordenação à lista de contatos
    + Aplicar paginação à lista de contatos

  
