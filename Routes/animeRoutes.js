const express=require("express")
const router=express.Router()
const {postTrailer,getTrailers,updateTrailers,getTrailers2,getEpisode,deleteEpisode}=require("../Controllers/animeController")

router.post("/postTrailer",postTrailer)
router.get("/getTrailers",getTrailers)
router.get("/getTrailers2",getTrailers2)
router.get("/getEpisode/:animeName/:season",getEpisode)
router.put("/updateTrailer:id",updateTrailers)
router.delete("/deleteEpisode:id",deleteEpisode)
module.exports=router