const mongoose = require("mongoose");

const GoalModel = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      require: [true, "Please add text !"],
    },
  },
  {
    timestamps: true,
  }
);

const Goal = mongoose.model("Goal", GoalModel);

module.exports = Goal;
