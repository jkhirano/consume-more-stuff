exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("item_categories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("item_categories").insert([
        { category: "Work" },
        { category: "Hygiene" },
        { category: "Social" },
        { category: "Home" }
      ]);
    });
};
