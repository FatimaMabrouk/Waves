const mongoose = require("mongoose");
const Schema = mongoose.Schema
const productSchema = mongoose.Schema({
   name: {
       required: true,
       type: String,
       unique: 1,

   },
   description: {
        required: true,
        type: String,
        maxlength: 1000
   },
   price: {
        required: true,
        type: String,
        maxlength: 1000  
   },
   brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand' ,// collection 
        required: true
   },
   shipping: {
       required: true,
       type: Boolean
   },
   available: {
       required: true,
       type: Boolean
   },
   wood: {
        type: Schema.Types.ObjectId,
        ref: "Wood" ,// collection 
        required: true
   },
   images: {
       type: Array,
       default: []
   }


}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };