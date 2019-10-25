exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table
      .string("username")
      .unique()
      .notNullable();
    table
      .string("email")
      .unique()
      .notNullable();
    table.string("password").notNullable();
    table.integer("status_id").notNullable;
    table
      .foreign("status_id")
      .references("id")
      .inTable("userStatuses");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
