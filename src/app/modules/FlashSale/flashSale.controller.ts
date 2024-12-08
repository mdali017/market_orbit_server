import { Request, Response } from "express";
import { FlashSaleServices } from "./flashSale.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";

const createFlashSale = async (req: Request, res: Response) => {
  try {
    const flashSale = await FlashSaleServices.createFlashSaleIntoDB(req.body);
    res.status(201).json(flashSale);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getAllFlashSales = catchAsync(async (req: Request, res: Response) => {
  const result = await FlashSaleServices.getAllFlashSalesFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Flash sales fetched successfully!",
    data: result,
  });
});

export const FlashSaleControllers = {
  createFlashSale,
  getAllFlashSales,
};
