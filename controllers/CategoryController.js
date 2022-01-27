const Category = require("../models/Category");
const router = require("../routes/categories");

const addCategory = async (req,res) => {
    const newCat = new Category(req.body)
    try{
        const savedCat = await newCat.save()
        res.status(201).json(savedCat)
    }catch(err){
        res.status(500).json(err)
    }
}

const allCategory = async (req,res) => {
    try{
        const cats = await Category.find()
        res.status(201).json(cats)
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    addCategory, 
    allCategory,   
};
  