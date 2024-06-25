import {Router} from "express";

// create a router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', (req, res) => {
    res.json('All recipes');
});
recipeRouter.post('/recipes', (req, res) =>{
    res.json('recipe added');
});

recipeRouter.patch('/recipes/:id', (req, res) => {
    res.json(`Recippe with ${req.params.id} updated`);
})

recipeRouter.delete('/recipes/:id', (req,res) => {
    res.json(`Recipe with ${req.params.id} deleted`);
})
// Export Router
export default recipeRouter;