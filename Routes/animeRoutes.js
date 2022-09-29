const express=require("express")
const router=express.Router()
const {postTrailer,getTrailers,updateTrailers}=require("../Controllers/animeController")

router.post("/postTrailer",postTrailer)
router.get("/getTrailers",getTrailers)
router.post("/updateTrailer:id",updateTrailers)
module.exports=router