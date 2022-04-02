const express = require("express");
const path = require("path")

const app = express();

const buildPath = path.join(_dirname,"..","build");
app.use(express.json())

 app.use(express.static(buildPath));

 app.post("/send",(req,res)=>{
    res.send(req.body)
 })

 app.listen(4100,()=>{
     console.log("app is listing")
 })