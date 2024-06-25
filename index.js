import express from "express";
import recipeRouter from "./routes/recipes.js";

// Create Express App
const app = express();

// Define routes
app.get('/', (req, res) => {
    res.json('welcome home');
});

app.post('/login', (req, res) => {
    res.json('login successful');
}); 

app.patch('/add', (req, res) => {
    res.json('middle name added');
}); 

// Use routes
app.use(recipeRouter);

// listen for incoming requests
app.listen(3000, () => {
    console.log('App listening on port 3000');
});