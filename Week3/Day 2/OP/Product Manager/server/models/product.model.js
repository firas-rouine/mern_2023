const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title:{
            type: String ,
            required: [true,"title is required"],
            minlength:[5,"At least 5 caracters"]
        },
        price:{
            type: Number ,
            min: [1,"you must at least 1 "],
            max: [100000,"you must at most 10"]
        },
        description:{
            type: String ,
            required: [true,"description is required"],
            minlength:[10,"At least 10 caracters"]
        }
    },{timestamp:true}
);
const Product =mongoose.model("Product",productSchema);
module.exports = Product;