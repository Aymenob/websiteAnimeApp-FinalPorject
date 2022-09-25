const express=require("express")
const router=express.Router()
const {Authentified,LoginValidation,postValidation,modifyValidation}=require("../validation")
const {postUsers,getUsers,loginUser,deleteUser,modifyUsers}=require("../Controllers/UserControllers")
router.post("/postUser",postValidation,postUsers)
router.get("/getUsers",Authentified,getUsers)
router.post("/loginUser",LoginValidation,loginUser)
router.delete("/deleteUser:id",Authentified,deleteUser)
router.put("/modifyUser:id",modifyValidation,modifyUsers)
module.exports={router}