const mongoose =require("mongoose")



let sc=mongoose.Schema;
const userschema=new sc({
   
    email:String,
   
    
});

var usermodel=mongoose.model("userdetails",userschema)
module.exports=usermodel;