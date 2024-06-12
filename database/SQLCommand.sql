SELECT * FROM role;

insert into
    usuarios (correo, pass,  identificacion, rol_asignado)
values (
    'effs777@unitec.edu',
        'Hola1',
        0801200012345,
        2
    );

SELECT * FROM usuarios;

SELECT COUNT(1) as isValid
FROM usuarios
WHERE
    correo = 'effs777@unitec.edu'
    AND pass = 'Hola1';