import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { AdminServices } from "./admin.service";
import pick from "../../shared/pick";
import { adminSearchAbleFields } from "./admin.constants";

const getAllAdminController = async (req: Request, res: Response) => {
  const filters = pick(req.query, adminSearchAbleFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await AdminServices.getAllAdminFromDB(filters, options);
  res.status(201).json({
    success: true,
    message: "Admin data fetched!",
    data: result,
  });
};

export const AdminController = {
  getAllAdminController,
};
