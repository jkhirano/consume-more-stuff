exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("itemConditions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("itemConditions").insert([
        { condition: "Chronic" },
        { condition: "Learned" },
        { condition: "Obsessive" }
      ]);
    });
};
