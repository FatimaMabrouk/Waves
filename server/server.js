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
const  {User} = require("./models/user");

// Middleware
const {auth} = require("./middleware/auth");



// ================================================
//      USER - Router
// ================================================

app.get("/api/users/auth", auth, (req, res)=> {
   res.status(200).json({
       isAdmin : req.user.role ===0 ? false : true,
       isAuth: true,
       email : req.user.email,
       name: req.user.name,
       lastname: req.user.lastname,
       role: req.user.role,
       cart: req.user.cart,
       history: req.user.history
   });
})


app.post("/api/users/register", (req, res)=>{
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


app.post("/api/users/login", (req, res)=> {
 
    User.findOne({'email': req.body.email},(err, user)=> {
        if(!user) return res.json({loginSuccess: false, message: "this email not found .."});

        user.comparePassword(req.body.password, (err, isMatch)=> {
            if(!isMatch) return res.json({loginSuccess: false, message:"Wrong Password"});

            user.generateToken( (err, user)=>{
                if(err) return res.status(400).send(err);
                res.cookie("w_auth", user.token).status(200).json({
                    loginSuccess: true,
                    message: user
                })

            })   
        })
    })

});

 
const port = process.env.PORT || 3002;   

app.listen(port, (req, res)=> {
    console.log("Server Running at : " + port)
});