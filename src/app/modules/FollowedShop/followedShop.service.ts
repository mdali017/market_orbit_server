import prisma from "../../../shared/prisma";

const createFollowedShopIntoDB = async (payload: any) => {
  const result = await prisma.followedShop.create({ data: payload });
  return result;
};

const getAllFollowedShopsFromDB = async () => {
  const result = await prisma.followedShop.findMany({});
  return result;
};

const getRelatedProductsForShop = async (
  shopId: string,
  customerId: string
) => {
  // Check if the customer has followed the shop
  const followedShop = await prisma.followedShop.findFirst({
    where: {
      shopId,
      customerId,
    },
  });

  if (!followedShop) {
    throw new Error("The customer has not followed this shop.");
  }

  // Fetch related products for the shop
  const products = await prisma.product.findMany({
    where: {
      shopId,
    },
    include: {
      category: true, // Include category details if needed
    },
  });

  return products;
};

export const FollowedShopServices = {
  createFollowedShopIntoDB,
  getAllFollowedShopsFromDB,
  getRelatedProductsForShop,
};
