import express from "express"
import { addDoctor, allDoctors, loginAdmin } from "../controllers/admin.controller.js"
import { changeAvailability } from "../controllers/doctor.controller.js";

import upload from "../middlewares/multer.middleware.js"
import authAdmin from "../middlewares/authAdmin.middleware.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single('image'), addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.post("/all-doctors", authAdmin, allDoctors);
adminRouter.post("/change-availability", authAdmin, changeAvailability);

export default adminRouter;