const Cart = require('../models/Cart');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const CryptoJs = require("crypto-js")

const router = require( 'express' ).Router();

//Create

router.post("/", verifyToken ,async(req,res)=>{
     const newCart = new Cart(req.body)
     try {
        const savedCart = await newCart.save();
        res.status(201).json(savedCart);
        
     } catch (error) {
        res.status(500).json({message: error})
        
     }
})


router.put("/:id",verifyTokenAndAuthorization, async(req,res)=>{
   
   try{
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true});
    res.status(200).json(updatedCart);
   }catch(err){
    res.status(500).json(err)
   }
})

router.delete("/:id",verifyTokenAndAuthorization ,async (req,res)=> {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(204).json("cart deleted")
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})


router.get("/find/:userId", verifyTokenAndAuthorization,async (req,res)=> {
    try {
        const cart  = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})
// // get al;ll

router.get("/", verifyTokenAndAdmin, async(req,res)=>{
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
        
    }
})

module.exports = router;