exports.up = function(knex) {
  return knex.schema.createTable("userStatuses", table => {
    table.increments();
    table.string("status").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("userStatuses");
};
