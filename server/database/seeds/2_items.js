exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("items").insert([
        {
          id: 1,
          name: "Nose picking",
          description: "Digging for gold",
          price: 1,
          manufacturer: "Acme Digging Co.",
          model: "Personal nose extension",
          dimensions: "j43kl432jkl61",
          viewcount: 0,
          user_id: 1,
          category_id: 2,
          condition_id: 1,
          status_id: 1
        },
        {
          id: 2,
          name: "Procrastinating",
          description: "You have time to goof off",
          price: 1,
          manufacturer: "That's the joke.",
          model: "She's running late",
          dimensions: "4j3kln34l",
          viewcount: 0,
          user_id: 1,
          category_id: 1,
          condition_id: 1,
          status_id: 1
        },
        {
          id: 3,
          name: "Nail biting",
          description: "But teeth are nature's nail clippers",
          price: 1,
          manufacturer: "",
          model: "",
          dimensions: "",
          viewcount: 0,
          user_id: 1,
          category_id: 2,
          condition_id: 1,
          status_id: 1
        },
        {
          id: 4,
          name: "Interrupting",
          description: "Excuse me",
          price: 1,
          manufacturer: "",
          model: "",
          dimensions: "",
          viewcount: 0,
          user_id: 1,
          category_id: 3,
          condition_id: 1,
          status_id: 1
        },
        {
          id: 5,
          name: "Grinding teeth",
          description: "For when your jaw is too far away from your other jaw",
          price: 1,
          manufacturer: "",
          model: "",
          dimensions: "",
          viewcount: 0,
          user_id: 1,
          category_id: 2,
          condition_id: 1,
          status_id: 1
        },
        {
          id: 6,
          name: "Sleeping in",
          description: "",
          price: 1,
          manufacturer: "",
          model: "",
          dimensions: "",
          viewcount: 0,
          user_id: 1,
          category_id: 2,
          condition_id: 1,
          status_id: 1
        },
        {
          id: 7,
          name: "Drinking straight from the carton",
          description: "",
          price: 1,
          manufacturer: "",
          model: "",
          dimensions: "",
          viewcount: 0,
          user_id: 1,
          category_id: 2,
          condition_id: 1,
          status_id: 1
        },
        {
          id: 8,
          name: "Knuckle cracking",
          description: "+1 bonus to productivity, -1 charisma",
          price: 1,
          manufacturer: "",
          model: "",
          dimensions: "",
          viewcount: 0,
          user_id: 1,
          category_id: 3,
          condition_id: 1,
          status_id: 1
        },
        {
          id: 9,
          name: "Hoarding",
          description: "You never know when you might need this stuff",
          price: 1,
          manufacturer: "All of them",
          model: "All of them",
          dimensions: "All of them",
          viewcount: 0,
          user_id: 1,
          category_id: 4,
          condition_id: 1,
          status_id: 1
        },
        {
          id: 10,
          name: "Gossiping",
          description: "Did you hear?",
          price: 1,
          manufacturer: "Oh you know who",
          model: "",
          dimensions: "",
          viewcount: 0,
          user_id: 1,
          category_id: 4,
          condition_id: 1,
          status_id: 1
        }
      ]);
    });
};
