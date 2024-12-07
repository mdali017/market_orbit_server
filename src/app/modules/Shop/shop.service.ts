import prisma from "../../../shared/prisma";
import { fileUploader } from "../../../helpers/fileUploader";

const createShopIntoDB = async (payload: any, file: Express.Multer.File[]) => {
  // console.log(payload);
  // console.log(file);
  try {
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

export const ShopServices = {
  createShopIntoDB,
};
