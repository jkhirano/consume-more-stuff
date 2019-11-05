exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("itemCategories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("itemCategories").insert([
        { category: "Work" },
        { category: "Hygiene" },
        { category: "Social" },
        { category: "Home" }
      ]);
    });
};
