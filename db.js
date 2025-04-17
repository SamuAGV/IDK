const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db.xdn.com.mx',
  user: 'dikprogram',
  password: '8gNhf7HIhoHqbATd',
  database: 'dikprogram'
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

module.exports = connection;
