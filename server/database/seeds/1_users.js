exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
<<<<<<< HEAD
=======
          username: "dummyUser",
>>>>>>> acca7971e17d6ce82087fd01ee61a549cd17470d
          email: "dummyuser@nowhere.com",
          password: "12345",
          user_status_id: 1
        },
        {
<<<<<<< HEAD
=======
          username: "anotherUser",
>>>>>>> acca7971e17d6ce82087fd01ee61a549cd17470d
          email: "anotherUser@nowhere.com",
          password: "12345",
          user_status_id: 1
        },
        {
<<<<<<< HEAD
=======
          username: "inactiveUser",
>>>>>>> acca7971e17d6ce82087fd01ee61a549cd17470d
          email: "inactiveuser@nowhere.com",
          password: "12345",
          user_status_id: 2
        }
      ]);
    });
};
