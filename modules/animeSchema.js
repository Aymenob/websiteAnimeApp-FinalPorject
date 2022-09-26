const mongoose=require("mongoose")

const Trailer=mongoose.Schema({
    animeName:{ type: String},
    animePicture:{ type: String},
    season:{type:String},
    TrailerLink:{type:String},
   
})
module.exports=mongoose.model("Trailer",Trailer)
