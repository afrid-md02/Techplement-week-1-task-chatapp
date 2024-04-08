const express = require("express");
const app = express();
const dotenv = require("dotenv");

const connectToMongoDB = require("./mongoDB/connectToMongodb");

const authRoutes = require("./routes/authRoutes");
const messagesRoutes = require("./routes/messageRoutes");

dotenv.config();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use("/auth", authRoutes);
app.use("/messages", messagesRoutes);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 400;
  const errMessage = err.message || "Something went wrong";
  res.status(statusCode).json({ error: errMessage });
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on ${PORT}`);
});
