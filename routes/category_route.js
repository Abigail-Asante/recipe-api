import { Router } from "express";
import { remoteUpload } from "../middlewares/upload.js";
import { getCategories, postCategory } from "../controllers/category_controller.js";
import { checkUserSession } from "../middlewares/auth.js";


// create a router
const categoryRouter = Router();

//  Define routes
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', remoteUpload.single('image'), checkUserSession, postCategory);

// Export router
export default categoryRouter;