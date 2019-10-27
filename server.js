const express = require("express");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const app = express();

// Connect Database
connectDB();

// Init Middleware
// Instead of body parser
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "Welcome to User Auth 101..." }));

// Define Routes

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
