require("dotenv").config();
require("./db").connectToMongo();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", require("./routes"));

const { PORT } = require("./config/constants");

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
