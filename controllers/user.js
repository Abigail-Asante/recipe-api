import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
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

export const login = async (req, res, next) => {
    try {
        const { email, username, phone, password } = req.body;
        // find a user using their unique identifier
        const user = await userModel.findOne({
           $or: [
            { email: email},
            {username: username},
            {phone: phone}
           ]
        });
        if (!user) {
            res.status(401).json('No user found')
        } else {
            // verify their password
            const correctPassword = bcrypt.compareSync(password, user.password);
            if (!correctPassword) {
                res.status(401).json('invalid credentials')
            } else {
                // Generate a session
                req.session.user = { id: user.id }
                // Return response
                res.status(200).json('login successful')
            }
    
        } 
    } catch (error) {
        next(error)
        
    }

};

export const token = async (req, res, next) => {
    try {
        const { email, username, phone, password } = req.body;
        // find a user using their unique identifier
        const user = await userModel.findOne({
           $or: [
            { email: email},
            {username: username},
            {phone: phone}
           ]
        });
        if (!user) {
            res.status(401).json('No user found')
        } else {
            // verify their password
            const correctPassword = bcrypt.compareSync(password, user.password);
            if (!correctPassword) {
                res.status(401).json('invalid credentials')

            } else {
                // Generate a token
                const token = jwt.sign({id: user.id}, process.env.JWT_PRIVATE_KEY);
                // Return response
                res.status(200).json({
                    message: 'login successful',
                    accessToken: token
                });
            }
    
        } 
    } catch (error) {
        next(error)
        
    }

};

export const logout = async (req, res, next) => {
    try {
       // Destroy user session
    await req.session.destroy();
    // Return response
    res.status(200).json('logout successfully') 
    } catch (error) {
        next(error)
        
    }
 }

export const profile = async (req, res, next) => {
    try {
        // find a user by id
    const user = await userModel.findById(req.session.user.id);

    res.status(200).json(user)
    } catch (error) {
        next(error)
        
    }
 }