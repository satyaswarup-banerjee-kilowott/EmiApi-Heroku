const express = require('express');
const app = express();
const emiRoute = require("./routes/Emi")
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use("/home",emiRoute);


app.listen(https://emicalc-api.herokuapp.com ,() =>{
    console.log("Connected to server");

});
