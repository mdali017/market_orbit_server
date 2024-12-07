import prisma from "../../../shared/prisma";

const createProductIntoDB = async (payload: any) => {
  // Convert string values to proper types
  const data = {
    ...payload,
    price: parseFloat(payload.price), // Convert price to Float
    inventoryCount: parseInt(payload.inventoryCount, 10), // Convert inventoryCount to Int
  };

  const result = await prisma.product.create({
    data,
  });

  return result;
};

const getAllProductsFromDB = async () => {
  const result = await prisma.product.findMany({});
  return result;
};

export const ProductServices = { createProductIntoDB, getAllProductsFromDB };
