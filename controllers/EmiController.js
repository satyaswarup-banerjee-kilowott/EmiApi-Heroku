//Montly Compound Interest 

const e = require("express");

exports.getMonthlyEmi = (req,res,next) =>{
    const principalAmount = req.body.principalAmount;
    const interestRate = req.body.interestRate; 
    const loanDuration = req.body.loanDuration;  

    i = interestRate/100;
    a = i/12 ;
    d = loanDuration*12 ; 

    res.status(200).json({
        MonthlyEmi : (principalAmount*(1+a)**d) - principalAmount + " INR"
    });
    
};


//Daily Compound Interest 

exports.getDailyEmi = (req,res,next) =>{
    const principalAmount = req.body.principalAmount;
    const interestRate = req.body.interestRate; 
    const loanDuration = req.body.loanDuration;   

    i = interestRate/100;
    a = i/365 ;
    d = loanDuration*365 ; 

    res.status(200).json({
        DailyEmi : (principalAmount*(1+a)**d) - principalAmount + " INR"
    });
    
};


//Continous Compound Interest 

exports.getContinousEmi = (req,res,next) =>{
     const principalAmount = req.body.principalAmount;
    const interestRate = req.body.interestRate; 
    const loanDuration = req.body.loanDuration;    

    i = interestRate/100;
    napier = 2.7183;
    pow = i*loanDuration;
    exp = napier**pow;

 

    res.status(200).json({
        ContinousEmi : (principalAmount*exp ) + " INR"
    });
    
};
