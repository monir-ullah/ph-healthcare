import express, { Request, Response } from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  res.send({
    message: "Ph Health care server is running....",
  });
});

router.post("/create-admin", UserController.createAmin);

export const userRoutes = router;
