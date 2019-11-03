const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(decorator);
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

// app.use("/");

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
