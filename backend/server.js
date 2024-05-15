const express = require("express");
require("dotenv").config();
const { errorHandling } = require("../backend/middlewares/errorMiddleware");
const connectDatabase = require("./config/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

connectDatabase();

const PORT = process.env.PORT || 8000;

app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`Server listening this port : ${PORT}`);
});
