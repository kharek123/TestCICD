
var express = require('express');
var app = express();
app.get("/getUsers", (req, res)=>{
  console.log("This is test");
  res.send("Hello World Jitendra");
});
app.listen(4000);