const express = require("express");
const dotenv = require("dotenv").config();
const router = require("../backend/routes/goalRoutes");
const { errorHandling } = require("../backend/middlewares/errorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", router);

const PORT = process.env.PORT || 8000;

app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`Server listening this port : ${PORT}`);
});
