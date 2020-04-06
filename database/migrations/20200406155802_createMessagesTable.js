exports.up = function(knex) {
  return knex.schema.createTable('messages', (tbl) => {
    tbl.increments();
    tbl.string('name', 255);
    tbl.string('date', 255);
    tbl.string('message', 1000).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('messages');
};
