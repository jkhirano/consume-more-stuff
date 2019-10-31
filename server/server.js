const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(decorator);
app.get("/home", (req, res) => {
  return res.json({ message: "test" }); //this is returnd to our getThumbnail in actions/index.js, after fetch ("/home")
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
