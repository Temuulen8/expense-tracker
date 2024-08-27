const express = require("express");
const fs = require("fs");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(8000, () => {
  console.log("Server is running at localhost:8000");
});
