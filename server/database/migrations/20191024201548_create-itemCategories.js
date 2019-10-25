exports.up = function(knex) {
  return knex.schema.createTable("itemCategories", table => {
    table.increments();
    table.string("category").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("itemCategories");
};
