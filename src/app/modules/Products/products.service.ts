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

const getProductByIdFromDB = async (id: string) => {
  const result = await prisma.product.findUnique({
    where: { id },
    include: { shop: true, category: true },
  });
  return result;
};

const getProductsByCategoryFromDB = async (categoryId: string) => {
  // console.log(categoryId);
  const result = await prisma.product.findMany({
    where: { categoryId },
    include: { category: true },
  });
  return result;
};

const getProductsByShopFromDB = async (shopId: string) => {
  const result = await prisma.product.findMany({
    where: { shopId },
    include: { category: true },
  });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  getProductsByCategoryFromDB,
  getProductsByShopFromDB,
};
