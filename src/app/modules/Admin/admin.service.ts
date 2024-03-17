import prisma from "../../../helpers/prisma";
import { adminSearchAbleFields } from "./admin.constants";

const getAllAdminFromDB = async (filters: any, options: any) => {
  const { searchTerm, ...filterData } = filters;
  const andCondition = [];

  if (searchTerm) {
    // console.log(searchTerm);
    andCondition.push({
      OR: adminSearchAbleFields.map((item) => ({
        [item]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andCondition.push({
      AND: Object.keys(filterData).map((item) => ({
        [item]: {
          equals: filterData[item],
        },
      })),
    });
  }

  const whereCondition = andCondition.length > 0 ? { AND: andCondition } : {};
  // console.log(andCondition);

  const dbResponse = await prisma.admin.findMany({
    where: whereCondition,
  });
  return dbResponse;
};

export const AdminServices = {
  getAllAdminFromDB,
};
