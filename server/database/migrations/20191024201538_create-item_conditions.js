exports.up = function(knex) {
  return knex.schema.createTable("item_conditions", table => {
    table.increments();
    table.string("condition").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("item_conditions");
};
