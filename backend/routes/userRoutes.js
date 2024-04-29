const express = require("express");
const { register, login, getuser } = require("../controllers/userControllers");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/getuser", protect, getuser);

module.exports = router;
