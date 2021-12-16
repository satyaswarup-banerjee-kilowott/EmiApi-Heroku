const express = require('express');
const http = require('http');
const app = express();
const emiRoute = require("./routes/Emi")
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;

const server = http.createServer(app);

app.use(bodyParser.json());
app.use("/home",emiRoute);

server.listen(port,() =>{
    console.log("App is running on localhost:" +port);
});



