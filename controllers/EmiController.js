//Montly Compound Interest 

const e = require("express");

exports.getMonthlyEmi = (req,res,next) =>{
    const principal = req.body.principal;
    const interest = req.body.interest; 
    const duration = req.body.duration;  

    i = interest/100;
    a = i/12 ;
    d = duration*12 ; 

    res.status(200).json({
        MonthlyEmi : (principal*(1+a)**d) - principal + " INR"
    });
    
};


//Daily Compound Interest 

exports.getDailyEmi = (req,res,next) =>{
    const principal = req.body.principal;
    const interest = req.body.interest; 
    const duration = req.body.duration;  

    i = interest/100;
    a = i/365 ;
    d = duration*365 ; 

    res.status(200).json({
        DailyEmi : (principal*(1+a)**d) - principal + " INR"
    });
    
};


//Continous Compound Interest 

exports.getContinousEmi = (req,res,next) =>{
    const principal = req.body.principal;
    const interest = req.body.interest; 
    const duration = req.body.duration;  

    i = interest/100;
    napier = 2.7183;
    pow = i*duration;
    exp = napier**pow;

 

    res.status(200).json({
        ContinousEmi : (principal*exp ) + " INR"
    });
    
};