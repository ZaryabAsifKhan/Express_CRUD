import express from "express";
const app = express();
 const Port = 3000;

 app.use(express.json())

 app.get("/",(re,res)=>{
    res.send("Sever Running => " + new Date().toString().slice(0,24));
 })
 app.post("/users",(req,res)=>{
    res.send("Users Added Successfully")
 })

 app.get("/users",(req, res)=>{
    console.log(req.body)
 })

 app.listen(Port,()=>{
    console.log(`Server is runnig localhost${Port}`);
 })