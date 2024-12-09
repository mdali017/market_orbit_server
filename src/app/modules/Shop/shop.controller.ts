import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ShopServices } from "./shop.service";

const createShop = catchAsync(async (req: Request, res: Response) => {
  // console.log("Request Body:", req.body);
  // console.log("Uploaded Files:", req.file);

  const file: any = req.file;
  const payload = JSON.parse(req.body.data);
  const result = await ShopServices.createShopIntoDB(payload, file);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Shop created successfully!",
    data: result,
  });
});

const getAllShops = catchAsync(async (req: Request, res: Response) => {
  
  const result = await ShopServices.getAllShopsFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Shops fetched successfully!",
    data: result,
  });
});

const getShopById = catchAsync(async (req: Request, res: Response) => {
  const result = await ShopServices.getShopByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Shop fetched successfully!",
    data: result,
  });
});

const deleteShop = catchAsync(async (req: Request, res: Response) => {
  const result = await ShopServices.deleteShopFromDB(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Shop deleted successfully!",
    data: result,
  });
});

export const ShopControllers = { createShop, getAllShops, deleteShop, getShopById };
