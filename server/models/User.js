const mongoose =require('mongoose')

const Userschema=new mongoose.Schema({
    Product_description:String,
    Product_price:Number
})

const Usermodel=mongoose.model("Product database",Userschema)
module.exports=Usermodel