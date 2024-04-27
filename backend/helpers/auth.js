const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
};

const comparePassword = async (password, userPassword) => {
  const compare = await bcrypt.compare(password, userPassword);
  return compare;
};

module.exports = {
  hashPassword,
  comparePassword,
};
