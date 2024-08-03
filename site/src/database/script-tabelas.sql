-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE REPeDia;

USE REPeDia;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	personagemFavorito varchar(50),
	jogoFavorito varchar(50),
	fkQuiz int AUTO_INCREMENT,
	fkSecrets varchar(50),
	fkJogo varchar(50)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE quizre2 (
	id INT PRIMARY KEY AUTO_INCREMENT,
	qtdPontos varchar(50)
);

CREATE TABLE quizre3 (
	id INT PRIMARY KEY AUTO_INCREMENT,
	qtdPontos varchar(50)
);

CREATE TABLE quizre4 (
	id INT PRIMARY KEY AUTO_INCREMENT,
	qtdPontos varchar(50)
);

CREATE TABLE secrets (
	id INT PRIMARY KEY AUTO_INCREMENT,
	encontrados varchar(50)
);

CREATE TABLE jogo (
	id INT PRIMARY KEY AUTO_INCREMENT,
	qtdPontos varchar(50)
);