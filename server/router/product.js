const Product = require('../models/Product');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const CryptoJs = require("crypto-js")

const router = require( 'express' ).Router();

//Create

router.post("/", verifyTokenAndAdmin ,async(req,res)=>{
     const newProduct = new Product(req.body)
     try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
        
     } catch (error) {
        res.status(500).json({message: error})
        
     }
})


router.put("/:id",verifyTokenAndAdmin, async(req,res)=>{
   
   try{
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true});
    res.status(200).json(updatedProduct);
   }catch(err){
    res.status(500).json(err)
   }
})

router.delete("/:id",verifyTokenAndAdmin ,async (req,res)=> {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(204).json("product deleted")
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})


router.get("/find/:id",async (req,res)=> {
    try {
        const product  = await Product.findById(req.params.id)
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})
// get al;ll
router.get("/",async (req,res)=> {
    const qnew = req.query.new;
    const qcategory = req.query.category;
    try {
        let products;
        if(qnew){
            products = await Product.find().sort({createdAt:-1}).limit(1);
        }else if(qcategory){
            products = await  Product.find({categories : {$in:[qcategory]}})
        }else{
           products = await Product.find()
        }
        
        res.status(200).json(products)
        
    } catch(error) {
        res.status(500).json(error)
        
    }
})
module.exports = router;