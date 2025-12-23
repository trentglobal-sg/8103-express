const express = require('express');

const app = express();

app.get('/live',  function(req, res){
    res.send("Working");
})

// the first way to send information via the URL is via route parameters
// /greet => URL
// :name => parameter
app.get('/greet/:name', function(req,res){
    console.log(req.params);
    const name = req.params.name;
    res.send("Hi " + name);
});

app.get('/sum/:n1/:n2',  function(req,res){
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    const sum = n1 + n2;
    res.send("The sum is " + sum);
});

// the second way to send data via the URL is querystring
// for a route to recieve querystring, it must be a GET route
// otherwise there's no need to change the URL in anyway
// assume that three numbers will be passed to this route using querystrimg
// and the keys are number1, number2 and number3
// ?number1=10&number2=5&number3=11
app.get('/addThree', function(req,res){
    const query = req.query;
    console.log(query);
    const number1 = parseInt(req.query.number1);
    const number2 = parseInt(req.query.number2);
    const number3 = parseInt(req.query.number3);
    const sum = number1 + number2 + number3;
    res.send("The sum is " + sum);
})

// send data via POST


app.listen(3000, function(){
    console.log("Server working");
});