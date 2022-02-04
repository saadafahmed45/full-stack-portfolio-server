const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!, this is server");
});

// data
const users = [
  { id: 0, name: "Bobita", age: 34, Location: "Cumilla" },
  { id: 1, name: "Shabnur", age: 18, Location: "Khulna" },
  { id: 3, name: "Sabana", age: 24, Location: "Dhaka" },
];

// post
app.post("/users", (req, res) => {
  const newUser = req.body;

  newUser.id = users.length;
  users.push(newUser)

  console.log("hit the post", req.body);
  res.json(newUser)
});



// get

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter(user.name.toLocalLowerCase().includes);
  } else {
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listeing port ", port);
});
