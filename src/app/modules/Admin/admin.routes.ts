import express from "express";
import { AdminController } from "./admin.controller";

const router = express.Router();

// Get all admin from the controller
router.get("/", AdminController.getAllAdminController);

export const AdminRoutes = router;
