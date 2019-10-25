exports.up = function(knex) {
  return knex.schema.createTable("itemConditions", table => {
    table.increments();
    table.string("condition").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("itemConditions");
};
