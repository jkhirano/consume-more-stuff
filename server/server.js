const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(decorator);

app.get("/message", (req, res) => {
  console.log("some kind of string.");
  return res.json({ message: "hiyee" }); //this is returned to our actionsGetHiyee() in actions/index.js, after fetch("/message")
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
