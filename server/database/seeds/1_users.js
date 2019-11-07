exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "dummyuser@nowhere.com",
          password: "",
          user_status_id: 1
        },
        {
          username: "anotherUser@nowhere.com",
          password: "",
          user_status_id: 1
        },
        {
          username: "inactiveuser@nowhere.com",
          password: "",
          user_status_id: 2
        }
      ]);
    });
};
