import bcrypt  from "bcrypt"
import { userModel } from "../models/user.js";

export const register = async (req, res, next) => {
    try {
        // hash user password
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        // create new user
        const registeredUser = await userModel.create({
            ...req.body,
            password: hashedPassword
        });
        // return status
        res.status(201).json('user registered successfuly');
    } catch (error) {
        next(error)
        
    }
}

export const login = async () => {}

export const logout = async () => {}

export const profile = async () => {}