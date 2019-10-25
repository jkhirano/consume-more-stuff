exports.up = function(knex) {
  return knex.schema.createTable("images", table => {
    table.increments();
    table.string("url");
    table.integer("item_id").notNullable();
    table
      .foreign("item_id")
      .references("id")
      .inTable("items");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("images");
};
