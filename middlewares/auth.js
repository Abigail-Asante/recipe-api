import jwt from "jsonwebtoken";

export const checkUserSession = (req, res, next) => {
    // using session
    if (req.session.user) {
        next();
        // or token as the nest option
    } else if (req.header.authorization) {
        try {
            // extract token from header
            const token = req.headers.authorization.split('')[1];
            // verify the token to get user and attach to request
            req.user = jwt.verify(token, process.env.SAVEFILES_ACCESS_TOKEN)
            next()
        } catch (error) {
            res.status(401).json(error)

        }
    }
    else {
        res.status(401).json('user not authenticated now')
    }
}