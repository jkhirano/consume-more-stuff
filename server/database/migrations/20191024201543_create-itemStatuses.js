exports.up = function(knex) {
  return knex.schema.createTable("itemStatuses", table => {
    table.increments();
    table.string("status").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("itemStatuses");
};
