import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createAmin = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.createAdminIntoDB(req.body);
    res.status(200).json({
      success: true,
      message: "Admin Created Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.name || "Something Went wrong",
      data: error,
    });
  }
};

export const UserController = {
  createAmin,
};
