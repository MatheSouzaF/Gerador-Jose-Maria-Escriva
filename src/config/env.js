// src/config/env.js
require('dotenv').config();

const env = {
  port: process.env.PORT || 3333,
  db: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
};

// Validação mínima pra não subir servidor/banco quebrado sem você perceber
if (!env.db.host || !env.db.user || !env.db.database) {
  console.error('[ENV ERROR] Verifique suas variáveis de ambiente do banco (DB_HOST, DB_USER, DB_NAME).');
  process.exit(1);
}

module.exports = env;
