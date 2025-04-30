const connectDB = require("./database/db")
const express = require("express")
const dotenv = require("dotenv")
dotenv.config()



const cors = require("cors")
const app = express()


app.use(cors()) 

// test route 
app.get("/",(req,res)=>{
    res.json({message:"I am listening here!!"});
})
app.get('/api/message',(req,res)=>{
    res.json({message:"Hello from the node.js backend!"});
})

const PORT  = process.env.PORT || 3000;
app.listen(PORT,()=>{
    
    connectDB(process.env.MONGODB_URI)
    console.log(`Backend running on http://localhost:${PORT}`);
})