import express from "express";
import cors from "cors";
import users from "./users.json" with { type: 'json' };

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "http://localhost:3000"
}));

app.get("/", (req, res) => {
  res.send("<h1>Server is Ready - navigate to /api/users for random user data</h1>");
});

// get all users at once
app.get("/api/users/", (req, res) => {
  res.json(users);
});

// get user by requesting number of users you want
app.get('/api/users/:count', (req, res) => {
  const count = parseInt(req.params.count, 10);
  const allUsers = [...users];

  const shuffled = users.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Get 'count' random users
  res.json(shuffled.slice(0, count));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});