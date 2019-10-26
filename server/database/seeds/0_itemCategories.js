exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("itemCategories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("itemCategories").insert([
        { id: 1, category: "Work" },
        { id: 2, category: "Hygiene" },
        { id: 3, category: "Social" },
        { id: 4, category: "Home" }
      ]);
    });
};
