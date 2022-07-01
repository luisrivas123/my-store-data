const { Client } = require('pg');

async function getConnection() {
  // Para realizar la conexión se crea una nueva instancia
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'my_store'
  });
  // Entrga una promesa como retorno, deber ser async
  await client.connect();
  return client;
}

module.exports = getConnection;
