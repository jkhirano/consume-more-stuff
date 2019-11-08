exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("item_statuses")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("item_statuses").insert([
        { status: "published" },
        { status: "archived" },
        { status: "sold" },
        { status: "removed" }
      ]);
    });
};
