import { RecipeModel } from "../models/recipe.js";

// Get all recipes
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
        next(error);
    }
}
// patch one recipe
export const patchRecipe = (req, res) => {
    res.json(`Recippe with ${req.params.id} updated`);
}

// delete recipe
export const deleteRecipe = async (req, res, next) => {
    try {
        // delete recipe by id
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        // retur response
        res.json(deletedRecipe);

    } catch (error) {
        next(error)

    }
}