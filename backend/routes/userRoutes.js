const express = require("express");
const { register, login, getuser } = require("../controllers/userControllers");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getuser", getuser);

module.exports = router;
