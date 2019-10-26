exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("userStatuses")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("userStatuses").insert([
        { id: 1, status: "inactive" },
        { id: 2, status: "active" }
      ]);
    });
};
