//express server
const express = require("express");
const bodyParser = require("body-parser");
const habits = require("./routes/habits.js");
const decorator = require("./database/decorator");
const api = require("./api/index");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("./server/public"));

//body-parsers and decorator
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(decorator);

app.use("/api/habits", api.habits);
app.use("/api/users", api.users);
app.use("/api/auth", api.auth);

app.get("/smoke", (req, res) => {
  return res.json({ message: "hiyee" });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
