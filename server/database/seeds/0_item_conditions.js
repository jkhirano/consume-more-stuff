exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("item_conditions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("item_conditions").insert([
        { condition: "Chronic" },
        { condition: "Learned" },
        { condition: "Obsessive" }
      ]);
    });
};
