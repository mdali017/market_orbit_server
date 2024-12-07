import { fileUploader } from "../../../helpers/fileUploader";
import prisma from "../../../shared/prisma";

const createProductIntoDB = async (
  payload: any,
  files: Express.Multer.File[]
) => {
  try {

    // console.log(payload, files);
    // Upload images to Cloudinary
    const uploadPromises = files.map((file) =>
      fileUploader.uploadToCloudinary(file)
    );
    const uploadedImages = await Promise.all(uploadPromises);

    // Extract URLs from the uploaded results
    const imageUrls = uploadedImages.map((image) => image?.url);

    // Add image URLs to the payload
    const productData = { ...payload, images: imageUrls };

    // Save product to the database
    const result = await prisma.product.create({
      data: productData,
    });

    return result;
  } catch (error: any) {
    throw new Error(`Error creating product with images: ${error.message}`);
  }
};

export const ProductsServices = {
  createProductIntoDB,
};
