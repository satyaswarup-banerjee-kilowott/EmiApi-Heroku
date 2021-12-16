//Montly Compound Interest 

const e = require("express");

exports.getMonthlyEmi = (req,res,next) =>{
    const principalAmount = req.body.principalAmount;
    const interestRate = req.body.interestRate; 
    const loanDuration = req.body.loanDuration;  

    i = interestRate/100;
    a = i/12 ;
    d = loanDuration*12 ; 

     MonthlyEmi  = (principalAmount*(1+a)**d)-principalAmount + " INR" ;

    res.status(200).json( { 
         MonthlyEmi
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

    DailyEmi = (principalAmount*(1+a)**d) - principalAmount + " INR" ;

    res.status(200).json({
         DailyEmi
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

    ContinousEmi = (principalAmount*exp ) + " INR" ;

 

    res.status(200).json({
        ContinousEmi 
    });
    
};
