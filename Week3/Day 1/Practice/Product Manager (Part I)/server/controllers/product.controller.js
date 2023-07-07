const Product = require("../models/product.model");

//read All
module.exports.readAll =(req,res)=>{
    Product.find()
    .then((allproduct)=>{
        res.json({Products:allproduct})
    })
    .catch((err)=>{
        res.json({ message: 'Something went wrong', error: err })
    })

}
//read One
module.exports.getOne = (req,res)=>{
    Product.findOne({_id:req.params.id})
    .then((oneProduct)=>{
        res.json({Product: oneProduct})
    })
    .catch((err)=>{
        res.json({ message: 'Something went wrong', error: err })
    })
}

//create product
module.exports.create=(req,res)=>{
    Product.create(req.body)
    .then((createProduct)=>{
        res.json({Product: createProduct})
    })
    .catch((err)=>{
        res.json({ message: 'Something went wrong', error: err })
    })
}

// update product
module.exports.update=(req,res)=>{
    Product.findOneAndUpdate({_id:req.params.id},req.body, {new: true, runValidators: true})
    .then((updateProduct)=>{
        res.json({Product: updateProduct})
    })
    .catch((err)=>{
        res.json({ message: 'Something went wrong', error: err })
    })
}

//delete product
module.exports.delete=(req,res)=>{
    Product.deleteOne({_id:req.params.id})
    .then(result=>{
        res.json({result:result})
    })
    .catch((err)=>{
        res.json({ message: 'Something went wrong', error: err })
    })
}

