CREATE DATABASE IF NOT EXISTS fairshare DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_0900_ai_ci;
USE fairshare;

CREATE TABLE tipo (
  idtipo int NOT NULL AUTO_INCREMENT,
  nome varchar(50) NOT NULL,
  PRIMARY KEY (idtipo)
);
