exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("images")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("images").insert([
        {
          url:
            "https://smalbanynewyork.files.wordpress.com/2018/08/man-picking-nose.jpg",
          item_id: 1
        },
        {
          url:
            "https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/02/08230505/nose-picking.jpg",
          item_id: 1
        },
        {
          url:
            "https://tedideas.files.wordpress.com/2019/07/web_ready_procrastination_justintran.jpg",
          item_id: 2
        },
        {
          url:
            "https://static1.squarespace.com/static/54e4862de4b0004c775a3d5a/55c4cfc0e4b08dc26b28f253/5715477001dbae7e6cde12e8/1461185954613/nail-biting.jpg",
          item_id: 3
        },
        {
          url:
            "https://i.kym-cdn.com/entries/icons/original/000/000/937/kanyeinterupts.jpg",
          item_id: 4
        },
        {
          url:
            "https://moorabbindentalgroup.com.au/wp-content/uploads/2017/10/Grinding-Teeth-Woman.jpg",
          item_id: 5
        },
        {
          url:
            "https://www.regence.com/documents/10192/1380327/Family+sleeping/34443d2f-e529-4ef1-ac8e-5cb66c9f2277",
          item_id: 6
        },
        {
          url:
            "https://secure.i.telegraph.co.uk/multimedia/archive/03176/Untitled-2_3176875b.jpg",
          item_id: 7
        },
        {
          url:
            "https://hhp-blog.s3.amazonaws.com/2018/05/iStock-477062066-768x512.jpg",
          item_id: 8
        },
        {
          url:
            "https://myfixituplife.com/wp-content/uploads/2014/01/hoarding.jpg",
          item_id: 9
        },
        {
          url:
            "https://www.universityofcalifornia.edu/sites/default/files/gossip-uc-riverside-study.jpg",
          item_id: 10
        }
      ]);
    });
};
