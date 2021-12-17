//Montly Compound Interest 

const e = require("express");

exports.getMonthlyEmi = (req,res,next) =>{
    const principalAmount = req.body.principalAmount;
    const interestRate = req.body.interestRate; 
    const loanDuration = req.body.loanDuration;  

    if( interestRate < 2 || interestRate >= 30 ){
        res.status(200).json({
            MonthlyEmi : 0 +" INR"
        });
    }
    if( loanDuration < 1 || loanDuration >= 15 ){
        res.status(200).json({
           MonthlyEmi : 0 +" INR"
        });
    }
    
    
    else{
    
        i = interestRate/100;
        a = i/12 ;
        d = loanDuration*12 ; 

        ME  = (principalAmount*(1+a)**d)-principalAmount  ;
        MonthlyEmi = Math.round((ME + Number.EPSILON) * 100) / 100  + " INR";
 

        res.status(200).json({
        MonthlyEmi
       });

    }


};


//Daily Compound Interest 

exports.getDailyEmi = (req,res,next) =>{
    const principalAmount = req.body.principalAmount;
    const interestRate = req.body.interestRate; 
    const loanDuration = req.body.loanDuration; 
    
    if( interestRate < 2 || interestRate >= 30 ){
        res.status(200).json({
            DailyEmi : 0 +" INR"
        });
    }
    if( loanDuration < 1 || loanDuration >= 15 ){
        res.status(200).json({
            DailyEmi : 0 +" INR"
        });
    }
    
    
    else{
    
        i = interestRate/100;
        a = i/365 ;
        d = loanDuration*365 ; 
    
        DE = (principalAmount*(1+a)**d) - principalAmount  ;
        DailyEmi =  Math.round((DE + Number.EPSILON) * 100) / 100  + " INR";
 

    res.status(200).json({
        DailyEmi
    });

    }

    

    
    
};


//Continous Compound Interest 

exports.getContinousEmi = (req,res,next) =>{
     const principalAmount = req.body.principalAmount;
    const interestRate = req.body.interestRate; 
    const loanDuration = req.body.loanDuration;    

    if(principalAmount == 0 || interestRate == 0 || loanDuration == 0 ){
        res.status(200).json({
            ContinousEmi : 0 +" INR"
        });
    }
    
    if( interestRate < 2 || interestRate >= 30 ){
        res.status(200).json({
            DailyEmi : 0 +" INR"
        });
    }
    if( loanDuration < 1 || loanDuration >= 15 ){
        res.status(200).json({
            DailyEmi : 0 +" INR"
        });
    }
    
    else{
    
    i = interestRate/100;
    napier = 2.7183;
    pow = i*loanDuration;
    exp = napier**pow;

    CE = (principalAmount*exp )  ;
    ContinousEmi =  Math.round((CE + Number.EPSILON) * 100) / 100  + " INR";
 

    res.status(200).json({
        ContinousEmi 
    });

    }

    
    
};
