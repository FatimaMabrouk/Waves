const express = require("express");
const bodyParser = require("body-parser");
const cookieParse = require("cookie-parser");

const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

mongoose.Promise = global.Promise; //
mongoose.connect(process.env.DATABASE);


// ================================================
//       Middelware
// ================================================ 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParse());


// ================================================
//      USER - Router
// ================================================

app.post("/api/users/register", (req, res)=> {
    res.status(200);
})



const port = process.env.PORT || 3002;
app.listen(port, ()=> {
    console.log(`Server Running at ${port} `);
})