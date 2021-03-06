-- SCRIPT SQL QUE GENERA LA BASE DE DATOS VACIA 

DROP DATABASE IF EXISTS eventos;
CREATE DATABASE eventos;
USE eventos;

CREATE TABLE IF NOT EXISTS administrador(
    id_administrador INT AUTO_INCREMENT PRIMARY KEY, 
    nombre_usuario VARCHAR(20),
    contraseña VARCHAR(255),
    correo VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS asistente(
    id_asistente INT AUTO_INCREMENT PRIMARY KEY ,
    dni VARCHAR(9),
    fecha_hora_registro DATETIME,
    codigo_postal INT(5),
    nombre VARCHAR(20),
    apellidos VARCHAR(20),
    correo VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS acto(
    id_acto INT AUTO_INCREMENT PRIMARY KEY ,
    id_administrador INT,  
    nombre VARCHAR(100),
    descripcion VARCHAR(200),
    direccion VARCHAR(200),
    fecha_hora DATETIME,
    plazas_ocupadas INT,
    plazas_totales INT,

    CONSTRAINT fk_id_administrador FOREIGN KEY (id_administrador)
    REFERENCES administrador (id_administrador)
);

CREATE TABLE asistente_acto(
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_acto INT,
    id_asistente INT,

    CONSTRAINT fk_id_acto FOREIGN KEY (id_acto)
    REFERENCES acto (id_acto),

    CONSTRAINT fk_id_cliente FOREIGN KEY (id_asistente)
    REFERENCES asistente (id_asistente)
);

-- Añadimos el usuario principal para que pueda crear los usuarios base, lo damos de alta nosotros a este usuario.

INSERT INTO administrador (nombre_usuario, contraseña, correo)
-- password es admin
VALUES ("admin", "$2y$10$SH.NnmvahLxBzF5eHCtdvuJ2zcb04ktcDIumK3cvpuF0Z2eEoGcqi", " ");