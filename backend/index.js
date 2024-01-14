const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/ToDoRoutes");
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Listening on port: 5000...");
});

app.use(router);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch(() => {
    console.log("Refused to connect MongoDB...");
  });
