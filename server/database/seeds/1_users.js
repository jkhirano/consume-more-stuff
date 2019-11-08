exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          email: "dummyuser@nowhere.com",
          password: "12345",
          user_status_id: 1
        },
        {
          email: "anotherUser@nowhere.com",
          password: "12345",
          user_status_id: 1
        },
        {
          email: "inactiveuser@nowhere.com",
          password: "12345",
          user_status_id: 2
        }
      ]);
    });
};
