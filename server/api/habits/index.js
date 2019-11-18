const express = require("express");
const router = express.Router();
require("passport");

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.send({ message: "You have not been authenticated" });
  }
}

router.get("/smoke", (req, res) => {
  return res.json({ message: "I see smoke in habits." });
});

router.get("/cat/:category", (req, res) => {
  let reqWithRelated;

  if (req.params.category === "all") {
    reqWithRelated = ["category", "condition", "images"];
  } else {
    reqWithRelated = [
      {
        category: query => query.where("category", req.params.category)
      },
      "condition",
      // added
      // { images: query => query.where("images", req.params.images) }
      "images"
    ];
  }

  // let reqImages;
  // if (req.params.images === )

  // new Photo({ item_id: 1 })
  //   .fetch({
  //     withRelated: ["images"]
  //   })
  //   .then(function(photo) {
  //     var images = photo.related("images");

  //     if (images.item_id) {
  //       return account.related("items").fetch();
  //     }
  //   });

  return (
    req.database.Item.fetchAll({
      withRelated: reqWithRelated
    })
      .then(results => {
        return results.toJSON();
      })
      .then(results => {
        return results.filter(result => {
          return result.category.category;
        });
      })
      // try 1
      // .then(results => {
      //   return result.images;
      // })
      // try 2
      // .then(function(photo) {
      //   let images = results.related("images");
      //   if (images.item_id) {
      //     return images.related("items").fetch();
      //   }
      // })
      .then(results => {
        return res.json(results);
      })
      .catch(err => {
        console.log(err);
        return res.json(err);
      })
  );
});

router.get("/:id", (req, res) => {
  return req.database.Item.where({ id: req.params.id })
    .fetch({
      withRelated: ["user", "images", "category", "condition", "status"]
    })
    .then(results => {
      if (results.toJSON().length === 0) {
        throw new Error("Page not found!");
      } else {
        res.json(results);
      }
    })
    .catch(err => {
      console.log(err);
      return res.json(err);
    });
});

router.post("/", isAuthenticated, (req, res) => {
  return req.database.Item.forge(req.body)
    .save()
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
      return res.json(err);
    });
});

module.exports = router;
