// knexfile.js
require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5433,
      user: 'postgres',
      database: 'gerador_jose_maria_escriva'
    },
    migrations: {
      directory: path.resolve(__dirname, 'migrations'),
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: path.resolve(__dirname, 'seeds')
    }
  }

  // futuramente você pode adicionar:
  // production: { ... }
};
