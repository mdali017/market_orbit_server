import prisma from "../../../shared/prisma";

const getAllVendorsFromDB = async () => {
  const result = await prisma.vendors.findMany({
    include: {
      user: true,
    },
  });
  return result;
};

export const VendorsServices = {
  getAllVendorsFromDB,
};
