const express = require("express");
const {
  getGoal,
  setGoal,
  editGoal,
  deleteGoal,
} = require("../controllers/goalControllers");
const router = express.Router();

// router.get("/", getGoal);
// router.post("/", setGoal);

router.route("/").get(getGoal).post(setGoal);

// router.put("/:id", editGoal);
// router.delete("/:id", deleteGoal);

router.route("/:id").put(editGoal).delete(deleteGoal);

module.exports = router;
