import express from "express";
const app = express();
const port = 3000;

// app.use is express's way of saying we're going to use this thing as middleware
// express.static configures the express static file server, which is middleware
// the param 'static' determines which folder express will use to look for static files
app.use(express.static("static"));

// app.set is express's way of managing global server settings, which are
// basically global variables that the server has access to
// set the "view engine" key to value "pug"
// pug must be installed as a node package
app.set("view engine", "pug");

// by default, the view engine looks in the ./views folder, but we can override that setting
// app.set("views", "./templates")

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/squares/:num/color/:color", (request, response) => {
  // const num = request.params.num;
  // const color = request.params.color;
  // this is a shorthand for above
  const { num, color } = request.params;

  // .render() always uses the configured view engine
  // the view engine's job is to convert the specified view into valid html
  response.render("squares", { num: num * 2, color: color });
});

app.get("/users/:id", (request, response) => {
  const users = [
    {
      id: 1,
      name: "Wes",
    },
    {
      id: 2,
      name: "Chris",
    },
    {
      id: 3,
      name: "Joey",
    },
  ];

  const user = users.find((user) => {
    return user.id == request.params.id;
  });

  const pageTitle = `${user.name} home page`;

  response.render("user", { user: user, title: pageTitle });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
