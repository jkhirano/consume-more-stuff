exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "dummyUser",
          email: "dummyuser@nowhere.com",
          password: "12345",
          status_id: 1
        },
        {
          id: 2,
          username: "anotherUser",
          email: "anotherUser@nowhere.com",
          password: "12345",
          status_id: 1
        },
        {
          id: 3,
          username: "inactiveUser",
          email: "inactiveuser@nowhere.com",
          password: "12345",
          status_id: 2
        }
      ]);
    });
};
