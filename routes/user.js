import { Router } from "express";
import { login, logout, profile, register, token } from "../controllers/user.js";
import { checkUserSession } from "../middlewares/auth.js";

// create router
const userRouter = Router();

// define the route
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/token', token);
userRouter.post('/logout', checkUserSession, logout);
userRouter.get('/profile', checkUserSession, profile);
// export router
export default userRouter;
