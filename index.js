import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from home");
});

//users

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

// Get all users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// Add a new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser,
  });
});

app.listen(PORT, () => {
  console.log("app is runnig on port 5000");
  console.log("hello ");
});
