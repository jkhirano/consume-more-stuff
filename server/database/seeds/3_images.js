exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("images")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("images").insert([
        {
          id: 1,
          url:
            "https://smalbanynewyork.files.wordpress.com/2018/08/man-picking-nose.jpg",
          item_id: 1
        },
        {
          id: 2,
          url:
            "https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/02/08230505/nose-picking.jpg.webp",
          item_id: 1
        },
        {
          id: 3,
          url:
            "https://tedideas.files.wordpress.com/2019/07/web_ready_procrastination_justintran.jpg",
          item_id: 2
        }
      ]);
    });
};
