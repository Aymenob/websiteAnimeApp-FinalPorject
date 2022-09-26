const Trailer=require("../modules/userSchema")



const postTrailer=async function (req,res) {
    try {
      const {animeName,animePicture,season,TrailerLink}=req.body
      const model= await new Trailer({ animeName:animeName,animePicture: animePicture,season:season,TrailerLink:TrailerLink })
       const trailer = await model.save()
       return res.status(200).json(trailer)
    } catch (err) { return res.status(500).json({msg:err})}
}
module.exports={postTrailer}