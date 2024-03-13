const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routes/userRoutes.js");
const taskRoutes = require("./routes/taskRoutes.js");
require("dotenv").config();
const PORT = process.env.PORT;
require("./db.js");

app.use(bodyParser.json());
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Task management API fonctionne ",
  });
});

app.listen(PORT, () => {
  console.log(`j ecoute au port ${PORT}`);
});
