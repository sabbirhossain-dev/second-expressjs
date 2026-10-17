import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;
import cors from "cors";

app.get("/", (req, res) => {
  res.send("Hello from home");
});

//users

app.use(cors());
const users = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
  },
  {
    id: 2,
    name: "Michael",
    email: "michael@gmail.com",
  },
  {
    id: 3,
    name: "David",
    email: "david@gmail.com",
  },
  {
    id: 4,
    name: "William",
    email: "william@gmail.com",
  },
  {
    id: 5,
    name: "James",
    email: "james@gmail.com",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/user", (req, res) => {
  res.send("Successfully!");
});

app.listen(PORT, () => {
  console.log("app is runnig on port 5000");
});
