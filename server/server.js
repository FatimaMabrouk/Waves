const express = require("express");
const bodyParser = require("body-parser");
const cookieParse = require("cookie-parser");

const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

mongoose.Promise = global.Promise; 
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
});


// ================================================
//       Middelware
// ================================================ 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParse());



//   Models 
const  {User} = require("./models/user")

// ================================================
//      USER - Router
// ================================================

app.post('/api/users/register', (req, res)=>{
      const user = new User(req.body);

      user.save((err, doc)=>{
          if(err) return  res.json({success: false,err});
          console.log(err);
         res.status(200).json({ 
              success: true,
              userData: doc
            });
      });    
});



const port = process.env.PORT || 3002;
app.listen(port, ()=> {
    console.log(`Server Running at ${port} `);
})