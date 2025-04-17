// routes.js
const express = require('express');
const router = express.Router();
const connection = require('./db');

// ========== RUTAS PARA SENSORES ==========
// GET todos los sensores
router.get('/sensores', (req, res) => {
  connection.query('SELECT * FROM sensores', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener sensores' });
    res.json(results);
  });
});

// GET un sensor por ID
router.get('/sensores/:id', (req, res) => {
  connection.query('SELECT * FROM sensores WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener sensor' });
    if (results.length === 0) return res.status(404).json({ error: 'Sensor no encontrado' });
    res.json(results[0]);
  });
});

// POST crear nuevo sensor
router.post('/sensores', (req, res) => {
  connection.query('INSERT INTO sensores SET ?', req.body, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al crear sensor' });
    res.status(201).json({ id: results.insertId, ...req.body });
  });
});

// PUT actualizar sensor
router.put('/sensores/:id', (req, res) => {
  connection.query('UPDATE sensores SET ? WHERE id = ?', [req.body, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al actualizar sensor' });
    res.json({ message: 'Sensor actualizado correctamente' });
  });
});

// DELETE eliminar sensor
router.delete('/sensores/:id', (req, res) => {
  connection.query('DELETE FROM sensores WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al eliminar sensor' });
    res.json({ message: 'Sensor eliminado correctamente' });
  });
});

// ========== RUTAS PARA DATOS_SENSORES ==========
// GET todos los datos
router.get('/datos-sensores', (req, res) => {
  connection.query('SELECT * FROM datos_sensores', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener datos' });
    res.json(results);
  });
});

// GET un dato por ID
router.get('/datos-sensores/:id', (req, res) => {
  connection.query('SELECT * FROM datos_sensores WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener dato' });
    if (results.length === 0) return res.status(404).json({ error: 'Dato no encontrado' });
    res.json(results[0]);
  });
});

// POST crear nuevo dato
router.post('/datos-sensores', (req, res) => {
  connection.query('INSERT INTO datos_sensores SET ?', req.body, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al crear dato' });
    res.status(201).json({ id: results.insertId, ...req.body });
  });
});

// PUT actualizar dato
router.put('/datos-sensores/:id', (req, res) => {
  connection.query('UPDATE datos_sensores SET ? WHERE id = ?', [req.body, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al actualizar dato' });
    res.json({ message: 'Dato actualizado correctamente' });
  });
});

// DELETE eliminar dato
router.delete('/datos-sensores/:id', (req, res) => {
  connection.query('DELETE FROM datos_sensores WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al eliminar dato' });
    res.json({ message: 'Dato eliminado correctamente' });
  });
});

// ========== RUTAS PARA ALERTAS ==========
// GET todas las alertas
router.get('/alertas', (req, res) => {
  connection.query('SELECT * FROM alertas', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener alertas' });
    res.json(results);
  });
});

// GET una alerta por ID
router.get('/alertas/:id', (req, res) => {
  connection.query('SELECT * FROM alertas WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener alerta' });
    if (results.length === 0) return res.status(404).json({ error: 'Alerta no encontrada' });
    res.json(results[0]);
  });
});

// POST crear nueva alerta
router.post('/alertas', (req, res) => {
  connection.query('INSERT INTO alertas SET ?', req.body, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al crear alerta' });
    res.status(201).json({ id: results.insertId, ...req.body });
  });
});

// PUT actualizar alerta
router.put('/alertas/:id', (req, res) => {
  connection.query('UPDATE alertas SET ? WHERE id = ?', [req.body, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al actualizar alerta' });
    res.json({ message: 'Alerta actualizada correctamente' });
  });
});

// DELETE eliminar alerta
router.delete('/alertas/:id', (req, res) => {
  connection.query('DELETE FROM alertas WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al eliminar alerta' });
    res.json({ message: 'Alerta eliminada correctamente' });
  });
});

// ========== RUTAS PARA HISTORIAL ==========
// GET todo el historial
router.get('/historial', (req, res) => {
  connection.query('SELECT * FROM historial', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener historial' });
    res.json(results);
  });
});

// GET un registro de historial por ID
router.get('/historial/:id', (req, res) => {
  connection.query('SELECT * FROM historial WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener registro' });
    if (results.length === 0) return res.status(404).json({ error: 'Registro no encontrado' });
    res.json(results[0]);
  });
});

// POST crear nuevo registro en historial
router.post('/historial', (req, res) => {
  connection.query('INSERT INTO historial SET ?', req.body, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al crear registro' });
    res.status(201).json({ id: results.insertId, ...req.body });
  });
});

// PUT actualizar registro en historial
router.put('/historial/:id', (req, res) => {
  connection.query('UPDATE historial SET ? WHERE id = ?', [req.body, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al actualizar registro' });
    res.json({ message: 'Registro actualizado correctamente' });
  });
});

// DELETE eliminar registro de historial
router.delete('/historial/:id', (req, res) => {
  connection.query('DELETE FROM historial WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al eliminar registro' });
    res.json({ message: 'Registro eliminado correctamente' });
  });
});

// ========== RUTAS PARA UBICACIONES ==========
// GET todas las ubicaciones
router.get('/ubicaciones', (req, res) => {
  connection.query('SELECT * FROM ubicaciones', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener ubicaciones' });
    res.json(results);
  });
});

// GET una ubicación por ID
router.get('/ubicaciones/:id', (req, res) => {
  connection.query('SELECT * FROM ubicaciones WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener ubicación' });
    if (results.length === 0) return res.status(404).json({ error: 'Ubicación no encontrada' });
    res.json(results[0]);
  });
});

// POST crear nueva ubicación
router.post('/ubicaciones', (req, res) => {
  connection.query('INSERT INTO ubicaciones SET ?', req.body, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al crear ubicación' });
    res.status(201).json({ id: results.insertId, ...req.body });
  });
});

// PUT actualizar ubicación
router.put('/ubicaciones/:id', (req, res) => {
  connection.query('UPDATE ubicaciones SET ? WHERE id = ?', [req.body, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al actualizar ubicación' });
    res.json({ message: 'Ubicación actualizada correctamente' });
  });
});

// DELETE eliminar ubicación
router.delete('/ubicaciones/:id', (req, res) => {
  connection.query('DELETE FROM ubicaciones WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al eliminar ubicación' });
    res.json({ message: 'Ubicación eliminada correctamente' });
  });
});

// ========== RUTAS PARA USUARIOS ==========
// GET todos los usuarios
router.get('/usuarios', (req, res) => {
  connection.query('SELECT * FROM usuario', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener usuarios' });
    res.json(results);
  });
});

// GET un usuario por ID
router.get('/usuarios/:id', (req, res) => {
  connection.query('SELECT * FROM usuario WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener usuario' });
    if (results.length === 0) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(results[0]);
  });
});

// POST crear nuevo usuario
router.post('/usuarios', (req, res) => {
  connection.query('INSERT INTO usuario SET ?', req.body, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al crear usuario' });
    res.status(201).json({ id: results.insertId, ...req.body });
  });
});

// PUT actualizar usuario
router.put('/usuarios/:id', (req, res) => {
  connection.query('UPDATE usuario SET ? WHERE id = ?', [req.body, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al actualizar usuario' });
    res.json({ message: 'Usuario actualizado correctamente' });
  });
});

// DELETE eliminar usuario
router.delete('/usuarios/:id', (req, res) => {
  connection.query('DELETE FROM usuario WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al eliminar usuario' });
    res.json({ message: 'Usuario eliminado correctamente' });
  });
});

module.exports = router;