const { User } = require("../../models")

const getUserByEmail = async (email)=>{
    const user = await User.findOne({email})
    return user
}

const createNewUser = async (payload) => {
    const user = new User(payload).save()
    return user
}

module.exports={getUserByEmail, createNewUser}