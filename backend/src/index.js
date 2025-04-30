const express = require("express");
const cors = require("cors")


const app = express()
const PORT  = 5000;


app.use(cors()) 


// test route 


app.get("/",(req,res)=>{
    res.json({message:"I am listening here!!"});
})

app.get('/api/message',(req,res)=>{
    res.json({message:"Hello from the node.js backend!"});
})

app.listen(PORT,()=>{
    console.log(`Backend running on http://localhost:${PORT}`);
})