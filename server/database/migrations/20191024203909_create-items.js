exports.up = function(knex) {
  return knex.schema.createTable("items", table => {
    table.increments();
    table.string("name");
    table.string("description").notNullable();
    table.decimal("price");
    table.string("manufacturer");
    table.string("model");
    table.string("dimensions");
    table
      .integer("view_count")
      .notNullable()
      .defaultTo(0);
    table.integer("user_id").notNullable();
    table.integer("category_id").notNullable();
    table.integer("condition_id").notNullable();
    table
      .integer("item_status_id")
      .notNullable()
      .defaultTo(1);
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
      .foreign("item_status_id")
      .references("id")
      .inTable("itemStatuses");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("items");
};
