exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table
      .string("email")
      .unique()
      .notNullable();
    table.string("password").notNullable();
    table.integer("user_status_id").notNullable;
    table
      .foreign("user_status_id")
      .references("id")
      .inTable("user_statuses");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
