const express=require("express")
const router=express.Router()
const {Authentified,LoginValidation,postValidation,modifyValidation}=require("../validation")
const {postUsers,getUsers,loginUser,deleteUser,modifyUsers,addFavorite,deleteFavorite,banUser}=require("../Controllers/UserControllers")
router.post("/postUser",postValidation,postUsers)
router.get("/getUsers",Authentified,getUsers)
router.post("/loginUser",LoginValidation,loginUser)
router.delete("/deleteUser:id",Authentified,deleteUser)
router.put("/modifyUser:id",modifyValidation,modifyUsers)
router.put("/addFavorite:id",addFavorite)
router.delete("/deleteFavorite/:userId/:trailerId",deleteFavorite)
router.put("/banUser:id",banUser)
module.exports=router