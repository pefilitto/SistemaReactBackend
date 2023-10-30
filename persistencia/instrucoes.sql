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



