exports.up = function(knex) {
  return knex.schema.createTable('messages', (tbl) => {
    tbl.increments();
    tbl.string('name', 255);
    tbl.timestamp('created_at', { precision: 3 }).defaultTo(knex.fn.now(3));
    tbl.string('message', 1000).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('messages');
};
