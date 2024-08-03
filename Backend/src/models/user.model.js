const mongoose=require("mongoose")

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  role: {
    type: String,
    enum: ["Servicer", "User"],
    default: "user",
  },
  shopName: {
    type: String,
    default: null,
  },
  mobile: String,
  age: Number,
});

const User=mongoose.model('user',userSchema)

module.exports=User