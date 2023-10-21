const express=require('express')
const moongoose =require('mongoose')
const cors=require('cors')
const Usermodel=require('./models/User')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/Opshop")

app.get('./getUsers',(req,res)=>{
    Usermodel.find()
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("Hearing on port 3001")
})