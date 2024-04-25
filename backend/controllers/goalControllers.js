const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc Get goal
// @route Get api/goals
// @access Private
getGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.find();
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

  const deletegoal = await Goal.findByIdAndDelete(id);

  res.status(200).json(deletegoal);
});

module.exports = { getGoal, setGoal, editGoal, deleteGoal };
