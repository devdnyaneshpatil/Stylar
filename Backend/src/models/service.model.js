const mongoose=require("mongoose")
const serviceSchema = mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["Braids", "Haircut", "Eyelashes", "Weaves", "Nails", "Kids"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  }, 
});

const Service=mongoose.model('service',serviceSchema)

module.exports=Service