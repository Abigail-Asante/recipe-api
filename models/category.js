import { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const categorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    user: { type: Types.ObjectId, ref: 'User' }

}, {
    timestamps: true
});

categorySchema.plugin(toJSON);


export const categoryModel = model('category', categorySchema);