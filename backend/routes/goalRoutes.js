const express = require("express");
const {
  getGoal,
  setGoal,
  editGoal,
  deleteGoal,
} = require("../controllers/goalControllers");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

// router.get("/", getGoal);
// router.post("/", setGoal);

router.route("/").get(protect, getGoal).post(protect, setGoal);

// router.put("/:id", editGoal);
// router.delete("/:id", deleteGoal);

router.route("/:id").put(protect, editGoal).delete(protect, deleteGoal);

module.exports = router;
