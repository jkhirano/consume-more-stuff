exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("itemConditions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("itemConditions").insert([
        { id: 1, condition: "Chronic" },
        { id: 2, condition: "Learned" },
        { id: 3, condition: "Obsessive" }
      ]);
    });
};
