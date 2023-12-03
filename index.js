const http=require('http')
const express=require('express')
const app=express();
require('./db/config')
const User = require('./db/User')

const port = process.env.PORT || 2000;

app.get('/',async (req,resp)=>{
    const data=await User.find();
    resp.send(data)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });