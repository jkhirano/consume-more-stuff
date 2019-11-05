exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("itemStatuses")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("itemStatuses").insert([
        { status: "published" },
        { status: "archived" },
        { status: "sold" },
        { status: "removed" }
      ]);
    });
};
