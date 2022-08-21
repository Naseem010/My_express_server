
const express=require("express");
const app=express();
app.get("/",function(req,res){
  res.send("<h1>hello world!</h1>");
});
app.get("/contact",function(req,res){
  res.send("contact me at: fnaseem010@gmail.com");
});
app.get("/about",function(req,res){
  res.send("i m faheemuddin naseem pursuing bachelor degree in cse and enthusiastic about blockchain");
});
app.get("/hobbies",function(req,res){
  res.send("cricket,football,gym");
});
app.listen(3000,function(){
  console.log("server started on port 3000");
});
