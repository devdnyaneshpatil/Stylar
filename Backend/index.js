const express=require("express")
const connectDB = require("./config/db")
require('dotenv').config()
const cors=require('cors')
const userRouter = require("./routes/user.routes")
const app=express()

app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 6000;

app.use('/users',userRouter)

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
    process.exit(1);
  });