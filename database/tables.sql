-- Active: 1716828292252@@dpg-cp9vucf109ks73afcgqg-a.oregon-postgres.render.com@5432@barbershop

CREATE TABLE ROLE (
    id SERIAL PRIMARY KEY,
    rol_asignado VARCHAR(12)
);

CREATE TABLE usuarios (
    id int PRIMARY KEY,
    correo VARCHAR(100) NOT NULL,
    pass VARCHAR(100) NOT NULL,
    rol_asignado INT,
    CONSTRAINT rol_asignado FOREIGN KEY (rol_asignado) REFERENCES ROLE(id)
);



SELECT * FROM usuarios

ALTER TABLE usuarios
ALTER COLUMN identificacion VARCHAR(50) UNIQUE;

Create table departamentos(
    id SERIAL PRIMARY key,
    nombre VARCHAR(100)
);

INSERT INTO departamentos (nombre)
VALUES 
('Atlántida'),
('Choluteca'),
('Colón'),
('Comayagua'),
('Copán'),
('Cortés'),
('El Paraíso'),
('Francisco Morazán'),
('Gracias a Dios'),
('Intibucá'),
('Islas de la Bahía'),
('La Paz'),
('Lempira'),
('Ocotepeque'),
('Olancho'),
('Santa Bárbara'),
('Valle'),
('Yoro');


select * from departamentos;


CREATE TABLE ciudad(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    id_departamento int,
    CONSTRAINT id_departamento FOREIGN KEY (id_departamento) REFERENCES departamentos(id)
)

insert into ciudad (nombre, id_departamento)
    VALUES
    ('La Ceiba',1),
    ('Choluteca',2),
    ('Trujillo',3),
    ('Comayagua',4),
    ('Santa Rosa de Copán',5),
    ('San Pedro Sula',6),
    ('Yuscarán',7),
    ('Tegucigalpa',8),
    ('Puerto Lempira',9),
    ('La Esperanza',10),
    ('Roatán',11),
    ('La Paz',12),
    ('Gracias',13),
    ('Ocotepeque',14),
    ('Juticalpa',15),
    ('Santa Bárbara',16),
    ('Nacaome',17),
    ('Yoro',18);

select * from ciudad