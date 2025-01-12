const User = require("../models/userModel");

exports.registerUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

exports.findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

exports.findUserById = async (userId) => {
  return await User.findById(userId);
};
