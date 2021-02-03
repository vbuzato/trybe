CREATE DATABASE IF NOT EXISTS milharal;

USE milharal;

CREATE TABLE fazendeiro (
id INT(11) PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(80) NOT NULL
);

CREATE TABLE tipo_plantacao (
id INT(11) PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(60) NOT NULL
);

CREATE TABLE fazenda (
id INT(11) PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(80) NOT NULL,
hectares DECIMAL(10,2) NOT NULL,
fazendeiro_id INT(11) NOT NULL,
plantacao_id INT(11) NOT NULL,
CONSTRAINT `fk_fazendeiro` FOREIGN KEY (fazendeiro_id) REFERENCES fazendeiro (id),
CONSTRAINT `fk_plantacao` FOREIGN KEY (plantacao_id) REFERENCES tipo_plantacao (id)
);

-- DROP TABLE fazenda

