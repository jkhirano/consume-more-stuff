const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(decorator);

app.get("/", (req, res) => {
  return res.json({ message: "hiyee" });
});

app.get("/home", (req, res) => {
  console.log("server query in progress");
  return req.database.Item.fetchAll()
    .then(results => {
      // console.log(results.toJSON()[0]);
      // if (results.toJSON().length === 0) {
      //   throw new Error("Page not found");
      // } else {
      // console.log(results);
      // res.send(results.toJSON()[0]);
      return results.toJSON();
      // }
    })
    .then(
      results => {
        console.log("results", results);
        return res.send(results);
      }
      // return res.json({ message: "test" }); //this is returnd to our getThumbnail in actions/index.js, after fetch ("/home")
    );
});

app.get("/habit/:id", (req, res) => {
  const item = req.params.id;
  console.log("server id param.. ", item);
  return req.database.Item.where({ id: item })
    .fetch({
      withRelated: ["user", "images", "category", "condition", "status"]
    })
    .then(results => {
      console.log(
        "server file console log.. ",
        results.relations.category.attributes.category
      );
      if (results.toJSON().length === 0) {
        throw new Error("Page not found!");
      } else {
        res.json(results);
      }
    });
  // console.log("loading habit");
  // return res.json({ message: "testing habit route" });
});

app.post("/products", (req, res) => {
  return req.database.Item.forge(req.body)
    .save()
    .then(results => {
      console.log("req received, item added, sending back");
      console.log(results);
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
