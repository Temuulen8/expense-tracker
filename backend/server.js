const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { logger } = require("./middlewares/logger");
dotenv.config();

const authRoutes = require("./routes/auth-route");
const userRoutes = require("./routes/user-route");
const recordRoutes = require("./routes/record-route");
const categoryRoutes = require("./routes/category-route");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/record", recordRoutes);
app.use("/category", categoryRoutes);

app.get("/", (_, res) => {
  res.send("welcome expense tracker API");
});

app.listen(PORT, () => {
  console.log(`Сервер localhost:${PORT} дээр аслаа.`);
});
