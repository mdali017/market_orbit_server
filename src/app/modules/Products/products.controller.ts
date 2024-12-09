import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ProductServices } from "./products.service";
import { fileUploader } from "../../../helpers/fileUploader";
// import { fileUploader } from "../../../shared/fileUploader";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  // Parse product data
  const payload = JSON.parse(req.body.data);

  // Upload images to Cloudinary
  const imageFiles = req.files as Express.Multer.File[];
  const uploadedImages = await Promise.all(
    imageFiles.map((file) => fileUploader.uploadToCloudinary(file))
  );

  // Add image URLs to the payload
  const imageUrls = uploadedImages.map((image) => image?.secure_url);
  payload.images = imageUrls;

  // Save product to the database
  const result = await ProductServices.createProductIntoDB(payload);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Product created successfully!",
    data: result,
  });
});

const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductServices.getAllProductsFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Products fetched successfully!",
    data: result,
  });
});

const getProductById = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductServices.getProductByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Product fetched successfully!",
    data: result,
  });
});

const getProductsByCategory = catchAsync(
  async (req: Request, res: Response) => {
    const { categoryId } = req.params;
    // console.log(req.params);
    const result = await ProductServices.getProductsByCategoryFromDB(
      categoryId
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  }
);

const getProductsByShop = catchAsync(async (req: Request, res: Response) => {
  const { shopId } = req.params;
  // console.log(req.params);
  const result = await ProductServices.getProductsByShopFromDB(shopId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Products fetched successfully!",
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  getProductsByCategory,
  getProductsByShop
};
