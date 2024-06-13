import { db } from "../database/conexion.js";

const getLogin = async (req, res) => {
  try {
    const { Usuario, Contrasena } = req.params;

    if (!Usuario || !Contrasena) {
      return res
        .status(400)
        .json({ error: "Los campos 'Usuario' y 'Contrasena' son requeridos." });
    }
    const params = [Usuario, Contrasena];
    const sql = `SELECT COUNT(1) as isValid FROM usuarios WHERE correo = $1 AND pass = $2`;

    const result = await db.query(sql, params);

    if (result[0].isvalid >= "1") {
      res.status(200).json({ success: true, message: "Bienvenido." });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Usuario o contraseña incorrectos." });
    }
  } catch (error) {
    console.error("Error al validar usuario:", error);
    res.status(500).json({ error: "Hubo un error al procesar la solicitud." });
  }
};

export { getLogin };