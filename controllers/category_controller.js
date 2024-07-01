import { categoryModel } from "../models/category.js";


export const getCategories = async (req,res, next) => {
    try {
        // Get all categories from Database
        const allCategories = await categoryModel.find();
        // retrn response
        res.status(201).json(allCategories);
    } catch (error) {
        next(error)
        
    };
};

export const postCategory = async (req, res, next) => {
    try {
        // Add category to database
        const newCategory = await categoryModel.create(req.body);
        // return response
        res.status(201).json(newCategory);
    } catch (error) {
        next(error)
        
    }
};

