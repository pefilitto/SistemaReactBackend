CREATE DATABASE gestaocomercialLP2;

USE gestaocomercialLP2;

CREATE TABLE categoria(
    codigoCategoria INT NOT NULL AUTO_INCREMENT,
    categoria VARCHAR(50) NOT NULL,
    tamanho VARCHAR(1) NOT NULL,
    CONSTRAINT pk_categoria PRIMARY KEY (codigoCategoria),
);

CREATE TABLE produto(
    codigoProduto INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    preco FLOAT NOT NULL,
    qtdEstoque INT NOT NULL,
    codigoCategoria INT NOT NULL,
    descricao VARCHAR(200),
    CONSTRAINT pk_produto PRIMARY KEY (codigoProduto),
    CONSTRAINT fk_produto_categoria FOREIGN KEY (codigoCategoria) REFERENCES categoria(codigoCategoria)
)

CREATE TABLE cliente(
    codigoCliente INT NOT NULL AUTO_INCREMENT,
    cpf VARCHAR(50) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    numero INT NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    uf VARCHAR(3) NOT NULL,
    cep VARCHAR(20) NOT NULL,
    CONSTRAINT pk_cliente PRIMARY KEY (codigoCliente)
)



