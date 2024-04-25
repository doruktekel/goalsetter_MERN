const mongoose = require("mongoose");

const GoalModel = new mongoose.Schema(
  {
    text: {
      type: String,
      require: [true, "Please add text !"],
    },
  },
  {
    timestamps: true,
  }
);

const Goal = mongoose.model("goal", GoalModel);

module.exports = Goal;
