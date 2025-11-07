// migrations/202511062100_create_points.js

exports.up = function (knex) {
  return knex.schema.createTable('points', function (table) {
    table.increments('id').primary();          // PK auto-incremento

    table.string('book', 20).notNullable();    // caminho | sulco | forja
    table.integer('number').notNullable();     // nº do ponto dentro do livro
    table.text('text').notNullable();          // conteúdo do ponto

    table.timestamps(true, true);              // created_at / updated_at (default now)
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('points');
};