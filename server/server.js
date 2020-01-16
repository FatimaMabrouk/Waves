const express = require("express");
const bodyParser = require("body-parser");
const cookieParse = require("cookie-parser");

const cors = require("cors");


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
app.use(cors());



//   Models 
const  { User  } = require("./models/user");
const  { Brand } = require("./models/brand");
const  { Wood  } = require("./models/wood");
const  { Product } = require("./models/product");

// Middleware
const { auth  } = require("./middleware/auth");
const { admin } = require("./middleware/admin");




//========================================
//    Products  
//========================================

/// fetching Product By ID

app.get("/api/products/artical_by_id", (req, res)=> {
    let type = req.query.type;
    let items = req.query.id;
    // typeof
    if(type === "array") {
      let ids =  req.query.id.split(',');
      items = [];
      items = ids.map(item=> {
          return mongoose.Types.ObjectId(item);
      });
    }
    // {$in} ==> useing for both single or array .
    Product.find({'_id':{$in:items}}).populate('brand').populate("wood")
    .exec((err, docs)=> {
       return res.status(200).send(docs);
    });
});


app.post("/api/products/artical", auth, admin, (req, res)=>{
    const product = new Product(req.body);
    product.save((err, doc)=>{
        if(err) return res.status(400).json({success: false, err});
        res.status(200).json({success: true, artical: doc});
    })
});


//========================================
//    Wood  
//========================================

app.post("/api/product/wood", auth, admin, (req, res)=> {
    const wood = new Wood(req.body);
    wood.save((err, doc)=> {
        if(err) return res.status(400).json({success:false}, err);
        res.status(200).json({success: true, wood: doc})
    });
});

app.get("/api/product/woods", (req, res)=>{
    Wood.find({}, (err, wood)=>{
      if(err) return res.status(400).send(err);
      res.status(200).send(wood);
    })
});






//==============================
// BRAND 
//==============================

app.post("/api/users/brand", auth,admin, (req, res)=> {
    const brand = new Brand(req.body);

    brand.save((err, doc)=> {
        if(err) return res.status(400).json({success: false, err});
        res.status(200).json({
            success: true,
            brand: doc
        });
    })
});

app.get("/api/users/brands", auth, admin, (req, res)=>{
    Brand.find({}, (err, brand)=> {
        if(err) return res.status(400).send(err);
        res.status(200).send(brand);
    })
});


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

//====================================
//    LOGON 
//====================================

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

//====================================
//    LOGOUT 
//====================================

app.get("/api/user/logout", auth, (req, res)=> {
    User.findOneAndUpdate(
        {_id: req.user._id},
        {token: ''},
        (err, doc)=> {
            if(err) return res.status(400).json({success: false});
            return  res.status(200).send({success: true});
        });
});

 
const port = process.env.PORT || 3002;   

app.listen(port, (req, res)=> {
    console.log("Server Running at : " + port)
});