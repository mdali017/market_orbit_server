import prisma from "../../../shared/prisma";

// Create a new flash sale
const createFlashSaleIntoDB = async (data: any) => {
  const { name, description, startTime, endTime, products } = data;
  // console.log(data);

  const flashSale = await prisma.flashSale.create({
    data: {
      name,
      description,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      products: {
        create: products.map((product: any) => ({
          productId: product.productId,
          discount: product.discount,
        })),
      },
    },
    include: { products: true },
  });

  return flashSale;
};

const getAllFlashSalesFromDB = async () => {
  const flashSales = await prisma.flashSale.findMany({
    include: { products: { include: { product: true } } },
  });
  return flashSales;
};

export const FlashSaleServices = {
  createFlashSaleIntoDB,
  getAllFlashSalesFromDB,
};
