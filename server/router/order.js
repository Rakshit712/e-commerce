const Order = require('../models/Cart');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const CryptoJs = require("crypto-js")

const router = require( 'express' ).Router();

//Create

router.post("/", verifyToken ,async(req,res)=>{
     const newOrder = new Order(req.body)
     try {
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
        
     } catch (error) {
        res.status(500).json({message: error})
        
     }
})


router.put("/:id",verifyTokenAndAdmin, async(req,res)=>{
   
   try{
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true});
    res.status(200).json(updatedOrder);
   }catch(err){
    res.status(500).json(err)
   }
})

router.delete("/:id",verifyTokenAndAdmin ,async (req,res)=> {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(204).json("order deleted")
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})


router.get("/find/:userId", verifyTokenAndAuthorization,async (req,res)=> {
    try {
        const order  = await Order.find({userId: req.params.userId});
        res.status(200).json(order)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})
// // get al;ll

router.get("/", verifyTokenAndAdmin, async(req,res)=>{
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json(error)
        
    }
})

module.exports = router;