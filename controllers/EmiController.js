//Montly Compound Interest 

const e = require("express");

exports.getMonthlyEmi = (req,res,next) =>{
    const principalAmount = req.body.principalAmount;
    const interestRate = req.body.interestRate; 
    const loanDuration = req.body.loanDuration;  

    i = interestRate/100;
    a = i/12 ;
    d = loanDuration*12 ; 

     ME  = (principalAmount*(1+a)**d)-principalAmount + " INR" ;
     MonthlyEmi = Math.round(ME,2);

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

    DE = (principalAmount*(1+a)**d) - principalAmount + " INR" ;
    DailyEmi = Math.round(DE,2);

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

    CE = (principalAmount*exp ) + " INR" ;
    ContinousEmi = Math.round(CE,2);

 

    res.status(200).json({
        ContinousEmi 
    });
    
};
