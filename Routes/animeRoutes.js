const express=require("express")
const router=express.Router()
const {postTrailer,getTrailers,updateTrailers,getTrailers2,getEpisode,deleteEpisode,deleteTrailer}=require("../Controllers/animeController")

router.post("/postTrailer",postTrailer)
router.get("/getTrailers",getTrailers)
router.get("/getTrailers2",getTrailers2)
router.get("/getEpisode/:animeName/:season",getEpisode)
router.put("/updateTrailer:id",updateTrailers)
router.put("/deleteEpisode:id",deleteEpisode)
router.delete("/deleteTrailer:id",deleteTrailer)
module.exports=router