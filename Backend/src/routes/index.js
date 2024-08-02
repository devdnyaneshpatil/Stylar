const router = require("express").Router()

router.use("/auth", require("./auth.routes"))
router.use("/services",require("./service.routes"))

module.exports=router