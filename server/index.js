const expess = require("express")
const  app = expess()
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv")
dotenv.config()
const userRouter = require("./router/user")
const authRouter = require("./router/auth")
const productRouter = require("./router/product")
const cartRouter = require("./router/cart")
const orderRouter = require("./router/order")

const mongoose= require("mongoose")
const bodyParser = require('body-parser');

const url = process.env.MONGO_URL;
app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());

mongoose.connect(url)
.then(()=>{console.log('connected to the database')}
).catch((err)=> console.log(err));

app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)
app.use("/api/products",productRouter)
app.use("/api/carts",cartRouter)
app.use("/api/orders",orderRouter)



app.listen(8000,()=>{
    console.log("server is listening on port no. 8000");

});
