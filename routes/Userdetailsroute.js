
const usermodel=require("../model/Userdetails")
const app = require('express').Router()


app.post ('/userview', async (request, response) => {
    const {  email } = request.body;
    console.log(request.body)
    try {
       
      const user = await usermodel.findOne({email});
    
      if (user) {
        response.json({ success: true, message: 'Search successful' });
      }
       else {
        response.json({ success: false, message: 'Invalid  and email' });
      }
    } catch (error) {
      response.status(500).json({ success: false, message: 'Error during Search' });
    }
  });




  module.exports=app
