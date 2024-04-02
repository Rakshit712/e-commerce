const User = require('../models/User');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const CryptoJs = require("crypto-js")

const router = require( 'express' ).Router();


router.put("/:id",verifyTokenAndAuthorization, async(req,res)=>{
   if(req.body.password){
    req.body.password = CryptoJs.AES.encrypt(req.body.password,process.env.PASS_SEC).toString()

   }
   try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true});
    res.status(200).json(updatedUser);
   }catch(err){
    res.status(500).json(err)
   }
})

router.delete("/:id",verifyTokenAndAuthorization,async (req,res)=> {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(204).json("user deleted")
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})


router.get("/find/:id", verifyTokenAndAdmin,async (req,res)=> {
    try {
        const user  = await User.findById(req.params.id)
        const {password, ...others} = user._doc;
        res.status(200).json(others)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})
router.get("/", verifyTokenAndAdmin,async (req,res)=> {
    try {
        const user  = await User.find()
        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})
module.exports = router;