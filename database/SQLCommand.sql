SELECT * FROM role;

insert into
    usuarios (correo, pass, role_asignado)
values (
        'effs777@unitec.edu',
        'Hola1',
        2
    );

SELECT * FROM usuarios;

SELECT COUNT(1) as isValid
FROM usuarios
WHERE
    correo = 'effs777@unitec.edu'
    AND pass = 'Hola1';