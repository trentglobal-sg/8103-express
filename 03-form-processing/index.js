const express = require('express');
const app = express();

// if trying recieve data via form, do the following
app.use(express.urlencoded({
    extended: false
}));

// if trying recieve via AJAX post, do the following
app.use(express.json());

// ROUTES
// for patch, put and post, we need to recieve the data via req.body
app.post('/addTwo', function(req,res){
    console.log(req.body);
    res.send("Form recieved");
});

app.get("/live",  function(req,res){
    res.send("I'm alive!");
})


// START SERVER
app.listen(3000, function(){
    console.log("Server started")
})