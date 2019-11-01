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
  console.log("loading habit");
  return res.json({ message: "testing habit route" });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
