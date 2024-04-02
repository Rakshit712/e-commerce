const User = require('../models/User');

const router = require( 'express' ).Router();
const CryptoJs = require("crypto-js")
const jwt  = require('jsonwebtoken')


router.post("/register",async (req,res)=>{
    const newUser = new User({
        username: req.body.username,  
        password: CryptoJs.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),  
        email: req.body.email
    });
    try {    const savedUser = await newUser.save()
        res.status(201).json(savedUser); 
        console.log(savedUser)  ;  

        
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
        
    }
})

router.post("/login", async(req,res)=>{
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Wrong credentials!");
    
        const hashedPassword = CryptoJs.AES.decrypt(
          user.password,
          process.env.PASS_SEC
        );
        const orignalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);

        orignalPassword !== req.body.password &&
            res.status(401).json("Wrong Password");
            const accessToken = jwt.sign({
                id: user._id,
                isAdmin : user.isAdmin,

            },process.env.JWT_SEC,
            {expiresIn : "3d"})

        const {password, ...others} = user._doc;

        res.status(200).json(...others);
   
    } catch (error) {
        res.status(500).json(error)
    }
    
       
   
})

module.exports = router;