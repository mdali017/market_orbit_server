import prisma from "../../../shared/prisma";
import { fileUploader } from "../../../helpers/fileUploader";

const createShopIntoDB = async (payload: any, file: Express.Multer.File[]) => {
  try {
    // Check if a shop with the same userId already exists
    const existingShop = await prisma.shop.findUnique({
      where: { userId: payload.userId },
    });

    if (existingShop) {
      throw new Error("A shop with this userId already exists.");
    }

    let uploadToCloudinary;
    if (file) {
      uploadToCloudinary = await fileUploader.uploadToCloudinary(file as any);
    }

    const result = await prisma.shop.create({
      data: {
        ...payload,
        logo: uploadToCloudinary?.secure_url,
      },
    });
    return result;
  } catch (error: any) {
    throw new Error(`Error creating shop: ${error.message}`);
  }
};

const getAllShopsFromDB = async () => {
  const result = await prisma.shop.findMany({ include: { vendor: true } });
  return result;
};

const getShopByIdFromDB = async (id: string) => {
  const result = await prisma.shop.findUnique({
    where: { id },
    include: { vendor: true },
  });
  return result;
};

const deleteShopFromDB = async (id: string) => {
  const result = await prisma.shop.delete({ where: { id } });
  return result;
};

export const ShopServices = {
  createShopIntoDB,
  getAllShopsFromDB,
  getShopByIdFromDB,
  deleteShopFromDB,
};
