import { RecipeModel } from "../models/recipe.js";

// Get all recipes
// next is used to check errors
export const getRecipes = async (req, res, next) => {   
    // Get all recipes fron Database
    const allRecipes = await RecipeModel.find();
    // Retuen all recipes as response
    res.json(allRecipes);
}

// Get one recipe
export const getRecipe = (req, res) => {
    res.json(`Recipe with ID ${req.params.id} received`);
}

// post all recipes
export const postRecipes = async (req, res, next) => {
    try {
        // Add recipe to database
        const newRecipe = await RecipeModel.create(req.body);
        // Return response
        res.json(newRecipe)
    } catch (error) {
        next(error)
    }
};
// patch one recipe
export const patchRecipe = async (req, res, next) => {
    try {
        // update recipe by id
        const updateRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        // Return response
        res.json(updateRecipe)
    } catch (error) {
        next(error)
        
    }
    
};

// delete recipe
export const deleteRecipe = async (req, res, next) => {
    try {
        // delete recipe by id
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        // return response
        res.json(deletedRecipe);

    } catch (error) {
        next(error)

    }
};