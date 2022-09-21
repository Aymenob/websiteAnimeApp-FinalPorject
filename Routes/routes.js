const express=require("express")
const router=express.Router()
const {Authentified,LoginValidation,postValidation}=require("../validation")
const {postUsers,getUsers,loginUser,deleteUser}=require("../Controllers/UserControllers")
router.post("/postUser",postValidation,postUsers)
router.get("/getUsers",Authentified,getUsers)
router.post("/loginUser",LoginValidation,loginUser)
router.delete("/deleteUser:id",deleteUser)

module.exports={router}