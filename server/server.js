const express = require("express");
const bodyParser = require("body-parser");
const habits = require("./routes/habits.js");
const decorator = require("./database/decorator");
const methodOverride = require("method-override");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(decorator);

app.use(methodOverride("_method"));

app.use("/habits", habits);

app.get("/", (req, res) => {
  return res.json({ message: "hiyee" });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
