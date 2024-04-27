const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { hashPassword, comparePassword } = require("../helpers/auth");

// @desc Register user
// @route Post api/users/register
// @access Public
const register = asyncHandler(async (req, res) => {
  const { name, password, email } = req.body;

  if (!name || !password || !email) {
    res.status(400);
    throw new Error("Please add the credentials");
  }

  const foundUser = await User.findOne({ email });

  if (foundUser) {
    res.status(400);
    throw new Error("This email already have been registered");
  }

  const hashedPassword = await hashPassword(password);

  const createdUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (createdUser) {
    res.status(201).json({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
    });
  } else {
    res.status(500);
    throw new Error("Invalid user data");
  }
});

// @desc Login user
// @route Post api/users/login
// @access Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  const compare = await comparePassword(password, user.password);
  if (compare) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(500);
    throw new Error("Credentials are wrong");
  }
});

// @desc Get user
// @route Get api/users/getuser
// @access Private
const getuser = asyncHandler(async (req, res) => {
  res.json("Getuser was successfull");
});

module.exports = {
  register,
  login,
  getuser,
};
