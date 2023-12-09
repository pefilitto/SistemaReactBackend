CREATE DATABASE gestaocomercialbackend;

USE gestaocomercialbackend;

CREATE TABLE categoria(
    codigoCategoria INT NOT NULL AUTO_INCREMENT,
    categoria VARCHAR(50) NOT NULL,
    tamanho VARCHAR(1) NOT NULL,
    CONSTRAINT pk_categoria PRIMARY KEY (codigoCategoria)
);

CREATE TABLE produto(
    codigoProduto INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    preco FLOAT NOT NULL,
    qtdEstoque INT NOT NULL,
    codigoCategoria INT NOT NULL,
    codigoFornecedor INT NOT NULL,
    descricao VARCHAR(200),
    CONSTRAINT pk_produto PRIMARY KEY (codigoProduto),
    CONSTRAINT fk_produto_categoria FOREIGN KEY (codigoCategoria) REFERENCES categoria(codigoCategoria),
    CONSTRAINT fk_produto_fornecedor FOREIGN KEY (codigoFornecedor) REFERENCES fornecedor(codigoFornecedor)
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
);

CREATE TABLE fornecedor(
    codigoFornecedor INT NOT NULL AUTO_INCREMENT,
    cnpj VARCHAR(100) NOT NULL,
    nomeEmpresa VARCHAR(100) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    numero INT NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    cep VARCHAR(100) NOT NULL,
    CONSTRAINT pk_fornecedor PRIMARY KEY (codigoFornecedor)
);


