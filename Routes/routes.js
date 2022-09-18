const express=require("express")
const router=express.Router()
const {Authentified,LoginValidation}=require("../validation")
const {postUsers,getUsers,loginUser,deleteUser}=require("../Controllers/UserControllers")
router.post("/postUser",postUsers
)
router.get("/getUsers",Authentified,getUsers)
router.post("/loginUser",LoginValidation,loginUser)
router.delete("/deleteUser:id",Authentified,deleteUser)

module.exports={router}