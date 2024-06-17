-- Active: 1716828292252@@dpg-cp9vucf109ks73afcgqg-a.oregon-postgres.render.com@5432@barbershop

CREATE TABLE ROLE (
    id SERIAL PRIMARY KEY,
    rol_asignado VARCHAR(12)
);

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY ,
    correo VARCHAR(100) NOT NULL,
    pass VARCHAR(100) NOT NULL,
    identificacion BIGINT,
    rol_asignado INT,
    is_Active BOOLEAN DEFAULT true,
    CONSTRAINT rol_asignado FOREIGN KEY (rol_asignado) REFERENCES ROLE(id)
);


SELECT * FROM usuarios


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




create table barberos(
    id SERIAL PRIMARY KEY,
    nombre varchar(30)
)

create table agenda(
    id SERIAL PRIMARY KEY,
    fecha DATE,
    tiempo TIME,
    id_Barbero int,
   CONSTRAINT id_Barbero Foreign Key (id_Barbero) REFERENCES barberos(id)
)

drop table agenda

select * from agenda 


select * from barberos



insert into barberos (nombre)
VALUES ('Luis Cardona'),('Mario Murillo'),('Eduardo Flores');


insert into agenda (fecha, tiempo, id_Barbero)
values ('08-jan-2024', '08:13', 1);

UPDATE agenda SET fecha= '2024-01-09', tiempo= '09:00', id_Barbero=2 WHERE id=1;