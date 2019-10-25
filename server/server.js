const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.json({ message: "hiyee" });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
