exports.up = function(knex) {
  return knex.schema.createTable("itemStatuses", table => {
    table.increments();
    table.string("status").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("itemStatuses");
};
