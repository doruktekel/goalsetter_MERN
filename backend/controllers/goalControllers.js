const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");

// @desc Get goal
// @route Get api/goals
// @access Private
getGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.find({ user: req.user.id });
  res.status(200).json(goal);
});

// @desc Set goal
// @route Post api/goals
// @access Private
setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please enter the texttttttt");
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(goal);
});

// @desc Edit goal
// @route Put api/goals/:id
// @access Private
editGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const goal = await Goal.findById(id);

  if (!goal) {
    res.status(500);
    throw new Error("Couldnt find  this goal");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const editgoal = await Goal.findByIdAndUpdate(id, req.body);

  res.status(200).json(editgoal);
});

// @desc Delete goal
// @route Put api/goals/:id
// @access Private
deleteGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const goal = await Goal.findById(id);

  if (!goal) {
    res.status(500);
    throw new Error("Couldnt find  this goal");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const deletegoal = await Goal.findByIdAndDelete(id);

  res.status(200).json(deletegoal);
});

module.exports = { getGoal, setGoal, editGoal, deleteGoal };
