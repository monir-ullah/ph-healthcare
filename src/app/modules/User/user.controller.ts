import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createAmin = async (req: Request, res: Response) => {
  const result = await UserServices.createAdminIntoDB(req.body);
  res.send(result);
};

export const UserController = {
  createAmin,
};
