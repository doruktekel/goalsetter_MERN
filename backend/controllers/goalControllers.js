// @desc Get goal
// @route Get api/goals
// @access Private
getGoal = (req, res) => {
  res.status(200).json({ message: "Get goal successfull" });
};

// @desc Set goal
// @route Post api/goals
// @access Private
setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please enter the texttttttt");
  }

  res.status(200).json({ message: "Set goal successfull" });
};

// @desc Edit goal
// @route Put api/goals/:id
// @access Private
editGoal = (req, res) => {
  const { id } = req.params;
  res
    .status(200)
    .json({ message: `Edit goal successfull with this id :  ${id}` });
};

// @desc Delete goal
// @route Put api/goals/:id
// @access Private
deleteGoal = (req, res) => {
  res.status(200).json({ message: "Delete goal successfull" });
};

module.exports = { getGoal, setGoal, editGoal, deleteGoal };
