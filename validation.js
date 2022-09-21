var jwt = require('jsonwebtoken');
const path = require('path')
require("dotenv").config();
const { check} = require('express-validator');
const LoginValidation=[
check("userName").notEmpty().withMessage("username is empty"),
check("Password").notEmpty().withMessage("Password is empty").isLength({min:6}).withMessage("your password is too short!")
]
const postValidation=[
  check("userName").notEmpty().withMessage("userName is empty"),
  check("Password").notEmpty().withMessage("Password is empty").isLength({min:6}).withMessage("your password is too short!"),
  check("Email").notEmpty().withMessage("Email is empty").isEmail().withMessage("please enter a valid email adress!"),
  check("Image").custom((value, {req}) => {
    if(req.files.Image.name){
        return true
    }else{
        return false;
    } }).withMessage('Please upload a user Image!').custom((value, {req}) => {
    if(path.extname(req.files.Image.name)===".jpg"||path.extname(req.files.Image.name)===".jpeg"||path.extname(req.files.Image.name)===".png"){
        return true
    }else{
        return false;
    } }).withMessage('Please submit a valid image format!')
  ]
const Authentified=function (req,res,next) {
  try {
    let token=req.headers.token
    var decoded = jwt.verify(token,process.env.TOKEN_SECRET);
    if (!decoded) {
       return res.status(400).json("you are not authentified")
    }
    next()
  } catch (err) {
    res.status(500).json({msg:err})
  }
}
module.exports={Authentified,LoginValidation,postValidation}