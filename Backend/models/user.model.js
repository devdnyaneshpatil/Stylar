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
  role:{
    type:String,
    enum:["servicer","user"],
    default:"user"
  },
  shopName:{
    type:String,
    default:null
  },
  mobile:String,
  age:Number
});

const UserModel=mongoose.model('user',userSchema)

module.exports=UserModel