import { Schema, Types, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

// define the schema
const recipeSchema = new Schema({
    name: { type: String, unique: true, required: true },
    categoryId: { type: Types.ObjectId,ref:'category', required: true },
    description: { type: String, required: true },
    ingredients: [{ type: String }],
    image: { type: String, required: true },
    favourite: {type: Boolean, default: false}
}, {
    timestamps: true
});

recipeSchema.plugin(toJSON);

export const RecipeModel = model('Recipe', recipeSchema)