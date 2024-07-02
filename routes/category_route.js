import { Router } from "express";
import { localUpload } from "../middlewares/upload.js";
import { getCategories, postCategory } from "../controllers/category_controller.js";


// create a router
const categoryRouter = Router();

//  Define routes
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', localUpload.single('image'), postCategory);


// Export router
export default categoryRouter;