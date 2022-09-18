var jwt = require('jsonwebtoken');
require("dotenv").config();
const { check} = require('express-validator');
const LoginValidation=[
check("userName").notEmpty().withMessage("username is empty"),
check("Password").isLength({min:6}).withMessage("your password is too short!")
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
module.exports={Authentified,LoginValidation}