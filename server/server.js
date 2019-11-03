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

app.get("/habit", (req, res) => {
  return req.database.Item.fetchAll().then(results => {
    console.log(results.toJSON());
    if (results.toJSON().length === 0) {
      throw new Error("Page not found!");
    } else {
      res.send(results.toJSON()[0]);
    }
  });
  // console.log("loading habit");
  // return res.json({ message: "testing habit route" });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
