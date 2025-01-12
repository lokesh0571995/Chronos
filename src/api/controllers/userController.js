const jwt = require("jsonwebtoken");
const UserService = require("../../services/userService");
const { JWT_SECRET } = require("../../config/environment");

// Register a new user
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await UserService.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists." });
    }

    const user = await UserService.registerUser({ name, email, password });
    res.status(201).json({ message: "User registered successfully.", user_id: user._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserService.findUserByEmail(email);
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1d" });
    res.status(200).json({ message: "Login successful.", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user profile (protected)
exports.getProfile = async (req, res) => {
  try {
    const user = await UserService.findUserById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
