exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("items").insert([
        {
          name: "Testing",
          description: "Digging for gold",
          price: 1,
          manufacturer: "Acme Digging Co.",
          model: "Personal nose extension",
          dimensions: "j43kl432jkl61",
          view_count: 0,
          user_id: 1,
          category_id: 2,
          condition_id: 1,
          item_status_id: 1
        },
        {
          name: "Procrastinating",
          description: "You have time to goof off",
          price: 1,
          manufacturer: "That's the joke.",
          model: "She's running late",
          dimensions: "4j3kln34l",
          view_count: 0,
          user_id: 1,
          category_id: 1,
          condition_id: 1,
          item_status_id: 1
        },
        {
          name: "Nail biting",
          description: "But teeth are nature's nail clippers",
          price: 1,
          manufacturer: "",
          model: "",
          dimensions: "",
          view_count: 0,
          user_id: 1,
          category_id: 2,
          condition_id: 1,
          item_status_id: 1
        },
        {
          name: "Interrupting",
          description: "Excuse me",
          price: 1,
          manufacturer: "",
          model: "",
          dimensions: "",
          view_count: 0,
          user_id: 1,
          category_id: 3,
          condition_id: 1,
          item_status_id: 1
        },
        {
          name: "Grinding teeth",
          description: "For when your jaw is too far away from your other jaw",
          price: 1,
          manufacturer: "",
          model: "",
          dimensions: "",
          view_count: 0,
          user_id: 1,
          category_id: 2,
          condition_id: 1,
          item_status_id: 1
        },
        {
          name: "Sleeping in",
          description: "",
          price: 1,
          manufacturer: "",
          model: "",
          dimensions: "",
          view_count: 0,
          user_id: 1,
          category_id: 2,
          condition_id: 1,
          item_status_id: 1
        },
        {
          name: "Drinking straight from the carton",
          description: "",
          price: 1,
          manufacturer: "",
          model: "",
          dimensions: "",
          view_count: 0,
          user_id: 1,
          category_id: 2,
          condition_id: 1,
          item_status_id: 1
        },
        {
          name: "Knuckle cracking",
          description: "+1 bonus to productivity, -1 charisma",
          price: 1,
          manufacturer: "",
          model: "",
          dimensions: "",
          view_count: 0,
          user_id: 1,
          category_id: 3,
          condition_id: 1,
          item_status_id: 1
        },
        {
          name: "Hoarding",
          description: "You never know when you might need this stuff",
          price: 1,
          manufacturer: "All of them",
          model: "All of them",
          dimensions: "All of them",
          view_count: 0,
          user_id: 1,
          category_id: 4,
          condition_id: 1,
          item_status_id: 1
        },
        {
          name: "Gossiping",
          description: "Did you hear?",
          price: 1,
          manufacturer: "Oh you know who",
          model: "",
          dimensions: "",
          view_count: 0,
          user_id: 1,
          category_id: 4,
          condition_id: 1,
          item_status_id: 1
        }
      ]);
    });
};
