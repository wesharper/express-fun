import express from "express";
const app = express();
const port = 3000;

app.use(express.static("static"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/squares/:pizza", (req, res) => {
  // the second value passed to the render function is an object
  // each key is a value that is sent by name to the template engine
  res.render("squares", { num: req.params.pizza });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
