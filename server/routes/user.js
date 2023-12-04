const {Router} = require('express');
const authenticate = require('../middleware/auth');
const User = require('../schema/user');
const router = Router();
const { handleUserSignup, handleUserLogin } = require("../controller/user");

router.post('/signup',handleUserSignup);
router.post("/login", handleUserLogin);
router.get("/validuser",authenticate,async(req,res)=>{
    try {
        const ValidUserOne = await User.findOne({_id:req.userId});
        res.status(201).json({status:201,ValidUserOne});
    } catch (error) {
        res.status(401).json({status:401,error});
    }
  });

module.exports = router;
