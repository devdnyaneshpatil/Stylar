const { hashing, verify } = require("../config/bcrypt");
const { generateToken } = require("../config/token");
const authContext = require("../db/context/auth.context");

const register = async (req, res) => {
  const { name, email, password, role = "User" } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ msg: "Please Fill Mandatory fields" });
    return;
  }
  try {
    const userExist = await authContext.getUserByEmail(email);
    if (userExist) {
      return res.status(409).json({ msg: "Already Have an Account." });
    }
    const hashedPassword = await hashing(password);
    const newUser = await authContext.createNewUser({
      name,
      email,
      password: hashedPassword,
      role,
    });
    const token = generateToken(newUser._id);
    return res.status(201).json({
      msg: "Registered Successfully",
      userData: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        token,
      },
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res
      .status(500)
      .json({ msg: `Internal server error.:-${error.message}` });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Please Fill Mandatory fields" });
  }
  try {
    const user = await authContext.getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ msg: "Please Register First" });
    }
    const result = await verify(password, user.password);
    if (!result) {
      return res.status(401).json({ msg: "Incorrect Password" });
    }
    const token = generateToken(user._id);
    return res.status(201).json({ msg: "Login Successfull", token });
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ msg: `Internal server error: ${error.message}` });
  }
};

module.exports = { register, login };
