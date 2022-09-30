const express=require("express")
const router=express.Router()
const {postTrailer,getTrailers,updateTrailers,getTrailers2}=require("../Controllers/animeController")

router.post("/postTrailer",postTrailer)
router.get("/getTrailers",getTrailers)
router.get("/getTrailers2",getTrailers2)
router.post("/updateTrailer:id",updateTrailers)
module.exports=router