import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category_route.js";

// connect to database
await mongoose.connect(process.env.MONGO_URL);

// Create Express App
const app = express();

// apply middlewares
app.use(express.json());

// // Define routes
// app.get('/', (req, res) => {
//     res.json('welcome home');
// });

// app.post('/login', (req, res) => {
//     res.json('login successful');
// }); 

// app.patch('/add', (req, res) => {
//     res.json('middle name added');
// }); 

// Use routes
app.use(recipeRouter);
app.use(categoryRouter);

// listen for incoming requests
const port = process.env.PORT || 3000;
app.listen(port, () => {

    console.log(`App listening on port ${port}`);
});
















// pw: eeWODQHwnTwrvnsz