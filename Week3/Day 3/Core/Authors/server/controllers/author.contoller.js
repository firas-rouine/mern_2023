const Author =require("../models/author.model")

// READ ALL
module.exports.FindAll=(req,res)=>{
    Author.find()
    .then((allAuthor)=>{
        res.json(allAuthor)
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    })
}
// create 
module.exports.create=(req,res)=>{
    Author.create(req.body)
    .then((newAuthor)=>{
        res.json({Author:newAuthor})
    })
    .catch((err) => {
        res.status(400).json(err)
    })

}
//find one
module.exports.findOne = (req,res) =>{
    Author.findOne({_id:req.params.id})
    .then((findAuthor)=>{
        res.json({Author:findAuthor})
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    })
}
// UPDATE 
module.exports.update = (req, res) =>{
    Author.findOneAndUpdate({_id: req.params.id}, req.body,
    {new: true, runValidators: true})
    .then((updatedAuthor)=>{
        res.json({Author: updatedAuthor})
    })
    .catch((err) => {
        res.status(400).json(err)
    });
}

// DELETE
module.exports.delete = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}