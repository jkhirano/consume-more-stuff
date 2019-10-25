exports.up = function(knex) {
  return knex.schema.createTable("items", table => {
    table.increments();
    table.string("name");
    table.string("description").notNullable();
    table.integer("price");
    table.string("manufacturer");
    table.string("model");
    table.string("dimensions");
    table.integer("user_id").notNullable();
    table.integer("category_id").notNullable();
    table.integer("condition_id").notNullable();
    table.integer("status_id").notNullable();
    table
      .foreign("user_id")
      .references("id")
      .inTable("users");
    table
      .foreign("category_id")
      .references("id")
      .inTable("itemCategories");
    table
      .foreign("condition_id")
      .references("id")
      .inTable("itemConditions");
    table
      .foreign("status_id")
      .references("id")
      .inTable("itemStatuses");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("items");
};
