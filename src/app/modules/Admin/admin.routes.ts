import express from "express";
import { AdminController } from "./admin.controller";

const router = express.Router();

// Get all admin from the controller
router.get("/admin", AdminController.getAllAdminController);

export const AdminRoutes = router;
