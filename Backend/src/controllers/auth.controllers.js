const {hashing,verify} = require("../config/bcrypt");
const { generateToken } = require("../config/token");
const UserModel = require("../models/user.model");

const register = async (req, res) => {
  const { name, email, password,role,shopName,mobile,age } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ msg: "Please Fill All the fields" });
    return;
  }
  try {
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      res.status(409).json({ msg: "Already Have an Account." });
      return;
    }
    const hashedPassword = await hashing(password);
    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
      role,
      shopName,
      mobile,
      age
    });
    await user.save();
    const token = generateToken(user._id);
    res.status(201).json({
      msg: "Registered Successfully",
      newUser: {
        _id: user._id,
        name: user.name,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ msg: `Internal server error.:-${error.message}` });
  }
};

const login = async (req, res) => {
    const {email,password}=req.body
    if (!email || !password) {
      res.status(400).json({ msg: "Please Fill All the fields" });
      return;
    }
    try {
       const user = await UserModel.findOne({ email });
       if(!user){
         res.status(400).json({msg:"Please Register First"})
         return
       }
       const result=  await verify(password,user.password)
       if(result){
        const token = generateToken(user._id);
        res.status(201).json({msg:"Login Successfull",token})
        return 
       }else{
        res.status(401).json({ msg: "Invalid credentials" });
        return;
       }
    } catch (error) {
       console.error("Error logging in:", error);
       res.status(500).json({ msg: `Internal server error: ${error.message}` }); 
    }
};

module.exports = { register, login };
