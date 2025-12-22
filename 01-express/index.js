const express = require("express");

const app = express();

app.get("/welcome", function(req, res){
    res.send("Hello world");
});

app.get("/goodbye", function(req,res){
    res.send("Goodbye world");
})

app.listen(3000, function(){
    console.log("Server has started")
});