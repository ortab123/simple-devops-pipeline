const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = [];

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.send(`<h1>User Registration</h1>
        <form method="POST" action="/register">
        <input name="name" placeholder="Name" require />
        <input name="email" placeholder="Email" required />
        <button type="submit">Register</button>
        </form>`);
});

app.post("/register", (req, res) => {
  const { name, email } = req.body;

  users.push({ name, email });

  res.send(`
    <h2>User Registered</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <a href="/">Back</a>
  `);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
