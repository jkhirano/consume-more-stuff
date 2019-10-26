exports.up = function(knex) {
  return knex.schema.createTable("itemConditions", table => {
    table.increments();
    table.string("itemCondition").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("itemConditions");
};
