import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const localUpload = multer({dest: 'uploads'});

export const remoteUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILES_ACCESS_TOKEN,
        relativePath:'abigail/*'
    })
})