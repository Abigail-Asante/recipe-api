import express from "express";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator"
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category_route.js";

// connect to database
await mongoose.connect(process.env.MONGO_URL);

// Create Express App and expressOasGenerator for documenting the API
const app = express();
expressOasGenerator.handleResponses(app, {
    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
});

// apply middlewares
app.use(express.json());


// Use routes
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));




// listen for incoming requests
const port = process.env.PORT || 3000;
app.listen(port, () => {

    console.log(`App listening on port ${port}`);
});
















// pw: eeWODQHwnTwrvnsz