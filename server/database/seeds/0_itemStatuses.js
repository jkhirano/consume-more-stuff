exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("itemStatuses")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("itemStatuses").insert([
        { id: 1, status: "published" },
        { id: 2, status: "archived" },
        { id: 3, status: "sold" },
        { id: 4, status: "removed" }
      ]);
    });
};
