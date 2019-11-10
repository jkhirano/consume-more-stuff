const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  //deprecated habit route
  console.log("new habit route, works with postman");
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
    });
});

router.get("/:category", (req, res) => {
  console.log("new habit route, works with postman");
  let reqWithRelated;

  if (req.params.category === "all") {
    reqWithRelated = ["category", "condition", "images"];
  } else {
    reqWithRelated = [
      {
        category: query => query.where("category", req.params.category)
      },
      "condition",
      "images"
    ];
  }

  return req.database.Item.fetchAll({
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
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
      return res.json(err);
    });
});

router.get("/smoke", (req, res) => {
  return res.json({ message: "I see smoke in habits." });
});

module.exports = router;
