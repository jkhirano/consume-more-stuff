exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("user_statuses")
    .del()
    .then(function() {
      // Inserts seed entries
<<<<<<< HEAD:server/database/seeds/0_user_statuses.js
      return knex("user_statuses").insert([
        { status: "active" },
        { status: "inactive" }
=======
      return knex("userStatuses").insert([
        { status: "inactive" },
        { status: "active" }
>>>>>>> acca7971e17d6ce82087fd01ee61a549cd17470d:server/database/seeds/0_userStatuses.js
      ]);
    });
};
