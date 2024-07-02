import { Router } from "express";
import { localUpload } from "../middlewares/upload.js";
import { getRecipes } from "../controllers/recipe.js";
import { postRecipes } from "../controllers/recipe.js";
import { patchRecipe } from "../controllers/recipe.js";
import { deleteRecipe } from "../controllers/recipe.js";
import { getRecipe } from "../controllers/recipe.js";


// create a router
const recipeRouter = Router();

try {
    // Define routes
    recipeRouter.get('/recipes', getRecipes);
} catch (error) {
    next(error)
    
}

recipeRouter.get('/recipes/:id', getRecipe);

recipeRouter.post('/recipes', localUpload.single('image'), postRecipes);

recipeRouter.patch('/recipes/:id', patchRecipe)

recipeRouter.delete('/recipes/:id', deleteRecipe)


// Export Router
export default recipeRouter;







