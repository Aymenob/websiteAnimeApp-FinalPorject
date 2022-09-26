const express=require("express")
const router=express.Router()
const {postTrailer,getTrailers}=require("../Controllers/animeController")

router.post("/postTrailer",postTrailer)
router.get("/getTrailers",getTrailers)
module.exports=router