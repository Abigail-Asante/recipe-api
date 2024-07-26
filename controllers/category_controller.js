import { categoryModel } from "../models/category.js";
import { userModel } from "../models/user.js";


export const getCategories = async (req, res, next) => {
    try {
        // Get all categories from Database
        // Get query params
        const { limit, skip, filter } = req.query;
        const allCategories = await categoryModel
            .find({ filter })
            .limit(limit)
            .skip(skip);
        // retrn response
        res.status(201).json(allCategories);
    } catch (error) {
        next(error)

    };
};

export const postCategory = async (req, res, next) => {
    try {
        const userId = req.session?.user?.id || req?.user?.id;
        // find the user before allowing a post
        const user = await userModel.findById(userId)
        if (!user) {
            return res.status(401).json("user not found")
        }
        // Ensure the image file exists in the request
        if (!req.file || !req.file.filename) {
            return res.status(400).json({ message: "Image file is required" });
        } 
        
        // Add category to database - adding image 
        const newCategory = await categoryModel.create({
            ...req.body,
            image: req.file?.filename,
            userId
        });
        // await user.save()

        // return response
        res.status(201).json({
            message: "category added successfully",
            category: newCategory
        });
    } catch (error) {
        next(error)

    }
};

