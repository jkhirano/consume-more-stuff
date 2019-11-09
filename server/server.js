const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(decorator);
app.get("/thumbnail", (req, res) => {
  return req.database.Item.fetchAll()
    .then(results => {
      return results.toJSON();
    })
    .then(results => {
      return res.send(results);
    });
});

app.get("/habit/:id", (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
