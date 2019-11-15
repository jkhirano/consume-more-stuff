exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      return knex("user_statuses")
        .del()
        .then(function() {
          return knex("images")
            .del()
            .then(function() {
              return knex("items")
                .del()
                .then(function() {
                  return knex("item_categories")
                    .del()
                    .then(function() {
                      // Inserts seed entries
                      return knex("item_categories").insert([
                        { category: "Work" },
                        { category: "Hygiene" },
                        { category: "Social" },
                        { category: "Home" }
                      ]);
                    });
                });
            });
        });
    });
};
