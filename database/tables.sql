-- Active: 1717960929547@@dpg-cp9vucf109ks73afcgqg-a.oregon-postgres.render.com@5432@barbershop

CREATE TABLE ROLE (
    id SERIAL PRIMARY KEY,
    rol_asignado VARCHAR(12)
);

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombres VARCHAR2 (100) NOT NULL,
    apellidos VARCHAR2 (100) NOT NULL rol asignado
)

SELECT * FROM ROLE