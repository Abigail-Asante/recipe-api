import express from "express";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator";
import session from "express-session";
import MongoStore from "connect-mongo";
import multer from "multer";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category_route.js";
import userRouter from "./routes/user.js";

// connect to database
await mongoose.connect(process.env.MONGO_URL);
console.log('Database is connected')

// create session store



// Create Express App and expressOasGenerator for documenting the API
const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
});

// apply middlewares
app.use(express.json());
app.use(express.static('uploads'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL
    })
}));


// Use routes
app.use(userRouter);
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