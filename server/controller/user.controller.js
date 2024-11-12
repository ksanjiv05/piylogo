const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");

// exports.createUser = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;
//     const user = new User({ name, email, password, role });
//     await user.save();
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    const isMatch = await bycrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    delete user.password;
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const saltRounds = 10;
exports.run = async () => {
  const hash = await bycrypt.hash("PiyAdmin@777", saltRounds);
  const user = await User.create({
    name: "Admin",
    email: "admin@admin.com",
    password: hash,
  });
  console.log("user created", user);
};
