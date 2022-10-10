const Users = require("../modules/userSchema")
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const { cloudinary } = require("../helpers/cloudinary")
//------------------------------User signUp
const postUsers = async function (req, res) {
   try {
      const { userName, Password, Role, Email } = req.body
      const errors = validationResult(req);
      
       
      if (!errors.isEmpty()) {
        return res.status(400).json({ Errors: errors.array({ onlyFirstError: true }) });
      }
      const checkMail = await Users.findOne({ Email })
 
      if (checkMail) {
         return res.status(400).json({msg:"Email is already registered"})
      }
      const checkUser = await Users.findOne({ userName })
      if (checkUser) {
         return res.status(400).json({msg:"userName already exist"})
      }
      const image = req.files.Image.tempFilePath
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(Password, salt);
      const file = await cloudinary.uploader.upload(image)
      const User= await new Users({ userName, Password: hash, Image: { path: file.url, public_id: file.public_id }, Role, Email })
      const result = await User.save()
      const token = await jwt.sign({ id: result._id }, process.env.TOKEN_SECRET)
     return res.status(200).json({result,token,msg:"you was signed in successfully!"})
   }
   catch (err) {
      return  res.status(500).json({ msg: err })
   }
}

//-------------------------------get Users sorted by alphabets with admin at the top
const getUsers=async function(req,res){
   try {
      const users=await Users.find({}).sort({Role:1}).sort({userName:1})
      return  res.status(200).json(users)
   } catch (err) {
     return  res.status(500).json({msg:err})
   }
}
//------------------------------User login

const loginUser = async function (req, res) {
   try {
      const { userName, Password } = req.body
      const errors = validationResult(req);
     
      if (!errors.isEmpty()) {
        return res.status(400).json({ Errors: errors.array({ onlyFirstError: true }) });
      }
      const result = await Users.findOne({ userName })
      if (!result) {
         return res.status(400).json({msg:"you need to sign up first"})
      }
     
      const match = await bcrypt.compare(Password, result.Password)
      if (!match) {
         return res.status(400).json({msg:"wrong Password"})
      }
      if (result.ban==="true") {
         return res.status(400).json({msg:"this account has been suspended"})
      }
      const token = await jwt.sign({ id: result._id }, process.env.TOKEN_SECRET)
      return res.status(200).json({result,token})
   } catch (err) {
     return  res.status(500).json({ msg: err })
   }
}
//------------------------------delete User
const deleteUser=async function (req,res) {
    try {
      const userId=req.params.id
      const user=await Users.findOne({_id:userId});
      const fileToDelete_PublicId=user.Image.public_id
      await cloudinary.uploader.destroy(fileToDelete_PublicId)
       
       let deletedUser=await Users.findByIdAndRemove({_id:userId});
       return res.status(200).json(deletedUser)
    } catch (err) { return res.status(500).json({msg:err})}
}
//------------------------------delete User
const modifyUsers = async function (req, res) {
   try {
      const userId=req.params.id
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ Errors: errors.array({ onlyFirstError: true }) });
      }
      const { userName, Password,Email,newPassword } = req.body;
      const checkMail = await Users.findOne({ Email })
      const checkUser=await Users.findOne({$and:[{userName},{userName:{$nin:checkMail.userName}}]})
      if (checkUser) {
         return res.status(400).json({msg:"userName already exist"})
      }
      const match = await bcrypt.compare(Password, checkMail.Password)
      if (!match) {
         return res.status(400).json({msg:"Wrong Password"})
      }
      const image = req.files.Image.tempFilePath
      const salt = await bcrypt.genSalt(10);
      
      const hashOldPassword= await bcrypt.hash(Password, salt)
      if(newPassword==undefined){
         const user=await Users.findOne({_id:userId});
         const fileToDelete_PublicId=user.Image.public_id
         await cloudinary.uploader.destroy(fileToDelete_PublicId)
         const file = await cloudinary.uploader.upload(image)
         const updateUser=await Users.findOneAndUpdate({Email},{ userName,Password:hashOldPassword,Image: { path: file.url, public_id: file.public_id } },{
  returnOriginal: false
})
        return  res.status(200).json(updateUser)
      }
      //in case a new Password is entered
      const hashNewPassword = await bcrypt.hash(newPassword, salt);
      const oldMatch = await bcrypt.compare(newPassword, checkMail.Password)
      if (oldMatch) {
         return res.status(400).json({msg:"you entered the same Password"})
      }
      const  user=await Users.findOne({_id:userId});
         const  fileToDelete_PublicId=user.Image.public_id
         await cloudinary.uploader.destroy(fileToDelete_PublicId)
      const file = await cloudinary.uploader.upload(image)
      const updateUser2=await Users.findOneAndUpdate({Email},{ userName,Password:hashNewPassword,Image: { path: file.url, public_id: file.public_id } },{
  returnOriginal: false
})
     return  res.status(200).json(updateUser2)
   }
   catch (err) {
     return  res.status(500).json({ msg: err })
   }
}

//-------------------------------add a favorite trailer
const addFavorite=async function(req,res){
   try {
      
      const {userId,trailerId}=req.params;console.log(trailerId);console.log(userId)
     
      const users=await Users.findOneAndUpdate({ _id: userId },{$addToSet: { "favorites": trailerId } },{new:true})
        

      return  res.status(200).json(users)
   } catch (err) {
     return  res.status(500).json({msg:err})
   }
}
//-------------------------------delete a favorite trailer
const deleteFavorite=async function(req,res){
   try {
      const {userId,trailerId}=req.params;
     
     
      const users=await Users.findOneAndUpdate({ _id: userId },{$pull: { "favorites": trailerId } },{new:true})
        

      return  res.status(200).json(users)
   } catch (err) {
     return  res.status(500).json({msg:err})
   }
}
//-------------------------------ban or unban User
const banUser=async function(req,res){
   try {
      const userId=req.params.id;console.log(userId)
      const ban=req.body;console.log(ban)
     
      const users=await Users.findOneAndUpdate({ _id: userId },{ban:ban.ban},{new:true})
        

      return  res.status(200).json(users)
   } catch (err) {
     return  res.status(500).json({msg:err})
   }
}

module.exports = { postUsers,getUsers,loginUser,deleteUser,modifyUsers,addFavorite,deleteFavorite,banUser }