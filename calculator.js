const express = require ("express");
const app= express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));


// sum
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
  
});

app.post("/", function(req,res){

    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var sum = num1+num2;
    res.send("The sum of the 2 numbers is " + sum);
})


// bmi


app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
  
});

app.post("/bmiCalculator", function(req,res){

    var num3=Number(req.body.height);
    var num4=Number(req.body.weight);
    var bmi = num4/(num3^2);
    res.send("The bmi is " + bmi);
})

// server
app.listen(3000, function(){
    console.log("server is running at 3000");
});