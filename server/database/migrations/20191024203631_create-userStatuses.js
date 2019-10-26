exports.up = function(knex) {
  return knex.schema.createTable("userStatuses", table => {
    table.increments();
    table.string("status").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("userStatuses");
};
