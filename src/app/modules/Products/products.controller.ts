import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ProductsServices } from "./products.service";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[];
  const payload = JSON.parse(req.body.data);
  // console.log(req.files, req.body);
  const result = await ProductsServices.createProductIntoDB(payload, files);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Product created successfully!",
    data: result,
  });
});

export const ProductControllers = { createProduct };
