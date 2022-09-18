const Users = require("../modules/userSchema")
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const { cloudinary } = require("../helpers/cloudinary")
//------------------------------User signUp
const postUsers = async function (req, res) {
   try {
      const { userName, Password, Role, Email } = req.body
      const checkMail = await Users.findOne({ Email })
      if (checkMail) {
         return res.status(400).json("Email is already registered")
      }
      const checkUser = await Users.findOne({ userName })
      if (checkUser) {
         return res.status(400).json("username already exist")
      }
      let image = req.files.Image.tempFilePath
      let salt = await bcrypt.genSalt(10);
      let hash = await bcrypt.hash(Password, salt);
      let file = await cloudinary.uploader.upload(image)
      let result = await new Users({ userName, Password: hash, Image: { path: file.url, public_id: file.public_id }, Role, Email })
      let user = await result.save()
      let token = await jwt.sign({id:user._id},process.env.TOKEN_SECRET);
      res.status(200).json({user,token})
   }
   catch (err) {
      res.status(500).json({ msg: err })
   }
}
//-------------------------------get Users
const getUsers = async function (req, res) {
   try {
      let users = await Users.find({})
      res.status(400).json(users)
   } catch (err) { res.status(500).json({ msg: err }) }
}
//------------------------------User login

const loginUser = async function (req, res) {
   try {
      const { userName, Password } = req.body
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array({ onlyFirstError: true }) });
      }
      const result = await Users.findOne({ userName })
      if (!result) {
         return res.status(400).json("you need to sign up first")
      }
      const match = await bcrypt.compare(Password, result.Password)
      if (!match) {
         return res.status(400).json("wrong password")
      }
      let token = await jwt.sign({ id: result._id }, process.env.TOKEN_SECRET)
      res.json({result,token})
   } catch (err) {
      res.status(500).json({ msg: err })
   }
}
//------------------------------delete User
const deleteUser=async function (req,res) {
    try {
       let userId=req.params.id
       let deletedUser=await Users.deleteOne({userId})
       res.status(200).json(deletedUser)
    } catch (err) {res.status(500).json({msg:err})}
}
module.exports = { postUsers, getUsers,loginUser,deleteUser }