const Trailer=require("../modules/animeSchema")



const postTrailer=async function (req,res) {
    try {
      const {animeName,animePicture,season,TrailerLink,animeDescription,genre,episodes}=req.body
      const model= await new Trailer
({ animeName:animeName,animePicture: animePicture,season:season,TrailerLink:TrailerLink
,animeDescription:animeDescription,genre:genre,episodes:episodes });console.log(episodes)
       const trailer = await model.save()
       return res.status(200).json(trailer)
    } catch (err) { return res.status(500).json({msg:err})}
}

const getTrailers=async function(req,res){
 try {
     const trailers=await Trailer.find({})
     return  res.status(200).json(trailers)
 } catch (err) { return res.status(500).json({msg:err})}
}
const updateTrailers=async function(req,res){
    const trailerId=req.params.id
    const {animeName,animePicture,season,TrailerLink,animeDescription,genre,episodes}=req.body
    try {
        const trailers=await Trailer.findOneAndUpdate({_id:trailerId},{animePicture,genre},{new:true},animeName,season,TrailerLink,animeDescription,episodes)
        return  res.status(200).json(trailers)
    } catch (err) { return res.status(500).json({msg:err})}
   }
module.exports={postTrailer,getTrailers,updateTrailers}