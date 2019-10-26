exports.up = function(knex) {
  return knex.schema.createTable("userStatuses", table => {
    table.increments();
    table.string("userStatus").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("userStatuses");
};
