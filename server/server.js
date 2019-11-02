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
